const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menu.addEventListener('click', () => {
  mobileMenu.classList.remove('display-mobile');
});

const closeIcon = document.querySelector('header .mobile-menu .close-menu a');
closeIcon.addEventListener('click', () => {
  mobileMenu.classList.add('display-mobile');
});
