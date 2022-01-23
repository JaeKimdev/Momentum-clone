const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

// same as line above
// const loginInput = document.querySelector('#login-form input');

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
  // event object는 preventDefault함수를 기본적으로 갖고 있음
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
