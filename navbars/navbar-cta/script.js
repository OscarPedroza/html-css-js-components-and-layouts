/**
 * Responsive menu
 */

const btnMenu = document.getElementById('btn-menu');
const menuList = document.getElementById('menu-list');

btnMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
  btnMenu.classList.toggle('active');
});
