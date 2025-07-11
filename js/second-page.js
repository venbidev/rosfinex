// Calculator
document.addEventListener("DOMContentLoaded", () => {
  const sumInput = document.querySelectorAll(".calc__num-input")[0];
  const sumRange = document.querySelectorAll(".calc__num-range")[0];

  const termInput = document.querySelectorAll(".calc__num-input")[1];
  const termRange = document.querySelectorAll(".calc__num-range")[1];

  const loanButtons = document.querySelectorAll(".calc__btn");

  const termSteps = [
    0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
    10,
  ];

  const formatNumber = (num) => num.toLocaleString("ru-RU") + "₽";

  const formatTerm = (val) => {
    const num = parseFloat(val);
    if (num === 0.5) return "6 мес";
    if (num === 1) return "1 год";
    if (num === 1.5) return "1.5 года";
    if (num === 2) return "2 года";
    if (num === 2.5) return "2.5 года";
    if (num === 3) return "3 года";
    if (num === 3.5) return "3.5 года";
    if (num === 4) return "4 года";
    if (num === 4.5) return "4.5 года";
    return `${num} лет`;
  };

  const parseTermValue = (text) => {
    text = text.toLowerCase();

    if (text.includes("10")) return 10;
    if (text.includes("6") && text.includes("мес")) return 0.5;
    if (text.includes("9.5")) return 9.5;
    if (text.includes("9")) return 9;
    if (text.includes("8.5")) return 8.5;
    if (text.includes("8")) return 8;
    if (text.includes("7.5")) return 7.5;
    if (text.includes("7")) return 7;
    if (text.includes("6.5")) return 6.5;
    if (text.includes("6")) return 6;
    if (text.includes("5.5")) return 5.5;
    if (text.includes("5")) return 5;
    if (text.includes("4.5")) return 4.5;
    if (text.includes("4")) return 4;
    if (text.includes("3.5")) return 3.5;
    if (text.includes("3")) return 3;
    if (text.includes("2.5")) return 2.5;
    if (text.includes("2")) return 2;
    if (text.includes("1.5")) return 1.5;
    if (text.includes("1")) return 1;
    return 1;
  };

  const updateRangeBackground = (range) => {
    let percent;

    if (range === termRange) {
      const index = parseInt(termRange.value);
      percent = (index / (termSteps.length - 1)) * 100;
    } else {
      const val = parseInt(range.value);
      const min = parseInt(range.min);
      const max = parseInt(range.max);
      percent = ((val - min) / (max - min)) * 100;
    }

    range.style.background = `linear-gradient(
      to right,
      #58c3ff 0%,
      #58c3ff ${percent}%,
      rgba(88, 93, 121, 0.24) ${percent}%,
      rgba(88, 93, 121, 0.24) 100%
    )`;
  };

  const updateResults = () => {
    const price = parseInt(sumInput.value.replace(/\D/g, "")) || 0;
    const termYears = parseTermValue(termInput.value);
    const months = termYears * 12;

    const annualInterestRate = 0.023;
    const monthlyRate = annualInterestRate / 12;

    const monthly =
      (price * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1);

    document.querySelectorAll(".calc__count-sum")[0].textContent =
      formatNumber(price);
    document.querySelectorAll(".calc__count-sum")[1].textContent = formatNumber(
      Math.round(monthly)
    );
    document.querySelectorAll(".calc__count-sum")[2].textContent =
      (annualInterestRate * 100).toFixed(1) + "%";
  };

  sumRange.addEventListener("input", () => {
    sumInput.value = sumRange.value;
    updateRangeBackground(sumRange);
    updateResults();
  });

  sumInput.addEventListener("input", () => {
    const val = parseInt(sumInput.value.replace(/\D/g, ""));
    if (!isNaN(val)) {
      sumRange.value = val;
      updateRangeBackground(sumRange);
      updateResults();
    }
  });

  termRange.setAttribute("min", 0);
  termRange.setAttribute("max", termSteps.length - 1);
  termRange.setAttribute("step", 1);

  termRange.addEventListener("input", () => {
    const index = parseInt(termRange.value);
    const val = termSteps[index];
    termInput.value = formatTerm(val);
    updateRangeBackground(termRange);
    updateResults();
  });

  termInput.setAttribute("readonly", true);

  loanButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      loanButtons.forEach((b) => b.classList.remove("calc__btn--active"));
      btn.classList.add("calc__btn--active");

      const years = parseTermValue(btn.textContent.trim());
      const index = termSteps.indexOf(years);

      termInput.value = formatTerm(years);
      termRange.value = index;
      termRange.dispatchEvent(new Event("input"));
    });
  });

  const initialTermIndex = 0;
  termRange.value = initialTermIndex;
  termInput.value = formatTerm(termSteps[initialTermIndex]);
  updateRangeBackground(termRange);

  sumInput.value = sumRange.value;
  updateRangeBackground(sumRange);
  updateResults();
});
