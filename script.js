document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') body.classList.add('dark-mode');

    const updateButton = () => {
        const isDark = body.classList.contains('dark-mode');
        toggleButton.textContent = isDark ? '☀️' : '🌙';
        toggleButton.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    };

    if (toggleButton) {
        updateButton();
        toggleButton.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateButton();
        });
    }

    if (form && status) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name')?.toString().trim() || 'there';
            status.textContent = `Thanks ${name}! Your message has been prepared for delivery.`;
            form.reset();
        });
    }
});
