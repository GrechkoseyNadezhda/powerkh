import { formContacts } from './contacts-data';
import contactFormHBS from '../../../templates/contact-form.hbs';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { onFormSubmit } from '../../components/contactUsModal/contactUsModal';

useTemplate(refs.hero, contactFormHBS, formContacts);

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
