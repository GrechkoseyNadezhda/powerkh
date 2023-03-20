import heroTemplate from '../../../templates/hero.hbs';
import howWeWorkTemplate from '../../../templates/howWeWork.hbs';

import faqTemplate from '../../../templates/faq.hbs';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { toggleFaq } from '../../common/toggle-faq';
import {
  archiRenderingFaq,
  archiRenderingHero,
  howCreates,
} from './archi-rendering-data';

useTemplate(refs.hero, heroTemplate, archiRenderingHero);
useTemplate(refs.howWeWork, howWeWorkTemplate, howCreates);
useTemplate(refs.faq, faqTemplate, archiRenderingFaq);
toggleFaq();
