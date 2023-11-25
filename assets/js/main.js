(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $('.overlayer').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
    galleryMasonary();
    galleryMasonaryTwo();
  });
  // Gallery Masonary
  function galleryMasonary() {
    // filter functions
    var $grid = $(".class-wrapper");
    var filterFns = {};
    $grid.isotope({
      itemSelector: '.class-inner',
      masonry: {
        columnWidth: 0,
      }
    });
    // bind filter button click
    $('ul.filter').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
    // change is-checked class on buttons
    $('ul.filter').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li', function () {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  // Gallery Masonary
  function galleryMasonaryTwo() {
    // filter functions
    var $gridTwo = $(".masonary-wrapper");
    var filterFns = {};
    $gridTwo.isotope({
      itemSelector: '.masonary-item',
      masonry: {
        columnWidth: 0,
      }
    });
    // bind filter button click
    $('ul.filter-2').on('click', 'li', function () {
      var filterValueTwo = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValueTwo = filterFns[filterValueTwo] || filterValueTwo;
      $gridTwo.isotope({
        filter: filterValueTwo
      });
    });
    // change is-checked class on buttons
    $('.filter-2').each(function (i, buttonGroup) {
      var $buttonGroupTwo = $(buttonGroup);
      $buttonGroupTwo.on('click', 'li', function () {
        $buttonGroupTwo.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  $(document).ready(function () {
    $('.select-bar').niceSelect();
    // PoPuP 
    $('.popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      disableOn: 300
    });
    $("body").each(function () {
      $(this).find(".img-pop").magnificPopup({
        type: "image",
        gallery: {
          enabled: true
        }
      });
    });
    // aos js active
    new WOW().init()
    //Faq
    $('.faq-wrapper .faq-title').on('click', function (e) {
      var element = $(this).parent('.faq-item');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq-content').removeClass('open');
        element.find('.faq-content').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('.faq-content').slideDown(300, "swing");
        element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
        element.siblings('.faq-item').removeClass('open');
        element.siblings('.faq-item').find('.faq-title').removeClass('open');
        element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
      }
    });
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    $('.ellepsis-bar').on('click', function (e) {
      var element = $('.header-top');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.slideUp(300, "swing");
        $('.overlayTwo').removeClass('active');
      } else {
        element.addClass('open');
        element.slideDown(300, "swing");
        $('.overlayTwo').addClass('active');
      }
    });
    // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    //Header Bar
    $('.header-bar').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu').toggleClass('active');
    })
    $('.search-button').on('click', function () {
      $('.header-form').addClass('active');
    })
    $('.header-form .bg-lay').on('click', function () {
      $('.header-form').removeClass('active');
    })
    //Cart Button
    $('.cart-button, .side-sidebar-close-btn').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.cart-sidebar-area').toggleClass('active');
    })
    $('.remove-cart').on('click', function (e) {
      e.preventDefault();
      $(this).parent().parent().hide(300);
    });
    //Header Bar
    $('.overlay').on('click', function () {
      $(this).removeClass('active');
      $('.header-bar').removeClass('active');
      $('.menu').removeClass('active');
      $('.cart-sidebar-area').removeClass('active');
    })
    //Header Bar
    $('.overlayTwo').on('click', function () {
      $(this).removeClass('active');
      $('.header-top').slideUp(300, "swing");
    })
    //Header
    var fixed_top = $("header");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        fixed_top.addClass("header-fixed fadeInUp");
      } else {
        fixed_top.removeClass("header-fixed fadeInUp");
      }
    });
    //Odometer
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
    //Tab Section
    // $('.tab ul.tab-menu').addClass('active').find('> li:eq(0)').addClass('active');
    $('.tab ul.tab-menu li').on('click', function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('li').siblings('li').removeClass('active');
      $(this).closest('li').addClass('active');
      tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').slideUp(600);
      tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').slideDown(600);
      g.preventDefault();
    });

    $('.sponsor-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
    $('.post-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    });
    $('.post-next').on('click', function (e) {
      $('.post-slider').slick('slickNext');
    });
    $('.post-prev').on('click', function (e) {
      $('.post-slider').slick('slickPrev');
    });
    $('.causes-slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 5,
      arrows: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $('.causes-next').on('click', function (e) {
      $('.causes-slider').slick('slickNext');
    });
    $('.causes-prev').on('click', function (e) {
      $('.causes-slider').slick('slickPrev');
    });
    // clients slider
    $('.clients-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        },
        
      ]
    });
    $('.clients-next').on('click', function (e) {
      $('.clients-slider').slick('slickNext');
    });
    $('.clients-prev').on('click', function (e) {
      $('.clients-slider').slick('slickPrev');
    });

    $('.clients-slider2').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
    });

    // shop cart + - start here
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });

    // product view mode change js
    $('.product-view-mode').on('click', 'a', function (e) {
      e.preventDefault();
      var shopProductWrap = $('.shop-product-wrap');
      var viewMode = $(this).data('target');
      $('.product-view-mode a').removeClass('active');
      $(this).addClass('active');
      shopProductWrap.removeClass('grid list').addClass(viewMode);
    });

    // model option start here
    $('.view-modal').on('click', function () {
      $('.modal').addClass('show');
    });
    $('.close').on('click', function () {
      $('.modal').removeClass('show');
    });
    //Slick Slider
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      asNavFor: '.slider-nav',
      //  autoplay: 5000,
      adaptiveHeight: true
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });

    //Review Tabs
    $('ul.review-nav').on('click', 'li', function (e) {
      e.preventDefault();
      var reviewContent = $('.review-content');
      var viewRev = $(this).data('target');
      $('ul.review-nav li').removeClass('active');
      $(this).addClass('active');
      reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
    });
  });


  // campaign bar start here
  $(function () {
    $('.campaign').each(function () {
      $(this).find('.campaign-bar').animate({
        width: $(this).attr('data-percent')
      }, 6000);
    });
  });










  //Campaign Single
  $(function () {
    $('.donate-amount ul.amount li').on('click', function () {
      var active = $('.donate-amount ul.amount li.active');
      active.removeClass('active');
      $(this).addClass('active');
    });
  });


  //skill bar 
  window.addEventListener('DOMContentLoaded', function () {
    const circle = new CircularProgressBar('pie');

    setInterval(() => {
      const options = {
        percent: Math.floor((Math.random() * 100) + 1)
      }
      circle.animationTo(options);
    }, 2000);
  });




  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
      var clockdiv = document.getElementsByClassName("eventdate");
      var countDownDate = new Array();
      for (var i = 0; i < clockdiv.length; i++) {
        countDownDate[i] = new Array();
        countDownDate[i]['el'] = clockdiv[i];
        countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
        countDownDate[i]['days'] = 0;
        countDownDate[i]['hours'] = 0;
        countDownDate[i]['seconds'] = 0;
        countDownDate[i]['minutes'] = 0;
      }

      var countdownfunction = setInterval(function () {
        for (var i = 0; i < countDownDate.length; i++) {
          var now = new Date().getTime();
          var distance = countDownDate[i]['time'] - now;
          countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
          countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

          if (distance < 0) {
            countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
            countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
            countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
            countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
          } else {
            countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
            countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
            countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
            countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
          }
        }
      }, 1000);
    }
  });


  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    document.querySelectorAll(".bs-item").forEach(function (move) {
      var moving_value = move.getAttribute("data-value");

      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }

})(jQuery);
