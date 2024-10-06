import { web, scrum, lead, aws } from "../assets";

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
    icon: web,
    company_name: "Freelance",
    iconBg: "#FFFFFF",
    date: "Oct. 2020 - Dec. 2020",
    points: [
      "Designed, developed and published a website for a barbershop / salong called Ahjokeskuksen Parturikampaamo",
    ],
    link: "https://www.ahjokeskuksenpk.fi/",
  },
  {
    title: "Co-founder and Software Developer",
    icon: web,
    company_name: "Kaste Oy",
    iconBg: "#FFFFFF",
    date: "January 2020 - June 2024",
    points: [
      "As a Co-founder of Kaste, a software development company focused on healthcare and research, I led multiple projects from January 2020 to August 2021. We utilized technologies such as React, React Native, Node.js, Express, MongoDB, and Azure.",
      "We provided consulting services for the University of Eastern Finland, as well as Sense4Health Oy",
      "Concurrently, we developed an in-house video streaming and quiz platform aimed at helping university teachers enhance their courses.",
      "Unfortunately, due to a lack of significant funding, all major projects were halted in August 2021. I sold my shares in June 2024.",
    ],
  },
  {
    title: "Web developer",
    icon: web,
    company_name: "Prospectum Oy",
    iconBg: "#FFFFFF",
    date: "August 2021 - June 2022",
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
      "Led the frontend development team and designed the frontend architecture for a large-scale rewrite of the Eventos platform using React and TypeScript.",
      "Managed a team of 3 to 5 developers.",
      "Involved in recruiting new developers and mentoring team members.",
      "Oversaw mobile development, including the Eventos mobile app and ticket scanning integrations.",
    ],
  },
  {
    title: "Consultant",
    icon: lead,
    company_name: "Prospectum Oy",
    iconBg: "#FFFFFF",
    date: "March 2023 - August 2023",
    points: [
      "Continued as a consultant at Prospectum, contributing to frontend development with React and design using Figma.",
      "Assisted with software architecture, development processes, and project management.",
    ],
  },
  {
    title: "Software Developer & Scrum Master",
    icon: scrum,
    company_name: "Bitcomp Oy",
    iconBg: "#FFFFFF",
    date: "March 2023 - March 2024",
    points: [
      "Certified Scrum Master for a team of 5+ developers working mainly with AWS cloud services.",
      "Fullstack developer for the team, completing various tasks with the mentioned technologies",
    ],
  },
  {
    title: "Software Developer & Scrum Master",
    icon: aws,
    company_name: "Sitowise Oy",
    iconBg: "#FFFFFF",
    date: "March 2024 - October 2024",
    points: [
      "As of March 2024 Sitowise has acquired Bitcomp Oy and I have been transferred to Sitowise Oy as a full time employee",
      "Certified Scrum Master for a team of 5+ developers working mainly with AWS cloud services.",
      "Fullstack developer for the team, completing various tasks with the mentioned technologies",
    ],
  },
  {
    title: "Senior Software Developer & Scrum Master",
    icon: aws,
    company_name: "Sitowise Oy",
    iconBg: "#FFFFFF",
    date: "October 2024 - Today",
    points: ["Title promotion for the previous role "],
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
    time: "2023",
  },
];

export { experiences, educations };
