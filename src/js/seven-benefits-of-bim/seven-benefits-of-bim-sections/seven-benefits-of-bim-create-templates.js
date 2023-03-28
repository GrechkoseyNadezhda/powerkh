import $ from 'jquery';
// window.$ = window.jQuery = $;
import 'slick-carousel';

import heroPartFourHBS from '../../../templates/hero-part-four.hbs';
import shareHBS from '../../../templates/share.hbs';
import contentsHBS from '../../../templates/contents.hbs';
import contentsInformationHBS from '../../../templates/contentsInformation.hbs';
import whatProblemsHBS from '../../../templates/whatProblems.hbs';
import authorHBS from '../../../templates/author.hbs';

import otherArticlesLinksHBS from '../../../templates/otherArticlesLinks.hbs';
import authorInfoHBS from '../../../templates/otherArticlesAuthor.hbs';

import architectRendServHBS from '../../../templates/architecturalRenderingServices.hbs';

import {
  heroPartFourData,
  shareBim,
  contentsBim,
  contentsInformBim,
  whatProblemsBim,
  listOfArticles,
  architectRendServData,
} from './seven-benefits-of-bim-data';

import { refs, refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { fetchDatabaseAuthor } from '../../common/fetchDatabaseAuthor';
import { makeBoldFirst } from '../../common/make-bold-first';
import { onSubscribeSubmit } from '../../components/contactUsModal/contactUsModal';
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
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
  mobileFirst: true,
  centerPadding: '100px',
  appendArrows: $('.section-ourCases__sliderArrow'),
  // variableWidth: true,
  // centerMode: true,
  // dots: true,
});

refsCase.subscribeForm.addEventListener('submit', onSubscribeSubmit);

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.heroPartFour, heroPartFourHBS, heroPartFourData);
  useTemplate(refs.share, shareHBS, shareBim);
  useTemplate(refs.contents, contentsHBS, contentsBim);
  useTemplate(refs.contentsInform, contentsInformationHBS, contentsInformBim);
  useTemplate(refs.whatProblems, whatProblemsHBS, whatProblemsBim);

  useTemplate(refs.otherArticlesLinks, otherArticlesLinksHBS, listOfArticles);

  fetchDatabaseAuthor(
    '/authors/KostiaRapina.json',
    refs.author,
    refs.otherArticlesAuthor,
    authorHBS,
    authorInfoHBS
  );

  useTemplate(
    refs.architectRendServ,
    architectRendServHBS,
    architectRendServData
  );

  makeBoldFirst('.whereToFind__text__list');

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
