import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 1500,
  },
  speed: 500,
});
