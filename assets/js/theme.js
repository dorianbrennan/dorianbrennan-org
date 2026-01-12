// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcon(theme);
}

function updateIcon(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '☀'; // Sun in dark mode (click to go light)
    } else {
        themeToggle.textContent = '☾'; // Moon in light mode (click to go dark)
    }
}

function getTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return prefersDark.matches ? 'dark' : 'light';
}

const initialTheme = getTheme();
setTheme(initialTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});
