// JavaScript source code

/** ����������: ������
** ����ʱ�䣺2015-08-20
** �ļ���������������CSS2.0 �����ʽ
** �޸����ڣ�
** �޸����ݣ�
**********************************************/

$(function () {

    /* ҳ�涥��չ�����л�Ч��
    ========================================================================== */
    function exhibitShow() {
        var sHeight = $("#exhibitShow").height();
        var index = 0;

        $("#exhibitShow .bmp-exhibit-tab-head .tab-item").click(function () {
            index = $("#exhibitShow .bmp-exhibit-tab-head .tab-item").index(this);
            showPics(index);
        }).eq(0).trigger("click");

        //��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
        function showPics(index) {
            $("#exhibitShow .bmp-exhibit-sliderBox").css("z-index",0).stop(true, false).animate({ "opacity": 0 }, 300)
                .eq(index).stop(true, false).css("z-index", 99).animate({ "opacity": 1 }, 300);
            $("#exhibitShow .bmp-exhibit-itemBox").removeClass("active").eq(index).addClass("active");
            $("#exhibitShow .bmp-exhibit-tab-head .tab-item").removeClass("active")
                .eq(index).addClass("active");
        };

    };
    exhibitShow(); //���ú���
    /* ========================================================================== */


    /* ҵ���λ�����л�Ч��
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

        //��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
        function showPics(index) {
            var nowUp = -index * sHeight;  //����indexֵ����ulԪ�ص�heightֵ
            $("#slider .bmp_BPostMap_slideBox").stop(true, false).animate({ "top": nowUp }, 300);
            $("#slider .bmp_BPostMap_slideItem").removeClass("active").eq(index).addClass("active");
            $("#slider .bmp_BPostMap_slideNav span").removeClass("on").eq(index).addClass("on");
        };

    };
    BPostMap(); //���ú���
    /* ========================================================================== */


    /* ǩ��ϲѶ
    ========================================================================== */
    $("#signingSlider .bmp-B-signing-databox").hover(function () {
        $(this).stop().animate({ "opacity": "1", "width": "260px", "marginTop": "60px", "marginLeft": "-130px" }, 150, function () {
            $(this).parent().addClass("active");
        });
        $(this).parent().siblings().removeClass("active").find(".bmp-B-signing-databox").stop().animate({ "opacity": ".75", "width": "156px", "marginTop": "110px", "marginLeft": "-78px" }, 150)
    }).eq(2).trigger("mouseover");

    /* ========================================================================== */


    /* input����ȥ������
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
    var ie = document.documentMode; /*** �ĵ�ģʽ ***/
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

    /* ���ض���
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

    /* ҳ��ͷ��������Ч��
    ========================================================================== */
    $(".lui-navbar-form").hover(function () {
        $(this).addClass("active").css("width", "174px").find(".lui-form-group").stop(true, false).animate({ marginLeft: "0" }, 500)
    }, function () {
        $(this).removeClass("active").removeAttr("style").find(".lui-form-group").stop(true, false).animate({ marginLeft: "210px" }, 500)
    });

    /* ========================================================================== */


    /* ���������
    ========================================================================== */
    $(".bmp-feedback-box .bmp-feedback-heading .bmp-btn").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").parents(".bmp-feedback-box").stop().animate({ "right": "-312px" }, 300)
        } else {
            $(this).addClass("active").parents(".bmp-feedback-box").stop().animate({ "right": "0" }, 300)
        }
        event.stopPropagation();//��ֹ�¼�����ð�� 

    });

    $(".bmp-feedback-box #feedback-close").bind("click", function () {
        $(this).parents(".bmp-feedback-box").stop().animate({ "right": "-312px" }, 300).find(".bmp-feedback-heading .bmp-btn").removeClass("active");
    });

    $(document).bind("click", function () {
        $(".bmp-feedback-box .bmp-feedback-heading .bmp-btn").removeClass("active").parents(".bmp-feedback-box").stop().animate({ "right": "-312px" }, 300);
    });
    $(".bmp-feedback-box").click(function (event) {
        event.stopPropagation();//��ֹ�¼�����ð�� 
    });

    /* ========================================================================== */


    /* �����˵������л�
    ========================================================================== */
    $(".bmp-dropdown").hover(function () {
        $(this).find(".toggle").addClass("active").next(".bmp-dropdown-meun").stop(true, true).slideDown(250);
    }, function () {
        $(this).find(".toggle").removeClass("active").next(".bmp-dropdown-meun").stop(true, true).slideUp(100);
    });

    /* ========================================================================== */

    /* ���з���չ��
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
        event.stopPropagation();//��ֹ�¼�����ð�� 
    });
    $(".bmp-assortment-wrapper").click(function (event) {
        event.stopPropagation();//��ֹ�¼�����ð�� 
    });
    //ȷ�ϰ�ť
    $(".bmp-assortment-wrapper .btn-close").bind("click", function () {
        $(".bmp-listPage-header .bmp-assortment").addClass("active");
        $(".bmp-assortment-wrapper").stop(true, true).slideUp(250);
    });

    /* ========================================================================== */

    /* ����չ��
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
        event.stopPropagation();//��ֹ�¼�����ð�� 
    });
    /* ========================================================================== */

        /* ɸѡ
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
        event.stopPropagation();//��ֹ�¼�����ð�� 
    });
    /* ========================================================================== */

    /* ���װ�������
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

    /* �½�����չ��
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
        event.stopPropagation();//��ֹ�¼�����ð�� 
    });

    //ȡ����ť
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
        event.stopPropagation();//��ֹ�¼�����ð�� 
    });

    /*** ��ѯ ***/
    $(".bmp-quiry li").bind("click", function () {
        $(".bmp-quiry li").removeClass("active");
        $(this).addClass("active");
    });

    /*** ���� ***/
    $(".bmp-viewdata-btnGroup-sort span").bind("click", function () {
        $(".bmp-viewdata-btnGroup-sort span").removeClass("active");
        $(this).addClass("active");
    });
    /* ���ò�ѯ
========================================================================== */

    /* ========================================================================== */

    /* ͷ�����¹����̶� �½�ҳ��
  ========================================================================== */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".bmp-toolbar-frame-float").addClass("bmp-fixed-toptip");
        } else {
            $(".bmp-toolbar-frame-float").removeClass("bmp-fixed-toptip");
        }

    });

    /* ========================================================================== */
    /* ����
========================================================================== */
    $(".bmp-treemenu-v1 li").click(function () {
        $(".bmp-treemenu-v1 li").removeClass("active");
        $(this).addClass("active");
    });

    /* ========================================================================== */


    /* ͷ�����¹����̶�
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



/* ѡ��л�
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
