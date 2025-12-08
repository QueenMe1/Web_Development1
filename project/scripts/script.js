const nav = document.getElementById('#nav');
const menuButton = document.getElementById('.nav-bar');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active')
});