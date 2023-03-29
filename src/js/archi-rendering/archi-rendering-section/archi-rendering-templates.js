import heroTemplate from '../../../templates/hero.hbs';
import herBIMAndVDC from '../../../templates/herBIMAndVDCServices.hbs';
import howWeWorkTemplate from '../../../templates/howWeWork.hbs';
import servicesTemplate from '../../../templates/architecAndStructBim.hbs';
import sliderTemplate from '../../../templates/ourProjectsSlider.hbs';
import contactUsTemplate from '../../../templates/contactUs.hbs';
import faqTemplate from '../../../templates/faq.hbs';

import { refs, refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

import {
  archiRenderingHero,
  BIMservices,
  howCreates,
  whatWeOffer,
  archiRenderingContact,
  projectSamples,
  renderServices,
} from './archi-rendering-data';
import { makeBoldFirst } from '../../common/make-bold-first';
import { createFAQsection } from '../../common/createFaqSection';

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.hero, heroTemplate, archiRenderingHero);
  useTemplate(refs.herBIMAndVDC, herBIMAndVDC, BIMservices);
  useTemplate(refsCase.renderSlider, sliderTemplate, renderServices);
  useTemplate(refs.howWeWork, howWeWorkTemplate, howCreates);
  useTemplate(refs.services, servicesTemplate, whatWeOffer);
  useTemplate(refsCase.sampleSlider, sliderTemplate, projectSamples);
  useTemplate(refs.contactUs, contactUsTemplate, archiRenderingContact);

  createFAQsection('/faq/architecturalRendering.json', refs.faq, faqTemplate);
  makeBoldFirst('.bim-automation-services__item');
  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
