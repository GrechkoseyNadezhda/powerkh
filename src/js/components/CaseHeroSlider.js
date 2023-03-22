import Swiper, { Navigation, Pagination } from 'swiper';
export const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
