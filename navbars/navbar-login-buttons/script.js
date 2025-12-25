/**
 * Responsive menu
 */

const btnMenu = document.getElementById('btn-menu');
const menuList = document.getElementById('menu-list');

btnMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
  btnMenu.classList.toggle('active');

  menuButtons.classList.remove('active');
});

/**
 * Login toggle
 */

const btnLogin = document.getElementById('btn-login');
const menuButtons = document.getElementById('menu-buttons');

btnLogin.addEventListener('click', () => {
  menuButtons.classList.toggle('active');

  menuList.classList.remove('active');
  btnMenu.classList.remove('active');
});
