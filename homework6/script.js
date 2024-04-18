const menuActive = document.querySelector('.menu');
const burger = document.querySelector('burger');
const menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    menuActive.classList.toggle('hide');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);