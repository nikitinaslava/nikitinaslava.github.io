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
//vacancies tag filter
$(".category_list li").click(function(tag_filter) {
    $(".category_list li").removeClass('active_category');
    $(this).addClass('active_category');
    var cat_list_all = $(".category_list li.all.active_category");
    var cat_list = $(".category_list li.active_category").text();
    
    $(".triger_category_list span").text(cat_list);
    if ($(".category_list li.all").hasClass("active_category")) {
        $('.vacancies_container .flex_container div').show();
    } else {
        $('.vacancies_container .flex_container div').hide();
        $('.vacancies_container .flex_container div:contains("'+cat_list+'")').show();
    }
    return false;
});
$(".category_list li.all").click();
//show categories menu
if ($(window).width() < 1024 ) {
    $(".triger_category_list span, .close_categories, .category_list li").click(function(show_category_menu) {
        $("body").toggleClass("stop_scroll_vacancies");
        $(".vacancies_container .category_list").slideToggle(300);
    });
}
//show join us modal
$('.join_us_modal').hide();
$('.join_us button').click(function() {
    $('.join_us_modal').fadeIn(200);
});
//cloose modals 
$('.modal_window .close').click(function() {
    $('.modal_window').hide();
})
//change join us modal screens
if ($('.first_modal').css({'display' : 'flex'})) {
    $('.second_modal, .join_us_modal .submit, .back_btn').hide();
} else {
    $('.first_modal, .next_btn').hide();
}
$('.next_btn').click(function() {
    $('.join_us_modal .first_modal, .next_btn').hide();
    $('.join_us_modal .second_modal').css({'display' : 'flex'})
    $('.join_us_modal .submit, .back_btn').show();
})
$('.back_btn').click(function() {
    $('.second_modal, .join_us_modal .submit, .back_btn').hide();
    $('.join_us_modal .first_modal').css({'display' : 'flex'})
    $('.next_btn').show();
})
//show contact us modal
$('.contact_us_modal').hide();
$('.contact_us_triger').click(function() {
    $('.contact_us_modal').fadeIn(200);
});
//show contact us modal
$('.apply_position_modal').hide();
$('.apply_position_triger').click(function() {
    $('.apply_position_modal').fadeIn(200);
});