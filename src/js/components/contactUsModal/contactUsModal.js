import { createDealAndContact } from '../../common/crm-sendpulse';
import { OnContactUsClick, onBtnCloseClick } from './contactUs-click-functions';
import { refsModal } from './contactUs-refs';
import {
  openAnswerModal,
  rewriteHeroBlockAnswer,
} from './contactUs-submitModal';
import { refsCase } from '../../common/refs-services';

if (refsModal.contactUsButtons.length > 0) {
  for (let i = 0; i < refsModal.contactUsButtons.length; i++) {
    const contactUsBtn = refsModal.contactUsButtons[i];
    contactUsBtn.addEventListener('click', OnContactUsClick);
  }
}

const PHONE_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function validatePhone(phone) {
  return PHONE_REGEXP.test(phone);
}

export async function onFormSubmit(e) {
  e.preventDefault();
  const nameInput = e.currentTarget.elements[0].value;
  const contactInput = e.currentTarget.elements[1].value;
  const messageInput = e.currentTarget.elements[2].value;
  const isValidateEmail = validateEmail(contactInput);
  const isValidatePhone = validatePhone(contactInput);

  if (isValidateEmail || isValidatePhone) {
    refsModal.contactUsSubmit.setAttribute('disabled', 'disabled');
    const modalRequest = {
      name: messageInput ? nameInput + '_' + messageInput : nameInput,
      phone: isValidatePhone ? contactInput : '',
      email: isValidateEmail ? contactInput : '',
    };

    const result = await createDealAndContact(modalRequest);

    if (e.target.classList.value === 'contact-form') {
      rewriteHeroBlockAnswer(result);
      return;
    }

    if (e.target.classList.value.includes('question-form')) {
      openAnswerModal(result);
      return;
    }
  }

  if (e.target.classList.value.includes('contact-form')) {
    document
      .querySelector('.error-message-contacts')
      .classList.remove('visually-hidden');
  }

  refsModal.errorMessage.classList.remove('visually-hidden');
  refsModal.contactUsSubmit.removeAttribute('disabled');
}
export async function onSubscribeSubmit(e) {
  e.preventDefault();
  const modalRequest = {
    email: e.currentTarget.elements[0].value,
    name: 'Підписка на сторінку',
  };

  if (modalRequest.email) {
    const result = await createDealAndContact(modalRequest);
    refsCase.subscribeForm.reset();
    openAnswerModal(result);
    return;
  }
}
