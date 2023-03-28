import processTemplateHBS from '../../../templates/processTemplate.hbs';
import solutionTemplateHBS from '../../../templates/solution.hbs';
import impactProcessTemplateHBS from '../../../templates/impactOnBusiness.hbs';
import herotextHBS from '../../../templates/heroDescriptionText.hbs';
import sliderHBS from '../../../templates/heroDescritionSlider.hbs';

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
  useTemplate(refsCase.heroTextBlock, herotextHBS, textHeroFloorAssembly);
  useTemplate(refsCase.heroSlider, sliderHBS, sliderPicturesAssembly);

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
