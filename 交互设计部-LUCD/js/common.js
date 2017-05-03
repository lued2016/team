// JavaScript source code

/** 代码制作人: 马泽棉
** 制作时间：2015-11-09
** 文件内容描述：自定义JS
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

    /* 返回顶部
    ========================================================================== */
    $('#scrollToTop').click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 240) {
            $(".lucd-fixed-toolbar").addClass("visible");
        } else {
            $(".lucd-fixed-toolbar").removeClass("visible");
        }
    });

    var sToolbarW = $(".lucd-fixed-toolbar .innerbar").width();
    $(".lucd-fixed-toolbar > .lucd-btn").hover(function () {
        $(this).find(".innerbar").stop(true, false).animate({ left: -sToolbarW * 0.5 }, 300);
    }, function () {
        $(this).find(".innerbar").stop(true, false).animate({ left: "0" }, 300);
    });

    /* ========================================================================== */

    /* 意见反馈栏
    ========================================================================== */
    $(".lucd-feedback-box .lucd-feedback-heading .lucd-btn").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").parents(".lucd-feedback-box").stop().animate({ "right": "-312px" }, 300)
        } else {
            $(this).addClass("active").parents(".lucd-feedback-box").stop().animate({ "right": "0" }, 300)
        }
        event.stopPropagation();//阻止事件向上冒泡 

    });

    $(".lucd-feedback-box #feedback-close").bind("click", function () {
        $(this).parents(".lucd-feedback-box").stop().animate({ "right": "-312px" }, 300).find(".lucd-feedback-heading .lucd-btn").removeClass("active");
    });

    $(document).bind("click", function () {
        $(".lucd-feedback-box .lucd-feedback-heading .lucd-btn").removeClass("active").parents(".lucd-feedback-box").stop().animate({ "right": "-312px" }, 300);
    });
    $(".lucd-feedback-box").click(function (event) {
	    event.stopPropagation();//阻止事件向上冒泡 
	}); 

    /* ========================================================================== */

    /* 导航栏
    ========================================================================== */
    $(".lucd-header .lucd-navbar-default .lucd-navbar-nav > li > a").hover(function () {
        $(this).find(".txt-innerbar").stop().animate({ "marginTop": "-20px" }, 300);
    }, function () {
        $(this).find(".txt-innerbar").stop().animate({ "marginTop": "0" }, 300);
    });


    /* ========================================================================== */
    
    /* 鼠标经过下拉菜单弹出
    ========================================================================== */
    $(".lucd-viewdata-heading .lucd-btn-group").hover(function () {
        $(this).addClass("lucd-open");
    }, function () {
        $(this).removeClass("lucd-open");
    });

    $(".lucd-header-personInfo").hover(function () {
        $(this).addClass("lucd-open");
    }, function () {
        $(this).removeClass("lucd-open");
    });

    /* ========================================================================== */

    /* 人员介绍 相关
    ========================================================================== */
    $(".lucd-personnel").hover(function () {
        $(this).addClass("active").find(".lucd-personnel-dialog").css("display", "block");
    }, function () {
        $(this).removeClass("active").find(".lucd-personnel-dialog").css("display", "none");
    });


    /* ========================================================================== */

    /* 滚动与加载动画效果
    ========================================================================== */

        //页面一刷新需加载
    $(".lucd-header.lucd-fixed-top .lucd-navbar-default").addClass("lucd-current");
    $("#personnel").addClass("lucd-current");
    //$("#workInfo").addClass("lucd-current");

    $(window).scroll(function () {
        //var $objView = document.body.clientHeight();  //网页可见区域 高度
        var $objHeaderH = $(".lucd-header").outerHeight();  //头部导航栏 高度
        var $objPersonnelH = $("#personnel").outerHeight();  //人员介绍 高度
        var $objWorkInfoH = $("#workInfo").outerHeight();  //工作内容 高度
        var $objTeamCaseH = $("#teamCase").outerHeight();  //团队案例 高度
        var $objShareH = $("#share").outerHeight();  //知识共享 高度


        if ($(window).scrollTop() > 24) {
            $(".lucd-header.lucd-fixed-top .lucd-navbar-brand .brand-inner").stop().animate({ "marginTop": "-99px" }, 0);
            $(".lucd-header.lucd-fixed-top .lucd-navbar-default").addClass("lucd-navbar-fixed-top").removeClass("lucd-current");
        } else {
            $(".lucd-header.lucd-fixed-top .lucd-navbar-brand .brand-inner").stop().animate({ "marginTop": "0" }, 0);
            $(".lucd-header.lucd-fixed-top .lucd-navbar-default").removeClass("lucd-navbar-fixed-top").addClass("lucd-current");
        }


        if ($(window).scrollTop() > $objHeaderH + $objPersonnelH) {
            $("#personnel").removeClass("lucd-current");
        } else if ($(window).scrollTop() < $objPersonnelH) {
            $("#personnel").addClass("lucd-current");
        }

        if ($(window).scrollTop() > $objHeaderH + 10) {
            $("#workInfo").addClass("lucd-current");
        } else {
            $("#workInfo").removeClass("lucd-current");
        }

        if ($(window).scrollTop() > $objHeaderH + $objPersonnelH - 70) {
            $("#teamCase").addClass("lucd-current");
        } else {
            $("#teamCase").removeClass("lucd-current");
        }

        if ($(window).scrollTop() > $objHeaderH + $objPersonnelH + $objWorkInfoH - 80) {
            $("#share").addClass("lucd-current");
        } else {
            $("#share").removeClass("lucd-current");
        }



        if ($(window).scrollTop() > $objHeaderH) {
            $(".lucd-share-page-header .lucd-share-page-header-inner").addClass("lucd-navbar-fixed-top").removeClass("lucd-current");
        } else {
            $(".lucd-share-page-header .lucd-share-page-header-inner").removeClass("lucd-navbar-fixed-top").addClass("lucd-current");
        }

        if ($(window).scrollTop() > $objHeaderH + 108) {
            $(".lucd-viewdata-heading.lucd-fixed-top > .lucd-row").addClass("lucd-navbar-fixed-top").removeClass("lucd-current");
        } else {
            $(".lucd-viewdata-heading.lucd-fixed-top > .lucd-row").removeClass("lucd-navbar-fixed-top").addClass("lucd-current");
        }

        if ($(window).scrollTop() > $objHeaderH + 10) {
            $(".lucd-grid-solidR-col-2 > .lucd-fixed-top").addClass("lucd-fixed");
            $(".lucd-page-header > .lucd-row").addClass("lucd-fixed").css({"width":"718px","margin-left":"-25px","padding":"10px"});
        } else {
            $(".lucd-grid-solidR-col-2 > .lucd-fixed-top").removeClass("lucd-fixed");
            $(".lucd-page-header > .lucd-row").removeClass("lucd-fixed").removeAttr("style");
        }


    });


    /* ========================================================================== */



});

