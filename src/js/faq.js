// import FAQ from '../templates/faq.hbs';

// const faqSection = document.querySelector('.faq');
if (faqSection) {
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
}
