$(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.submenu').slideDown(200);
        },
        function(){
            $(this).children('.submenu').slideUp(200);
        }
    );

    $(".main-menu a").mouseenter(function() {
        $(this).animate({
            backgroundColor: "#9a8262"
        }, 200 );
    });

    $(".main-menu a").mouseleave(function() {
        $(this).animate({
            backgroundColor: "#323030"
        }, 200 );
    });

});
