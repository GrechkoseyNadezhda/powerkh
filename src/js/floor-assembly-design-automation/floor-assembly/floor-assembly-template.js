// import Swiper, { Navigation, Pagination } from 'swiper';
import processTemplateHBS from '../../../templates/processTemplate.hbs';
import solutionTemplateHBS from '../../../templates/solution.hbs';
import impactProcessTemplateHBS from '../../../templates/impactOnBusiness.hbs';
import herotextHBS from '../../../templates/heroDesignText.hbs';
import sliderHBS from '../../../templates/heroDesignSlider.hbs';

import {
  processTemplate,
  processSolution,
  processImpact,
  textHeroFloorAssembly,
  sliderPicturesAssembly,
} from '../../floor-assembly-design-automation/floor-assembly/floor-assembly-data';
import { refs } from '../../common/refs-services';
import { refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
useTemplate(refs.process, processTemplateHBS, processTemplate);
useTemplate(refs.solution, solutionTemplateHBS, processSolution);
useTemplate(refsCase.impactOnBusiness, impactProcessTemplateHBS, processImpact);

// const swiper = new Swiper('.swiper', {
//     modules: [Navigation, Pagination],

//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true,
//     },
//   });

useTemplate(refsCase.heroTextBlock, herotextHBS, textHeroFloorAssembly);
useTemplate(refsCase.heroSlider, sliderHBS, sliderPicturesAssembly);
