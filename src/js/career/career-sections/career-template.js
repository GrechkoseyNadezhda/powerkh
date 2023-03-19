import heroHBS from '../../../templates/hero.hbs';
import { heroCareer } from './career-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.hero, heroHBS, heroCareer);
