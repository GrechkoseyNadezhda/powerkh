import heroHBS from '../../../templates/hero.hbs';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import {
  heroPrefabrication,
  howPrefabrication,
  servicesPrefabrication,
  contactUsPrefabrication,
  addValuePrefabrication,
} from './prefabrication-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.hero, heroHBS, heroPrefabrication);
useTemplate(refs.howWeWork, howWeWorkHBS, howPrefabrication);
useTemplate(refs.services, servicesHBS, servicesPrefabrication);
useTemplate(
  refs.featuresForProjects,
  featuresForProjectsHBS,
  addValuePrefabrication
);
useTemplate(refs.contactUs, contactUsHBS, contactUsPrefabrication);
