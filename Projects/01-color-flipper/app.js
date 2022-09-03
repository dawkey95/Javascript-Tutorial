const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
  // get a random number between 0-3
  const randomNum = getRandomNum();
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
})

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}