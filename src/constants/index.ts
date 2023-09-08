import { web, scrum, mobile, lead, js, react } from "../assets";

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
    id: "education",
    title: "Education",
  },
];

const experiences = [
  {
    title: "Web developer",
    icon: js,
    company_name: "Freelance",
    iconBg: "#FFFFFF",
    date: "Oct. 2020 - Dec. 2020",
    points: [
      "Designed, developed and published a website for a barbershop / salong called Ahjokeskuksen Parturikampaamo",
    ],
    link: "https://www.ahjokeskuksenpk.fi/",
  },
  {
    title: "Founder of Kaste Oy",
    icon: web,
    company_name: "Kaste Oy",
    iconBg: "#FFFFFF",
    date: "Jan. 2020 - Today",
    points: [
      "Kaste is a company that provides software development services, mainly for health care and research.",
      "We have worked with React, React Native, Node.js, Express, MongoDB, Azure and many other technologies..",
      "Our business run out of significant funding in 2021 so all the major projects got halted",
    ],
  },
  {
    title: "Fullstack developer",
    icon: web,
    company_name: "Kaste Oy / Freelance",
    iconBg: "#FFFFFF",
    date: "Feb. 2021 - March 2021",
    points: [
      "Designed, developed and published a private website for a group of researchers working for the university of eastern finland",
    ],
  },
  {
    title: "Mobile development consultant",
    icon: mobile,
    company_name: "Sense4Health Oy / Kaste Oy",
    iconBg: "#FFFFFF",
    date: "Jan 2021 - May 2021",
    points: [
      "Consulting for a mobile application development project made with React Native",
    ],
  },
  {
    title: "Web developer",
    icon: react,
    company_name: "Prospectum Oy",
    iconBg: "#FFFFFF",
    date: "Aug 2021 - June 2022",
    points: [
      "Frontend development with React, mobile development with React Native and design with Figma",
    ],
  },
  {
    title: "Lead frontend developer",
    company_name: "Prospectum Oy",
    icon: lead,
    iconBg: "#FFFFFF",
    date: "June 2022 - March 2023",
    points: [
      "Leading the frontend development team. Frontend architecture design",
      "Frontend development with React, mobile development with React Native",
      "Also helped with the recruitment of new developers",
    ],
  },
  {
    title: "Consultant",
    icon: lead,
    company_name: "Prospectum Oy",
    iconBg: "#FFFFFF",
    date: "March 2023 - Today",
    points: [
      "Frontend development with React and design with Figma",
      "various other tasks related to software architecture, development process and project management",
    ],
  },
  {
    title: "Certified Scrum Master",
    icon: scrum,
    company_name: "Bitcomp Oy",
    iconBg: "#FFFFFF",
    date: "March 2023 - Today",
    points: [
      "Certified Scrum Master for a team of 5+ developers working mainly with React, AWS, Typescript and Java",
      "Also a part time developer for the team completing various tasks with the mentioned technologies",
    ],
  },
];

const educations = [
  {
    name: "Jyväskylän Lyseo",
    description: "High school graduate",
    time: "2012 - 2015",
  },
  {
    name: "Savonia",
    description: "Bachelor of Engineering, Software Engineering",
    time: "2018 - 2022",
  },
  {
    name: "Scrum Alliance",
    description: "Scrum Master certificate (CSM)",
    time: "2023 - Expires in March 2025",
  },
];

export { experiences, educations };
