import heroTemplate from '../../../templates/hero.hbs';
import herBIMAndVDC from '../../../templates/herBIMAndVDCServices.hbs';
import howWeWorkTemplate from '../../../templates/howWeWork.hbs';
import servicesTemplate from '../../../templates/architecAndStructBim.hbs';
import sliderTemplate from '../../../templates/ourProjectsSlider.hbs';
import contactUsTemplate from '../../../templates/contactUs.hbs';
import faqTemplate from '../../../templates/faq.hbs';

import { refs, refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { toggleFaq } from '../../common/toggle-faq';
import {
  archiRenderingHero,
  BIMservices,
  howCreates,
  whatWeOffer,
  archiRenderingFaq,
  archiRenderingContact,
  projectCoordination,
} from './archi-rendering-data';
import { makeBoldFirst } from '../../common/make-bold-first';

useTemplate(refs.hero, heroTemplate, archiRenderingHero);
useTemplate(refs.herBIMAndVDC, herBIMAndVDC, BIMservices);
useTemplate(refs.howWeWork, howWeWorkTemplate, howCreates);
useTemplate(refs.services, servicesTemplate, whatWeOffer);
useTemplate(refsCase.bmpSlider, sliderTemplate, projectCoordination);
useTemplate(refs.contactUs, contactUsTemplate, archiRenderingContact);
useTemplate(refs.faq, faqTemplate, archiRenderingFaq);
//
toggleFaq();
makeBoldFirst('.bim-automation-services__item');
