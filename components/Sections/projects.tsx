'use client';

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { SectionHeading } from '../Shared';
import Project from '../Shared/project';

type Props = {
  projects: {
    id: string;
    name: string;
    description: string;
    image: string;
    url: string;
    code: string;
    tools: string[];
  }[];
};

export default function Projects({ projects }: Props) {
  const { ref } = useSectionInView('Projects', 0.5);
  console.log(projects);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-4">
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
