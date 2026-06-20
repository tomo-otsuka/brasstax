const generateSimulatedDates = () => {
  const isTradingDay = (date) => {
    const day = date.getDay();
    if (day === 0 || day === 6) return false;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dayOfMonth = String(date.getDate()).padStart(2, "0");
    const dateString = `${year}-${month}-${dayOfMonth}`;
    const holidays = [
      "2026-06-19", "2026-07-03", "2026-09-07", "2026-11-26", "2026-12-25"
    ];
    return !holidays.includes(dateString);
  };

  const startDate = new Date("2026-06-12T00:00:00");
  const endDate = new Date("2027-07-31T00:00:00");
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    if (isTradingDay(currentDate)) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const dayOfMonth = String(currentDate.getDate()).padStart(2, "0");
      dates.push(`${year}-${month}-${dayOfMonth}`);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

const SIMULATED_DATES = generateSimulatedDates();

const getInitialDaysSinceIpo = (todayStr) => {
  const index = SIMULATED_DATES.findIndex((d) => d >= todayStr);
  if (index === -1) {
    return SIMULATED_DATES.length - 1;
  }
  if (SIMULATED_DATES[index] === todayStr) {
    return index;
  }
  if (index === 0) {
    return 0;
  }
  return index - 1;
};

console.log("2026-06-12:", getInitialDaysSinceIpo("2026-06-12")); // 0
console.log("2026-06-19:", getInitialDaysSinceIpo("2026-06-19")); // Should be last trading day before Jun 19
console.log("2026-06-20:", getInitialDaysSinceIpo("2026-06-20")); // Should be last trading day before Jun 20
console.log("2027-08-01:", getInitialDaysSinceIpo("2027-08-01")); // Last index
console.log("2026-06-10:", getInitialDaysSinceIpo("2026-06-10")); // 0
