import FAQ from '../templates/FAQ.hbs';
const questExample = [
  'How long does it take to produce an architectural 3D render?',
  'How much do you charge for architectural rendering?',
  'What do you need for architectural rendering?',
  'What can I adjust for rendering?',
  'Do you offer free revisions?',
];
const faqSection = document.querySelector('.faq');
faqSection.insertAdjacentHTML('beforeend', FAQ(questExample));
