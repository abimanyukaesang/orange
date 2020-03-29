$(document).ready(function () {

  // burger menu close
  $(".navbar-nav li a").click(function (event) {
    $(".navbar-collapse").collapse('hide');
  });


  //Create classOnScroll function
  function classOnScroll() {
    let $box = $('.navbar'),
      $scroll = $(window).scrollTop();

    if ($scroll > 100) {
      if (!$box.hasClass('solid in-down'))
        $box.addClass('solid in-down');
    }
    else
      $box.removeClass('solid in-down');

  }


  //about carouse
  $('#about-us').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      // "<span className='left-arrow'></span>",
      // "<span className='right-arrow'></span>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });



  //Run on first site run
  classOnScroll();

  //Run on scroll and resize
  $(window).on('scroll resize', classOnScroll);




  $(".fancybox").fancybox();

  
});