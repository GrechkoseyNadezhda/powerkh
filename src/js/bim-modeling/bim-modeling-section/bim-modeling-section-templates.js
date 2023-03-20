import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import {
  heroCoordination,
  howCoordination,
  servicesCoordination,
  addValueCoordination,
  contactUsCoordination,
} from './bim-modeling-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.hero, heroHBS, heroCoordination);
useTemplate(refs.howWeWork, howWeWorkHBS, howCoordination);
useTemplate(refs.services, servicesHBS, servicesCoordination);
useTemplate(
  refs.featuresForProjects,
  featuresForProjectsHBS,
  addValueCoordination
);
useTemplate(refs.contactUs, contactUsHBS, contactUsCoordination);