import { createDealAndContact } from '../../common/crm-sendpulse';
import {
  openModal,
  OnContactUsClick,
  closeModal,
  onBtnCloseClick,
} from './contactUs-functions';
import { refsModal } from './contactUs-refs';
import arrow from '../../../images/vectors/arrow.svg';
if (refsModal.contactUsButtons.length > 0) {
  for (let i = 0; i < refsModal.contactUsButtons.length; i++) {
    const contactUsBtn = refsModal.contactUsButtons[i];
    contactUsBtn.addEventListener('click', OnContactUsClick);
  }
}
refsModal.closeBtn.addEventListener('click', onBtnCloseClick);

refsModal.form.addEventListener('submit', onFormSubmit);

const PHONE_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function validatePhone(phone) {
  return PHONE_REGEXP.test(phone);
}

console.log(refsModal.modalAnswerContent.innerHTML);

async function onFormSubmit(e) {
  e.preventDefault();
  const nameInput = e.currentTarget.elements[0].value;
  const contactInput = e.currentTarget.elements[1].value;
  const isValidateEmail = validateEmail(contactInput);
  const isValidatePhone = validatePhone(contactInput);

  if (isValidateEmail || isValidatePhone) {
    refsModal.contactUsSubmit.setAttribute('disabled', 'disabled');
    const modalRequest = {
      name: nameInput,
      phone: isValidatePhone ? contactInput : '',
      email: isValidateEmail ? contactInput : '',
    };
    const result = await createDealAndContact(modalRequest);
    console.log(result.result, result);
    closeModal(refsModal.backdropQuestion);
    if (result.result) {
      refsModal.modalAnswerContent.innerHTML = ` <h2
class="contact-modal__title"
style="text-transform: none; max-width: 100%"
>
Thank you for your message
</h2>
<p style="margin-bottom: 35px">
It has been sent. <br />
We will contact you shortly.
</p>
<a
href="./"
class="contact-modal__btn--link"
type="button"
style="justify-content: end"
>
Home
<img src=${arrow} alt="arrow" />
</a>`;
      openModal(refsModal.backdropAnswer);

      return;
    }
    if (!result.result && result.message === 'Duplicate data') {
      refsModal.modalAnswerContent.innerHTML = `   <h2
      class="contact-modal__title"
      style="text-transform: none; max-width: 100%"
    >
      Sorry, but you submitted your request earlier
    </h2>
    <a
      href="./contacts.html"
      class="contact-modal__btn--link"
      type="button"
      style="justify-content: end"
    >
Contacts
<img src=${arrow} alt="arrow" />
</a>`;
      openModal(refsModal.backdropAnswer);

      return;
    }
    if (!result.result && result.message !== 'Duplicate data') {
      refsModal.modalAnswerContent.innerHTML = `  <h2
      class="contact-modal__title"
      style="text-transform: none; max-width: 100%"
    >
      Sorry, but something goes wrong. Please repeate
    </h2>
    <a
      href="./contacts.html"
      class="contact-modal__btn"
      type="button"
      style="justify-content: end"
    >
      Contacts
      <img src=${arrow} alt="arrow" />
    </a>`;
      openModal(refsModal.backdropAnswer);
      return;
    }
  }

  refsModal.errorMessage.classList.remove('visually-hidden');
  refsModal.contactUsSubmit.removeAttribute('disabled');
}
