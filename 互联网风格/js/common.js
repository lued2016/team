// JavaScript source code

/** ����������: ������
** ����ʱ�䣺2015-08-20
** �ļ���������������CSS2.0 �����ʽ
** �޸����ڣ�
** �޸����ݣ�
**********************************************/

$(function () {

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


    /* ҳ��ͷ��������Ч��
    ========================================================================== */
    $(".lui-navbar-form").hover(function () {
        $(this).addClass("active").css("width","174px").find(".lui-form-group").stop(true, false).animate({ marginLeft: "0" }, 500)
    }, function () {
        $(this).removeClass("active").removeAttr("style").find(".lui-form-group").stop(true, false).animate({ marginLeft: "210px" }, 500)
    });

    /* ========================================================================== */


    /* ҳ��ͷ��������Ч�� �Ż�������ɫʱʹ��
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


    /* ���ض���
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


    /* ���������
    ========================================================================== */
    $(".lui-feedback-box .lui-feedback-heading .lui-btn").bind("click", function (event) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").parents(".lui-feedback-box").stop().animate({ "right": "-312px" }, 300)
        } else {
            $(this).addClass("active").parents(".lui-feedback-box").stop().animate({ "right": "0" }, 300)
        }
        event.stopPropagation();//��ֹ�¼�����ð�� 

    });

    $(".lui-feedback-box #feedback-close").bind("click", function () {
        $(this).parents(".lui-feedback-box").stop().animate({ "right": "-312px" }, 300).find(".lui-feedback-heading .lui-btn").removeClass("active");
    });

    $(document).bind("click", function () {
        $(".lui-feedback-box .lui-feedback-heading .lui-btn").removeClass("active").parents(".lui-feedback-box").stop().animate({ "right": "-312px" }, 300);
    });
    $(".lui-feedback-box").click(function (event) {
        event.stopPropagation();//��ֹ�¼�����ð�� 
    });

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
    $("#signingSlider .lui-B-signing-databox").hover(function () {
        $(this).stop().animate({ "opacity": "1", "width": "260px", "marginTop": "60px", "marginLeft": "-130px" }, 150, function () {
            $(this).parent().addClass("active");
        });
        $(this).parent().siblings().removeClass("active").find(".lui-B-signing-databox").stop().animate({ "opacity": ".75", "width": "156px", "marginTop": "110px", "marginLeft": "-78px" }, 150)
    }).eq(2).trigger("mouseover");

    /* ========================================================================== */


    /* ���з���չ��
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
