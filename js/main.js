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
            $("#large-screen-menu .white-logo").addClass("d-none")
            $("#large-screen-menu .normal-logo").removeClass("d-none")
        }
        else{
            $("#large-screen-menu").removeClass("active")
            $("#large-screen-menu .white-logo").removeClass("d-none")
            $("#large-screen-menu .normal-logo").addClass("d-none")
        }
    });
});