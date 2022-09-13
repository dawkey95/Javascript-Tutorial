const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Set up variables to be accessed
const deadline = document.querySelector('.deadline')
const giveawayDate = document.querySelector('.giveaway');
const timeItems = document.querySelectorAll('.deadline-format h4');

// Set giveaway end date dynamically
let futureDate = new Date(2022, 9, 25, 18, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];

giveawayDate.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;