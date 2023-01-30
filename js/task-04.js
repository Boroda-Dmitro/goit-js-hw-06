const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

btnIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

btnDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
