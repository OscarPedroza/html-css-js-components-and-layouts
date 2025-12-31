const btnMenu = document.getElementById('btn-menu');
const menuList = document.getElementById('menu-list');

const searchToggle = document.getElementById('search-toggle');
const navbarSearch = document.getElementById('navbar-search');

/**
 * Responsive menu
 */

btnMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
  btnMenu.classList.toggle('active');

  navbarSearch.classList.remove('active');
});

/**
 * Search toggle
 */

searchToggle.addEventListener('click', () => {
  navbarSearch.classList.toggle('active');

  menuList.classList.remove('active');
  btnMenu.classList.remove('active');
});
