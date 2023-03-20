import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
