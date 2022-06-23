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
    image: './img/Pic.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-1',
      modalContainer: 'modal-container1',
      modalCloseBtn: 'modal-close-btn1',
    },
  },
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
    image: './img/Pic.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-1',
      modalContainer: 'modal-container1',
      modalCloseBtn: 'modal-close-btn1',
    },
  },
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
    image: './img/Pic.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-1',
      modalContainer: 'modal-container1',
      modalCloseBtn: 'modal-close-btn1',
    },
  },
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
    image: './img/Pic.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-1',
      modalContainer: 'modal-container1',
      modalCloseBtn: 'modal-close-btn1',
    },
  },
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
    image: './img/Pic.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-1',
      modalContainer: 'modal-container1',
      modalCloseBtn: 'modal-close-btn1',
    },
  },
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
    image: './img/Pic.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-1',
      modalContainer: 'modal-container1',
      modalCloseBtn: 'modal-close-btn1',
    },
  },
];
document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.querySelector('.posts');
  let projectContent;
  let projectLanguages;
  let projectCardContainer;
  let modalContent;
  let modalContainer;
  projects.forEach((project) => {
    projectLanguages = project.technologies.map(
      (lang) => `<li>${lang}</li>`,
    );
    projectContent = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <ul class="programming-languages-1">
                  ${projectLanguages.join('')}
                </ul>
                <a 
                class="button-2 ${project.privateClasses.seeProjectBtn}" target="blank">See Project
                </a>
              `;

    projectCardContainer = document.createElement('div');
    projectCardContainer.innerHTML = projectContent;
    projectCardContainer.setAttribute('class', 'work-pic-2', 'work-lists', 'posts');
    projectsContainer.appendChild(projectCardContainer);

    modalContent = `
          <div class="modal-content">
            <div class="modal-header">
              <h2>${project.title}</h2>
              <button class="modal-close-btn ${project.privateClasses.modalCloseBtn}">&times;</button>
            </div>
            <ul class="modal-langs">
              ${projectLanguages.join('')}
            </ul>
            <div class="modal-details">
              <div> 
                <img  class="modal-image" src=${project.image} alt="Project Image">
              </div>
                  <div class="modal-description">
                    <div>${project.details}</div>
                    <div class="modal-buttons">
                      <form action="https://ney2.github.io/Portfolio/" method="get" target="_blank">
                        <button type="submit" class="Live">See Live</button>   
                          </form>
                          <form action="https://github.com/Ney2/Portfolio" method="get" target="_blank">
                          <button type="submit" class="Source">See Source</button>
                          </form>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          `;
    modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalContent;
    modalContainer.setAttribute('class', `modal ${project.privateClasses.modalContainer}`);
    modalContainer.setAttribute('id', `${project.privateClasses.modalContainer}`);
    projectsContainer.appendChild(modalContainer);
  });
});

document.addEventListener('click', (event) => {
  let modalContainer;
  projects.forEach((project) => {
    modalContainer = document.getElementById(project.privateClasses.modalContainer);
    if (event.target.classList.contains(project.privateClasses.seeProjectBtn)) {
      modalContainer.style.display = 'block';
    }
    if (event.target.classList.contains(project.privateClasses.modalCloseBtn)) {
      modalContainer.style.display = 'none';
    }
  });
});
const email = document.getElementById('email').value; const error = document.querySelector('.error');
