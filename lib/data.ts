import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title:
      'Graduated From faculty of computer and information science - Mansoura University',
    location: 'Mansoura, EG',
    description: 'I graduated after 4 years of studying with grade B.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Front-End Developer',
    location: 'UpWork',
    description:
      'I have been working as a front-end developer on UpWork for 2 years. I have worked on two projects with different technologies. I have worked with React, Next.js, Tailwind, Redux, Framer Motion, Prisma, MongoDB, and more.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
] as const;

export const skillsData = [
  {
    name: 'HTML',
    icon: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white',
  },
  {
    name: 'CSS',
    icon: 'https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white',
  },
  {
    name: 'SASS',
    icon: 'https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white',
  },
  {
    name: 'JavaScript',
    icon: 'https://img.shields.io/badge/Javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E',
  },
  {
    name: 'TypeScript',
    icon: 'https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white',
  },
  {
    name: 'React',
    icon: 'https://img.shields.io/badge/Reactjs-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB',
  },
  {
    name: 'Redux',
    icon: 'https://img.shields.io/badge/-Redux-05122A?style=flat-square&logo=redux&logoColor=white',
  },
  {
    name: 'Next.js',
    icon: 'https://img.shields.io/badge/Nextjs-black?style=flat-square&logo=next.js&logoColor=white',
  },
  {
    name: 'Tailwind',
    icon: 'https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwindcss&logoColor=white',
  },
  {
    name: 'Node.js',
    icon: 'https://img.shields.io/badge/Nodejs-6DA55F?style=flat-square&logo=node.js&logoColor=white',
  },
  {
    name: 'Express',
    icon: 'https://img.shields.io/badge/Expressjs-6DA55F?style=flat-square&logo=express&logoColor=white',
  },
  {
    name: 'MongoDB',
    icon: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white',
  },
  {
    name: 'Git',
    icon: 'https://img.shields.io/badge/-Git-05122A?style=flat-square&logo=git&logoColor=white',
  },
  {
    name: 'Prisma',
    icon: 'https://img.shields.io/badge/-Prisma-05122A?style=flat-square&logo=prisma&logoColor=white',
  },
  {
    name: 'GraphQL',
    icon: 'https://img.shields.io/badge/-GraphQL-05122A?style=flat-square&logo=GraphQL&logoColor=white',
  },
  {
    name: 'Framer Motion',
    icon: 'https://img.shields.io/badge/-Framer%20Motion-05122A?style=flat-square&logo=framer&logoColor=white',
  },
] as const;
