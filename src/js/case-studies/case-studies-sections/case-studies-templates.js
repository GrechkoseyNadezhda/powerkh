import $ from 'jquery';
import 'slick-carousel';
import { useTemplate } from '../../common/use-template';
import blogSliderHBS from '../../../templates/blogSlider.hbs';
import { caseStudiesData } from './case-studies-data';
import { refsCase } from '../../common/refs-services';

$(function () {
  $('.blog-section__slider').slick({
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

useTemplate(refsCase.csSlider, blogSliderHBS, caseStudiesData);
console.log(caseStudiesData);

const readMore = document.querySelectorAll(
  '.case-studies .blog-section__slider-readMore'
);
readMore.forEach(el => el.classList.add('hide'));

const seeProject = document.querySelectorAll(
  '.case-studies .blog-section__slider-seeProject'
);
seeProject.forEach(el => el.classList.add('show'));
