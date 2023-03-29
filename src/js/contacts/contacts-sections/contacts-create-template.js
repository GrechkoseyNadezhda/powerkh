import { formContacts } from './contacts-data';
import contactFormHBS from '../../../templates/contact-form.hbs';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { onFormSubmit } from '../../components/contactUsModal/contactUsModal';

document.addEventListener('DOMContentLoaded', contentLoad());

function contentLoad() {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');

  useTemplate(refs.hero, contactFormHBS, formContacts);

  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
}

if (
  document
    .querySelector('.error-message-contacts')
    .classList.value.includes('visually-hidden')
) {
  document
    .querySelector('.error-message-contacts')
    .classList.add('visually-hidden');
}

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', onFormSubmit);
