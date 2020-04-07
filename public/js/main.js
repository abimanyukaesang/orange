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



  //modal video
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    // $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    $("#video").attr('src', $videoSrc + "");
  })

  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })



  //start fancybox
  // Init fancyBox
  $().fancybox({
    selector: '.slick-slide:not(.slick-cloned)',
    hash: false
  });

  // Init Slick
  $(".main-slider").slick({
    slidesToShow: 3,
    // slidesToScroll: 3,
    // infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : true,
        }
      }
    ]
  });

  //end fancybox




});