$(function() {
    // 节流阀
    var flag = true;
    // 1.显示隐藏电梯导航
    var toolTop = $(".x-play").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".x-side").fadeIn(0);
        } else {
            $(".x-side").fadeOut(0);
        }
    }
    $(window).scroll(function() {
            toggleTool();
            if (flag) {
                // $(".bx").each(function(i, ele) {
                if ($(document).scrollTop() >= $(".bx:eq(0)").offset().top) {
                    $(".x-side li:eq(0)").addClass(arr[0]);
                    $(".x-side li:eq(0)").siblings('li').removeClass();
                }
                if ($(document).scrollTop() >= $(".bx:eq(1)").offset().top) {
                    $(".x-side li:eq(1)").addClass(arr[1]);
                    $(".x-side li:eq(1)").siblings('li').removeClass();
                }
                if ($(document).scrollTop() >= $(".bx:eq(2)").offset().top) {
                    $(".x-side li:eq(2)").addClass(arr[2]);
                    $(".x-side li:eq(2)").siblings('li').removeClass();
                }
                if ($(document).scrollTop() >= $(".bx:eq(3)").offset().top) {
                    $(".x-side li:eq(3)").addClass(arr[3]);
                    $(".x-side li:eq(3)").siblings('li').removeClass();
                }
                if ($(document).scrollTop() >= $(".bx:eq(4)").offset().top) {
                    $(".x-side li:eq(4)").addClass(arr[4]);
                    $(".x-side li:eq(4)").siblings('li').removeClass();
                }
                // })
            }
        })
        // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".x-side .lix").click(function() {
            flag = false;
            // 点击1-5调到1-5
            var current = $(".bx").eq($(this).index()).offset().top;
            // 页面动画滚动效果
            $("body,html").stop().animate({
                scrollTop: current
            }, function() {
                flag = true;
            })
        })
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
    var arr = ['current1', 'current2', 'current3', 'current4', 'current5'];
    $(".x-side li").click(function() {
        $(this).addClass(arr[$(this).index()]);
        $(this).siblings('li').removeClass();
    })
    $(".x-side .lixx").click(function() {
        // 点击返回顶部
        $("body,html").stop().animate({
            scrollTop: 0
        })
    })

})