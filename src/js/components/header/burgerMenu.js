const iconMenu = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const backdropBurger = document.querySelector('.backdrop-burger');
const body = document.body;

if (iconMenu) {
  iconMenu.addEventListener('click', openBurger);
}

function openBurger(e) {
  e.preventDefault();
  body.classList.add('_lock');
  backdropBurger.classList.add('active-burger');
  body.addEventListener('keyup', onEscBurger);
  backdropBurger.addEventListener('click', onBackdropBurgerClick);
  iconMenu.classList.add('_active');
  burgerMenu.classList.add('_active');
  iconMenu.removeEventListener('click', openBurger);
  iconMenu.addEventListener('click', closeBurger);
}

function closeBurger(e) {
  if (e) {
    e.preventDefault();
  }
  body.classList.remove('_lock');
  backdropBurger.classList.remove('active-burger');
  body.removeEventListener('keyup', onEscBurger);
  backdropBurger.removeEventListener('click', onBackdropBurgerClick);
  iconMenu.classList.remove('_active');
  burgerMenu.classList.remove('_active');
  iconMenu.removeEventListener('click', closeBurger);
  iconMenu.addEventListener('click', openBurger);
}

function onEscBurger(e) {
  if (e.keyCode == 27) {
    closeBurger();
  }
}
function onBackdropBurgerClick(e) {
  if (e.target === e.currentTarget) {
    closeBurger();
  }
}
