import { refs } from '../common/refs-services';
import hero from '../../templates/hero.hbs';
import logo from '../../images/vectors/logo.svg';

const heroObject = {
  subtitle: '',
  text: 'Looking for a way to improve your design and manage your construction effectively? Powerkh - a trusted BIM & VDC services provider with extensive engineering experience and a portfolio of 200+ successful BIM & VDC projects.',
};

const mainHero = refs.hero;
const htmlString = `<img src='${logo}' alt="logo" height="96px" width="120px">`;

refs.heroSection.classList.add('main_hero');
mainHero.insertAdjacentHTML('beforebegin', htmlString);
mainHero.insertAdjacentHTML('beforeend', hero(heroObject));

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}
