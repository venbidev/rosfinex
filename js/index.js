// Burger menu "Header"
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".header__burger-btn")
    .addEventListener("click", function () {
      document.querySelector(".header").classList.toggle("open");
    });
});

// Card Slider "About section"
(function () {
  const slider = document.querySelector(".about__cards");
  let isDown = false;
  let startX;
  let scrollStart;

  // Общая обработка для мыши и тача
  const pointerDown = (clientX) => {
    isDown = true;
    slider.classList.add("active");
    startX = clientX - slider.getBoundingClientRect().left;
    scrollStart = slider.scrollLeft;
  };
  const pointerMove = (clientX) => {
    if (!isDown) return;
    const x = clientX - slider.getBoundingClientRect().left;
    const walk = (x - startX) * 1.5; // скорость прокрутки
    slider.scrollLeft = scrollStart - walk;
  };
  const pointerUp = () => {
    isDown = false;
    slider.classList.remove("active");
  };

  // Mouse events
  slider.addEventListener("mousedown", (e) => {
    e.preventDefault();
    pointerDown(e.clientX);
  });
  slider.addEventListener("mousemove", (e) => {
    e.preventDefault();
    pointerMove(e.clientX);
  });
  slider.addEventListener("mouseup", pointerUp);
  slider.addEventListener("mouseleave", pointerUp);

  // Touch events
  slider.addEventListener(
    "touchstart",
    (e) => {
      pointerDown(e.touches[0].clientX);
    },
    { passive: true }
  );
  slider.addEventListener(
    "touchmove",
    (e) => {
      pointerMove(e.touches[0].clientX);
    },
    { passive: true }
  );
  slider.addEventListener("touchend", pointerUp);
  slider.addEventListener("touchcancel", pointerUp);
})();

// Accordion
document.addEventListener("click", (e) => {
  const title = e.target.closest(".accordion__title");
  if (!title) return;

  const item = title.parentElement;
  const content = item.querySelector(".accordion__content");

  document.querySelectorAll(".accordion__item._open").forEach((openItem) => {
    if (openItem !== item) {
      openItem.classList.remove("_open");
      openItem.querySelector(".accordion__content").style.maxHeight = null;
    }
  });

  item.classList.toggle("_open");
  if (item.classList.contains("_open")) {
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    content.style.maxHeight = null;
  }
});
