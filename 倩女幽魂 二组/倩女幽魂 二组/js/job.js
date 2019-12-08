window.addEventListener('load', fn);
function fn() {
    var dl = document.querySelector('.dl');
    var qrcode = dl.querySelector('.qrcode');
    dl.addEventListener('mousemove', function() {
        qrcode.style.display = 'block';
    })
    dl.addEventListener('mouseout', function() {
        qrcode.style.display = 'none';
    })

    var navJobs = document.querySelector('.nav-jobs');
    var navHuahun = document.querySelector('.nav-huahun');
    var huahunHover = document.querySelector('.huahun-hover')
    navHuahun.addEventListener('mousemove', function() {
        
    })
}