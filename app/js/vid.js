$(function () {

  vidSlide();
  $(window).resize(vidSlide());
  
});


function vidSlide() {
  if ($(window).width() > 623) {
    $('.video-collection-inner').slick({
      slidesToShow: 2,
      slidesToScroll: 1
    });
  } else {
    $('.video-collection-inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  $('.slick-next').text('>').addClass('vid-arrow vid-next')
  $('.slick-prev').text('<').addClass('vid-arrow vid-prev')
}