const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0"); // PadStart (digit, "character to fill") ,padEnd fill in characters at the back.
  const seconds = String(date.getSeconds()).padStart(2, "0"); // padStart(자리수, "채울 문자"), padEnd는 뒤쪽에 문자를 채운다.

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
