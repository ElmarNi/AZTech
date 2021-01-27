"use strict"
$(document).ready(function () {
    jQuery.fn.clickOutside = function(callback){
        var $me = this;
        $(document).mouseup(function(e) {
            if ( !$me.is(e.target) && $me.has(e.target).length === 0 ) {
                callback.apply($me);
            }
        });
    };
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        nav: false, 
        dots: false
    })
    $(window).scroll(function () { 
        if ($(window).scrollTop() > 50) {
            $("header").addClass("active")
            $("header .white-logo").addClass("d-none")
            $("header .normal-logo").removeClass("d-none")
        }
        else{
            $("header").removeClass("active")
            $("header .white-logo").removeClass("d-none")
            $("header .normal-logo").addClass("d-none")
        }
    });
    $("#small-screen-menu .open-nav").click(function (e) {
        e.preventDefault()
        $(".small-screen-menu-nav nav").addClass("active")
        $("body").addClass("active")
        $(".small-screen-overlay").addClass("active")
    })
    $(".small-screen-menu-nav .close-menu").click(function (e) {
        e.preventDefault()
        $(".small-screen-menu-nav nav").removeClass("active")
        $("body").removeClass("active")
        $(".small-screen-overlay").removeClass("active")
        closeActiveSubMenu()
    })
    $('.small-screen-menu-nav nav').clickOutside(function(){
        $(this).removeClass('active');
        $("body").removeClass("active")
        $(".small-screen-overlay").removeClass("active")
        closeActiveSubMenu()
    });
    $(".small-screen-menu-nav nav .subed-li a.open-drop").click(function (e) {
        e.preventDefault();
        if($(this).parent().find("ul").hasClass("active")){
            $(this).parent().find("ul").slideUp("fast").removeClass("active")
            $(this).find("svg").removeClass("active")
            return;
        }
        closeActiveSubMenu()
        $(this).parent().find("ul").slideToggle("fast").toggleClass("active")
        $(this).find("svg").toggleClass("active")
    })
    function closeActiveSubMenu () {
        $(".small-screen-menu-nav nav .subed-li svg.active").removeClass("active")
        $(".small-screen-menu-nav nav .subed-li ul.active").slideUp("fast").removeClass("active")
    }
});