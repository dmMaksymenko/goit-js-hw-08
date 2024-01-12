const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');
inputField.addEventListener('input', e => {
  const inputValue = e.currentTarget.value.trim();

  if (inputValue === '') {
    outputField.textContent = 'Anonymous';
  } else {
    outputField.textContent = inputValue;
  }
});
