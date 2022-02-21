const navbarMenu = document.querySelector('.navbar-menu');
const navToggle = document.querySelector('.navbar__mobile-nav--toggle');

navToggle.addEventListener('click', () => {
  const visibility = navbarMenu.getAttribute('data-visible');
  if (visibility === 'false') {
    navbarMenu.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    navbarMenu.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

const navbarItems = document.querySelector('.navbar__menu-list').children;

[...navbarItems].forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');

    item.classList.add('active');
  });
});
