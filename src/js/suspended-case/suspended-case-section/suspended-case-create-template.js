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
import { refs, refsCase } from '../../common/refs-services';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refsCase.heroTextBlock, herotextHBS, textHeroSuspended);
  useTemplate(refsCase.heroSlider, sliderHBS, sliderPicturesSuspended);
  useTemplate(refsCase.process, processHBS, processSuspended);
  useTemplate(refsCase.solution, solutionHBS, solutionSuspended);
  useTemplate(refsCase.impactOnBusiness, impactHBS, impactSuspended);

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}

const lightboxImg = new SimpleLightbox('.case-picture', {
  sourceAttr: 'data-l-size',
  scrollZoom: false,
  disableScroll: false,
  close: false,
});
document.querySelector('.case-picture').addEventListener('click', e => {
  lightboxImg.open();
});
