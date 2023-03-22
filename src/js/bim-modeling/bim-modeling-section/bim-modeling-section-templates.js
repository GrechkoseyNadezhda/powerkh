import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import faqTemplate from '../../../templates/faq.hbs';
import herBIMAndVDC from '../../../templates/herBIMAndVDCServices.hbs';
import {
  heroModeling,
  BIMservices,
  howModeling,
  servicesModeling,
  addValueModeling,
  contactUsModeling,
  BIMmodelingFaq
} from './bim-modeling-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { createFAQsection } from '../../common/createFaqSection';
import { toggleFaq } from '../../common/toggle-faq';

const ENDPOINT_COORDINATION = '/faq/bimModeling.json';

useTemplate(refs.hero, heroHBS, heroModeling);
useTemplate(refs.howWeWork, howWeWorkHBS, howModeling);
useTemplate(refs.services, servicesHBS, servicesModeling);
useTemplate(refs.herBIMAndVDC, herBIMAndVDC, BIMservices);
useTemplate(refs.featuresForProjects, featuresForProjectsHBS, addValueModeling);
// useTemplate(refs.faq, faqTemplate, BIMmodelingFaq);
useTemplate(refs.contactUs, contactUsHBS, contactUsModeling);

createFAQsection(ENDPOINT_COORDINATION, refs.faq, faqTemplate);
toggleFaq();