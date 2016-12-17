$(function() {
  $(".mobile-menu-btn").on('click', function() {
    $("body").toggleClass('js-navbar-open');
  });

  var num = 725;

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $('.sticky-nav-wrapper').addClass('fixed');
    } else {
      $('.sticky-nav-wrapper').removeClass('fixed');
    }
  });
});
