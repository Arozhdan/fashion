$(function () {

  $('.video-collection-inner').slick({
    slidesToShow:2,
    slidesToScroll: 1
  });
  $('.slick-next').text('>').addClass('vid-arrow vid-next')
  $('.slick-prev').text('<').addClass('vid-arrow vid-prev')

});