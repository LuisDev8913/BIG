$(document).ready(function () {
    $("a").click(function (event) {
        event.preventDefault();
    });

    $("body").on('mousemove', function (e) {
        var offsetX=e.clientX/50;
        var offsetY=e.clientY/50;
        $('.man').css({"transform":"translate("+offsetX+"px,0px)"});
        $('.ellips').css({"transform":"translate(-"+offsetY+"px,0px)"});
        $('.lines').css({"transform":"translate("+offsetY+"px,0px)"});
        $('.plus').css({"transform":"translate(-"+offsetX+"px,0px)"});
        $('.sin').css({"transform":"translate("+offsetY+"px,0px)"});
        $('.triangleyel').css({"transform":"translate("+offsetX+"px,0px)"});
        $('.triangle').css({"transform":"translate("+offsetX+"px,0px)"});
        $('.any').css({"transform":"translate("+offsetX+"px,0px)"});
    });



});

$('.icon_menu').click(function(){
    $('.nav_block').toggle();
});