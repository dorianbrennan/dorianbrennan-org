// Theme toggle - always follows system preference
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function updateIcon(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '☀'; // Sun in dark mode
    } else {
        themeToggle.textContent = '☾'; // Moon in light mode
    }
}

function applySystemTheme() {
    const theme = prefersDark.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    updateIcon(theme);
}

// Apply system theme on load
applySystemTheme();

// Listen for system theme changes
prefersDark.addEventListener('change', applySystemTheme);

// Toggle button still works but doesn't save preference
themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    updateIcon(newTheme);
});
