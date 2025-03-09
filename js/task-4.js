const formLogin = document.querySelector('.login-form');

const submitUserForm = event => {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (!login || !password) {
    alert('All form must be filled in');
    return;
  }

  const userAccount = {};
  userAccount[form.elements.email.name] = login.trim();
  userAccount[form.elements.password.name] = password.trim();
  console.log(userAccount);

  formLogin.reset();
};

formLogin.addEventListener('submit', submitUserForm);
