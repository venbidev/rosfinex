// Calculator
document.addEventListener("DOMContentLoaded", () => {
  const syncPairs = document.querySelectorAll(".calc__sum");
  syncPairs.forEach((pair) => {
    const input = pair.querySelector(".calc__num-input");
    const range = pair.querySelector(".calc__num-range");

    function updateRangeBackground(value) {
      const min = parseInt(range.min);
      const max = parseInt(range.max);
      const percent = ((value - min) / (max - min)) * 100;
      range.style.background = `linear-gradient(
        to right,
        #58c3ff 0%,
        #58c3ff ${percent}%,
        rgba(88, 93, 121, 0.24) ${percent}%,
        rgba(88, 93, 121, 0.24) 100%
      )`;
    }

    range.addEventListener("input", () => {
      input.value = range.value;
      updateRangeBackground(range.value);
    });

    input.addEventListener("input", () => {
      const value = parseInt(input.value);
      if (
        !isNaN(value) &&
        value >= parseInt(range.min) &&
        value <= parseInt(range.max)
      ) {
        range.value = value;
        updateRangeBackground(value);
      }
    });

    input.addEventListener("blur", () => {
      let value = parseInt(input.value);
      if (isNaN(value)) value = parseInt(range.min);
      if (value < parseInt(range.min)) value = parseInt(range.min);
      if (value > parseInt(range.max)) value = parseInt(range.max);
      input.value = value;
      range.value = value;
      updateRangeBackground(value);
    });

    input.addEventListener("keypress", (e) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });

    input.value = range.value;
    updateRangeBackground(range.value);
  });

  const calcBtn = document.querySelector(".calc__btn");
  const modal = document.querySelector(".calc__modal");
  const closeBtn = document.querySelector(".calc__modal-btn");

  calcBtn.addEventListener("click", () => {
    const creditSum = +document
      .querySelectorAll(".calc__num-input")[0]
      .value.replace(/\D/g, "");
    const rooms = +document
      .querySelectorAll(".calc__num-input")[1]
      .value.replace(/\D/g, "");
    const months = +document
      .querySelectorAll(".calc__num-input")[2]
      .value.replace(/\D/g, "");

    const rate = 0.08;
    const monthlyRate = rate / 12;
    const monthlyPayment = Math.round(
      creditSum * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)))
    );

    const numbers = modal.querySelectorAll(".calc__modal-sum-number");
    numbers[0].textContent = creditSum.toLocaleString("ru-RU") + " Рублей";
    numbers[1].textContent = "8% годовых";
    numbers[2].textContent =
      monthlyPayment.toLocaleString("ru-RU") + " в месяц";
    numbers[3].textContent = months + " месяцев";
    modal.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});

// Form
document
  .getElementById("sending-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const payload = {
      fields: {
        TITLE: "Заявка с сайта",
        NAME: formData.get("name"),
        PHONE: [{ VALUE: formData.get("phone"), VALUE_TYPE: "WORK" }],
        COMMENTS: formData.get("comment"),
      },
    };

    fetch(
      "https://rosfinex.bitrix24.ru/rest/1/5uw77560ltvgd3fz/crm.lead.add.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          alert("Заявка отправлена успешно!");
          e.target.reset();
        } else {
          console.error("Ошибка:", data);
          alert("Ошибка при отправке заявки");
        }
      });
  });

// Slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".reviews__slider");
  const leftArrow = document.querySelector(".reviews__arrow--left");
  const rightArrow = document.querySelector(".reviews__arrow--right");
  const cards = slider.querySelectorAll(".reviews__card");

  const cardWidth = 385 + 20;
  const visibleCards = 4;

  for (let i = 0; i < visibleCards; i++) {
    const firstClone = cards[i].cloneNode(true);
    const lastClone = cards[cards.length - 1 - i].cloneNode(true);
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slider.firstChild);
  }

  let position = cardWidth * visibleCards;
  slider.scrollLeft = position;

  let isAnimating = false;

  const scrollByCards = (count) => {
    if (isAnimating) return;
    isAnimating = true;

    position += cardWidth * count;
    slider.scrollTo({ left: position, behavior: "smooth" });

    setTimeout(() => {
      const totalScroll = cardWidth * cards.length;

      if (position >= totalScroll + cardWidth * visibleCards) {
        position = cardWidth * visibleCards;
        slider.scrollLeft = position;
      }
      if (position <= 0) {
        position = totalScroll;
        slider.scrollLeft = position;
      }
      isAnimating = false;
    }, 500);
  };

  leftArrow.addEventListener("click", () => scrollByCards(-1));
  rightArrow.addEventListener("click", () => scrollByCards(1));

  let autoScroll = setInterval(() => scrollByCards(1), 3000);
  slider.addEventListener("mouseenter", () => clearInterval(autoScroll));
  slider.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => scrollByCards(1), 3000);
  });
});

// Reviews Section
(() => {
  const modal = document.querySelector(".reviews__modal");
  if (!modal) return;

  const closeModalButton = modal.querySelector(".reviews__modal-close");
  const openModalButtons = document.querySelectorAll(".reviews__card-btn");

  const openModal = () => {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  };

  openModalButtons.forEach((btn) => btn.addEventListener("click", openModal));
  closeModalButton?.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
})();

// Date "Request block"
document.querySelectorAll(".request__order-date").forEach((dateElement) => {
  const dateText = dateElement.textContent.trim();
  const regex = /(\d{2})\.(\d{2})\.(\d{2})/;
  const match = dateText.match(regex);

  if (match) {
    const [, day, month, year] = match;

    const now = new Date();
    let newMonth = now.getMonth();
    let newYear = now.getFullYear().toString().slice(-2);

    if (newMonth === 0) {
      newMonth = 12;
      newYear = (parseInt(newYear) - 1).toString().padStart(2, "0");
    }

    const newMonthStr = newMonth.toString().padStart(2, "0");
    const newDateText = `${day}.${newMonthStr}.${newYear}`;
    dateElement.textContent = `Дата заявки: ${newDateText}`;
  }
});
