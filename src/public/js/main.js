console.log('main.js initialization');
// navbar responsiveness
$(document).ready(() => {
  $('.navbar-burger').click(() => {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });
  if ($(window).width() <= 510) {
    $('#header').removeClass('is-size-1');
    $('#header').addClass('is-size-3');
    $('.subheader').removeClass('is-size-2');
    $('.subheader').addClass('is-size-4');
  }
});
