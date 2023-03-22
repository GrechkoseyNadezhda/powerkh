import $ from 'jquery';
// window.$ = window.jQuery = $;
import 'slick-carousel';
import '../../components/ourCasesSlider/slick';
import heroPartFourHBS from '../../../templates/hero-part-four.hbs';
import shareHBS from '../../../templates/share.hbs';
import contentsHBS from '../../../templates/contents.hbs';
import contentsInformationHBS from '../../../templates/contentsInformation.hbs';
import whatProblemsHBS from '../../../templates/whatProblems.hbs';
import authorHBS from '../../../templates/author.hbs';

import {
  heroPartFourData,
  shareBim,
  contentsBim,
  contentsInformBim,
  whatProblemsBim,
} from './seven-benefits-of-bim-data';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { fetchDatabaseAuthor } from '../../common/fetchDatabaseAuthor';
import { makeBoldFirst } from '../../common/make-bold-first';

$('.section-ourCases__slider.b7b').slick({
  arrows: true,
  cssEase: 'linear',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  draggable: true,
  swipe: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }
  ],
  mobileFirst: true,
  centerPadding: '100px',
  appendArrows: $('.section-ourCases__sliderArrow'),
  // variableWidth: true,
  // centerMode: true,
  // dots: true,
});

useTemplate(refs.heroPartFour, heroPartFourHBS, heroPartFourData);
useTemplate(refs.share, shareHBS, shareBim);
useTemplate(refs.contents, contentsHBS, contentsBim);
useTemplate(refs.contentsInform, contentsInformationHBS, contentsInformBim);
<<<<<<< HEAD
useTemplate(refs.whatProblems, whatProblemsHBS, whatProblemsBim);
=======
useTemplate(refs.whatProblems, whatProblemsHBS, whatProblemsBim);

fetchDatabaseAuthor('/authors/KostiaRapina.json', refs.author, authorHBS);
makeBoldFirst('.whereToFind__text__list');
>>>>>>> dev
