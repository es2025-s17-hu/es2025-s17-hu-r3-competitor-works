/* Your code here */
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(() => {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  hour.style.transform = `translate(-50%, -100%) rotate(${(360 / 12) * h}deg)`;
  minute.style.transform = `translate(-50%, -100%) rotate(${
    (360 / 60) * m
  }deg)`;
  second.style.transform = `translate(-50%, -100%) rotate(${
    (360 / 60) * s
  }deg)`;
}, 1000);
