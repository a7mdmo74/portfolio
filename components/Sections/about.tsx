/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import SectionHeading from '../Shared/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-5xl mx-auto text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <h3 className="text-xl md:text-3xl mb-10 text-slate-950/70 dark:text-white/70">
        if you're{' '}
        <span className="text-slate-950 dark:text-white font-semibold">
          wondering
        </span>{' '}
        who I am...
      </h3>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-xl text-slate-950/70 font-light leading-loose dark:text-white/70 mb-[1.4rem]">
          Hi, my name is <span className="highlight">Ahmed Muhammad</span>, i'm
          22 years old. I got a bachelor of Computer Science at Mansoura
          University (2019 - 2023). Besides, i am really passionate about{' '}
          <span className="highlight">Javascript</span> and{' '}
          <span className="highlight">Web Development</span>.
        </p>
        <p className="text-xl text-slate-950/70 font-light leading-loose dark:text-white/70 mb-[1.4rem]">
          I started learning web programming in 2020. Before that, I had a
          background in C# / python programming so getting access to javascript
          is not difficult. I have been in love with javascript since I did not
          know it, I like it. I searched many different sources to learn about
          this language for example:{' '}
          <span className="underline">Developer mozilla</span>,{' '}
          <span className="underline">You Don't Know JS</span>.... I also took
          some online courses like{' '}
          <span className="underline">React The Complete Guide in Redux</span>
          ...
        </p>
        <p className="text-xl text-slate-950/70 font-light leading-loose dark:text-white/70 mb-[1.4rem]">
          In December 2022, when school was almost done, I decided to do an
          internship at a company to experience what a real environment is like.
          I learned a lot from my boss and colleagues while working.
        </p>
        <p className="text-xl text-slate-950/70 font-light leading-loose dark:text-white/70 mb-[1.4rem]">
          I want to be a good person in the field that I have chosen so I tried
          a lot, worked hard.
        </p>
      </div>
    </motion.section>
  );
}
