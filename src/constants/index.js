import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  disprz,
  bootstrap,
  material,
  mysql,
  postman,
  vsc,
  express,
  github,
  net,
  dalleClone,
  quizGame,
  contact,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Development',
    icon: web,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'Responsive Web Design',
    icon: mobile,
  },
  {
    title: 'Custom Software Development',
    icon: creator,
  },
];

const frontEndTechnologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Boot strap',
    icon: bootstrap,
  },
  {
    name: 'Material UI',
    icon: material,
  },
];

const backEndTechnologies = [
  {
    name: '.Net',
    icon: net,
  },
  {
    name: 'Ms SQL',
    icon: mysql,
  },
  {
    name: 'Express JS',
    icon: express,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  }
];

const otherTechnologies = [
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Git hub',
    icon: github,
  },
  {
    name: 'VSC',
    icon: vsc,
  },
  {
    name: 'Postman',
    icon: postman,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Associate Software Engineer ASE',
    company_name: 'Disprz',
    icon: disprz,
    iconBg: '#383E56',
    date: 'Jun 2021 - Aug 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Software Engineer SE',
    company_name: 'Disprz',
    icon: disprz,
    iconBg: '#E6DEDD',
    date: 'Aug 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js,.Net and other related technologies.',
      'Focusing primarily on backend development with .NET Core/Framework, implementing Test-Driven Development (TDD), writing unit tests, and performing integration testing.',
      'Optimizing SQL queries for improved performance and efficiency.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Dalle clone',
    description:
      'DALL·E takes artificial intelligence and creativity to new heights by demonstrating the ability to generate images from textual descriptions',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'openAi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongo DB',
        color: 'orange-text-gradient',
      },
    ],
    image: dalleClone,
    source_code_link: 'https://github.com/alson26899/dalle-clone-front-end-',
  },
  {
    name: 'Quiz Game',
    description:
      'A quiz game is a form of interactive entertainment that challenges participants with a series of questions and puzzles to test their knowledge & skills',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Framer motion',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: quizGame,
    source_code_link: 'https://github.com/alson26899/Quiz-Game',
  },
  {
    name: 'Contact Manager',
    description:
      'A contact manager MongoDB project is a database application designed to help users efficiently store, organize, and manage their contacts or address book information.',
    tags: [
      {
        name: 'Node JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongo DB',
        color: 'green-text-gradient',
      },
      {
        name: 'Express Js',
        color: 'pink-text-gradient',
      },
    ],
    image: contact,
    source_code_link: 'https://github.com/alson26899/MyContacts',
  },
];

export {
  services,
  frontEndTechnologies,
  backEndTechnologies,
  otherTechnologies,
  experiences,
  testimonials,
  projects,
};
