const secondHand = document.getElementById("clock-hand-second");
const minuteHand = document.getElementById("clock-hand-minute");
const hourHand = document.getElementById("clock-hand-hour");

const updateClock = () => {
  const now = new Date();
  secondHand.style.transform =
    "rotate(" + (now.getSeconds() / 60) * 360 + "deg)";
  minuteHand.style.transform =
    "rotate(" + (now.getMinutes() / 60) * 360 + "deg)";
  hourHand.style.transform = "rotate(" + (now.getHours() / 12) * 360 + "deg)";
};

updateClock();
setInterval(updateClock, 1000);
