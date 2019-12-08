window.addEventListener('load', fn)

function fn() {
    var icon1 = document.querySelector('#icon1');
    var icon2 = document.querySelector('#icon2');
    var active = document.querySelector('.active');
    var tabTitle = document.querySelector('.tab-title');
    var tabTitleLi = tabTitle.querySelectorAll('li');
    var listBox = document.querySelector('.list-box');
    var listBoxUl = listBox.querySelectorAll('.active');
    // 微信微博二维码切换
    icon1.addEventListener('mousemove', function() {
        active.classList.add('weixin');
        active.classList.remove('weibo');
    })
    icon2.addEventListener('mousemove', function() {
            active.classList.add('weibo');
            active.classList.remove('weixin');
        })
        // 鼠标经过标题栏下面内容切换
    for (var i = 0; i < tabTitleLi.length; i++) {
        // 给li创建index属性
        tabTitleLi[i].setAttribute('index', i);
        tabTitleLi[i].addEventListener('mouseenter', function() {
            // console.log(this.getAttribute('index'));
            for (var i = 0; i < listBoxUl.length; i++) {
                listBoxUl[i].style.display = 'none';
            }
            var index = this.getAttribute('index');
            listBoxUl[index].style.display = 'block';
        })


    }
}