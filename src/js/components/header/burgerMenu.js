const iconMenu = document.querySelector('.burger-btn');
if (iconMenu) {
  const burgerMenu = document.querySelector('.burger-menu');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
  });
}
