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
$('.slider').on('init reInit',function(event,slick) {
    var amount = slick.slideCount;
    $('#SliderRange').attr('max',amount);
})  
$('.slider').on('afterChange',function(e,slick,currentSlide) {
    $('#SliderRange').val(currentSlide+1);
})  
$('#SliderRange').on('input change',function() {
    $('.slider').slick('slickGoTo',this.value-1);
});
$(document).ready(function(slider_functions){
    $('.slider').slick({
        autoplay:true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
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
/*$('.join_us_modal').hide();
$('.join_us button').click(function(show_join_us_modal) {
    $('.join_us_modal').fadeIn(200).css({'display' : 'flex'});
});*/
//cloose modals 
$('.modal_window .close').click(function(close_modals) {
    $('.modal_window').hide();
})
//change join us modal screens
/*if ($('.first_modal').css({'display' : 'flex'})) {
    $('.second_modal, .join_us_modal .submit, .modal_window .back_btn, .join_us_second_notice').hide();
} else {
    $('.first_modal, .next_btn').hide();
}
$('.next_btn').click(function(join_us_next_btn) {
    $('.join_us_modal .first_modal, .next_btn, .required_fields_notice').hide();
    $('.join_us_modal .second_modal').css({'display' : 'flex'})
    $('.join_us_modal .submit, .modal_window .back_btn, .join_us_second_notice').show();
})
$('.modal_window .back_btn').click(function(join_us_back_btn) {
    $('.next_btn, .required_fields_notice').show();
    $('.second_modal, .join_us_modal .submit, .modal_window .back_btn, .join_us_second_notice').hide();
    $('.join_us_modal .first_modal').css({'display' : 'flex'})
})*/
//show contact us modal
$('.contact_us_modal').hide();
$('.contact_us_triger').click(function(how_contacts_modal) {
    $('.contact_us_modal').fadeIn(200).css({'display' : 'flex'});
});
//show apply modal
$('.apply_position_modal').hide();
$('.apply_position_triger').click(function(show_apply_modal) {
    $('.apply_position_modal').fadeIn(200).css({'display' : 'flex'});
});
//map scripts
$("a.map_mark").click(function(show_country_name) {
    $('a.map_mark .map_mark_country_title').hide();
    var map_mark_title = $(this).attr('data-map-title');
    $(this).append('<span class="map_mark_country_title"></span>');
    $('.map_mark_country_title').text(map_mark_title);
});

//cookie modal
setTimeout(function(cookie_notification_modal) {
    $('.cookie_modal').css({
        'opacity':'1'
    });
    }, 2500);
    
    $('.cookie_modal .accept_all').click(function(close_cookie_notification_modal) {
        $('.cookie_modal').hide(300);
            $.cookie("accept_cookie", "", { expires:0, path: '/' });
    });    
    $(document).ready(function(check_cookie_notification_modal){  
        $('.cookie_modal .accept_all').click(function(){
            $.cookie("accept_cookie", "", { expires:0, path: '/' }); 
        }); 
        if ( $.cookie("accept_cookie") == null )
            {
                setTimeout(function() {
                    $('.cookie_modal').css({
                        'opacity':'1'
                    });
                });
        }  else { 
            $(".cookie_modal").hide();
        }
    });
//file input 
$('.apply_position_modal input#CVFile').on('change', function(apply_cv_file) {    
    var cv_file_input_value = $('.apply_position_modal input#CVFile').val();

    if ( cv_file_input_value ){
        $('.apply_position_modal .cv_file label').text(cv_file_input_value).css({
            'border':'1px solid #FFFFFF'
        });
    } else { 
        $('.apply_position_modal .cv_file label').text('Upload CV file*').css({
            'border':'none'
        });
    };
});
$('.apply_position_modal input#CoverLetter').on('change', function(apply_cover_file) {    
    var cover_file_input_value = $('.apply_position_modal input#CoverLetter').val();

    if ( cover_file_input_value ){
        $('.apply_position_modal .cover_letter label').text(cover_file_input_value).css({
            'border':'1px solid #FFFFFF'
        });
    } else { 
        $('.apply_position_modal .cover_letter label').text('Upload Cover Letter').css({
            'border':'none'
        });
    };
});
//join us file input
/*$('.join_us_modal input#CVFileJoin').on('change', function(apply_cv_file) {    
    var join_cv_file_input_value = $('.join_us_modal input#CVFileJoin').val();

    if ( join_cv_file_input_value ){
        $('.join_us_modal .cv_file label').text(join_cv_file_input_value).css({
            'border':'1px solid #FFFFFF'
        });
    } else { 
        $('.join_us_modal .cv_file label').text('Upload CV file*').css({
            'border':'none'
        });
    };
});
$('.join_us_modal input#CoverLetterJoin').on('change', function(apply_cover_file) {    
    var join_cover_file_input_value = $('.join_us_modal input#CoverLetterJoin').val();

    if ( join_cover_file_input_value ){
        $('.join_us_modal .cover_letter label').text(join_cover_file_input_value).css({
            'border':'1px solid #FFFFFF'
        });
    } else { 
        $('.join_us_modal .cover_letter label').text('Upload Cover Letter').css({
            'border':'none'
        });
    };
});*/