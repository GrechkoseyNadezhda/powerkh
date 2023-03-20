import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import {
  heroCoordination,
  howCoordination,
  servicesCoordination,
  addValueCoordination,
  contactUsCoordination,
  projectCoordination,
} from './bim-coordination-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { fetchDatabaseFAQ } from '../../common/fetchDatabaseFAQ';

useTemplate(refs.hero, heroHBS, heroCoordination);
useTemplate(refs.howWeWork, howWeWorkHBS, howCoordination);
useTemplate(refs.services, servicesHBS, servicesCoordination);
useTemplate(
  refs.featuresForProjects,
  featuresForProjectsHBS,
  addValueCoordination
);
useTemplate(refs.contactUs, contactUsHBS, contactUsCoordination);

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

fetchDatabaseFAQ('/faq/bimCoordination.json');
