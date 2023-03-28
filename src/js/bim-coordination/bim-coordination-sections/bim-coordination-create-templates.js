import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import briefDescriptHBS from '../../../templates/herBIMAndVDCServices.hbs';
import faqHBS from '../../../templates/faq.hbs';
import sliderHBS from '../../../templates/ourProjectsSlider.hbs';
import {
  heroCoordination,
  briefDescriptCoordination,
  howCoordination,
  servicesCoordination,
  addValueCoordination,
  contactUsCoordination,
  projectCoordination,
} from './bim-coordination-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { createFAQsection } from '../../common/createFaqSection';
import { makeBoldFirst } from '../../common/make-bold-first';

const ENDPOINT_COORDINATION = '/faq/bimCoordination.json';

// const spinner = document.querySelector('.spinner-loading');
document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');

  document.body.classList.add('_lock');

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}

useTemplate(refs.hero, heroHBS, heroCoordination);
useTemplate(refs.herBIMAndVDC, briefDescriptHBS, briefDescriptCoordination);

const hidden = document.querySelector('.hidden');
const bimTextList = document.querySelector('.BIM__text-list');

hidden.style.display = 'none';
bimTextList.style.marginBottom = '0px';

useTemplate(refs.howWeWork, howWeWorkHBS, howCoordination);
useTemplate(refs.services, servicesHBS, servicesCoordination);
useTemplate(
  refs.featuresForProjects,
  featuresForProjectsHBS,
  addValueCoordination
);
useTemplate(refs.slider, sliderHBS, projectCoordination);
useTemplate(refs.contactUs, contactUsHBS, contactUsCoordination);

createFAQsection(ENDPOINT_COORDINATION, refs.faq, faqHBS);
makeBoldFirst('.bim-automation-services__item');
