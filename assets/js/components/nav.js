const hamburger = document.getElementById('hamburger');
const exit = document.getElementById('exit');
const menu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    exit.classList.toggle('show');
    menu.classList.toggle('showNav');
    overlay.classList.toggle('show');
    document.body.classList.toggle('overflowHide');
})

exit.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    exit.classList.toggle('show');
    menu.classList.toggle('showNav');
    overlay.classList.toggle('show');
    document.body.classList.toggle('overflowHide');
})