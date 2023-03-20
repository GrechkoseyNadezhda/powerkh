import Swiper, { Navigation, Pagination } from 'swiper';
import { sliderPicture } from './bim-coordination-data';
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
console.log(sliderPicture);
const slider = document.querySelector('.swiper-wrapper');
const sliderHTML = `<div class="swiper-slide"><img src=${sliderPicture.img} /></div>`;
slider.insertAdjacentHTML('beforeend', sliderHTML);
