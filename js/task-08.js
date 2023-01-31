const formEl = document.querySelector('.login-form');

console.log(formEl);

formEl.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formBack = {
    Email: email.value,
    Password: password.value
  };

  email.value === '' || password.value === ''
    ? alert('You shall not pass!!! All fields must be filled')
    : console.log(formBack);
  event.currentTarget.reset();
}
