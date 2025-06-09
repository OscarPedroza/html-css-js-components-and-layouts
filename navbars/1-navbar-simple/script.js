const btnToggle = document.querySelector('.navbar__btn-toggle');
const navbarMenu = document.querySelector('.navbar__menu');

btnToggle.addEventListener('click', () => {
	navbarMenu.classList.toggle('active');
	btnToggle.classList.toggle('active');
});
