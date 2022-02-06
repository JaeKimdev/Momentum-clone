const clockTitle = document.querySelector("h1#clock");
const dateTitle = document.querySelector("h2#date");

function tendigit(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return `${time}`;
}

function getClock() {
  const date = new Date();
  console.dir(date);
  const years = date.getFullYear();
  const months = date.getMonth();
  const dates = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0"); // PadStart (digit, "character to fill") ,padEnd fill in characters at the back.
  const seconds = String(date.getSeconds()).padStart(2, "0"); // padStart(자리수, "채울 문자"), padEnd는 뒤쪽에 문자를 채운다.

  dateTitle.innerText = `${tendigit(years)}. ${tendigit(
    months + 1
  )}. ${tendigit(dates)}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
