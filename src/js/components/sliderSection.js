import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$(function () {
  $('.section-projects__slider-item').slick({
    arrows: false,
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: true,
    swipe: true,
    touchMove: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});
