// JavaScript source code

/** 代码制作人: 马泽棉
** 制作时间：2015-08-20
** 文件内容描述：基于CSS2.0 框架样式
** 修改日期：
** 修改内容：
**********************************************/

$(function () {

    /* input焦点去除文字
    ========================================================================== */
    $("input[type=text]").focus(function () {
        if ($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val(this.defaultValue);
        }
    });
    /* ========================================================================== */


    /* 页面头部搜索栏效果
    ========================================================================== */
    $(".lui-navbar-form").hover(function () {
        $(this).addClass("active").css("width","174px").find(".lui-form-group").stop(true, false).animate({ marginLeft: "0" }, 500)
    }, function () {
        $(this).removeClass("active").removeAttr("style").find(".lui-form-group").stop(true, false).animate({ marginLeft: "210px" }, 500)
    });

    /* ========================================================================== */


    /* 页面头部搜索栏效果 门户带背景色时使用
    ========================================================================== */
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 480) {
                $("#headerNav").removeClass("lui-header-primary").find(".lui-navbar").addClass("lui-navbar-fixed-top");
            } else {
                $("#headerNav").addClass("lui-header-primary").find(".lui-navbar").removeClass("lui-navbar-fixed-top");
            }
        });
    });

    /* ========================================================================== */


    /* 返回顶部
    ========================================================================== */
    $('#scrollTop').click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 240) {
            $(".lui-fixed-toolbar").addClass("visible");
        } else {
            $(".lui-fixed-toolbar").removeClass("visible");
        }

    });

    var sToolbarW = $(".lui-fixed-toolbar .innerbar").width();
    $(".lui-fixed-toolbar > .lui-btn").hover(function () {
        $(this).find(".innerbar").stop(true, false).animate({ left: -sToolbarW * 0.5 }, 300);
    }, function () {
        $(this).find(".innerbar").stop(true, false).animate({ left: "0" }, 300);
    });

    /* ========================================================================== */


    /* 意见反馈栏
    ========================================================================== */
    $(".lui-feedback-box .lui-feedback-heading .lui-btn").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").parents(".lui-feedback-box").stop().animate({ "right": "-312px" }, 300)
        } else {
            $(this).addClass("active").parents(".lui-feedback-box").stop().animate({ "right": "0" }, 300)
        }
        event.stopPropagation();//阻止事件向上冒泡 

    });

    $(".lui-feedback-box #feedback-close").bind("click", function () {
        $(this).parents(".lui-feedback-box").stop().animate({ "right": "-312px" }, 300).find(".lui-feedback-heading .lui-btn").removeClass("active");
    });

    $(document).bind("click", function () {
        $(".lui-feedback-box .lui-feedback-heading .lui-btn").removeClass("active").parents(".lui-feedback-box").stop().animate({ "right": "-312px" }, 300);
    });
    $(".lui-feedback-box").click(function (event) {
        event.stopPropagation();//阻止事件向上冒泡 
    });

    /* ========================================================================== */


    /* 业务岗位场景切换效果
    ========================================================================== */
    function BPostMap() {
        var sHeight = $("#slider").height();
        var len = $("#slider .bmp_BPostMap_slideItem").length;
        var index = 0;

        $("#slider .bmp_BPostMap_slideNav span").click(function () {
            index = $("#slider .bmp_BPostMap_slideNav span").index(this);
            showPics(index);
        }).eq(0).trigger("click");

        $("#slider .bmp_BPostMap_slideBox").css("height", sHeight * (len));

        //显示图片函数，根据接收的index值显示相应的内容
        function showPics(index) {
            var nowUp = -index * sHeight;  //根据index值计算ul元素的height值
            $("#slider .bmp_BPostMap_slideBox").stop(true, false).animate({ "top": nowUp }, 300);
            $("#slider .bmp_BPostMap_slideItem").removeClass("active").eq(index).addClass("active");
            $("#slider .bmp_BPostMap_slideNav span").removeClass("on").eq(index).addClass("on");
        };

    };
    BPostMap(); //调用函数
    /* ========================================================================== */


    /* 签单喜讯
    ========================================================================== */
    $("#signingSlider .lui-B-signing-databox").hover(function () {
        $(this).stop().animate({ "opacity": "1", "width": "260px", "marginTop": "60px", "marginLeft": "-130px" }, 150, function () {
            $(this).parent().addClass("active");
        });
        $(this).parent().siblings().removeClass("active").find(".lui-B-signing-databox").stop().animate({ "opacity": ".75", "width": "156px", "marginTop": "110px", "marginLeft": "-78px" }, 150)
    }).eq(2).trigger("mouseover");

    /* ========================================================================== */


    /* 所有分类展开
    ========================================================================== */
    $(".lui-listPage-header .lui-assortment").toggle(function () {
        $(this).addClass("active");
        $(".lui-assortment-wrapper").stop(true, true).slideDown(250);
    }, function () {
        $(this).removeClass("active");
        $(".lui-assortment-wrapper").stop(true, true).slideUp(250);
    });

    /* ========================================================================== */



});



/* 选项卡切换
========================================================================== */
function setTab(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        if (menu != null)
            menu.className = i == cursel ? "active" : "";
        if (con != null)
            con.style.display = i == cursel ? "block" : "none";
    }
};
/* ========================================================================== */
