const contactUsButtons = document.querySelectorAll('.contact-us-btn');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.contact-modal__close-btn');
const contactUsSubmit = document.querySelector('.contact-modal__btn');
const body = document.body;

if (contactUsButtons.length > 0) {
  for (let i = 0; i < contactUsButtons.length; i++) {
    const contactUsBtn = contactUsButtons[i];
    contactUsBtn.addEventListener('click', openModal);
  }
}

closeBtn.addEventListener('click', closeModal);
contactUsSubmit.addEventListener('click', closeModal);

function openModal(e) {
  e.preventDefault();
  body.classList.add('_lock');
  backdrop.classList.add('active-modal');
  body.addEventListener('keyup', onEsc);
  backdrop.addEventListener('click', onBackdropClick);
  console.log('open');
}

function closeModal(e) {
  if (e) {
    e.preventDefault();
    console.log('prevent');
  }
  body.classList.remove('_lock');
  backdrop.classList.remove('active-modal');
  body.removeEventListener('keyup', onEsc);
  backdrop.removeEventListener('click', onBackdropClick);
  console.log('close');
}

function onEsc(e) {
  if (e.keyCode == 27) {
    console.log('escape');
    closeModal();
  }
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    console.log('backdrop');
    closeModal();
  }
}
