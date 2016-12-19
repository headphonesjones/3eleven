$( document ).ready(function() {
    $("#logo-symbol-1").attr('src', '/dist/images/3Eleven-Holdingpage-161104-1-TK-logo-3-test.svg');
    $("#logo-symbol-2").attr('src', '/dist/images/3Eleven-Holdingpage-161104-1-TK-logo-E01-test.svg');
    $("#logo-symbol-3").attr('src', '/dist/images/3Eleven-Holdingpage-161104-1-TK-logo-L-test.svg');
    $("#logo-symbol-4").attr('src', '/dist/images/3Eleven-Holdingpage-161104-1-TK-logo-E02-test.svg');
    $("#logo-symbol-5").attr('src', '/dist/images/3Eleven-Holdingpage-161104-1-TK-logo-V-test.svg');
    $("#logo-symbol-6").attr('src', '/dist/images/3Eleven-Holdingpage-161104-1-TK-logo-E03-test.svg');
    $("#logo-symbol-7").attr('src', '/dist/images/3Eleven-Holdingpage-161104-1-TK-logo-N-test.svg');
    $("#buildingImage").attr('src', '/dist/images/2279_Fitzgerald_Building_Only_0001-TK.png');
    $("#overlayPattern").attr('src', '/dist/images/3Eleven-Holdingpage-161104-1-TK-BG-onthebuilding-test.svg');

    $(window).load(function () {
        $(".preloader img").hide();
        setTimeout(function(){
            $(".preloader").fadeOut();
            $("#logo-symbol-1").addClass("active");
            $("#logo-symbol-2").addClass("active");
            $("#logo-symbol-3").addClass("active");
            $("#logo-symbol-4").addClass("active");
            $("#logo-symbol-5").addClass("active");
            $("#logo-symbol-6").addClass("active");
            $("#logo-symbol-7").addClass("active");
            $("#building").addClass("active");
        }, 300);
    });
});

$("#submitInput").click(function (e) {
    e.preventDefault();
    $(".thankYouOverlay img").addClass("active");
    $(".thankYouOverlay").addClass("active");
    $("form").addClass("hide");

    setTimeout(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
    }, 3000);

    setTimeout(function () {
        location.reload();
    }, 4500);
});


document.addEventListener("click", function(){
    if($(".thankYouSymbols").hasClass("active")){
        $("body").click(function(){
            $(".thankYouSymbols").removeClass("active");
            $(".thankYouOverlay img").removeClass("active");
            $(".thankYouOverlay").removeClass("active");
            $("form").removeClass("hide");
        });
    }
});


