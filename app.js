const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// same as 3 line above
// const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');

function onLoginBtnClick() {
  console.log("Hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
