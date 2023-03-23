import { createDealAndContact } from '../../common/crm-sendpulse';
const contactUsButtons = document.querySelectorAll('.js-btn-modal');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.contact-modal__close-btn');
const contactUsSubmit = document.querySelector('.contact-modal__btn');
const form = document.querySelector('.contact-modal__form');
const body = document.body;

if (contactUsButtons.length > 0) {
  for (let i = 0; i < contactUsButtons.length; i++) {
    const contactUsBtn = contactUsButtons[i];
    contactUsBtn.addEventListener('click', openModal);
  }
}

closeBtn.addEventListener('click', closeModal);

form.addEventListener('submit', formSubmit);

function openModal(e) {
  e.preventDefault();
  body.classList.add('_lock');
  backdrop.classList.add('active-modal');
  body.addEventListener('keyup', onEsc);
  backdrop.addEventListener('click', onBackdropClick);
  // console.log('open');
}

function closeModal(e) {
  body.classList.remove('_lock');
  backdrop.classList.remove('active-modal');
  body.removeEventListener('keyup', onEsc);
  backdrop.removeEventListener('click', onBackdropClick);
  form.reset();
  // console.log('close');
}

function onEsc(e) {
  if (e.keyCode == 27) {
    // console.log('escape');
    closeModal();
  }
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    // console.log('backdrop');
    closeModal();
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

async function formSubmit(e) {
  e.preventDefault();
  console.log(contactUsSubmit.attributes);
  contactUsSubmit.attributes;
  const modalRequest = {
    name: e.currentTarget.elements[0].value,
    phone: validatePhone(e.currentTarget.elements[1].value)
      ? e.currentTarget.elements[1].value
      : '',
    email: validateEmail(e.currentTarget.elements[1].value)
      ? e.currentTarget.elements[1].value
      : '',
  };
  const result = await createDealAndContact(modalRequest);
  console.log(result.result);
  closeModal();
}
