// import Swiper, { Navigation, Pagination } from 'swiper';
import impactHBS from '../../../templates/impactOnBusiness.hbs';
import herotextHBS from '../../../templates/heroDescriptionText.hbs';
import processHBS from '../../../templates/processTemplate.hbs';
import solutionHBS from '../../../templates/solution.hbs';
import sliderHBS from '../../../templates/heroDescritionSlider.hbs';
import { useTemplate } from '../../common/use-template';
import {
  textHeroSuspended,
  sliderPicturesSuspended,
  processSuspended,
  impactSuspended,
  solutionSuspended,
} from '../../suspended-case/suspended-case-section/suspended-case-data';
import { refsCase } from '../../common/refs-services';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

useTemplate(refsCase.heroTextBlock, herotextHBS, textHeroSuspended);
useTemplate(refsCase.heroSlider, sliderHBS, sliderPicturesSuspended);
useTemplate(refsCase.process, processHBS, processSuspended);
useTemplate(refsCase.solution, solutionHBS, solutionSuspended);
useTemplate(refsCase.impactOnBusiness, impactHBS, impactSuspended);

const lightboxImg = new SimpleLightbox('.solution__img', {
  sourceAttr: 'data-l-size',
  scrollZoom: false,
  disableScroll: false,
  close: false,
});
document
  .querySelector('.solution__img-container')
  .addEventListener('click', e => {
    lightboxImg.open();
  });
const ligthboxGif = new SimpleLightbox('.solution__gif', {
  sourceAttr: 'src',
  scrollZoom: false,
  disableScroll: true,
  close: false,
});
document
  .querySelector('.solution__gif-container')
  .addEventListener('click', e => {
    ligthboxGif.open();
  });
