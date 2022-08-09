$(function(){
    $('.slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        accessibility: true,
        nextArrow: '<button type="button" class="arrow_next"></button>',
        prevArrow: '<button type="button" class="arrow_prev"></button>'
    });
})