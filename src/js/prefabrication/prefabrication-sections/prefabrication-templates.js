import heroHBS from '../../../templates/hero.hbs';
import briefDescriptHBS from '../../../templates/herBIMAndVDCServices.hbs';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import faqHBS from '../../../templates/faq.hbs';
import sliderHBS from '../../../templates/ourProjectsSlider.hbs';
import {
  heroPrefabrication,
  briefDescriptPrefabrication,
  howPrefabrication,
  servicesPrefabrication,
  contactUsPrefabrication,
  addValuePrefabrication,
  projectPrefabrication,
} from './prefabrication-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { createFAQsection } from '../../common/createFaqSection';

const ENDPOINT_PREFABRICATION= '/faq/preFab.json';

useTemplate(refs.hero, heroHBS, heroPrefabrication);
useTemplate(refs.herBIMAndVDC, briefDescriptHBS,  briefDescriptPrefabrication);
useTemplate(refs.howWeWork, howWeWorkHBS, howPrefabrication);
useTemplate(refs.services, servicesHBS, servicesPrefabrication);
useTemplate(
  refs.featuresForProjects,
  featuresForProjectsHBS,
  addValuePrefabrication
);

useTemplate(refs.slider, sliderHBS, projectPrefabrication);
useTemplate(refs.contactUs, contactUsHBS, contactUsPrefabrication);
createFAQsection(ENDPOINT_PREFABRICATION, refs.faq, faqHBS);

