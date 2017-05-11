// JavaScript source code

/** 代码制作人: 马泽棉
** 制作时间：2015-08-20
** 文件内容描述：基于CSS2.0 框架样式
** 修改日期：
** 修改内容：
**********************************************/

$(function () {

    /* 页面顶部展览区切换效果
    ========================================================================== */
    function exhibitShow() {
        var sHeight = $("#exhibitShow").height();
        var index = 0;

        $("#exhibitShow .bmp-exhibit-tab-head .tab-item").click(function () {
            index = $("#exhibitShow .bmp-exhibit-tab-head .tab-item").index(this);
            showPics(index);
        }).eq(0).trigger("click");

        //显示图片函数，根据接收的index值显示相应的内容
        function showPics(index) {
            $("#exhibitShow .bmp-exhibit-sliderBox").css("z-index",0).stop(true, false).animate({ "opacity": 0 }, 300)
                .eq(index).stop(true, false).css("z-index", 99).animate({ "opacity": 1 }, 300);
            $("#exhibitShow .bmp-exhibit-itemBox").removeClass("active").eq(index).addClass("active");
            $("#exhibitShow .bmp-exhibit-tab-head .tab-item").removeClass("active")
                .eq(index).addClass("active");
        };

    };
    exhibitShow(); //调用函数
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
    $("#signingSlider .bmp-B-signing-databox").hover(function () {
        $(this).stop().animate({ "opacity": "1", "width": "260px", "marginTop": "60px", "marginLeft": "-130px" }, 150, function () {
            $(this).parent().addClass("active");
        });
        $(this).parent().siblings().removeClass("active").find(".bmp-B-signing-databox").stop().animate({ "opacity": ".75", "width": "156px", "marginTop": "110px", "marginLeft": "-78px" }, 150)
    }).eq(2).trigger("mouseover");

    /* ========================================================================== */


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
    var ie = document.documentMode; /*** 文档模式 ***/
    if ($.browser.msie) {
        $('body').addClass('ie');
    }
    if ($.browser.msie && ie < 10) {
        $('body').addClass('ltie10');
    }
    if ($.browser.msie && ie < 9) {
        $('body').addClass('ltie9');
    }
    if ($.browser.msie && ie < 7) {
        $('body').addClass('ltie7');
    }

    /* 返回顶部
    ========================================================================== */
    $('#ScrollToTop').click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 240) {
            $(".bmp-fixed-toolbar").addClass("visible");
        } else {
            $(".bmp-fixed-toolbar").removeClass("visible");
        }
    });

    var sToolbarW = $(".bmp-fixed-toolbar .innerbar").width();
    $(".bmp-fixed-toolbar > .scrollToTop").hover(function () {
        $(this).find(".innerbar").stop(true, false).animate({ left: -sToolbarW * 0.5 }, 300);
    }, function () {
        $(this).find(".innerbar").stop(true, false).animate({ left: "0" }, 300);
    });

    /* ========================================================================== */

    /* 页面头部搜索栏效果
    ========================================================================== */
    $(".lui-navbar-form").hover(function () {
        $(this).addClass("active").css("width", "174px").find(".lui-form-group").stop(true, false).animate({ marginLeft: "0" }, 500)
    }, function () {
        $(this).removeClass("active").removeAttr("style").find(".lui-form-group").stop(true, false).animate({ marginLeft: "210px" }, 500)
    });

    /* ========================================================================== */


    /* 意见反馈栏
    ========================================================================== */
    $(".bmp-feedback-box .bmp-feedback-heading .bmp-btn").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").parents(".bmp-feedback-box").stop().animate({ "right": "-312px" }, 300)
        } else {
            $(this).addClass("active").parents(".bmp-feedback-box").stop().animate({ "right": "0" }, 300)
        }
        event.stopPropagation();//阻止事件向上冒泡 

    });

    $(".bmp-feedback-box #feedback-close").bind("click", function () {
        $(this).parents(".bmp-feedback-box").stop().animate({ "right": "-312px" }, 300).find(".bmp-feedback-heading .bmp-btn").removeClass("active");
    });

    $(document).bind("click", function () {
        $(".bmp-feedback-box .bmp-feedback-heading .bmp-btn").removeClass("active").parents(".bmp-feedback-box").stop().animate({ "right": "-312px" }, 300);
    });
    $(".bmp-feedback-box").click(function (event) {
        event.stopPropagation();//阻止事件向上冒泡 
    });

    /* ========================================================================== */


    /* 下拉菜单弹出切换
    ========================================================================== */
    $(".bmp-dropdown").hover(function () {
        $(this).find(".toggle").addClass("active").next(".bmp-dropdown-meun").stop(true, true).slideDown(250);
    }, function () {
        $(this).find(".toggle").removeClass("active").next(".bmp-dropdown-meun").stop(true, true).slideUp(100);
    });

    /* ========================================================================== */

    /* 所有分类展开
    ========================================================================== */
    $(".bmp-listPage-header .bmp-assortment").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".bmp-assortment-wrapper").stop(true, true).slideUp(250);
        } else {
            $(this).addClass("active");
            $(".bmp-assortment-wrapper").stop(true, true).slideDown(250);
        }
        if ($(".bmp-listPage-header .bmp-btn-create").hasClass("active")) {
            $(".bmp-listPage-header .bmp-btn-create").removeClass("active");
            $(".bmp-category-wrapper").css("display","none");
        }
        event.stopPropagation();//阻止事件向上冒泡 
    });
    $(".bmp-assortment-wrapper").click(function (event) {
        event.stopPropagation();//阻止事件向上冒泡 
    });
    //确认按钮
    $(".bmp-assortment-wrapper .btn-close").bind("click", function () {
        $(".bmp-listPage-header .bmp-assortment").addClass("active");
        $(".bmp-assortment-wrapper").stop(true, true).slideUp(250);
    });

    /* ========================================================================== */

    /* 操作展开
========================================================================== */

    $(".bmp-viewdata-btnGroup-function .bmp-dropdown-toggle").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".bmp-dropdown-menu").stop(true, true).slideUp(250);
        } else {
            $(this).addClass("active");
            $(".bmp-dropdown-menu").stop(true, true).slideDown(250);
        }
        if ($(".bmp-listPage-header .bmp-btn-create").hasClass("active")) {
            $(".bmp-listPage-header .bmp-btn-create").removeClass("active");
            $(".bmp-category-wrapper").css("display", "none");
        }
        event.stopPropagation();//阻止事件向上冒泡 
    });
    /* ========================================================================== */

        /* 筛选
========================================================================== */

    $(".bmp-viewdata-heading .btn-filter").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".bmp-selector-area").stop(true, true).slideUp(250);
        } else {
            $(this).addClass("active");
            $(".bmp-selector-area").stop(true, true).slideDown(250);
        }
        if ($(".bmp-listPage-header .bmp-btn-create").hasClass("active")) {
            $(".bmp-listPage-header .bmp-btn-create").removeClass("active");
            $(".bmp-category-wrapper").css("display", "none");
        }
        event.stopPropagation();//阻止事件向上冒泡 
    });
    /* ========================================================================== */

    /* 简易版下拉框
========================================================================== */

    $(".viewlist_dropdown").click(function () {
        var obj = $(this);
        var ul = $(".viewlist_droplist");
        if (ul.css("display") == "block") { ul.css("display", "none"); }
        else {
            $(ul).css({ display: "block"});
        }
        event.stopPropagation();
    });

    $(".viewlist_droplist li").click(function () {
        txt = $(this).html();
        $(".viewlist_dropdown .dropdown-input").html(txt);
        $(".viewlist_droplist").css("display", "none");
        event.stopPropagation();
    });

    /* 新建公文展开
========================================================================== */

    $(".bmp-listPage-header .bmp-btn-create").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".bmp-category-wrapper").stop(true, true).slideUp(250);
        } else {
            $(this).addClass("active");
            $(".bmp-category-wrapper").stop(true, true).slideDown(250);
        }
        if ($(".bmp-listPage-header .bmp-assortment").hasClass("active")) {
            $(".bmp-listPage-header .bmp-assortment").removeClass("active");
            $(".bmp-assortment-wrapper").css("display", "none");
        }
        event.stopPropagation();//阻止事件向上冒泡 
    });

    //取消按钮
    $(".bmp-category-wrapper .btn-close").bind("click", function () {
        $(".bmp-listPage-header .bmp-btn-create").removeClass("active");
        $(".bmp-category-wrapper").stop(true, true).slideUp(250);
    });
 
    $(document).bind("click", function () {
        $(".bmp-listPage-header .bmp-btn-create").removeClass("active");
        $(".bmp-category-wrapper").stop(true, true).slideUp(250);

        $(".bmp-listPage-header .bmp-assortment").removeClass("active");
        $(".bmp-assortment-wrapper").stop(true, true).slideUp(250);

        $(".bmp-viewdata-heading .btn-filter").removeClass("active");
        $(".bmp-selector-area").stop(true, true).slideUp(250);

        $(".bmp-viewdata-btnGroup-function .bmp-dropdown-toggle").removeClass("active");
        $(".bmp-dropdown-menu").stop(true, true).slideUp(250);

        $(this).removeClass("active");
        $(".bmp-selector-area").stop(true, true).slideUp(250);

        if ($(".viewlist_droplist").css("display") == "block") { $(".viewlist_droplist").css("display", "none"); }
       
    });

    $(".bmp-category-wrapper").click(function (event) {
        event.stopPropagation();//阻止事件向上冒泡 
    });

    /*** 查询 ***/
    $(".bmp-quiry li").bind("click", function () {
        $(".bmp-quiry li").removeClass("active");
        $(this).addClass("active");
    });

    /*** 排序 ***/
    $(".bmp-viewdata-btnGroup-sort span").bind("click", function () {
        $(".bmp-viewdata-btnGroup-sort span").removeClass("active");
        $(this).addClass("active");
    });
    /* 常用查询
========================================================================== */

    /* ========================================================================== */

    /* 头部向下滚动固定 新建页面
  ========================================================================== */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".bmp-toolbar-frame-float").addClass("bmp-fixed-toptip");
        } else {
            $(".bmp-toolbar-frame-float").removeClass("bmp-fixed-toptip");
        }

    });

    /* ========================================================================== */
    /* 导航
========================================================================== */
    $(".bmp-treemenu-v1 li").click(function () {
        $(".bmp-treemenu-v1 li").removeClass("active");
        $(this).addClass("active");
    });

    /* ========================================================================== */


    /* 头部向下滚动固定
    ========================================================================== */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 480) {
            $(".bmp-header-toptip").addClass("bmp-fixed-toptip");
        } else {
            $(".bmp-header-toptip").removeClass("bmp-fixed-toptip");
        }

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
