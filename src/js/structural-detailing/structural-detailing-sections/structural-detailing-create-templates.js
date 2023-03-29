import heroHBS from '../../../templates/hero.hbs';
import briefDescriptHBS from '../../../templates/herBIMAndVDCServices.hbs';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import faqHBS from '../../../templates/faq.hbs';
import sliderHBS from '../../../templates/ourProjectsSlider.hbs';
import ourProjectsSliderHBS from '../../../templates/ourProjectsSlider.hbs';
import {
  heroStructuralDetailing,
  briefDescriptStructuralDetailing,
  howStructuralDetailing,
  servicesStructuralDetailing,
  contactUsStructuralDetailing,
  addValueStructuralDetailing,
  projectStructuralDetailing,
} from './structural-detailing-data';
import { refs, refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { createFAQsection } from '../../common/createFaqSection';
import { toggleFaq } from '../../common/toggle-faq';

const ENDPOINT_STRUCTDETAILING = '/faq/structuralDetailing.json';

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.hero, heroHBS, heroStructuralDetailing);
  useTemplate(
    refs.herBIMAndVDC,
    briefDescriptHBS,
    briefDescriptStructuralDetailing
  );
  useTemplate(refs.howWeWork, howWeWorkHBS, howStructuralDetailing);
  useTemplate(refs.services, servicesHBS, servicesStructuralDetailing);
  useTemplate(
    refs.featuresForProjects,
    featuresForProjectsHBS,
    addValueStructuralDetailing
  );
  useTemplate(refs.contactUs, contactUsHBS, contactUsStructuralDetailing);

  useTemplate(refs.slider, sliderHBS, projectStructuralDetailing);
  const hidden = document.querySelector('.hidden');
  const bimTextList = document.querySelector('.BIM__text-list');

  hidden.style.display = 'none';
  bimTextList.style.marginBottom = '0px';

  createFAQsection(ENDPOINT_STRUCTDETAILING, refs.faq, faqHBS);

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
