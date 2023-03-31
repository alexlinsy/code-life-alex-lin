import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Alex Lin', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio of Alex Lin', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Alex Lin',
  subtitle: 'A Front End Developer, Music Lover, DJ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Front end developer with great passion and self-motivation.',
  paragraphTwo:
    'Extensive coding experience with JavaScript, React, CSS libraries and front end IDE. Strong background with agile development and version control system(Git, svn)',
  paragraphThree:
    'Self-learning new front end skills and frameworks to adjust the rapid change of front end development.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'sbe.jpg',
    title: 'SBE-My Account',
    info: 'SBE Hotels Account Management System',
    info2: '',
    url: 'https://www.sbe.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'brightline.jpg',
    title: 'Bright Line Train Mobile App',
    info: 'Mobile app for Bright line train, an express inter-city rail system in Florida',
    info2: 'Coding on React Native',
    url: 'https://www.gobrightline.com/app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'simplycast.jpg',
    title: 'Simplycast Home Page',
    info: 'Home page of Simplycast company, an all in one engagement automation platform',
    info2: '',
    url: 'https://simplycast.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have web or mobile projects for me?',
  btn: '',
  email: 'shaoyilin@dal.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shaoyi-lin-831054114/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/alexlinsy',
    },
    {
      id: uuidv1(),
      name: 'gitlab',
      url: 'https://gitlab.com/alexlinsy',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/tenderreed/?hl=zh-cn',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
