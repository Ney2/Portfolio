const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menu.addEventListener('click', () => {
  mobileMenu.classList.remove('display-mobile');
});
const closeIcon = document.querySelector('header .mobile-menu .close-menu a');
closeIcon.addEventListener('click', () => {
  mobileMenu.classList.add('display-mobile');
});
const links = document.querySelectorAll('header .mobile-menu ul li a');
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    mobileMenu.classList.add('display-mobile');
  });
}