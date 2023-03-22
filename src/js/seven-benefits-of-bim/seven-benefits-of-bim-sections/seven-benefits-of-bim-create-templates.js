import heroPartFourHBS from '../../../templates/hero-part-four.hbs';
import shareHBS from '../../../templates/share.hbs';
import contentsHBS from '../../../templates/contents.hbs';
import contentsInformationHBS from '../../../templates/contentsInformation.hbs';
import whatProblemsHBS from '../../../templates/whatProblems.hbs';

import {
  heroPartFourData,
  shareBim,
  contentsBim,
  contentsInformBim,
  whatProblemsBim,
} from './seven-benefits-of-bim-data';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { makeBoldFirst } from '../../common/make-bold-first';

useTemplate(refs.heroPartFour, heroPartFourHBS, heroPartFourData);
useTemplate(refs.share, shareHBS, shareBim);
useTemplate(refs.contents, contentsHBS, contentsBim);
useTemplate(refs.contentsInform, contentsInformationHBS, contentsInformBim);
useTemplate(refs.whatProblems, whatProblemsHBS, whatProblemsBim);
makeBoldFirst('.whereToFind__text__list');
