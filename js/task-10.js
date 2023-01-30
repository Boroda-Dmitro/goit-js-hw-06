function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
let num = 0;

const createBoxes = amount => {
  let boxParameters = 30;
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxParameters}px`;
    box.style.height = `${boxParameters}px`;
    boxParameters += 10;
    boxes.push(box);
  }
  return boxes;
};

const destroyBoxes = () => (boxesEl.innerHTML = '');

inputEl.addEventListener('blur', event => (num = event.currentTarget.value));

btnCreateEl.addEventListener('click', () => {
  boxesEl.append(...createBoxes(num));
});

btnDestroyEl.addEventListener('click', destroyBoxes);
