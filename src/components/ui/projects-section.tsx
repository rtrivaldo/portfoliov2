import { HoverEffect } from './card-hover-effect';

export default function ProjectsSection() {
  return (
    <div
      className='mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto'
      id='projects'
    >
      <h1
        className='text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400'
        data-aos='fade'
      >
        Projects
      </h1>

      <div
        className='mt-10 flex flex-col lg:flex-row gap-10 lg:gap-20'
        data-aos='fade-up'
      >
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: 'SycleStore',
    description:
      'A platform dedicated to providing fast, reliable, and affordable game top-ups.',
    link: 'https://syclestore.com',
    tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'Prisma', 'API'],
    url: '/images/syclestore.png',
  },
  {
    title: 'ShortPath',
    description:
      'A sleek solution designed to manage and shorten your super long links.',
    link: 'https://www.shortpath.site',
    tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
    url: '/images/shortpath.jpeg',
  },
  {
    title: 'Terminal Portfolio',
    description: 'Personal portfolio with a command-line interface.',
    link: 'https://terminal-portofolio.vercel.app/',
    tech: ['React + Vite', 'TailwindCSS'],
    url: '/images/terminal-portfolio.jpeg',
  },
  {
    title: 'Wedding Invitation',
    description: 'Digital wedding invitation with an RSVP form.',
    link: 'https://e-invitation-black-and-white.vercel.app/',
    tech: ['NextJs', 'TailwindCSS', 'Framer Motion', 'API'],
    url: '/images/e-invitation-black-and-white.png',
  },
  {
    title: 'TailGuide',
    description: 'Interactive tools to generate TailwindCSS code.',
    link: 'https://tailguide.vercel.app/',
    tech: ['NextJs', 'TailwindCSS'],
    url: '/images/tailguide.jpeg',
  },
  {
    title: 'Expense Tracker',
    description:
      'App to enable users to effortlessly record and manage their expenses.',
    link: 'https://github.com/rtrivaldo/expense-tracker',
    tech: ['Laravel', 'TailwindCSS', 'SQLite'],
    url: '/images/expense-tracker.jpeg',
  },
];
