// Menu button
const btnToggle = document.querySelector('.navbar__btn-toggle');
const navbarMenu = document.querySelector('.navbar__menu');

btnToggle.addEventListener('click', () => {
	navbarMenu.classList.toggle('active');
	btnToggle.classList.toggle('active');
});

// Dark Light mode
const root = document.documentElement;
const btnModeToggle = document.getElementById('btn-mode-toggle');

root.classList.toggle('dark-mode', localStorage.getItem('mode') === 'dark');

console.log(localStorage.getItem('mode'));

btnModeToggle.addEventListener('click', () => {
	const isDark = root.classList.toggle('dark-mode');
	localStorage.setItem('mode', isDark ? 'dark' : 'light');
});
