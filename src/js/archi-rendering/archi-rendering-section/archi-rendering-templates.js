import heroTemplate from '../../../templates/hero.hbs';
import herBIMAndVDC from '../../../templates/herBIMAndVDCServices.hbs';
import howWeWorkTemplate from '../../../templates/howWeWork.hbs';
import servicesTemplate from '../../../templates/architecAndStructBim.hbs';
import contactUsTemplate from '../../../templates/contactUs.hbs';
import faqTemplate from '../../../templates/faq.hbs';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { toggleFaq } from '../../common/toggle-faq';
import {
  archiRenderingHero,
  BIMservices,
  howCreates,
  whatWeOffer,
  archiRenderingFaq,
  archiRenderingContact,
} from './archi-rendering-data';

useTemplate(refs.hero, heroTemplate, archiRenderingHero);
useTemplate(refs.herBIMAndVDC, herBIMAndVDC, BIMservices);
useTemplate(refs.howWeWork, howWeWorkTemplate, howCreates);
useTemplate(refs.services, servicesTemplate, whatWeOffer);
useTemplate(refs.contactUs, contactUsTemplate, archiRenderingContact);
useTemplate(refs.faq, faqTemplate, archiRenderingFaq);
toggleFaq();
