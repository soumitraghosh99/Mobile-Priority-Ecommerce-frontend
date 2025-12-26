'use strict';

// Cache
var body = $('body');
var mainSlider = $('#main-slider');
var imageCarousel = $('.img-carousel');
var imageCarouselSize = $('.img-carousel > .item').length;
var partnersCarousel = $('#partners');
var branchesCarousel = $('#branches');
var testimonialsCarousel = $('#testimonials');
var topProductsCarousel = $('#top-products-carousel');
var featuredProductsCarousel = $('#featured-products-carousel');
var sidebarProductsCarousel = $('#sidebar-products-carousel');
var hotDealsCarousel = $('#hot-deals-carousel');
var owlCarouselSelector = $('.owl-carousel');
var isotopeContainer = $('.isotope');
var isotopeFiltrable = $('#filtrable a');
var toTop = $('#to-top');
var hover = $('.thumbnail');
var navigation = $('.navigation');
var superfishMenu = $('ul.sf-menu');
var priceSliderRange = $('#slider-range');

// Slide in/out with fade animation function
jQuery.fn.slideFadeToggle = function (speed, easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, speed, easing, callback);
};
//
jQuery.fn.slideFadeIn = function (speed, easing, callback) {
    return this.animate({ opacity: 'show', height: 'show' }, speed, easing, callback);
};
jQuery.fn.slideFadeOut = function (speed, easing, callback) {
    return this.animate({ opacity: 'hide', height: 'hide' }, speed, easing, callback);
};

jQuery(document).ready(function () {
    // Prevent empty links
    // ---------------------------------------------------------------------------------------
    $(document).on('click', 'a[href="#"]', function (event) {
        event.preventDefault();
    });

    // Sticky header/menu
    // ---------------------------------------------------------------------------------------
    if ($().sticky) {
        $('.header.fixed').sticky({ topSpacing: 0 });
        //$('.header.fixed').on('sticky-start', function() { console.log("Started"); });
        //$('.header.fixed').on('sticky-end', function() { console.log("Ended"); });
    }

    // SuperFish menu
    // ---------------------------------------------------------------------------------------
    if ($().superfish) {
        superfishMenu.superfish();
    }
    $(document).on('click', 'ul.sf-menu a', function () {
        body.scrollspy('refresh');
    });

    // Fixed menu toggle
    $('.menu-toggle').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    $('.menu-toggle-close').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });

    // Smooth scrolling
    // ----------------------------------------------------------------------------------------
    $(document).on('click', '.sf-menu a, .scroll-to', function () {
        $('.sf-menu a').removeClass('active');
        $(this).addClass('active');
        var targetHref = $(this).attr('href');
        if (targetHref && $(targetHref).length) {
            $('html, body').animate({
                scrollTop: $(targetHref).offset().top
            }, {
                duration: 1200,
                easing: 'easeInOutExpo'
            });
        }
        return false;
    });

    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    if ($().selectpicker) {
        $('.selectpicker').selectpicker();
    }


    // Scroll totop button
    // ---------------------------------------------------------------------------------------
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            toTop.css({ bottom: '15px' });
        } else {
            toTop.css({ bottom: '-100px' });
        }
    });
    toTop.on('click', function () {
        $('html, body').animate({ scrollTop: '0px' }, 800);
        return false;
    });

    // Add hover class for correct view on mobile devices
    // ---------------------------------------------------------------------------------------
    hover.on('mouseenter', function () {
        $(this).addClass('hover');
    }).on('mouseleave', function () {
        $(this).removeClass('hover');
    });

    // Sliders
    // ---------------------------------------------------------------------------------------
    if ($().owlCarousel) {
        var owl = $('.owl-carousel');
        owl.on('changed.owl.carousel', function (e) {
            // update prettyPhoto
            if ($().prettyPhoto) {
                $("a[data-gal^='prettyPhoto']").prettyPhoto({
                    theme: 'dark_square'
                });
            }
        });
        // Main slider
        if (mainSlider.length) {
            mainSlider.owlCarousel({
                //items: 1,
                autoplay: true,
                autoplayHoverPause: false,
                loop: true,
                margin: 0,
                dots: false,
                nav: true,
                responsiveRefreshRate: 100,
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 1 },
                    991: { items: 1 },
                    1024: { items: 1 }
                }
            });
        }
        // Top products carousel
        if (topProductsCarousel.length) {
            topProductsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: { items: 2 },
                    479: { items: 3 },
                    768: { items: 4 },
                    991: { items: 4 },
                    1024: { items: 5 },
                    1280: { items: 6 }
                }
            });
        }
        // Featured products carousel
        if (featuredProductsCarousel.length) {
            featuredProductsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 2 },
                    991: { items: 3 },
                    1024: { items: 4 }
                }
            });
        }
        // Partners carousel
        if (partnersCarousel.length) {
            partnersCarousel.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: { items: 3, margin: 15 },
                    479: { items: 3, margin: 15 },
                    768: { items: 4 },
                    991: { items: 4 },
                    1024: { items: 5 },
                    1280: { items: 6 }
                }
            });
        }
        // Partners carousel
        if (branchesCarousel.length) {
            branchesCarousel.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: { items: 3 },
                    479: { items: 3 },
                    768: { items: 4 },
                    991: { items: 4 },
                    1024: { items: 5 },
                    1280: { items: 6 }
                }
            });
        }

    }
});
jQuery(window).on('load', function () {
    // Preloader
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut(200);

    // Isotope
    if ($().isotope) {
        isotopeContainer.isotope({ // initialize isotope
            itemSelector: '.isotope-item' // options...
            //,transitionDuration: 0 // disable transition
        });
        isotopeFiltrable.on('click', function () { // filter items when filter link is clicked
            var selector = $(this).attr('data-filter');
            isotopeFiltrable.parent().removeClass('current');
            $(this).parent().addClass('current');
            isotopeContainer.isotope({ filter: selector });
            return false;
        });
        isotopeContainer.isotope('reLayout'); // layout/reLayout
    }

    // Scroll to hash
    if (location.hash !== '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            body.delay(0).animate({
                scrollTop: jQuery(hash).offset().top
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }

    // OwlSliders
    if ($().owlCarousel) {
        // Hot deal carousel
        // must initialized after counters
        if (hotDealsCarousel.length) {
            hotDealsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 1 },
                    991: { items: 1 },
                    1024: { items: 1 }
                }
            });
        }
    }

    // Refresh owl carousels/sliders
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
});

jQuery(window).on('resize', function () {
    // Refresh owl carousels/sliders
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');

    // Refresh isotope
    if ($().isotope) {
        isotopeContainer.isotope('reLayout'); // layout/relayout on window resize
    }
    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
});

jQuery(window).on('scroll', function () {
    // Refresh owl carousels/sliders
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
});