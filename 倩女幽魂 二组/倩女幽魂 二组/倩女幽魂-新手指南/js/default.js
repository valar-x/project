window.addEventListener('load', function() {
    // 1. 获取元素
    var ban_l = document.querySelector('.ban-l');
    var ban_r = document.querySelector('.ban-r');
    var btext = document.querySelector('.btext');
    var bts = document.querySelector('.bts');
    var bxfk = document.querySelector('.bxfk');
    var as = bxfk.querySelectorAll('a');
    var btextWidth = btext.offsetWidth;
    //2.小方块排他思想
    for (var i = 0; i < as.length; i++) {
        as[i].setAttribute('index', i);
        as[i].addEventListener('click', function() {
            for (var i = 0; i < as.length; i++) {
                as[i].className = 'lis';
            }
            this.className = 'lis blis'
                // 3.点击小方块跟随移动
            var index = this.getAttribute('index')
            num = index;
            if (num == 5) {
                ban_l.style.display = 'block';
                ban_r.style.display = 'none';
            } else if (num == 0) {
                ban_l.style.display = 'none';
                ban_r.style.display = 'block';
            } else {
                ban_l.style.display = 'block';
                ban_r.style.display = 'block';
            }
            animate(bts, -index * btextWidth);
        })
    }
    // 4.当blis为1的时候 左按钮隐藏blis为6的时候右箭头隐藏
    // 设置一个变量
    var num = 0;

    ban_r.addEventListener('click', function() {
        num++;

        // 当num=5的时候让他消失
        if (num == 5) {
            ban_l.style.display = 'block';
            ban_r.style.display = 'none';
        } else {
            ban_l.style.display = 'block';
            ban_r.style.display = 'block';
        }
        // 让小方块跟着num走
        for (var i = 0; i < as.length; i++) {
            as[i].className = 'lis';
        }
        as[num].className = 'lis blis';
        animate(bts, -num * btextWidth);

    })

    ban_l.addEventListener('click', function() {
        num--;
        // 当num=0的时候让他消失
        if (num == 0) {
            ban_l.style.display = 'none';
            ban_r.style.display = 'block';
        } else {
            ban_l.style.display = 'block';
            ban_r.style.display = 'block';
        }
        // 让小方块跟着num走
        for (var i = 0; i < as.length; i++) {
            as[i].className = 'lis';
        }
        as[num].className = 'lis blis';
        animate(bts, -num * btextWidth);
    })

    // 左箭头默认不显示
    ban_l.style.display = 'none';
    // as[0]默认右blis样式
    as[0].className = 'lis blis';
})