window.addEventListener('load', fn);

function fn() {
    var wrapLi2 = document.querySelector('.wrap-li2');
    var wrapLi4 = document.querySelector('.wrap-li4');
    var wrapLi5 = document.querySelector('.wrap-li5');
    var wrapLi6 = document.querySelector('.wrap-li6');
    var wrapLi7 = document.querySelector('.wrap-li7');
    var wrapLi8 = document.querySelector('.wrap-li8');
    var mask = document.querySelector('.mask');
    var newsNavs = document.querySelector('.news-navs');
    var guideNavs = document.querySelector('.guide-navs');
    var mediaNavs = document.querySelector('.media-navs');
    var mapNavs = document.querySelector('.map-navs');
    var jobNavs = document.querySelector('.job-navs');
    var dropLuntan = document.querySelector('.drop-luntan');
    wrapLi2.addEventListener('mousemove', function() {
        newsNavs.style.display = 'block';
        mask.style.display = 'block';
    });
    wrapLi2.addEventListener('mouseout', function() {
        newsNavs.style.display = 'none';
        mask.style.display = 'none';
    });
    newsNavs.addEventListener('mousemove', function() {
        mask.style.display = 'block';
        this.style.display = 'block';
    });
    newsNavs.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        this.style.display = 'none';
    });
    wrapLi4.addEventListener('mousemove', function() {
        guideNavs.style.display = 'block';
        mask.style.display = 'block';
    });
    wrapLi4.addEventListener('mouseout', function() {
        guideNavs.style.display = 'none';
        mask.style.display = 'none';
    });
    guideNavs.addEventListener('mousemove', function() {
        mask.style.display = 'block';
        this.style.display = 'block';
    });
    guideNavs.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        this.style.display = 'none';
    });
    wrapLi5.addEventListener('mousemove', function() {
        mediaNavs.style.display = 'block';
        mask.style.display = 'block';
    });
    wrapLi5.addEventListener('mouseout', function() {
        mediaNavs.style.display = 'none';
        mask.style.display = 'none';
    });
    mediaNavs.addEventListener('mousemove', function() {
        mask.style.display = 'block';
        this.style.display = 'block';
    });
    mediaNavs.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        this.style.display = 'none';
    });
    wrapLi6.addEventListener('mousemove', function() {
        mapNavs.style.display = 'block';
        mask.style.display = 'block';
    });
    wrapLi6.addEventListener('mouseout', function() {
        mapNavs.style.display = 'none';
        mask.style.display = 'none';
    });
    mapNavs.addEventListener('mousemove', function() {
        mask.style.display = 'block';
        this.style.display = 'block';
    });
    mapNavs.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        this.style.display = 'none';
    });
    wrapLi7.addEventListener('mousemove', function() {
        jobNavs.style.display = 'block';
        mask.style.display = 'block';
    });
    wrapLi7.addEventListener('mouseout', function() {
        jobNavs.style.display = 'none';
        mask.style.display = 'none';
    });
    jobNavs.addEventListener('mousemove', function() {
        mask.style.display = 'block';
        this.style.display = 'block';
    });
    jobNavs.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        this.style.display = 'none';
    });
    wrapLi8.addEventListener('mousemove', function() {
        dropLuntan.style.display = 'block';
        mask.style.display = 'block';
    });
    wrapLi8.addEventListener('mouseout', function() {
        dropLuntan.style.display = 'none';
        mask.style.display = 'none';
    });
    dropLuntan.addEventListener('mousemove', function() {
        mask.style.display = 'block';
        this.style.display = 'block';
    });
    dropLuntan.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        this.style.display = 'none';
    });
}