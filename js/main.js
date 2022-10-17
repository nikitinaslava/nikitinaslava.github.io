//tabs main page
$('#TabsWhyMyContainer li').click(function(tabs_main_page){
    var thisClass = this.className.slice(0,20);
    $('div.point_one').hide();
    $('div.point_two').hide();
    $('div.' + thisClass).fadeIn(300);
    $('#TabsWhyMyContainer li').removeClass('active_point');
    $(this).addClass('active_point');
    return false;
 });
$('li.point_one').click();
//slider
$(document).ready(function(bx_slider){
    $('.slider').bxSlider({  
        auto: true,
        stopAutoOnClick: true,
        minSlides: 3
    });
});
//mobile menu open close
$(".burger_menu").click(function(open_mobile_menu) {
    $("body").toggleClass("stop_scroll");
    $(".header_navigation_mobile").toggle();
});