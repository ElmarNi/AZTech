"use strict"
$(document).ready(function () {
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        nav: false, 
        dots: false
    })
    $(window).scroll(function () { 
        if ($(window).scrollTop() > 50) {
            $("#large-screen-menu").addClass("active")
        }
        else{
            $("#large-screen-menu").removeClass("active")
        }
    });
});