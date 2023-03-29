import $ from 'jquery';

import 'slick-carousel';

import { useTemplate } from '../../common/use-template';
import blogSliderHBS from '../../../templates/blogSlider.hbs';
import { blogSliderData } from './blog-sections-data';
import { refs, refsCase } from '../../common/refs-services';

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

useTemplate(refsCase.blogSlider, blogSliderHBS, blogSliderData);
