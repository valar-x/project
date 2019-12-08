window.addEventListener('load', fn);

function fn() {
    var prev = document.querySelector('.flex-prev');
    var next = document.querySelector('.flex-next');
    var slides = document.querySelector('.slides');
    var lis = slides.querySelectorAll('li');
    var nav1 = document.querySelector('.intro-nav1');
    var nav2 = document.querySelector('.intro-nav2');
    var nav3 = document.querySelector('.intro-nav3');
    var index = 0;
    next.addEventListener('click', function() {
        if (index >= 5) {
            index = 1;
            slides.style.left = -(index * 1000) + 'px';
        } else {
            index++;
            slides.style.left = -(index * 1000) + 'px';
        }
    })
    prev.addEventListener('click', function() {
        if (index <= 0) {
            index = 4;
            slides.style.left = -(index * 1000) + 'px';
        } else {
            index--;
            slides.style.left = -(index * 1000) + 'px';
        }
    })
    nav1.addEventListener('click', function() {
        nav1.style.backgroundPosition = '0 -61px';
        nav2.style.backgroundPosition = '-333px 0';
        nav3.style.backgroundPosition = '-533px 0';
        slides.style.left = 0 + 'px';
    })
    nav2.addEventListener('click', function() {
        nav2.style.backgroundPosition = '-210px -61px';
        // nav2.style.backgroundPosition = '-333px 0';
        nav3.style.backgroundPosition = '-533px 0';
        nav1.style.backgroundPosition = '-123px 0';
        slides.style.left = -1000 + 'px';
    })
    nav3.addEventListener('click', function() {
        nav3.style.backgroundPosition = '-410px -61px';
        nav2.style.backgroundPosition = '-333px 0';
        nav1.style.backgroundPosition = '-123px 0';
        slides.style.left = -3000 + 'px';
    })
}