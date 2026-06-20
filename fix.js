// Get current date in New York time
const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const dayVal = String(today.getDate()).padStart(2, "0");
const todayStr = `${year}-${month}-${dayVal}`;
console.log(todayStr);
