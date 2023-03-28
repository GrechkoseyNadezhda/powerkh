import heroHBS from '../../../templates/hero.hbs';
import { heroCareer } from './career-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.hero, heroHBS, heroCareer);

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
