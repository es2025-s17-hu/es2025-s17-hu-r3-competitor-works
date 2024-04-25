/* Your code here */
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function SetClock() {
  const date = new Date();

  const hoursDeg = date.getHours() * (360 / 12);
  const minutesDeg = date.getMinutes() * (360 / 60);
  const secondsDeg = date.getSeconds() * (360 / 60);

  hours.style.rotate = `${hoursDeg}deg`;
  minutes.style.rotate = `${minutesDeg}deg`;
  seconds.style.rotate = `${secondsDeg}deg`;
}

setInterval(() => {
  SetClock();
}, 1000);
