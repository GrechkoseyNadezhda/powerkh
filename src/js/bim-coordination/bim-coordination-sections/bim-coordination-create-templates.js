import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import briefDescriptHBS from '../../../templates/herBIMAndVDCServices.hbs';
import faqHBS from '../../../templates/faq.hbs';
import {
  heroCoordination,
  briefDescriptCoordination,
  howCoordination,
  servicesCoordination,
  addValueCoordination,
  contactUsCoordination,
  projectCoordination,
} from './bim-coordination-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { createFAQsection } from '../../common/createFaqSection';

const ENDPOINT_COORDINATION = '/faq/bimCoordination.json';

useTemplate(refs.hero, heroHBS, heroCoordination);
useTemplate(refs.herBIMAndVDC, briefDescriptHBS, briefDescriptCoordination);
useTemplate(refs.howWeWork, howWeWorkHBS, howCoordination);
useTemplate(refs.services, servicesHBS, servicesCoordination);
useTemplate(
  refs.featuresForProjects,
  featuresForProjectsHBS,
  addValueCoordination
);
useTemplate(refs.contactUs, contactUsHBS, contactUsCoordination);
createFAQsection(ENDPOINT_COORDINATION, refs.faq, faqHBS);

// useTemplate(refs.faq, faqHBS, faqCoordination);
// import $ from 'jquery';
// // window.$ = window.jQuery = $;
// import 'slick-carousel';

// $(function () {
//   $('.section-projects__slider-item').slick({
//     arrows: false,
//     dots: true,
//     infinite: true,
//     fade: true,
//     cssEase: 'linear',
//     autoplay: true,
//     autoplaySpeed: 1500,
//     draggable: true,
//     swipe: true,
//     touchMove: true,
//   });
// });
