const getPath = path => path.split('/').pop().split('.')[0];

const current = getPath(location.pathname);
if (current === '')
  document
    .querySelector('.footer__nav')
    .firstElementChild.classList.add('active');
else {
  const navElements = document.querySelectorAll(`.footer a`);
  for (let el of navElements) {
    if (getPath(el.href) === current) {
      el.parentElement.classList.add('active');
    }
  }
}
