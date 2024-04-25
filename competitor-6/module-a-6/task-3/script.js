/* Your code here */


document.addEventListener("DOMContentLoaded", () =>{

    const secondHand = document.querySelector(".Second-hand");
    const minuteHand = document.querySelector(".Minute-hand");
    const HourHand = document.querySelector(".Hour-hand");
    const starterDeg = "-90deg";

    let s = 0;

    setInterval(() => {
        s+=6;

        secondHand.style.transform = `rotate(${s}deg)`;

    }, 1000);

    let m = 0;

    setInterval(() => {
        m+=6;
        minuteHand.style.transform = `rotate(${m}deg)`;

    }, 1000 * 60);

    let h = 0;

    setInterval(() => {
        h+=6;
        minuteHand.style.transform = `rotate(${h}deg)`;

    }, 1000 * 60 * 60);


})