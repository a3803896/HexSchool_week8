$(document).ready(() => {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  $(".nav-link").click(function (e) {
    e.preventDefault();
  });

});