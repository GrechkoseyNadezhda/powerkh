const getPath = path => path.split('/').pop().split('.')[0];

const current = getPath(location.pathname);
const navElements = document.querySelectorAll(`.footer a`);
for (let el of navElements) {
  if (getPath(el.href) === current) {
    el.parentElement.classList.add('active');
  }
}

document.querySelector('.scroll-up').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
