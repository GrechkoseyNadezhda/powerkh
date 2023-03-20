// import architecAndStructBim from '../../../templates/architecAndStructBim.hbs';

// const architecAndStructObject = {
//   title: 'Our BIM Automation Services',
//   text: 'Powerkh can replace manual, tedious operations with automated processes via advanced scripts and proven methodologies.',
//   topic: 'We offer:',
//   list: [
//     'BIM automation for modeling, reporting, and clash detection',
//     'Integration with Autodesk Revit',
//     'Advanced Revit functionality with Dynamo plug-in',
//     'BIM scripting with Dynamo tool',
//     'Standardization across Revit projects',
//     'Workflow optimization',
//     'Enhanced generative design in Revit',
//   ],
// };

// const architecAndStructSection = document.querySelector(
//   '.bim-automation-services'
// );

// const architecAndStructTemplate = architecAndStructBim(architecAndStructObject);
// architecAndStructSection.innerHTML = architecAndStructTemplate;

// $(document).ready(function(){
//     $('.bim-modeling-projects__slider').slick();
// })
// console.log('heWRllo!');
// $(document).ready(function(){
//     $('.bim-modeling-projects__slider').slick();
// });


import $ from 'jquery';
// window.$ = window.jQuery = $;
import 'slick-carousel'


$(function(){
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
        
    });
})

