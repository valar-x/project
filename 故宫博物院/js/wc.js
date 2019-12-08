window.addEventListener('load', function() {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $(function() {
            //导航栏
            $(".nav .lis").mouseover(function() {
                var index = $(this).index() - 1
                $(".nav-hd .other").eq(index).fadeIn(200).show()
            })

            $(".nav li").mouseout(function() {

                    $(".nav-hd .other").hide()
                })
                // 六边形图
            $(".piclist a").mouseenter(function() {
                var index = $(this).index()
                $(".piclist a span").eq(index).stop().fadeToggle().show()
            })
            $(".piclist a").mouseleave(function() {
                var index = $(this).index()
                $(".piclist a span").eq(index).stop().fadeToggle().hide()
            })

            // 页面滑动到某一位置显示背景~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

            guitou()
            wenzi()
            ganmeimg()
                //封装下落龟头函数
            function guitou() {
                if ($(document).scrollTop() >= $(".wenc").offset().top) {
                    $(".parper .ico3").fadeIn().css("top", "0")
                }
            }
            //封装左出图函数
            function wenzi() {
                if ($(document).scrollTop() >= $(".cartoon").offset().top) {
                    $(".game .game-hd").fadeIn().css("left", "0")
                }
            }
            // 封装右出图函数
            function ganmeimg() {
                if ($(document).scrollTop() >= $(".cartoon").offset().top) {
                    $(".game .game-img1").fadeIn().css("right", -71)
                }
            }
            //页面卷出事件
            $(window).scroll(function() {
                    guitou()
                    wenzi()
                    ganmeimg()
                })
                // ------------------------------------------------------、

        })
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


})