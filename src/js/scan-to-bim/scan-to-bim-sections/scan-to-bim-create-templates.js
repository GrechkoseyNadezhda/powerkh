import heroHBS from '../../../templates/hero.hbs';
import herBIMAndVDCHBS from '../../../templates/HerBIMAndVDCServices.hbs';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import shareHBS from '../../../templates/share.hbs';
import contentsHBS from '../../../templates/contents.hbs';
import contentsInformationHBS from '../../../templates/contentsInformation.hbs';
import whatProblemsHBS from '../../../templates/whatProblems.hbs';
import { fetchDatabaseAuthor } from '../../common/fetchDatabaseAuthor';

import {
  heroScanToBIM,
  herBIMAndVDCScanToBIM,
  howWeWorkScanToBIM,
  servicesScanToBIM,
  advantagesOfScanYoBIM,
  contactUsScanToBIM,
  shareBim,
  contentsBim,
  contentsInformBim,
  whatProblemsBim,
} from './scan-to-bim-data';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.hero, heroHBS, heroScanToBIM);
// useTemplate(refs.herBIMAndVDC, herBIMAndVDCHBS, herBIMAndVDCScanToBIM);
// useTemplate(refs.howWeWork, howWeWorkHBS, howWeWorkScanToBIM);
// useTemplate(refs.services, servicesHBS, servicesScanToBIM);
// useTemplate(refs.contactUs, contactUsHBS, contactUsScanToBIM);
useTemplate(refs.share, shareHBS, shareBim);
useTemplate(refs.contents, contentsHBS, contentsBim);
useTemplate(refs.contentsInform, contentsInformationHBS, contentsInformBim);
useTemplate(refs.whatProblems, whatProblemsHBS, whatProblemsBim);

// fetchDatabaseAuthor('/authors/KostiaRapina.json');
