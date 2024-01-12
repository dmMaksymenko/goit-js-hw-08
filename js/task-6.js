const boxesDiv = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  destroyBoxes();
  inputNumber.value = '';

  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const addBoxes = document.createElement('div');
    addBoxes.style.width = `${boxSize}px`;
    addBoxes.style.height = `${boxSize}px`;
    addBoxes.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(addBoxes);
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', () => {
  const numberOfBoxes = parseInt(inputNumber.value);
  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    createBoxes(numberOfBoxes);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
