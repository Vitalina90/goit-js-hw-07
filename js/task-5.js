const colorInitial = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorInitial.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
