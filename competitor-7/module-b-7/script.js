function counterNumber(maxCounter, counter){
    let count = 0
    const timeout = setInterval(()=>{
        counter.textContent = count
        count++
        count > maxCounter ? clearTimeout(timeout): null
    }, 2500 / maxCounter)
}

counterNumber(2531, document.querySelector('#counter1'))
counterNumber(1235764, document.querySelector('#counter2'))
counterNumber(98, document.querySelector('#counter3'))
counterNumber(25, document.querySelector('#counter4'))

window.onscroll = function (){ handleScroll() }

function handleScroll() {
    if (document.documentElement.scrollTop > 20 ){
        document.querySelector('header').classList.add('fixed')
        document.querySelector('.navbar').classList.add('fixed')
        document.querySelector('.book_demo').classList.add('fixed')
    }else{
        document.querySelector('header').classList.remove('fixed')
        document.querySelector('.navbar').classList.remove('fixed')
        document.querySelector('.book_demo').classList.remove('fixed')
    }
}

window.addEventListener('scroll', function (){
    const navLink = document.querySelectorAll('.navbar a')
    navLink.forEach(link=>{
        link.classList.remove('active')
        console.log(link)
    })
    document.documentElement.scrollTop < 200 ? document.querySelector('#section-1').classList.add('active') : null
    document.documentElement.scrollTop > 200 &&  document.documentElement.scrollTop < 1000? document.querySelector('#section-2').classList.add('active') : null
    document.documentElement.scrollTop > 1000 ? document.querySelector('#section-4').classList.add('active') : null
})