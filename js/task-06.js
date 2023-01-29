const inputEl = document.querySelector('#validation-input');

console.log(inputEl);
console.log(inputEl.dataset.length);

inputEl.addEventListener('focus', () => {
  inputEl.classList.remove('invalid');
  inputEl.classList.remove('valid');
});

inputEl.addEventListener('blur', event => {
  event.currentTarget.value.length < inputEl.dataset.length
    ? inputEl.classList.add('invalid')
    : inputEl.classList.add('valid');
});
