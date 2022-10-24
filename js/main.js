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
        pagerCustom: '#BxPager',
        auto: true,
        stopAutoOnClick: true,
        infinite: true
    });
});
$('#SliderRange').on('afterChange', function() { 
    var slider_pager_value = $('#BxPager .bx-pager-link.active').attr('data-slide-index');
    var scroll_bar = $('#SliderRange').val();

    if (scroll_bar == 0) {
        $(scroll_bar) == 0;
    } else if (scroll_bar == 1) {
        $(slider_pager_value) == 1;
    } else if (scroll_bar == 2) {
        $(slider_pager_value) == 2;
    } else if (scroll_bar == 3) {
        $(slider_pager_value) == 3;
    } else if (scroll_bar == 4) {
        $(slider_pager_value) == 4;
    } else if (scroll_bar == 5) {
        $(slider_pager_value) == 5;
    } else if (scroll_bar == 6) {
        $(slider_pager_value) == 6;
    } else if (scroll_bar == 7) {
        $(sslider_pager_value) == 7;
    };   
    console.log(scroll_bar);
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
    $('.join_us_modal').fadeIn(200).css({'display' : 'flex'});
});
//cloose modals 
$('.modal_window .close').click(function() {
    $('.modal_window').hide();
})
//change join us modal screens
if ($('.first_modal').css({'display' : 'flex'})) {
    $('.second_modal, .join_us_modal .submit, .modal_window .back_btn, .join_us_second_notice').hide();
} else {
    $('.first_modal, .next_btn').hide();
}
$('.next_btn').click(function() {
    $('.join_us_modal .first_modal, .next_btn, .required_fields_notice').hide();
    $('.join_us_modal .second_modal').css({'display' : 'flex'})
    $('.join_us_modal .submit, .modal_window .back_btn, .join_us_second_notice').show();
})
$('.modal_window .back_btn').click(function() {
    $('.next_btn, .required_fields_notice').show();
    $('.second_modal, .join_us_modal .submit, .modal_window .back_btn, .join_us_second_notice').hide();
    $('.join_us_modal .first_modal').css({'display' : 'flex'})
})
//show contact us modal
$('.contact_us_modal').hide();
$('.contact_us_triger').click(function() {
    $('.contact_us_modal').fadeIn(200).css({'display' : 'flex'});
});
//show contact us modal
$('.apply_position_modal').hide();
$('.apply_position_triger').click(function() {
    $('.apply_position_modal').fadeIn(200).css({'display' : 'flex'});
});
//cookie modal
setTimeout(function(cookie_notification_poup) {
    $('.cookie_modal').show(200);
}, 2500);
$('.accept_all').click(function(close_cookie_modal) {
    $('.cookie_modal').hide(200);
});
// apply form validation
$('.apply_position_modal form .submit').click(function (check_empty_fields_apply) {
                
    var inpt_name = document.getElementById("Name").value === '';
    var inpt_location = document.getElementById("Location").value === '';
    var inpt_email = document.getElementById("Email").value === '';
    var inpt_cv_file = document.getElementById("CVFile").value === '';
    
    $("span.error").remove();

    switch(inpt_name) {
        case true:
            $('#Name').css({'border' : '1px solid #003E70'}).before('<span class="error name_error">This field can’t be empty</span>');
            break;
        default:
            $('.name_error').css({
                'display':'none'
            });
    }
    switch(inpt_location) {
        case true:
            $('#Location').css({'border' : '1px solid #003E70'}).before('<span class="error location_error">This field can’t be empty</span>');
            break;
        default:
            $('.location_error').css({
                'display':'none'
            });
    }
    switch(inpt_email) {
        case true:
            $('#Email').css({'border' : '1px solid #003E70'}).before('<span class="error email_error">This field can’t be empty</span>');
            break;
        default:

    }
    switch(inpt_cv_file) {
        case true:
            $('.apply_position_modal .cv_file label').css({'border' : '1px solid #003E70'}).before('<span class="error cv_file_error">This field can’t be empty</span>');
            break;
        default:
            $('.cv_file_error').css({
                'display':'none'
            });
    };
});
// join us form validation
$('.join_us_modal form .submit').click(function (check_empty_fields_join_us) {
                
    var inpt_name = document.getElementById("NameJoin").value === '';
    var inpt_location = document.getElementById("LocationJoin").value === '';
    var inpt_email = document.getElementById("EmailJoin").value === '';
    var inpt_position = document.getElementById("PositionJoin").value === '';
    var inpt_salary = document.getElementById("SalaryJoin").value === '';
    var inpt_cv_file = document.getElementById("CVFileJoin").value === '';
    
    $("span.error").remove();

    switch(inpt_name) {
        case true:
            $('#NameJoin').css({'border' : '1px solid #003E70'}).before('<span class="error name_error">This field can’t be empty</span>');
            break;
        default:
            $('.name_error').css({
                'display':'none'
            });
    }
    switch(inpt_location) {
        case true:
            $('#LocationJoin').css({'border' : '1px solid #003E70'}).before('<span class="error location_error">This field can’t be empty</span>');
            break;
        default:
            $('.location_error').css({
                'display':'none'
            });
    }
    switch(inpt_email) {
        case true:
            $('#EmailJoin').css({'border' : '1px solid #003E70'}).before('<span class="error email_error">This field can’t be empty</span>');
            break;
        default:

    }
    switch(inpt_position) {
        case true:
            $('#PositionJoin').css({'border' : '1px solid #003E70'}).before('<span class="error position_error">This field can’t be empty</span>');
            break;
        default:
            $('.position_error').css({
                'display':'none'
            });
    };
    switch(inpt_salary) {
        case true:
            $('#SalaryJoin').css({'border' : '1px solid #003E70'}).before('<span class="error salary_error">This field can’t be empty</span>');
            break;
        default:
            $('.salary_error').css({
                'display':'none'
            });
    };
    switch(inpt_cv_file) {
        case true:
            $('.join_us_modal .cv_file label').css({'border' : '1px solid #003E70'}).after('<span class="error cv_file_error">This field can’t be empty</span>');
            break;
        default:
            $('.cv_file_error').css({
                'display':'none'
            });
    };
});
// Contact us form validation
$('.contact_us_modal form .submit').click(function (check_empty_fields_join_us) {
                
    var inpt_name = document.getElementById("NameContact").value === '';
    var inpt_email = document.getElementById("EmailContact").value === '';
    
    $("span.error").remove();

    switch(inpt_name) {
        case true:
            $('#NameContact').css({'border' : '1px solid #003E70'}).before('<span class="error name_error">This field can’t be empty</span>');
            break;
        default:
            $('.name_error').css({
                'display':'none'
            });
    }
    switch(inpt_email) {
        case true:
            $('#EmailContact').css({'border' : '1px solid #003E70'}).before('<span class="error email_error">This field can’t be empty</span>');
            break;
        default:
            $('.email_error').css({
                'display':'none'
            });
    }
});