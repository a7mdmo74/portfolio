import {
  About,
  Contact,
  Experience,
  Intro,
  Projects,
  Skills,
} from '@/components/Sections';
import { SectionDivider } from '@/components/Shared';
import prisma from '@/lib/prisma';

export default async function Home() {
  const projects = await prisma.project.findMany({});
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <div className="flex flex-col items-center">
        <About />
        <Skills />
        <Projects projects={projects} />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
