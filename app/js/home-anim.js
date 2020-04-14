$(function () {
  $('.services-link').on('click', function (element) {
    element.preventDefault()
    $('html, body').animate({
      scrollTop: $(window).scrollTop() + $(window).height() + 100
    });
  })

  
});