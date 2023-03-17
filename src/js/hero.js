import hero from '../templates/hero.hbs';
console.log(hero);

const heroObject = {
  subtitle: 'Prefabrication & Fabrication',
  text: 'Do you want to improve your manufacturing process and speed up the design? Our BIM prefabrication & coordination services can become an indispensable tool for your project’s success! Don’t put off your call — contact Powerkh to learn how we can improve your workflow.'
}

const heroSection = document.querySelector('.hero__block');

heroSection.insertAdjacentHTML('beforeend', hero(heroObject));
