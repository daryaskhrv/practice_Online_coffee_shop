const headerIcon = document.querySelector('.header__icon');
const headerNav = document.querySelector('.header__nav');

headerIcon.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    headerNav.classList.toggle('_active');
    headerIcon.classList.toggle('_active');
  });