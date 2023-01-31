const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', () => {
  inputEl.classList.remove('invalid');
  inputEl.classList.remove('valid');
});

inputEl.addEventListener('blur', event => {
  event.currentTarget.value.length == inputEl.dataset.length
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
});
