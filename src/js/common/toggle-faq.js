export const toggleFaq = () => {
  const questionsArray = document.querySelectorAll('.faq__questBlock');
  questionsArray.forEach(question =>
    question.addEventListener('click', e => {
      e.currentTarget
        .querySelector('.faq__answer')
        .classList.toggle('visually-hidden');
      e.currentTarget.querySelector('.faq__question').classList.toggle('open');
    })
  );
};
