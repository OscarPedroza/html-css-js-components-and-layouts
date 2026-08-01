/**
 * Parallax effect
 */

const heroSection = document.getElementById('hero-section');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  heroSection.style.backgroundPosition = `center calc(50% + ${scrollPosition * 0.5}px)`;

  // console.log(scrollPosition);
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

if (btnTheme) {
  btnTheme.addEventListener('click', () => {
    html.classList.toggle('dark');

    // Save theme in localStorage
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Initialize Lucide Icons
lucide.createIcons();
