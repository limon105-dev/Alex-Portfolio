$(function () {
    'use strict';

    // ..navbar sidebar start..//
    function slideMenu() {
        var activeState = $(".side-bar").hasClass("active");
        $(".side-bar").animate({
            left: activeState ? "0%" : "-70%"
        }, 300);
    }
    $(".side-btn").click(function (event) {
        event.stopPropagation();
        $(".side-btn").toggleClass("open");
        $(".side-bar").toggleClass("active");
        slideMenu();
    });

    $('.back-to-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop()
        if (scrolling > 500) {
            $('.back-to-top').fadeIn(500)
        } else {
            $('.back-to-top').fadeOut(500)
        }
        if (scrolling > 50) {
            $('.navbar').addClass('nav-fixed')
        } else {
            $('.navbar').removeClass('nav-fixed')
        }

        var scrollTop = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionhead = $(this.hash).offset().top - 85;
            if (scrollTop >= sectionhead) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    })

    //scroll-spy & Smooth-scrolling
    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 80
        }, 1000);
    });
    // ..navbar sidebar end..//

    // ..blog counter start..//
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // ..blog counter end..//

    // ..testimonial slider..//
    $('.feedback-main-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: false,
        centerMode: false,
        centerPadding: '0px',
        pauseOnHover: false,
        pauseOnFocus: false,
        asNavFor: '.testimonial-main',
        arrows: true,
        prevArrow: ".button-left",
        nextArrow: ".button-right",
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    vertical: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    vertical: false,
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    vertical: false,
                }
            }
        ]
    });

    $('.testimonial-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        fade: true,
        arrows: false,
        asNavFor: '.feedback-main-wrapper',
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    vertical: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    vertical: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    vertical: false,
                },
            }
        ]
    });
    // ..testimonial slider..//
})
new WOW().init();