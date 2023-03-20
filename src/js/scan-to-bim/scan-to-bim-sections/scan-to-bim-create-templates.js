import heroHBS from '../../../templates/hero.hbs';
import herBIMAndVDCHBS from '../../../templates/HerBIMAndVDCServices.hbs';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';

import { fetchDatabaseAuthor } from '../../common/fetchDatabaseAuthor';

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
useTemplate(refs.contactUs, contactUsHBS, contactUsScanToBIM);

// fetchDatabaseAuthor('/authors/KostiaRapina.json');
