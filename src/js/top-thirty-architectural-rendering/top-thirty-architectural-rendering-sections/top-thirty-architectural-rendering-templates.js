import $ from 'jquery';
import 'slick-carousel';
import heroFourHBS from '../../../templates/hero-part-four.hbs';
import shareHBS from '../../../templates/share.hbs';
import contentsHBS from '../../../templates/contents.hbs';
import authorHBS from '../../../templates/author.hbs';
import whatProblemsHBS from '../../../templates/whatProblems.hbs';
import architectRendServHBS from '../../../templates/architecturalRenderingServices.hbs';
import otherArticlesLinksHBS from '../../../templates/otherArticlesLinks.hbs';
import authorInfoHBS from '../../../templates/otherArticlesAuthor.hbs';

import {
  heroFourData,
  contentsData,
  shareData,
  whatProblemsData,
  architectRendServData,
  listOfArticles,
} from './top-thirty-architectural-rendering-data';

import { refs, refsCase } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { fetchDatabaseAuthor } from '../../common/fetchDatabaseAuthor';
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
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
  mobileFirst: true,
  centerPadding: '100px',
  appendArrows: $('.section-ourCases__sliderArrow'),
});

refsCase.subscribeForm.addEventListener('submit', onSubscribeSubmit);

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.heroPartFour, heroFourHBS, heroFourData);
  useTemplate(refs.share, shareHBS, shareData);
  useTemplate(refs.contents, contentsHBS, contentsData);
  useTemplate(refs.whatProblems, whatProblemsHBS, whatProblemsData);
  useTemplate(refs.otherArticlesLinks, otherArticlesLinksHBS, listOfArticles);

  useTemplate(
    refs.architectRendServ,
    architectRendServHBS,
    architectRendServData
  );

  fetchDatabaseAuthor(
    '/authors/TetianaRapina.json',
    refs.author,
    refs.otherArticlesAuthor,
    authorHBS,
    authorInfoHBS
  );

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
