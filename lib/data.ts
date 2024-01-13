import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FoodVilla from "@/public/FoodVilla.png";
import AdvancedYoutubee from "@/public/AdvancedYoutubee.png";
import KiraMovie from "@/public/KiraMovie.png";

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
    sourceCode:"https://github.com/thisissuman/advanced-youtube"
  },
  {
    title: "FoodVila App",
    description:
      "Food Villa App using React.js and Parcel Bundle",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: FoodVilla,
    sourceCode:"https://github.com/thisissuman/KiraMovix"
  },
  {
    title: "Kira Movie",
    description:
      "Explore movies with ease using my React Movie Browsing Project! 🎬 Discover, click, watch – simple and snappy! 🚀🌟",
    tags: ["React", "Redux", "IMDB API", "Tailwind", "Framer"],
    imageUrl: KiraMovie,
    sourceCode:"https://github.com/thisissuman/KiraMovix"
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
