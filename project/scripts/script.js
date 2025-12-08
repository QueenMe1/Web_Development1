const nav = document.getElementById('nav');
const menuButton = document.querySelector('.nav-bar');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active')
});