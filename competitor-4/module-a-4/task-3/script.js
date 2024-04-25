/* Your code here */
window.onload = () => {
    setInterval(() => {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        document.querySelector('.hour').style.transform = `rotate(${hour * 30 - 90}deg)`;
        document.querySelector('.minute').style.transform = `rotate(${minutes * 6 - 90}deg)`;
        document.querySelector('.second').style.transform = `rotate(${seconds * 6 - 90}deg)`;
    }, 1000);
}