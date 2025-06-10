/**
 * Responsive menu
 */

const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnMenu.classList.toggle('active');
});

/**
 * Dark Light mode
 */

const root = document.documentElement;
const btnMode = document.getElementById('btn-mode');

root.classList.toggle('dark-mode', localStorage.getItem('mode') === 'dark');

btnMode.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark-mode');
  localStorage.setItem('mode', isDark ? 'dark' : 'light');
});
