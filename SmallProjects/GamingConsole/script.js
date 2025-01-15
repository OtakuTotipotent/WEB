const body = document.body;
const toggle = document.getElementById('theme-mode-check');

toggle.addEventListener('change', (e) => {
    body.classList.toggle('light-mode');
});