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

const projects = [
  {
    title: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry´s standard',
    technologies: ['html', 'bootstrap', 'css'],
    details:
              `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
              with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax 
              map lapora verita.
              `,
    LiveLink: '',
    SourceLink: '',
    image: './img/snapshoot.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-1',
      modalContainer: 'modal-container1',
      modalCloseBtn: 'modal-close-btn1',
    },
  }