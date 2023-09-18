'use client';

import React from 'react';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { SectionHeading } from '../Shared';
import Image from 'next/image';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-4xl mx-auto scroll-mt-28 text-center sm:mb-40"
    >
      <h3 className="text-2xl md:text-3xl mb-10 text-slate-950 dark:text-white">
        My current <span className="highlight">stack</span> of{' '}
        languages/technologies is:
      </h3>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={100}
              height={50}
              className="h-7 rounded-md"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
