jq2 = jQuery.noConflict();
jq2(function( $ ) {


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