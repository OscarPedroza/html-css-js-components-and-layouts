/**
 * Responsive menu
 */

const btnMenu = document.getElementById('btn-menu');
const menuList = document.getElementById('menu-list');

btnMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
  btnMenu.classList.toggle('active');

  navbarButtons.classList.remove('active');
});

/**
 * Login toggle
 */

const btnLogin = document.getElementById('btn-login');
const navbarButtons = document.getElementById('navbar-buttons');

btnLogin.addEventListener('click', () => {
  navbarButtons.classList.toggle('active');

  menuList.classList.remove('active');
  btnMenu.classList.remove('active');
});
