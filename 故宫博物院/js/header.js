window.addEventListener('load', function() {
    //取消导航栏扩展栏最后文字的背景图,
    function quxiao() {
        var nav_c = document.querySelectorAll('.nav-chil-c');
        for (var i = 0; i < nav_c.length; i++) {
            var st = nav_c[i].getElementsByTagName('strong');
            if (st.length !== 0) {
                st[st.length - 1].style.background = "0";
            }
        }
    }
    quxiao();

    //对扩展栏中的每一个子栏，进行动态的定位
    function position() {
        var nav_ul = document.querySelector('.nav-ul');
        // console.log(nav_ul.offsetLeft);

        var lis = nav_ul.querySelectorAll('li');
        var nav_chil_c = document.querySelectorAll('.nav-chil-c');

        console.log(nav_chil_c[2].offsetWidth)
        console.log(lis[2].offsetLeft)

        for (var i = 1; i < lis.length; i++) {
            //每一个子分栏的left，等于对应的li到ul的左距离，加上ul到nav的左距离，减去子分栏自身宽度的一半
            nav_chil_c[i].style.left = lis[i].offsetLeft - (nav_chil_c[i].offsetWidth) + 'px';
        }
    }


    //实现header部分右边的图片更换
    function Imgchange() {
        var tools = document.querySelector('.tools');
        var as = tools.getElementsByTagName('a');
        var imgs = tools.getElementsByTagName('img');
        for (var i = 0; i < as.length; i++) {
            (function(i) {
                as[i].addEventListener('mouseover', function() {
                    imgs[i].style.marginTop = '-21px'
                })
                as[i].addEventListener('mouseout', function() {
                    imgs[i].style.marginTop = '0';
                })
            })(i)
        }
        as[as.length - 1].addEventListener('mouseover', function() {
            imgs[imgs.length - 1].style.marginTop = '-34px';
        })
        as[as.length - 1].addEventListener('mouseout', function() {
            imgs[imgs.length - 1].style.marginTop = '0';
        })
    }
    Imgchange();


    //header部分 右侧 鼠标移入显示下面小框
    function blocknone() {
        var toolsli1 = document.querySelector('.tools-li1');
        var toolsli2 = document.querySelector('.tools-li2');
        var loginbox = document.querySelector('.loginbox')
        var language = document.querySelector('.language')
        var arr1 = [toolsli1, loginbox];
        var arr2 = [toolsli2, language]
        for (var i = 0; i < arr1.length; i++) {
            arr1[i].addEventListener('mouseenter', function() {
                loginbox.style.display = "block";
            })
            arr1[i].addEventListener('mouseleave', function() {
                loginbox.style.display = "none";
            })
        }
        for (var j = 0; j < arr2.length; j++) {
            arr2[j].addEventListener('mouseenter', function() {
                language.style.display = "block";
            })
            arr2[j].addEventListener('mouseleave', function() {
                language.style.display = "none";
            })
        }
    }
    blocknone();


    //实现导航栏下面的分栏在不同情况下显示
    function nav() {
        //获取导航栏元素元素
        var nav_ul = document.querySelector('.nav-ul');
        //显示隐藏导航栏下面的小三角
        for (var i = 0; i < nav_ul.children.length; i++) {
            nav_ul.children[i].addEventListener('mouseenter', function() {
                this.children[1].style.display = 'block';
            })
            nav_ul.children[i].addEventListener('mouseleave', function() {
                this.children[1].style.display = 'none';
            })
        }
        //显示 / 隐藏分栏
        var lis = nav_ul.querySelectorAll('li');
        var nav_chil_c = document.querySelectorAll('.nav-chil-c');
        var nav_child = document.querySelectorAll('.nav-child');
        var nav_chil = document.querySelector('.nav-chil');
        for (var j = 1; j < lis.length; j++) {
            (function(i) {
                lis[i].addEventListener('mouseenter', function() {
                    nav_chil_c[i].style.display = 'block';
                    nav_chil_c[i].style.left = lis[i].offsetLeft - (nav_chil_c[i].offsetWidth / 5) * 2 + 'px';
                    nav_child[i].style.height = "51px";
                })
                lis[i].addEventListener('mouseleave', function() {
                    nav_chil_c[i].style.display = 'none';
                    nav_child[i].style.height = "0px";
                })
                nav_child[i].addEventListener('mouseenter', function() {
                    nav_chil_c[i].style.display = 'block';
                    nav_child[i].style.height = "51px";
                    lis[i].children[1].style.display = "block";
                })
                nav_child[i].addEventListener('mouseleave', function() {
                    nav_chil_c[i].style.display = 'none';
                    nav_child[i].style.height = "0px";
                    lis[i].children[1].style.display = "none";
                })
            })(j)
        }

    }
    nav();
    var nav_ul = document.querySelector('.nav-ul');
    var shouye = document.querySelector(".shouye")
    // var c1 = document.querySelector('.c1');
    var c2 = document.querySelector('.c2');
    var c3 = document.querySelector('.c3');
    var c4 = document.querySelector('.c4');
    var c5 = document.querySelector('.c5');
    var c6 = document.querySelector('.c6');
    var c7 = document.querySelector('.c7');
    var c8 = document.querySelector('.c8');
    var tttttt1 =document.querySelector(".tttttt1")
    var tttttt2 =document.querySelector(".tttttt2")
    var tttttt3 =document.querySelector(".tttttt3")
    var tttttt4 =document.querySelector(".tttttt4")
    var tttttt5 =document.querySelector(".tttttt5")
    var tttttt6 =document.querySelector(".tttttt6")
    var tttttt7 =document.querySelector(".tttttt7")
    var tonglan =document.querySelector('.tonglan')
    
    nav_ul.addEventListener('mouseenter', function() {
        tonglan.style.height = "51px";
        tonglan.style.transition="";
    });
    tttttt1.addEventListener('mouseenter', function() {
        tonglan.style.height = "51px";
        tonglan.style.transition="";
    });
    tttttt2.addEventListener('mouseenter', function() {
        tonglan.style.height = "51px";
        tonglan.style.transition="";
    });
    tttttt3.addEventListener('mouseenter', function() {
        tonglan.style.height = "51px";
        tonglan.style.transition="";
    });
    tttttt4.addEventListener('mouseenter', function() {
        tonglan.style.height = "51px";
        tonglan.style.transition="";
    });
    tttttt5.addEventListener('mouseenter', function() {
        tonglan.style.height = "51px";
        tonglan.style.transition="";
    });
    tttttt6.addEventListener('mouseenter', function() {
        tonglan.style.height = "51px";
        tonglan.style.transition="";
    });
    tttttt7.addEventListener('mouseenter', function() {
        tonglan.style.height = "51px";
        tonglan.style.transition="";
    });

    shouye.addEventListener('mouseenter', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
    // nav_child.addEventListener('mouseenter', function() {
    //     tonglan.style.height = "51px";
    //     tonglan.style.transition="";
    // });
    tonglan.addEventListener('mouseleave', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
    c2.addEventListener('mouseleave', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
    c3.addEventListener('mouseleave', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
    c4.addEventListener('mouseleave', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
    c5.addEventListener('mouseleave', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
    c6.addEventListener('mouseleave', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
    c7.addEventListener('mouseleave', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
    c8.addEventListener('mouseleave', function() {
        tonglan.style.height = "0";
        tonglan.style.transition="all .6s";
    });
})