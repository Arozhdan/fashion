$(function () {
  // nav-bar
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var $nav = $('.nav');
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $nav.fadeIn();

    } else {
      $nav.fadeOut();
    }
    prevScrollpos = currentScrollPos;

    var $win = $(window);
    var winH = $win.height(); // Get the window height.

    $win.on("scroll", function () {
      if ($(this).scrollTop() > winH) {
        $nav.addClass("highlight");
      } else {
        $nav.removeClass("highlight");
      }
    }).on("resize", function () { // If the user resizes the window
      winH = $(this).height(); // you'll need the new height value
    });
  }
     
  //

  //menu
  var $right = $('.menu-right')
  $('.menu-home').mouseover(function () {
    $right.css('background-image', "url('../../img/home/header-bg.png')");
  })
  $('.menu-shop').mouseover(function () {
    $right.css('background-image', "url('../../img/menu/shop.png')");
  })
  $('.menu-video').mouseover(function () {
    $right.css('background-image', "url('../../img/menu/video.png')");
  })
  $('.menu-look').mouseover(function () {
    $right.css('background-image', "url('../../img/menu/look.png')");
  })
  $('.menu-about').mouseover(function () {
    $right.css('background-image', "url('../../img/menu/about.png')");
  })
  $('.menu-contact').mouseover(function () {
    $right.css('background-image', "url('../../img/menu/contact.png')");
  })
  var $menu = $('.menu')
  $('.nav-burger').on('click', function () {
    $menu.animate({
      'left': '0px'
    }, 500)
    setTimeout(function () {
      $('.page').css('overflow', 'hidden');
    }, 490);

  })

  $('.menu-close').on('click', function () {
    $('.page').css('overflow', 'visible')

    $menu.animate({
      'left': '15000px'
    }, 500)
  })
  //

  //cart display
  var $cartOver = $('.cart-overlay')
  $('.product-item-actions-btn').on('click', function () {
    $cartOver.animate({
      'right': '0px'
    }, 500)
  })
  $('.cart-close-btn').on('click', function () {
    $cartOver.animate({
      'right': '-15000px'
    }, 900)
  })

  // popup item
  $('.cart-item-right-second-btn').on('click', function (event) {
    setTimeout(function () {
      $('.page').css('overflow', 'hidden');
    }, 490);
    $('.item-popup').animate({
      'left': '0px'
    }, 500)
  })
  $('.product-item-actions').on('click', function (event) {
    let target = event.target
    if (target.classList.value != 'product-item-actions-btn') {

      setTimeout(function () {
        $('.page').css('overflow', 'hidden');
      }, 490);
      $('.item-popup').animate({
        'left': '0px'
      }, 500)
    }
  })

  $('.item-popup-close').on('click', function () {
    $('.page').css('overflow', 'visible')
    $('.item-popup').animate({
      'left': '15505px'
    }, 500)
  })
  //

  //
  $('[data-item-change-quantity]').on('click', function () {
    let target = $('.item-popup-btn-amount > span')
    let n = target.text()
    let p = $('.item-popup-price>span')
    if ($(this).text() == '+') {
      n++
      target.text(n)
      p.text(40 * n + '.00')
    } else {
      if (n > 0) {
        --n
        target.text(n)
        p.text(40 * n + '.00')
      }

    }
  });
  //
  $('.nav-cart-btn').on('click', function () {
    $('.cartfull').animate({
      'left': '0px'
    }, 500)
  });
  $('.fullcart-close-btn').on('click', function () {
    $('.cartfull').animate({
      'left': '-15505px'
    }, 500)
  });
});