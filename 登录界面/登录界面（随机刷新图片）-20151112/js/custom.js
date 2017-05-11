// JavaScript custom code

$(function () {
    var screenWidth = document.body.scrollWidth;
    var screenHeight = document.body.scrollHeight;
    var lay_background_img = $(".lay_background_img");
    //lay_background_img.css({ "width": screenWidth, "height": screenHeight });

    var random_bg = Math.floor(Math.random() * 3 + 1);
    var bg = 'images/login_bg0' + random_bg + '.jpg';
    $(".login-background-img > img").attr("src", bg);


    //¶þÎ¬Âëµ¯³ö
    $(".login-dropbox").hover(function () {
        $(this).find(".login-dropbox-toggle > .iconbox").stop().animate({ left: "-45px" }, 300).end().find(".login-dropbox-menu").stop(true, true).show(300);
    }, function () {
        $(this).find(".login-dropbox-toggle > .iconbox").stop().animate({ left: "0" }, 300).end().find(".login-dropbox-menu").stop(true, true).hide(300);
    });


});

