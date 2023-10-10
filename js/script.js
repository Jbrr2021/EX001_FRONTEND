document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.getElementById('animation');
    const display = document.getElementById('knowledge');

    arrow.addEventListener('click', function() {
        arrow.classList.toggle('rotate');
        display.classList.toggle('active');
    });
});
