import { refsModal } from './contactUs-refs';
export function openModal(typeModal) {
  //   e.preventDefault();
  console.log(typeModal);
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
  console.log('open');
}
export function closeModal(e) {
  refsModal.body.classList.remove('_lock');
  refsModal.backdropQuestion.classList.remove('active-modal');
  refsModal.body.removeEventListener('keyup', onEsc);
  refsModal.backdropQuestion.removeEventListener('click', onBackdropClick);
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
