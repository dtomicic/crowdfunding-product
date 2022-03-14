const HAMBURGER = document.getElementById('hamburger');
const EXIT = document.getElementById('exit');
const MENU = document.getElementById('navMenu');
const OVERLAY = document.getElementById('overlay');

HAMBURGER.addEventListener('click', () => {
    HAMBURGER.classList.toggle('show');
    EXIT.classList.toggle('show');
    MENU.classList.toggle('showNav');
    OVERLAY.classList.toggle('show');
    document.body.classList.toggle('overflowHide');
})

EXIT.addEventListener('click', () => {
    HAMBURGER.classList.toggle('show');
    EXIT.classList.toggle('show');
    MENU.classList.toggle('showNav');
    OVERLAY.classList.toggle('show');
    document.body.classList.toggle('overflowHide');
})