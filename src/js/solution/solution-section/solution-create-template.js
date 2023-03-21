import sectionHBS from '../../../templates/solution.hbs';
import { useTemplate } from '../../common/use-template';
import { solutionObj } from './solution-data';

console.log(sectionHBS);
console.log(useTemplate);
console.log(solutionObj);

const solutionEl = document.querySelector('.test-solution');
console.log(solutionEl);

useTemplate(solutionEl, sectionHBS, solutionObj);
