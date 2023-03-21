// import Swiper, { Navigation, Pagination } from 'swiper';
import impactHBS from '../../../templates/impactOnBusiness.hbs';
import herotextHBS from '../../../templates/heroDesignText.hbs';
import sliderHBS from '../../../templates/heroDesignSlider.hbs';
import { useTemplate } from '../../common/use-template';
import {
  textHeroSuspended,
  sliderPictures,
  impactSuspended,
} from '../../suspended-case/suspended-case-section/suspended-case-data';
import { refsCase } from '../../common/refs-services';
// import { swiper } from '../../components/CaseHeroSlider';
// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination],

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true,
//   },
// });

useTemplate(refsCase.heroTextBlock, herotextHBS, textHeroSuspended);
useTemplate(refsCase.heroSlider, sliderHBS, sliderPictures);
useTemplate(refsCase.impactOnBusiness, impactHBS, impactSuspended);
