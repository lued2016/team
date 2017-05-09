// JavaScript source code

/** 代码制作人: 马泽棉
 ** 制作时间：2015-08-20
 ** 文件内容描述：基于CSS2.0 框架样式
 ** 修改日期：
 ** 修改内容：
 **********************************************/

$(function() {

	/* input焦点去除文字
	========================================================================== */
	$("input[type=text]").focus(function() {
		if ($(this).val() == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		if ($(this).val() == '') {
			$(this).val(this.defaultValue);
		}
	});
	/* ========================================================================== */

	/* 返回顶部
	========================================================================== */
	$('#scrollTop').click(function() {
		$('html,body').animate({
			scrollTop: '0px'
		}, 300);
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > 240) {
			$(".lui-fixed-toolbar").addClass("visible");
		} else {
			$(".lui-fixed-toolbar").removeClass("visible");
		}

	});

	/* ========================================================================== */

	/* 下拉菜单弹出切换
	========================================================================== */
	$(" ").hover(function() {
		$(this).find(".toggle").addClass("active").next(".bmp-dropdown-meun").stop(true, true).slideDown(250);
	}, function() {
		$(this).find(".toggle").removeClass("active").next(".bmp-dropdown-meun").stop(true, true).slideUp(100);
	});

	/* ========================================================================== */

	/* 头部向下滚动固定
	========================================================================== */
	$(window).scroll(function() {
		if ($(window).scrollTop() > 480) {
			$(".bmp-header-toptip").addClass("bmp-fixed-toptip");
		} else {
			$(".bmp-header-toptip").removeClass("bmp-fixed-toptip");
		}

	});

	/* ========================================================================== */

	var iframe = $("iframe[src='/ui-ext/iceblue/iceblue-custom/cockpit-home/cockpit.html']", parent.document);
	iframe && iframe.parent(".lui-component").css({"font-size": "0", "*white-space":"-1px"});
});