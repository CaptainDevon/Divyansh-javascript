const today = new Date();
const calculateAge = () => {
  const day = document.getElementById("dd").value.trim();
  const month = document.getElementById("mm").value.trim();
  const year = document.getElementById("yyyy").value.trim();

  if (day === "" || month === "" || year === "") {
    alert("Please fill in all fields.");
  }
  else {
    const userDate = new Date(year, month - 1, day);

    const today = new Date();

    const yearsDiff = today.getFullYear() - userDate.getFullYear();
    const monthsDiff = today.getMonth() - userDate.getMonth();
    const daysDiff = today.getDate() - userDate.getDate();

    let displayYears = yearsDiff;
    let displayMonths = monthsDiff;
    let displayDays = daysDiff;

    if (displayMonths < 0) {
      displayYears--;
      displayMonths += 12;
    }

    if (displayDays < 0) {
      displayMonths--;
      displayDays += new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
    }

    document.getElementById("dayValue").textContent = displayDays;
    document.getElementById("monthValue").textContent = displayMonths;
    document.getElementById("yearValue").textContent = displayYears;

    document.getElementById(
      "dayInPlural"
    ).innerHTML = `<span id="dayValue">${displayDays}</span> ${
      displayDays === 1 ? "day" : "days"
    }`;

    document.getElementById(
      "monthInPlural"
    ).innerHTML = `<span id="monthValue">${displayMonths}</span> ${
      displayMonths === 1 ? "month" : "months"
    }`;

    document.getElementById(
      "yearInPlural"
    ).innerHTML = `<span id="yearValue">${displayYears}</span> ${
      displayYears === 1 ? "year" : "years"
    }`;
  }
};
