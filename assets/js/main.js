"use strict";
/*
 * ----------------------------------------------------------------------------------------
 Author       : Iniciativa_develop
 Template Name: Theme-simon - Multipurpose
 Version      : 1.0
 * ----------------------------------------------------------------------------------------
 */

$(document).ready(function() {

  /*
   * ----------------------------------------------------------------------------------------
   *  PRELOADER JS
   * ----------------------------------------------------------------------------------------
   */
  $('.preloader').fadeOut();
  $('.preloader-area').delay(450).fadeOut('slow');

  /*
   * ----------------------------------------------------------------------------------------
   *  CHANGE MENU BACKGROUND AND TO UP JS
   * ----------------------------------------------------------------------------------------
   */

  $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
      header = $('.main-header'),
      button = $('#backToTop');
    if (scroll > 250) {
      header.addClass('sticky-top');
      button.fadeIn();
      button.addClass('visible');
    } else {
      header.removeClass('sticky-top');
      button.fadeOut();
      button.removeClass('visible');
    }
  });

  $('#backToTop').on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  /*
   * ----------------------------------------------------------------------------------------
   *  SMOTH SCROOL JS
   * ----------------------------------------------------------------------------------------
   */
  $('.menu-link ul li a.page-scroll').on("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 95
    }, 1000);
    e.preventDefault();
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  DROPDOWN MENU JS
   * ----------------------------------------------------------------------------------------
   */

  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
  });
  /*
   * ----------------------------------------------------------------------------------------
   *  Revolution Slider JS
   * ----------------------------------------------------------------------------------------
   */
  var header, bannerRevSlider;
  // Home slider height fix
  function homeSliderHeightFix() {
    $('#home').height($(window).height());
  }

  var RevSlider = $('[data-action="revslider"]'),
    RevSliderArrow = {
      style: '',
      enable: false,
    };

  var RevSliderBullet = {
    enable: true
  };

  RevSlider.each(function() {

    var revSliderWrapID = $(this);

    if (revSliderWrapID.revolution == undefined) {
      revslider_showDoubleJqueryError(revSliderWrapID);
    } else {

      bannerRevSlider = revSliderWrapID.show().revolution({
        sliderType: "standard",
        jsFileLocation: "assets/libs/revolution/js/",
        sliderLayout: "fullscreen",
        stopLoop: "off",
        stopAfterLoops: 0, //-1
        stopAtSlide: 1,
        responsiveLevels: [1240, 1024, 778, 485],
        gridwidth: [1400, 1170, 778, 480],
        gridheight: [800, 700, 1050, 500],
        /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */
        visibilityLevels: [1240, 1024, 778, 485],
        delay: 6000,
        shuffle: "on",

        navigation: {
          keyboardNavigation: "on",
          onHoverStop: "off",
          arrows: {
            style: RevSliderArrow.style,
            enable: RevSliderArrow.enable,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: '',
            left: {
              container: "slider",
              h_align: "left",
              v_align: "center",
              h_offset: 30,
              v_offset: 0
            },
            right: {
              container: "slider",
              h_align: "right",
              v_align: "center",
              h_offset: 30,
              v_offset: 0
            }
          },
          bullets: {
            style: "",
            enable: RevSliderBullet.enable,
            hide_onmobile: false,
            hide_onleave: false,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
            direction: "horizontal",
            space: 10,
            h_align: "center",
            v_align: "middle",
            h_offset: 0,
            v_offset: 50
          }
        },

        lazyType: "none",
        parallax: {
          type: "mouse+scroll",
          origo: "slidercenter",
          speed: 2000,
          levels: [1, 2, 3, 20, 25, 30, 35, 40, 45, 50],
          disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "spinner2",
        autoHeight: "on",
        disableProgressBar: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: 'off',
          disableFocusListener: false
        }
      });
      /*  revSliderWrapID.bind("revolution.slide.onchange", function(e, data) {
          if (data.currentslide.hasClass('slider-color-schema-white')) {
            $('body').removeClass('color-schema-white').addClass('color-schema-dark');
          } else if (data.currentslide.hasClass('slider-color-schema-dark')) {
            $('body').removeClass('color-schema-dark').addClass('color-schema-white');
          }
        });*/
    }
  });
  // Home slider height fix
  homeSliderHeightFix();


  /*
   * ----------------------------------------------------------------------------------------
   *  ACCORDION JS
   * ----------------------------------------------------------------------------------------
   */
  $('.jquery_accordion_title').on("click", function() {
    $(this).closest('.jquery_accordion_item').siblings().removeClass('in').find('.jquery_accordion_content').slideUp(400);
    $(this).closest('.jquery_accordion_item').siblings().removeClass('active').find('.jquery_accordion_content').slideUp(400);
    $(this).closest('.jquery_accordion_item').toggleClass('active').find('.jquery_accordion_content').slideToggle(400);
    return false;
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  TABS JS
   * ----------------------------------------------------------------------------------------
   */
  /* ---- one ---- */
  $(function() {
    $('.mdl-tabs__tab-bar.one a.mdl-tabs__tab').on("click", function() {
      $('div.mdl-tabs__panel.one').hide();
      var activeTab = $(this).attr('href');
      $(activeTab).fadeIn('slow');
    });
  });

  /* ---- two ---- */
  $(function() {
    $('.mdl-tabs__tab-bar.two a.mdl-tabs__tab').on("click", function() {
      $('div.mdl-tabs__panel.two').hide();
      var activeTab = $(this).attr('href');
      $(activeTab).fadeIn('slow');
    });
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  USER & SCREENSHOTS JS
   * ----------------------------------------------------------------------------------------
   */

  $('.owl-carousel-nav').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    margin: 15,
    nav: true,
    navText: ["&#xf3d5", "&#xf3d6"],
    pag: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $('.owl-carousel-pag').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 10,
    nav: false,
    pag: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  $('.owl-carousel-clients').owlCarousel({
    autoplay: true,
    animateOut: 'fadeOut',
    loop: true,
    center: false,
    margin: 24,
    nav: false,
    dots: true,
    navText: ["&#xf2f4", "&#xf2c7"],
    pag: true,
    responsive: {
      320: {
        items: 2
      },
      600: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1366: {
        items: 4
      },
      1440: {
        items: 4
      }
    }
  });

  $('.owl-carousel-blogs').owlCarousel({
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoWidth: false,
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    pag: true,
    responsive: {
      320: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1024: {
        items: 2
      },
      1366: {
        items: 3
      },
      1440: {
        items: 3
      }
    }
  });

  $('.owl-carousel-team').owlCarousel({
      autoplay: true,
      loop:true,
      navText: ["&#xf124;", "&#xf125;"],
      margin:10,
      nav: true,
      dots: false,
      pag: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
  });

  $('.owl-carousel-services').owlCarousel({
      autoplay: true,
      loop:true,
      navText: ["&#xf124;", "&#xf125;"],
      margin:5,
      nav: true,
      dots: false,
      pag: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });

  $('.owl-carousel-portfolio-1').owlCarousel({
      autoplay: false,
      loop:true,
      navText: ["&#xf124;", "&#xf125;"],
      margin:0,
      nav: true,
      dots: false,
      pag: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1200:{
              items:4
          }
      }
  });

  $('.owl-carousel-portfolio-2').owlCarousel({
      autoplay: false,
      loop:true,
      navText: ["&#xf124;", "&#xf125;"],
      margin:0,
      nav: true,
      dots: false,
      pag: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1200:{
              items:4
          }
      }
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  ISOTOPE JS
   * ----------------------------------------------------------------------------------------
   */
  // activate isotope in container
  var $grid = $('#portfolio_items').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  // add isotope click function
  $('#portfolio_filter li').on("click", function() {
    var selector = $(this).attr('data-filter');
    $('#portfolio_items').isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    // change active class on li
    $('#portfolio_filter ul li').each(function() {
      var $portfolio_filter = $('#portfolio_filter ul li');
      $portfolio_filter.removeClass('active');
      $portfolio_filter.on('click', function() {
        $(this).addClass('active');
      });
    });
    return false;
  });

  /*
   * ----------------------------------------------------------------------------------------
   *  COUNTER UP JS
   * ----------------------------------------------------------------------------------------
   */
  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });

});
