import $ from 'jquery';
// window.$ = window.jQuery = $;
import 'slick-carousel';
import '../../components/blogSlider/slick';
import { useTemplate } from '../../common/use-template';
import blogSliderHBS from '../../../templates/blogSlider.hbs';
import { blogSliderData } from './blog-sections-data';
import { refsCase } from '../../common/refs-services';


$(function(){
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
        
    });
})

useTemplate(refsCase.blogSlider, blogSliderHBS, blogSliderData);

// import Swiper, { Navigation, Pagination } from 'swiper';
// import impactHBS from '../../../templates/impactOnBusiness.hbs';
// import herotextHBS from '../../../templates/heroDesignText.hbs';
// import sliderHBS from '../../../templates/heroDesignSlider.hbs';
// import { useTemplate } from '../../common/use-template';
// import {
//   textHeroSuspended,
//   sliderPictures,
//   impactSuspended,
// } from '../../suspended-case/suspended-case-section/suspended-case-data';
// import { refsCase } from '../../common/refs-services';
// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination],

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true,
//   },
// });

// useTemplate(refsCase.heroTextBlock, herotextHBS, textHeroSuspended);
// useTemplate(refsCase.heroSlider, sliderHBS, sliderPictures);
// useTemplate(refsCase.impactOnBusiness, impactHBS, impactSuspended);
