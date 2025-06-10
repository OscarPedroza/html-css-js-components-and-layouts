/**
 * Responsive menu
 */

const btnMenu = document.getElementById('btn-menu');
const navbarMenu = document.querySelector('.navbar__menu');

btnMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  btnMenu.classList.toggle('active');
});

/**
 * Dark Light mode
 */

const root = document.documentElement;
const btnModeToggle = document.getElementById('btn-mode-toggle');

root.classList.toggle('dark-mode', localStorage.getItem('mode') === 'dark');

btnModeToggle.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark-mode');
  localStorage.setItem('mode', isDark ? 'dark' : 'light');
});
