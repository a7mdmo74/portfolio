import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

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
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
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
