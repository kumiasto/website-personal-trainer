const menuBtn = document.querySelector('[data-button]');
const btnOpen = document.querySelector('.menu__button-open');
const btnClose = document.querySelector('.menu__button-close');
const ul = document.querySelector('.menu__ul');
const socialIcon = document.querySelector('.menu__social-icon');
const menuUrl = document.querySelector('.menu__url');
const header = document.querySelector('.menu__header');
const nav = document.querySelector('.menu__nav');
const contentBtn = document.querySelector('.content__button');


function clickButton() {
    menuBtn.classList.toggle('is-active');
    ul.classList.toggle('menu__ul--hidden');
    socialIcon.classList.toggle('menu__social-icon--hidden')
    menuUrl.classList.toggle('menu__url--blue');
    header.classList.toggle('menu__header--white');
    nav.classList.toggle('menu__nav--hidden');
    btnOpen.classList.toggle('menu__button--hidden');
    btnClose.classList.toggle('menu__button--hidden');

    if (contentBtn === null) return;
    else {
        contentBtn.classList.toggle('.content__button--hidden')
            ? contentBtn.style.opacity = 0
            : contentBtn.style.opacity = 1;
    }
}
menuBtn.addEventListener('click', clickButton);