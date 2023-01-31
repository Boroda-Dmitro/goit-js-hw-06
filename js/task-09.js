function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const widgetColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  const randomColorHex = getRandomHexColor();;
  bodyEl.style.backgroundColor = randomColorHex;
  widgetColor.textContent = randomColorHex;
});
