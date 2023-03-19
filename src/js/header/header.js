const getPath = path => path.split('/').pop().split('.')[0];

let current = getPath(location.pathname);
if (current === '') {
  document
    .querySelector('.burger-menu__list')
    .firstElementChild.classList.add('active');
  console.log('homepage');
} else {
  const navElements = document.querySelectorAll(`.main-navigation a`);
  console.log(navElements);
  for (let el of navElements) {
    if (getPath(el.href) === current) {
      el.parentElement.classList.add('active');
    }
  }
}
