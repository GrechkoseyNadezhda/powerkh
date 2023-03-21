import { heroContentObj } from './bim-content-data';
import { advantagesObj } from './bim-content-data';
import { contentCreationObj } from './bim-content-data';

import heroHBS from '../../../templates/hero.hbs';
import contentCreationHBS from '../../../templates/herBIMAndVDCServices.hbs';
import advantagesHBS from '../../../templates/outsourceProjects.hbs';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.hero, heroHBS, heroContentObj);
// console.log(refs.herBIMAndVDC);
// console.log(contentCreationObj);
// console.log(contentCreationObj);

useTemplate(refs.herBIMAndVDC, contentCreationHBS, contentCreationObj);
useTemplate(refs.featuresForProjects, advantagesHBS, advantagesObj);
