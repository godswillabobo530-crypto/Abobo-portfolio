// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;

    // Apply saved theme (if any)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') body.classList.add('dark-mode');

    if (!toggleButton) return;

    const updateButton = () => {
        const isDark = body.classList.contains('dark-mode');
        toggleButton.textContent = isDark ? '☀️' : '🌙';
        toggleButton.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    };

    updateButton();

    toggleButton.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateButton();
    });
});
