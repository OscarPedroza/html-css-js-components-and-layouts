/**
 * Responsive menu
 */

const btnMenu = document.getElementById('btn-menu');
const menuList = document.getElementById('menu-list');

btnMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
  btnMenu.classList.toggle('active');
});

/**
 * Menu dropdown
 */

const dropdowns = document.querySelectorAll('.menu__item-dropdown');

dropdowns.forEach((dropdown) => {
  const linkDropdown = dropdown.querySelector('.menu__link--dropdown');
  const submenu = dropdown.querySelector('.menu__submenu');
  const dropdownIcon = dropdown.querySelector('.dropdown-icon');

  linkDropdown.addEventListener('click', () => {
    submenu.classList.toggle('active');
    dropdownIcon.classList.toggle('up');
  });
});


/**
 * Theme toggle
 */

const btnTheme = document.getElementById('btn-theme');
const savedTheme = localStorage.getItem('theme');
const html = document.documentElement;

if (savedTheme === 'dark') {
  html.classList.add('dark');
}

btnTheme.addEventListener('click', () => {
  html.classList.toggle('dark');

  // Save theme in localStorage
  const isDark = html.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Initialize Lucide Icons
lucide.createIcons();
