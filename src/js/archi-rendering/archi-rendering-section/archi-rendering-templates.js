import heroTemplate from '../../../templates/hero.hbs';
import faqTemplate from '../../../templates/faq.hbs';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { toggleFaq } from '../../common/toggle-faq';
import { archiRenderingFaq, archiRenderingHero } from './archi-rendering-data';
useTemplate(refs.hero, heroTemplate, archiRenderingHero);
useTemplate(refs.faq, faqTemplate, archiRenderingFaq);
toggleFaq();
