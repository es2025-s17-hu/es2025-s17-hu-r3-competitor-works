/* Your code here */

const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const hour = document.querySelector('#hour');


document.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        var time = new Date();

        console.log(time.getSeconds());

        Math.floor()
    }, 1000)
});

