import $ from 'jquery';
// window.$ = window.jQuery = $;
import 'slick-carousel';
import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import faqTemplate from '../../../templates/faq.hbs';
import herBIMAndVDC from '../../../templates/herBIMAndVDCServices.hbs';
import sliderHBS from '../../../templates/ourProjectsSlider.hbs';

import {
  heroModeling,
  BIMservices,
  howModeling,
  servicesModeling,
  addValueModeling,
  contactUsModeling,
  BIMmodelingFaq,
  projectsSliderImg,
  projectCoordination,
} from './bim-modeling-data';
import { refs, refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { createFAQsection } from '../../common/createFaqSection';
import { toggleFaq } from '../../common/toggle-faq';

const ENDPOINT_COORDINATION = '/faq/bimModeling.json';
// Projects slider
$(function () {
  $('.section-projects__slider-item').slick({
    arrows: false,
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: true,
    swipe: true,
    touchMove: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

console.log(projectsSliderImg);
useTemplate(refs.hero, heroHBS, heroModeling);
useTemplate(refs.howWeWork, howWeWorkHBS, howModeling);
useTemplate(refs.services, servicesHBS, servicesModeling);
useTemplate(refs.herBIMAndVDC, herBIMAndVDC, BIMservices);
useTemplate(refs.featuresForProjects, featuresForProjectsHBS, addValueModeling);
useTemplate(refs.contactUs, contactUsHBS, contactUsModeling);
useTemplate(refs.slider, sliderHBS, projectCoordination);
createFAQsection(ENDPOINT_COORDINATION, refs.faq, faqTemplate);
toggleFaq();
