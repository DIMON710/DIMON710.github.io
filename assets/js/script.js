jq2 = jQuery.noConflict();
jq2(function( $ ) {
    $('#comments-carousel').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 1300,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        startPosition: 1
    });

    $('.shcart1').click(function(event) {
        $('.shcart1, #team__mess1').toggleClass('active');
    });
    $('.shcart2').click(function(event) {
        $('.shcart2, #team__mess2').toggleClass('active');
    });
    $('.shcart3').click(function(event) {
        $('.shcart3, #team__mess3').toggleClass('active');
    });

    $('.burger-btn').click(function(event) {
        $('.burger-mn, .burger-btn__body, .header__nav').toggleClass('active');
    });
});