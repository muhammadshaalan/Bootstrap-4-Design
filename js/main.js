/*global $*/
/*global console*/
$(function () {
    'use strict';
    //Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));
    
    //Shuffel
    $('.Featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffel-img .row .col-md').css('opacity', 1);
        } else {
            $('.shuffel-img .row .col-md').css('opacity', '.5');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
   //Scroll Header
    $('.collapse li a').click(function () {
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    $('.collapse li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});