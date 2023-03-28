import { refsModal } from './contactUs-refs';
export function OnContactUsClick(e) {
 
  if (e.currentTarget.classList.value.includes('js-btn-modal')) {
    openModal(refsModal.backdropQuestion);
  }
}
export function openModal(typeModal) {
  refsModal.contactUsSubmit.removeAttribute('disabled');
  refsModal.modal.style = `animation-name: modalAnim;
  animation-duration: 0.6s;
  animation-timing-function: linear;`;
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

  modalType.classList.remove('active-modal');
  refsModal.body.removeEventListener('keyup', onEsc);
  modalType.removeEventListener('click', onBackdropClick);
  refsModal.modal.removeAttribute('style');
}
function onEsc(e) {
  if (e.keyCode == 27) {
    closeModal(refsModal.backdropQuestion);
    closeModal(refsModal.backdropAnswer);
  }
}
function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal(refsModal.backdropQuestion);
    closeModal(refsModal.backdropAnswer);
  }
}
