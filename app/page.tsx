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
  const feed = await prisma.project.findMany({});
  console.log(feed);
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <div className="flex flex-col items-center">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
