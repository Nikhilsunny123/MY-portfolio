import netflix from "../images/projects/netflix.png";

import hulu from "../images/projects/hulu.png";
import employee from "../images/projects/employee.png";
import CourseVera from "../images/projects/coursevera.png";

import react from "../images/skills/react.png";
import html from "../images/skills/html.png";

import css from "../images/skills/css.png";

import JavaScript from "../images/skills/javascript.png";

import MySQL from "../images/skills/mysql.png";

import BootStrap from "../images/skills/bootstrap.png";
import express from "../images/skills/express.png";

import node from "../images/skills/node.png";

import Tailwind from "../images/skills/tailwind.png";

import reduxpng from "../images/skills/redux.png";
import next from "../images/skills/js.png";

export const projectList = [
  {
    id: "1",
    image: { ...hulu },
    name: "Hulu Demo",
    description: "HTML 5, CSS, JavaScript, React.js",
    projectLink: "https://github.com/Nikhilsunny123/hulu-demo-clone",
    liveLink: "https://hulu-demo-clone.vercel.app/",
  },
  {
    id: "2",
    image: { ...CourseVera },
    name: "CourseVera Website Admin dashboard",
    description:
      "HTML 5, CSS, React Bootstrap, JavaScript, React.js, Express.js ",
    projectLink: "https://github.com/Nikhilsunny123/CourseVeraFull",
    liveLink: "https://github.com/Nikhilsunny123/CourseVeraFull",
  },
  {
    id: "3",
    image: { ...employee },
    name: "Employee management System",
    description: "HTML 5, CSS, JavaScript, React.js,Redux,Bootstrap",
    projectLink:
      "https://github.com/Nikhilsunny123/Employee-Mangement-Using-React-Redux",
    liveLink:
      "https://github.com/Nikhilsunny123/Employee-Mangement-Using-React-Redux",
  },
];

export const skillsdata = [
  {
    id: 1,
    name: "React.JS",
    image: { ...react },
  },
  {
    id: 2,
    name: "HTML",
    image: { ...html },
  },
  {
    id: 3,
    name: "CSS",
    image: { ...css },
  },
  {
    id: 4,
    name: "JavaScript",
    image: { ...JavaScript },
  },
  {
    id: 5,
    name: "Next.js",
    image: { ...next },
  },

  {
    id: 7,
    name: "Tailwind",
    image: { ...Tailwind },
  },
  {
    id: 8,
    name: "Redux",
    image: { ...reduxpng },
  },
  {
    id: 9,
    name: "Node.js",
    image: { ...node },
  },
  {
    id: 10,
    name: "Express.js",
    image: { ...express },
  },
  {
    id: 11,
    name: "MySql",
    image: { ...MySQL },
  },
];
