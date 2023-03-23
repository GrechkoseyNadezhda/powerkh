// import Swiper, { Navigation, Pagination } from 'swiper';
import impactHBS from '../../../templates/impactOnBusiness.hbs';
import herotextHBS from '../../../templates/heroDesignText.hbs';
import processHBS from '../../../templates/processTemplate.hbs';
import solutionHBS from '../../../templates/solution.hbs';
import sliderHBS from '../../../templates/heroDesignSlider.hbs';
import { useTemplate } from '../../common/use-template';
import {
  textHeroSuspended,
  sliderPicturesSuspended,
  processSuspended,
  impactSuspended,
  solutionSuspended,
} from '../../suspended-case/suspended-case-section/suspended-case-data';
import { refsCase } from '../../common/refs-services';

useTemplate(refsCase.heroTextBlock, herotextHBS, textHeroSuspended);
useTemplate(refsCase.heroSlider, sliderHBS, sliderPicturesSuspended);
useTemplate(refsCase.process, processHBS, processSuspended);
useTemplate(refsCase.solution, solutionHBS, solutionSuspended);
useTemplate(refsCase.impactOnBusiness, impactHBS, impactSuspended);
