$(function() {
    // 1. lis

    $(".x-le-list li ").mouseenter(function() {
        $(this).addClass("x_li_current").siblings().removeClass("x_li_current");
        var index = $(this).index();
        $(".x_le_content .x_le").eq(index).stop().fadeIn().siblings().hide();
    });


    //2.
    $(".x_gh a").click(function() {
            $(this).addClass("x_current").siblings().removeClass("x_current");
            $(this).css("color", "#fff").siblings().css("color", "#000");
            var index = $(this).index();
            $(".x_hg>div").eq(index).show().siblings().hide();
        })
        //3.右侧lis
    $(".x_ri_list li").mouseenter(function() {
        $(this).addClass("x_ri_pic ").siblings().removeClass("x_ri_pic ");
        var index = $(this).index();
        $(".x_ri_content .x_ri_c1").eq(index).show().siblings().hide();
    })

})