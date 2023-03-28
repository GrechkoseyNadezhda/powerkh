import processTemplateHBS from '../../templates/processTemplate.hbs';
import solutionTemplateHBS from '../../templates/solution.hbs';
import impactProcessTemplateHBS from '../../templates/impactOnBusiness.hbs';
import herotextHBS from '../../templates/heroDescriptionText.hbs';
import sliderHBS from '../../templates/heroDescritionSlider.hbs';

import {
  processTemplate,
  processSolution,
  processImpact,
  textHeroFormworkDesign,
  sliderPicturesFormwork,
} from './formwork-design-automation-data';
import { refs } from '../common/refs-services';
import { refsCase } from '../common/refs-services';
import { useTemplate } from '../common/use-template';

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.process, processTemplateHBS, processTemplate);
  useTemplate(refs.solution, solutionTemplateHBS, processSolution);
  useTemplate(
    refsCase.impactOnBusiness,
    impactProcessTemplateHBS,
    processImpact
  );
  useTemplate(refsCase.heroTextBlock, herotextHBS, textHeroFormworkDesign);
  useTemplate(refsCase.heroSlider, sliderHBS, sliderPicturesFormwork);

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
