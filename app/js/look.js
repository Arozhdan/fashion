$(function () {
  $('.look-slide-container').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 228000,
  });
  $('.slick-slide').addClass('look-slick-slide')
  $('.slick-next').text('>').addClass(' look-arrow look-next')
  $('.slick-prev').text('<').addClass(' look-arrow look-prev')

  $('.slick-current').addClass('look-current')
  $('.look-slide-container').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.look-slick-slide').removeClass('look-current')
    if ($('.look-slick-slide').hasClass('slick-current')) {
      $('.slick-current').addClass('look-current')
    }
  });
});