const navbarItems = document.querySelectorAll('.navbar__list-item');
const navbarList = document.querySelector('.navbar__list');
const activeClassName = 'navbar__list-item--active';

navbarItems.forEach((item) => {
  item.addEventListener('click', () => {
    const current = document.querySelector('.navbar__list-item--active');
    current.className = current.className.replace(activeClassName, '');
    if (item.classList.contains(activeClassName)) item.classList.remove;
    item.classList.add(activeClassName);
  });
});
