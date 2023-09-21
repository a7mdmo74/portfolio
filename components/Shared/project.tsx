'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type ProjectProps = {
  id: string;
  name: string;
  description: string;
  url: string;
  code: string;
  image: string;
  tools: string[];
};

export default function Project({
  id,
  name,
  description,
  url,
  code,
  image,
  tools,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 h-[28rem]">
        <div className="flex flex-col h-full">
          <Image
            src={image}
            alt="Project I worked on"
            quality={95}
            width={1136}
            height={840}
            className="block w-full h-52 rounded-t-lg shadow-2xl"
          />

          <div className="flex flex-col space-y-2 p-3">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <div className="flex items-center justify-between mt-5 p-3">
              <Link
                href={url}
                className="text-lg font-semibold px-3 py-1 text-black/70 hover:text-black/90 dark:text-white/70 dark:hover:text-white/90 border rounded-lg transition"
              >
                View
              </Link>
              <Link
                href={code}
                className="text-lg font-semibold px-3 py-1 text-black/70 hover:text-black/90 dark:text-white/70 dark:hover:text-white/90 border rounded-lg transition bg-black/10 dark:bg-white/20"
              >
                Code
              </Link>
            </div>
            <ul className="flex flex-wrap gap-1 mt-2">
              {tools.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
