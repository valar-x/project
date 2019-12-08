window.addEventListener('load', function() {
    //1.tab切换
    var x_content = document.querySelectorAll('.x-content');
    var x_aside = document.querySelector('.x-aside');
    var lis = x_aside.querySelectorAll('li');
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
    var xk = document.querySelector('.xk');
    var ss = document.querySelector('.ss');
    var ys = document.querySelector('.ys');
    var hh = document.querySelector('.hh');
    var dk = document.querySelector('.dk');
    var js = document.querySelector('.js');
    var fs = document.querySelector('.fs');
    var yans = document.querySelector('.yans');
    var mz = document.querySelector('.mz');
    var yr = document.querySelector('.yr');
    ty(xk);
    ty(ss);
    ty(ys);
    ty(hh);
    ty(dk);
    ty(js);
    ty(fs);
    ty(yans);
    ty(mz);
    ty(yr);

    function ty(obj) {
        var x_man = obj.querySelector('.x-man');
        var x_woman = obj.querySelector('.x-woman');
        var x_man_pic = obj.querySelector('.x-man-pic');
        var x_woman_pic = obj.querySelector('.x-woman-pic');
        var x_con_pic1 = obj.querySelector('.x-con-pic1');
        var x_con_pic2 = obj.querySelector('.x-con-pic2');
        var x_text1 = obj.querySelector('.x-text1');
        var x_text2 = obj.querySelector('.x-text2');
        x_man.addEventListener('mouseenter', function() {
            x_man_pic.style.display = 'block';
            x_woman_pic.style.display = 'none';
        })
        x_woman.addEventListener('mouseenter', function() {
            x_man_pic.style.display = 'none';
            x_woman_pic.style.display = 'block';
        });
        x_con_pic1.addEventListener('mouseenter', function() {
            x_text1.style.display = 'block';
            x_text2.style.display = 'none';
        });
        x_con_pic2.addEventListener('mouseenter', function() {
            x_text1.style.display = 'none';
            x_text2.style.display = 'block';
        });
        x_con_pic1.addEventListener('mouseleave', function() {
            x_text1.style.display = 'none';
        });
        x_con_pic2.addEventListener('mouseleave', function() {
            x_text2.style.display = 'none';
        });

    }



})