import Swiper, { Navigation, Pagination } from 'swiper';

import hero3HBS from '../../../templates/heroDesignText.hbs';
import sliderHBS from '../../../templates/heroDesignSlider.hbs';
import { useTemplate } from '../../common/use-template';
import {
  textHeroSuspended,
  sliderPictures,
} from '../../suspended-case/suspended-case-section/suspended-case-data';
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

const hero3 = document.querySelector('.case-description__text-block');
const sliderSwapper = document.querySelector('.swiper-wrapper');

useTemplate(hero3, hero3HBS, textHeroSuspended);
useTemplate(sliderSwapper, sliderHBS, sliderPictures);
