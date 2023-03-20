import { advantagesObj } from './bim-content-data';

import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.featuresForProjects, featuresForProjectsHBS, advantagesObj);

console.log('hello creation');
