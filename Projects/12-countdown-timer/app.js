const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

// Set up variables to be accessed
const deadline = document.querySelector('.deadline');
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

//  future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;

	// 1 sec = 1000ms
	// 1 min = 60secs
	// 1 hr = 60mins
	// 1 day = 24hrs

	// values in ms
	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	let days = Math.floor(t / oneDay);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if(item < 10) {
      return item = `0${item}`
    }
    return item;
  }

  timeItems.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  })
  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Sorry, this giveaway has ended!</h4>`
  }
}

// countdown
const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
