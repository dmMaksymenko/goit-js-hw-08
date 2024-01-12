const widgetDiv = document.querySelector('.widget');
const changeColorButton = widgetDiv.querySelector('.change-color');
changeColorButton.addEventListener('click', changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;

  const colorSpan = widgetDiv.querySelector('.color');
  colorSpan.textContent = randomColor;
}
