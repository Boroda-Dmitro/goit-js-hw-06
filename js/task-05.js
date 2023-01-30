const inputEl = document.querySelector('#name-input');
const titleSpanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  event.currentTarget.value === ''
    ? (titleSpanEl.textContent = 'Anonymous')
    : (titleSpanEl.textContent = event.currentTarget.value);
});
