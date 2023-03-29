import heroHBS from '../../../templates/hero.hbs';
import herBIMAndVDCHBS from '../../../templates/herBIMAndVDCServices.hbs';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import outsourceProjectsHBS from '../../../templates/outsourceProjects.hbs';
import faqHBS from '../../../templates/faq.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import sliderHBS from '../../../templates/ourProjectsSlider.hbs';

import { createFAQsection } from '../../common/createFaqSection';

import {
  heroScanToBIM,
  herBIMAndVDCScanToBIM,
  howWeWorkScanToBIM,
  servicesScanToBIM,
  advantagesOfScanYoBIM,
  contactUsScanToBIM,
  scanToBimSliderData,
} from './scan-to-bim-data';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.hero, heroHBS, heroScanToBIM);
  useTemplate(refs.herBIMAndVDC, herBIMAndVDCHBS, herBIMAndVDCScanToBIM);
  useTemplate(refs.howWeWork, howWeWorkHBS, howWeWorkScanToBIM);
  useTemplate(refs.services, servicesHBS, servicesScanToBIM);
  useTemplate(
    refs.featuresForProjects,
    outsourceProjectsHBS,
    advantagesOfScanYoBIM
  );
  useTemplate(refs.slider, sliderHBS, scanToBimSliderData);
  useTemplate(refs.contactUs, contactUsHBS, contactUsScanToBIM);

  createFAQsection('/faq/scanToBim.json', refs.faq, faqHBS);

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
