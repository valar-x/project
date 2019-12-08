window.addEventListener('load', fn);

function fn() {
    var mask = document.querySelector('.mask');
    var newsNavs = document.querySelector('.news-navs');
    var guideNavs = document.querySelector('.guide-navs');
    var mediaNavs = document.querySelector('.media-navs');
    var mapNavs = document.querySelector('.map-navs');
    var jobNavs = document.querySelector('.job-navs');
    var dropLuntan = document.querySelector('.drop-luntan');
    var lis2 = document.querySelector('.lis2');
    var lis4 = document.querySelector('.lis4');
    var lis5 = document.querySelector('.lis5');
    var lis6 = document.querySelector('.lis6');
    var lis7 = document.querySelector('.lis7');
    var lis8 = document.querySelector('.lis8');
    lis2.addEventListener('mousemove', function() {
        newsNavs.style.display = 'block';
        mask.style.display = 'block';
    })
    lis2.addEventListener('mouseout', function() {
        newsNavs.style.display = 'none';
        mask.style.display = 'none';
    })
    lis4.addEventListener('mousemove', function() {
        guideNavs.style.display = 'block';
        mask.style.display = 'block';
    })
    lis4.addEventListener('mouseout', function() {
        guideNavs.style.display = 'none';
        mask.style.display = 'none';
    })
    lis5.addEventListener('mousemove', function() {
        mediaNavs.style.display = 'block';
        mask.style.display = 'block';
    })
    lis5.addEventListener('mouseout', function() {
        mediaNavs.style.display = 'none';
        mask.style.display = 'none';
    })
    lis6.addEventListener('mousemove', function() {
        mapNavs.style.display = 'block';
        mask.style.display = 'block';
    })
    lis6.addEventListener('mouseout', function() {
        mapNavs.style.display = 'none';
        mask.style.display = 'none';
    })
    lis7.addEventListener('mousemove', function() {
        jobNavs.style.display = 'block';
        mask.style.display = 'block';
    })
    lis7.addEventListener('mouseout', function() {
        jobNavs.style.display = 'none';
        mask.style.display = 'none';
    })
    lis8.addEventListener('mousemove', function() {
        dropLuntan.style.display = 'block';
        mask.style.display = 'block';
    })
    lis8.addEventListener('mouseout', function() {
        dropLuntan.style.display = 'none';
        mask.style.display = 'none';
    })

    var sideBar = document.querySelector('.sidebar');
    var header = document.querySelector('.header');
    var headerTop = header.offsetTop;
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= headerTop) {
            sideBar.style.position = 'fixed';
        } else {
            sideBar.style.position = 'absolute';
        }
    })

    var winkWrap = document.querySelector('.wink-wrap');
    var closeWink = document.querySelector('.close-wink');
    closeWink.addEventListener('click', function() {
        winkWrap.style.display = 'none';
    })

    var videoClose = document.querySelector('.video-close');
    var videoPlayer = document.querySelector('.video-player');
    var closePv = videoPlayer.querySelector('.close-pv');
    videoClose.addEventListener('click', function() {
        videoPlayer.style.display = 'block';
    })
    closePv.addEventListener('click', function() {
        videoPlayer.style.display = 'none';
    })
    var winkWrap = document.querySelector('.wink-wrap');
    var closeWink = document.querySelector('.close-wink');
    closeWink.addEventListener('click', function() {
        winkWrap.style.display = 'none';
    })

    var x_content = document.querySelectorAll('.x-content');
    var x_list = document.querySelector('.x_list');
    var lis = x_list.querySelectorAll('li');
    for (var i = 0; i < lis.length - 1; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('mouseenter', function() {
            var index = this.getAttribute('index');
            // console.log(index);
            for (var i = 0; i < x_content.length; i++) {
                x_content[i].style.display = 'none';
            }
            x_content[index].style.display = 'block';
        });
    }
    //2.内部切换
    var yans = document.querySelector('.yans');
    var xk = document.querySelector('.xk');
    var js1 = document.querySelector('.js1');
    var dk = document.querySelector('.dk');
    var ss = document.querySelector('.ss');
    var fs = document.querySelector('.fs');
    var ys = document.querySelector('.ys');
    var mz = document.querySelector('.mz');
    var yr = document.querySelector('.yr');
    var hh = document.querySelector('.hh');

    ty(yans);
    ty(xk);
    ty(js1);
    ty(dk);
    ty(ss);
    ty(fs);
    ty(ys);
    ty(mz);
    ty(yr);
    ty(hh);

    function ty(obj) {
        var x_skill1 = obj.querySelector('.x_skill1');
        var x_skill2 = obj.querySelector('.x_skill2');
        var x_text1 = obj.querySelector('.x_text1');
        var x_text2 = obj.querySelector('.x_text2');
        x_skill1.addEventListener('mouseenter', function() {
            x_text1.style.display = 'block';
            x_text2.style.display = 'none';

        });
        x_skill2.addEventListener('mouseenter', function() {
            x_text1.style.display = 'none';
            x_text2.style.display = 'block';

        });
        x_skill1.addEventListener('mouseleave', function() {
            x_text1.style.display = 'none';
        });
        x_skill2.addEventListener('mouseleave', function() {
            x_text2.style.display = 'none';
        });
    }

}