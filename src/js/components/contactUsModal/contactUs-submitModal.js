import { closeModal, openModal } from './contactUs-click-functions';
import { refsModal } from './contactUs-refs';
import arrow from '../../../images/vectors/arrow.svg';
import { refs } from '../../common/refs-services';
import { onFormSubmit } from './contactUsModal';
const successContentModalHTML = ` <h2
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

style="justify-content: end"
>
Home
<img src=${arrow} loading="lazy" alt="arrow" />
</a>`;

const duplicateContentModalHTML = `   <h2
class="contact-modal__title"
style="text-transform: none; max-width: 100%"
>
Sorry, but you submitted your request earlier
</h2>

<div class='contact-modal__btn-block'><a
href="./.html"
class="contact-modal__btn--link contact-modal__btn--link--home"

style="justify-content: flex-start"
><img src=${arrow} loading="lazy" alt="arrow" class="contact-modal__icon"/>
Home

</a> <a
href="./contacts.html"
class="contact-modal__btn--link contact-modal__btn--link--contacts "

style="justify-content: end"
>
Contacts
<img src=${arrow} loading="lazy" alt="arrow" />
</a></div>
`;

const failContentModalHTML = `  <h2
    class="contact-modal__title"
    style="text-transform: none; max-width: 100%"
  >
    Sorry, but something goes wrong. Please repeate your request.
  </h2>
  <div class='contact-modal__btn-block'><a
href="./.html"
class="contact-modal__btn--link contact-modal__btn--link--home"

style="justify-content: flex-start"
><img src=${arrow} alt="arrow" loading="lazy" class="contact-modal__icon"/>
Home

</a> <a
href="./contacts.html"
class="contact-modal__btn--link contact-modal__btn--link--contacts "
type="button"
style="justify-content: end"
>
Contacts
<img src=${arrow} loading="lazy" alt="arrow" />
</a></div>`;

export function openAnswerModal(result) {
  closeModal(refsModal.backdropQuestion);
  if (result.result) {
    refsModal.modalAnswerContent.innerHTML = successContentModalHTML;
    openModal(refsModal.backdropAnswer);
    refsModal.questionForm.removeEventListener('submit', onFormSubmit);
    refsModal.questionForm.reset();
    return;
  }
  if (!result.result && result.message === 'Duplicate data') {
    refsModal.modalAnswerContent.innerHTML = duplicateContentModalHTML;
    refsModal.questionForm.removeEventListener('submit', onFormSubmit);
    openModal(refsModal.backdropAnswer);

    return;
  }
  if (!result.result && result.message !== 'Duplicate data') {
    refsModal.modalAnswerContent.innerHTML = failContentModalHTML;
    refsModal.questionForm.removeEventListener('submit', onFormSubmit);
    openModal(refsModal.backdropAnswer);
    return;
  }
}
export function rewriteHeroBlockAnswer(result) {
  if (result.result) {
    refs.hero.innerHTML = successContentModalHTML;

    refsModal.questionForm.reset();
    return;
  }
  if (!result.result && result.message === 'Duplicate data') {
    refs.hero.innerHTML = duplicateContentModalHTML;

    return;
  }
  if (!result.result && result.message !== 'Duplicate data') {
    refs.hero.innerHTML = failContentModalHTML;

    return;
  }
}
