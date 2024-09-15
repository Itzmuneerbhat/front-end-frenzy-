document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('focus', () => {
            link.parentElement.classList.add('focused');
        });

        link.addEventListener('blur', () => {
            link.parentElement.classList.remove('focused');
        });
    });
});
