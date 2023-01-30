const formEl = document.querySelector('.login-form');

console.log(formEl);

formEl.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  email.value === '' || password.value === ''
    ? alert('You shall not pass!!! All fields must be filled')
    : console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
