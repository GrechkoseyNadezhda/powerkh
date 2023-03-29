import jQuery from 'jquery';
import { refs } from '../../common/refs-services';

jQuery('.about-section__info-datatitle').each(function () {
  let $this = jQuery(this);
  let parts = $this.text().match(/^(\d+)(.*)/);
  if (parts.length < 2) return;

  let scale = 20;
  let delay = 7;
  let end = 0 + parts[1];
  let next = 0;
  let suffix = parts[2];

  let runUp = function () {
    let show = Math.ceil(next);
    $this.text('' + show + suffix);
    if (show == end) return;
    next = next + (end - next) / scale;
    window.setTimeout(runUp, delay);
  };
  runUp();
});

document.addEventListener('DOMContentLoaded', () => {
  refs.spinner.classList.remove('visually-hidden');
  document.body.classList.add('_lock');
  refs.spinner.classList.add('visually-hidden');
  document.body.classList.remove('_lock');
});
