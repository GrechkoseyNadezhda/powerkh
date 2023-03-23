import { createDealAndContact } from '../../common/crm-sendpulse';
import { openModal, closeModal } from './contactUs-functions';
import { refsModal } from './contactUs-refs';

if (refsModal.contactUsButtons.length > 0) {
  for (let i = 0; i < refsModal.contactUsButtons.length; i++) {
    const contactUsBtn = refsModal.contactUsButtons[i];
    contactUsBtn.addEventListener('click', () =>
      openModal(refsModal.backdropQuestion)
    );
  }
}
refsModal.closeBtn.addEventListener('click', closeModal);

refsModal.form.addEventListener('submit', formSubmit);

const PHONE_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function validatePhone(phone) {
  return PHONE_REGEXP.test(phone);
}

async function formSubmit(e) {
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
    closeModal();
    if (result.result) {
      openModal(refsModal.backdropSuccess);
      return;
    }
    if (!result.result && result.message === 'Duplicate data') {
      openModal(refsModal.backdropDuplicate);
      return;
    }
    if (!result.result && result.message !== 'Duplicate data') {
      openModal(refsModal.backdropFail);
      return;
    }
  }

  refsModal.errorMessage.classList.remove('visually-hidden');
  refsModal.contactUsSubmit.removeAttribute('disabled');
}
