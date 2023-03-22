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
import { toggleFaq } from '../../common/toggle-faq';
const ENDPOINT_COORDINATION = '/faq/bimCoordination.json';

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

toggleFaq();
