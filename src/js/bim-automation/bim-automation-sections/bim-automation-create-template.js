import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import briefDescriptHBS from '../../../templates/herBIMAndVDCServices.hbs';
import faqHBS from '../../../templates/faq.hbs';
import sliderHBS from '../../../templates/ourProjectsSlider.hbs';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import {
  heroAutomation,
  briefDescriptAutomation,
  howAutomation,
  architecAndStruct,
  advantagesAutomation,
  contactUsAutomation,
  projectAutomation,
} from './bim-automation-data';
import { createFAQsection } from '../../common/createFaqSection';

const ENDPOINT_COORDINATION = '/faq/bimAutomation.json';
document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.hero, heroHBS, heroAutomation);
  useTemplate(refs.herBIMAndVDC, briefDescriptHBS, briefDescriptAutomation);
  const hidden = document.querySelector('.hidden');
  const bimTextList = document.querySelector('.BIM__text-list');

  hidden.style.display = 'none';
  bimTextList.style.marginBottom = '0px';
  useTemplate(refs.howWeWork, howWeWorkHBS, howAutomation);
  useTemplate(refs.services, servicesHBS, architecAndStruct);
  useTemplate(
    refs.featuresForProjects,
    featuresForProjectsHBS,
    advantagesAutomation
  );
  useTemplate(refs.slider, sliderHBS, projectAutomation);
  useTemplate(refs.contactUs, contactUsHBS, contactUsAutomation);

  createFAQsection(ENDPOINT_COORDINATION, refs.faq, faqHBS);
  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
