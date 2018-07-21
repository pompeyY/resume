$(function () {
    //右侧导航按钮实现开始
    var winHeight = $(window).height()
    $(".cut-li").children().on("click", function () {
        $(".cut-li").children().removeClass("li-dot-active")
        $(this).addClass("li-dot-active")
        var liIndex = $(this).parent().index()
        $(window).scrollTop($(window).height() * liIndex)
        $(".cut-li").children().children().css({"fontSize": "0px"})
        if ($(".cut-li").children().hasClass("li-dot-active")) {
            $(this).children().css({"fontSize": "27px"})
        }
    })

    var t = 0, scrTop = 0, minHeight = 30;

    $(window).on('scroll', function () {
        var rat = Math.ceil($('html,body').scrollTop() / winHeight)
        var floorRat = rat - 1
        scrTop = $('html,body').scrollTop()

        $(".cut-li").children().removeClass("li-dot-active")
            .eq(rat).addClass("li-dot-active")

        if (t <= scrTop) {//下滑
            if (scrTop > (winHeight * floorRat + minHeight)) {
                // $('html,body').stop().animate({scrollTop: winHeight * rat + 'px'}, 600)
                $('html,body').scrollTop(winHeight * rat)
            }
        } else {//上滑
            if (winHeight * rat - scrTop > minHeight) {
                $('html,body').scrollTop(winHeight * floorRat)
                // $('html,body').stop().animate({scrollTop: winHeight * floorRat + 'px'}, 400)
            }
        }
        t = scrTop
        if ($(".cut-li").children().hasClass("li-dot-active")) {
            $(".cut-li").children().children().css({"fontSize": "0px"})
            $(".cut-li").children().eq(rat).children().css({"fontSize": "27px"})
        }

    })
    $(window).trigger("scroll")
    //右侧导航按钮结束

    //首页开始

    //首页结束

    //作品集开始
    $(".body-four .four-short-cut .cut-list li").on("click", function () {
        $(this).addClass("now").siblings().removeClass("now")
        var cutIndex = $(this).index()
        $(".body-four .four-more .four-more-contain").eq(cutIndex).addClass("active").siblings().removeClass("active")
    })
    //作品集结束
    //禁用鼠标滚轮时间
    var mb = myBrowser();
    if ("Chrome" == mb) {
        window.onmousewheel = document.onmousewheel = function () {
            return false
        }
    }

})

function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }
    ; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }
    ; //判断是否IE浏览器
}