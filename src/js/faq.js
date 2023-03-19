import FAQ from '../templates/faq.hbs';
const questExample = [
  {
    question: 'How long does it take to produce an architectural 3D render?',
    answer:
      'Our delivery time depends on the project’s complexity (LOD), your standards, techniques, and the documentation we receive. Nonetheless, our team has extensive knowledge of BIM modeling software and can build an interactive model in the fastest possible time.',
  },
  {
    question: 'How much do you charge for architectural rendering?',
    answer:
      'We will provide a free quote with estimates based on our hourly fee. Furthermore, we will charge only after completing our work.',
  },
  {
    question: 'What do you need for architectural rendering?',
    answer:
      'We will provide a free quote with estimates based on our hourly fee. Furthermore, we will charge only after completing our work.a',
  },
  {
    question: 'What can I adjust for rendering?',
    answer: 'blablabla',
  },
  {
    question: 'Do you offer free revisions?',
    answer: 'blablabla',
  },
];
const faqSection = document.querySelector('.faq');
faqSection.insertAdjacentHTML('beforeend', FAQ(questExample));
const questionsEls = document.querySelectorAll('.faq__questBlock');
questionsEls.forEach(question =>
  question.addEventListener('click', e => {
    e.currentTarget
      .querySelector('.faq__answer')
      .classList.toggle('visually-hidden');
    e.currentTarget.querySelector('.faq__question').classList.toggle('open');
  })
);
