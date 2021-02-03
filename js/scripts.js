/*!
    * Start Bootstrap - Grayscale v6.0.1 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    // $("body").scrollspy({
    //     target: "#mainNav",
    //     offset: 100,
    // });

    // // Collapse Navbar
    // var navbarCollapse = function () {
    //     if ($("#mainNav").offset().top > 100) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     } else {
    //         $("#mainNav").removeClass("navbar-shrink");
    //     }
    // };
    // // Collapse now if page is not at top
    // navbarCollapse();
    // // Collapse the navbar when page is scrolled
    // $(window).scroll(navbarCollapse);

    var navbarState = function () {
        var lastScrollTop = 0;
        $(window).scroll(function () {

            var $this = $(this),
                st = $this.scrollTop(),
                navbar = $('.site-navbar');

            if (st > 100) {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled awake');
            }

            if (navbar.hasClass('scrolled') && st > 100) {
                if (st > lastScrollTop) {
                    // if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                    // }
                } else {
                    // if (navbar.hasClass('scrolled')) {
                    navbar.addClass('awake');
                    navbar.removeClass('sleep');
                    // }
                }
                lastScrollTop = st;
            }

        });



        $('.site-navbar')
            .mouseenter(function () {
                var $this = $(this);
                $this.addClass('awake');
                $this.removeClass('sleep');
            })
            .mouseleave(function () {
                var $this = $(this);
                $this.addClass('sleep');
                $this.removeClass('awake');
            });
    };

    $(function () {
        navbarState();
    });

    // Slick initialization

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(window).on('resize', function () {
        $('.autoplay').slick('resize');
    });


})(jQuery); // End of use strict