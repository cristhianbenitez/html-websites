const navbarItem = document.querySelectorAll('.navigation__list-item');
const navbarOpenClass = 'navigation__list-item--dropdown-open';

navbarItem.forEach((item) => {
  item.addEventListener('click', function () {
    navbarItem.forEach((item) => item.classList.remove(navbarOpenClass));
    this.classList.toggle(navbarOpenClass);
  });
});

const navbarMenu = document.querySelector('.navigation__menu');
const burgerBtn = document.querySelector('.navigation__burger');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('navigation__burger--open');
  navbarMenu.classList.toggle('navigation__menu--open');
});
