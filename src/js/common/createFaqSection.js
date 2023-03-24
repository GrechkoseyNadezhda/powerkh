import { useTemplate } from './use-template';
import { toggleFaq } from './toggle-faq';
const BASEURL = 'https://poverkh-default-rtdb.firebaseio.com/';

// ендпоінт брати в ТЗбекенд відповідно до своєї сторінки
export async function createFAQsection(endpoint, el, template) {
  const response = await fetch(BASEURL + endpoint).then(response =>
    response.json()
  );

  let answerArr = [];
  for (let key in response) {
    answerArr.push(response[key]);
  }
  useTemplate(el, template, answerArr);
  toggleFaq();
}
