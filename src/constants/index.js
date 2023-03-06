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
  pixelspace,
  databox,
  chattycathy,
  musicNotes,
  claydazing,
  garnish,
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
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AWS Practitioner",
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
    title: "Front End Developer",
    company_name: "Clay Dazing",
    icon: claydazing,
    iconBg: "#fff",
    link: "https://www.claydazing.com/",
    date: "August 2022 - Current",
    points: [
      "Redesigned eCommerce website to maximize responsiveness—leading to increased sales and higher SEO/visibility.",
      "Developed built-in search functionality garnering a more optimized customer shopping experience.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Garnish Music Production School - LA Chapter",
    icon: garnish,
    iconBg: "#383E56",
    // iconBg: "#E6DEDD",
    link: "https://www.garnishmusicproduction.com/",
    date: "August 2022 - Current",
    points: [
      "Developed a project-management system for the LA chapter of Garnish School of Music Production.",
      "Designed a fully-functional login and registration system to streamline task management amongst employees, complete with authentication and authorization.",
      "Integrated roles and permissions tool to provide a multi-tiered approach that optimizes the overall managerial-approval process.",
    ],
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
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
    name: "Pixel Space",
    description:
      "Full stack text-to-image generator, developed for users to share AI images with the community — Deployed with AWS.",
    tags: [
      {
        name: "full stack",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
      {
        name: "openAI",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: pixelspace,
    source_code_link:
      "https://github.com/keithhetrick/PixelSpace-FullStack-App",
  },
  {
    name: "Databox",
    description:
      "Full stack cloud based file hosting and storage service. Project currently in development.",
    tags: [
      {
        name: "full stack",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
    ],
    image: databox,
    source_code_link: "https://github.com/keithhetrick/databox",
  },
  {
    name: "Chatty Cathy",
    description:
      "Full stack chatbot tool developed to help users jump start their creative process — Deployed with AWS.",
    tags: [
      {
        name: "full stack",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "openAI",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
    ],
    image: chattycathy,
    source_code_link: "https://github.com/keithhetrick/open-ai-chatty-cathy",
  },
  {
    name: "musicNotes",
    description:
      "Full stack project-management system for the LA chapter of Garnish School of Music Production",
    tags: [
      {
        name: "full stack",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
    ],
    image: musicNotes,
    source_code_link: "https://github.com/keithhetrick/musicNotes",
  },
];

export { services, technologies, experiences, testimonials, projects };
