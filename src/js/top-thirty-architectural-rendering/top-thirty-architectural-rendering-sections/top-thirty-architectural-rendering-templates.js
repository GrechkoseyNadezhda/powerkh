import heroFourHBS from '../../../templates/hero-part-four.hbs';
import shareHBS from '../../../templates/share.hbs';
import contentsHBS from '../../../templates/contents.hbs';
import authorHBS from '../../../templates/author.hbs';
import whatProblemsHBS from '../../../templates/whatProblems.hbs';
import architectRendServHBS from '../../../templates/architecturalRenderingServices.hbs';

import {
  heroFourData,
  contentsData,
  shareData,
  whatProblemsData,
  architectRendServData,
} from './top-thirty-architectural-rendering-data';

import { refs, refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { fetchDatabaseAuthor } from '../../common/fetchDatabaseAuthor';
import { onSubscribeSubmit } from '../../components/contactUsModal/contactUsModal';

refsCase.subscribeForm.addEventListener('submit', onSubscribeSubmit);

useTemplate(refs.heroPartFour, heroFourHBS, heroFourData);
useTemplate(refs.share, shareHBS, shareData);
useTemplate(refs.contents, contentsHBS, contentsData);
useTemplate(refs.whatProblems, whatProblemsHBS, whatProblemsData);
useTemplate(
  refs.architectRendServ,
  architectRendServHBS,
  architectRendServData
);

fetchDatabaseAuthor(
  '/authors/TetianaRapina.json',
  refs.author,
  '',
  authorHBS,

  ''
);
