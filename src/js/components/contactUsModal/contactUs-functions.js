import { refsModal } from './contactUs-refs';
export function OnContactUsClick(e) {
  //   e.preventDefault();
  // openModal(typeModal);
  if (e.currentTarget.classList.value.includes('js-btn-modal')) {
    openModal(refsModal.backdropQuestion);
  }

  console.log('open');
}
export function openModal(typeModal) {
  refsModal.contactUsSubmit.removeAttribute('disabled');
  if (
    !refsModal.errorMessage.classList.value.includes('visually-hidden') &&
    typeModal === refsModal.backdropQuestion
  ) {
    refsModal.errorMessage.classList.add('visually-hidden');
  }
  refsModal.body.classList.add('_lock');
  typeModal.classList.add('active-modal');
  refsModal.body.addEventListener('keyup', onEsc);
  typeModal.addEventListener('click', onBackdropClick);
}
export function onBtnCloseClick(e) {
  if (e.currentTarget.classList.value.includes('contact-modal__close-btn')) {
    closeModal(refsModal.backdropQuestion);
  }
}

export function closeModal(modalType) {
  refsModal.body.classList.remove('_lock');
  console.log(modalType);
  modalType.classList.remove('active-modal');
  refsModal.body.removeEventListener('keyup', onEsc);
  modalType.removeEventListener('click', onBackdropClick);
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
