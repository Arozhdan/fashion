$(function () {
  $('.shop-vintage-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    infinite: true,
    autoplaySpeed: 4500,
  });
  $('.slick-slide').addClass('shop-slick-slide')


  $('.slick-next').text(' ').addClass(' shop-arrow shop-next')
  $('.slick-prev').text('<').addClass(' shop-arrow shop-prev').css('display', 'none')

  $('.slick-current').addClass('shop-current')
  $('.shop-vintage-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.shop-slick-slide').removeClass('shop-current')
    if ($('.shop-slick-slide').hasClass('slick-current')) {
      $('.slick-current').addClass('shop-current')
    }
  });
});