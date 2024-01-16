import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FoodVilla from "@/public/FoodVilla.png";
import AdvancedYoutubee from "@/public/AdvancedYoutubee.png";
import KiraMovie from "@/public/KiraMovie.png";
import html from '@/public/html.png';
import express from '@/public/express.png';
import firebase from '@/public/Firebase.png';
import framer from '@/public/framer.png';
import github from '@/public/github.png';
import figma from '@/public/figma.png';
import node from '@/public/node-js.png';
import oracle from '@/public/oracle.svg';
import mysql from '@/public/mysql.png';
import react from '@/public/react.png';
import mui from '@/public/mui.png';
import next from '@/public/next.png';
import tailwind from '@/public/tailwind.png';
import ts from '@/public/ts.png';
import js from '@/public/js.png';
import redux from '@/public/redux.png';
import reactquery from '@/public/reactquery.png';

export const links = [
  {
    name: "Home",
    hash: "#home",  
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.tech Graduated",
    location: "RIT Berhampur",
    description:
      "I graduated from RIT Berhampur. I immediately found a job as a Project Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Project Enginner",
    location: "CustomerXps Software",
    description:
      "I worked as a Project Engineer for 3 years here. I also upskilled to the Frontend Devlopment.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Senior Software Developer",
    location: "CustomerXps Software",
    description:
      "I'm now a Senior Software Developer working in CustomerXps. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Advanced Youtube",
    description:
      "Advanced Youtube App with live chat and infinite scroll feature for your viewing pleasure",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: AdvancedYoutubee,
    sourceCode:"https://github.com/thisissuman/advanced-youtube",
    liveDemo:"https://a-new-modern-website.vercel.app/"
  },
  {
    title: "FoodVila App",
    description:
      "Food Villa App using React.js and Parcel Bundle",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: FoodVilla,
    sourceCode:"https://github.com/thisissuman/KiraMovix",
    liveDemo:"https://ai-image-generator-fse1.vercel.app/ "
  },
  {
    title: "Kira Movie",
    description:
      "Explore movies with ease using my React Movie Browsing Project! 🎬 Discover, click, watch – simple and snappy! 🚀🌟",
    tags: ["React", "Redux", "IMDB API", "Tailwind", "Framer"],
    imageUrl: KiraMovie,
    sourceCode:"https://github.com/thisissuman/KiraMovix",
    liveDemo:"https://kira-movix.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;


export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: html,
    width: 40,
    height: 40,
  },
  
   {
    skill_name: "Java Script",
    Image: js,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwind,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Material UI",
    Image: mui,
    width: 40,
    height: 40,
  },
  {
    skill_name: "React",
    Image: react,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Redux",
    Image: redux,
    width: 40,
    height: 40,
  },
  {
    skill_name: "React Query",
    Image: reactquery,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Type Script",
    Image: ts,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Next js 13",
    Image: next,
    width: 40,
    height: 40,
  }, 
];

 export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: node,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Express js",
    Image: express,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Oracle",
    Image: oracle,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: firebase,
    width: 40,
    height: 40,
  },
  {
    skill_name: "My SQL",
    Image: mysql,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Github",
    Image: github,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Figma",
    Image: figma,
    width: 40,
    height: 40,
  },

];