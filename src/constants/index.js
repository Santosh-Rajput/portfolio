import {
  mobile,
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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Real-Time",
    // company_name: "Starbucks",
    icon: html,
    iconBg: "#383E56",
    date: "19 March 2022 - 21 March 2022",
    points: [
      "1st project Real-Time using HTML.",
      "In this page its shows three country's time India,America and Russia.",
    ],
    visit:"https://santosh-rajput.github.io/realTime/",
  },
  {
    title: "TODO-List",
    // company_name: "Tesla",
    icon: web,
    iconBg: "#E6DEDD",
    date: "23 March 2022 - 26 March 2022",
    points: [
     "TODO-List HTML used.",
     "You can maintain your most important task by written down all in one place so you don't forget anything importan.",
    "In this site we can add and delete tasks."
    ],
    visit:"https://santosh-rajput.github.io/Todo-list/",
  },
  {
    title: "E-bike",
    // company_name: "Shopify",
    icon: javascript,
    iconBg: "#383E56",
    date: "28 April 2022 - 2 May 2022",
    points: [
      "Electric vechicle used JS.",
      "Here we can see some e-bike and their details.",
      "Fully Responsive.",
    ],
    visit:"https://santosh-rajput.github.io/e-bike/",
  },
  {
    title: "News Website",
    // company_name: "Meta",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "7 Sep 2022 - 18 Sep 2022",
    points: [
      "Daily updates ,Daynamic,js frame work react.js",
      "News website where we can check daily news and it categorized with sub categories such as :",
      "Entertainment ,Business,General,Health etc.",
    ],
    visit:"https://drive.google.com/file/d/1ifE0OZQyyf9ARgoWpGnntneMCAyYgTqB/view?usp=sharing",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Bike",
    description:
      "Web-based platform that allows users to check e-bike and providing details of bike",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "News Website",
    description:
    "Web application where user can find daily news easily according to thier interests.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
    "About me like my skills,languages i know and projects i worked on and fully responsive with 3d ainmation",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
