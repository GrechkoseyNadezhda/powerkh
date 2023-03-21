import heroHBS from '../../../templates/hero.hbs';
import herBIMAndVDCHBS from '../../../templates/herBIMAndVDCServices.hbs';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import outsourceProjectsHBS from '../../../templates/outsourceProjects.hbs';
import faqHBS from '../../../templates/faq.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';

import { fetchDatabaseAuthor } from '../../common/fetchDatabaseAuthor';
import { fetchDatabaseFAQ } from '../../common/fetchDatabaseAuthor';
import {
  heroScanToBIM,
  herBIMAndVDCScanToBIM,
  howWeWorkScanToBIM,
  servicesScanToBIM,
  advantagesOfScanYoBIM,
  contactUsScanToBIM,
} from './scan-to-bim-data';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.hero, heroHBS, heroScanToBIM);
useTemplate(refs.herBIMAndVDC, herBIMAndVDCHBS, herBIMAndVDCScanToBIM);
useTemplate(refs.howWeWork, howWeWorkHBS, howWeWorkScanToBIM);
useTemplate(refs.services, servicesHBS, servicesScanToBIM);
useTemplate(
  refs.featuresForProjects,
  outsourceProjectsHBS,
  advantagesOfScanYoBIM
);

useTemplate(refs.contactUs, contactUsHBS, contactUsScanToBIM);

// fetchDatabaseAuthor('/authors/KostiaRapina.json');
// fetchDatabaseFAQ('/faq/scanToBim.json');
