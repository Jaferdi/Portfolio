export const profile = {
  name: 'Javier Ferrer',
  role: 'Full-Stack Developer',
  email: 'hello@javierferrer.dev',
  github: 'https://github.com/javierferrer',
  linkedin: 'https://linkedin.com/in/javierferrer',
};

export const skills = [
  {
    group: 'Frontend',
    items: ['Lit', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'NestJS', 'REST APIs', 'SQL'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Docker', 'pnpm', 'Vite'],
  },
];

export const projects = [
  {
    title: 'Atlas Operations Console',
    description:
      'A modular dashboard for coordinating distributed product workflows, built around fast filtering, audit trails, and resilient API boundaries.',
    stack: ['Lit', 'Tailwind', 'Node.js', 'SQL'],
    live: '#',
    source: '#',
  },
  {
    title: 'Signal API Gateway',
    description:
      'A NestJS service layer that normalizes third-party events, validates payloads, and gives product teams a predictable REST contract.',
    stack: ['NestJS', 'REST', 'Docker', 'PostgreSQL'],
    live: '#',
    source: '#',
  },
  {
    title: 'Frame Commerce Studio',
    description:
      'A focused storefront editor with preview-first interactions, reusable design primitives, and a lean deployment path for small teams.',
    stack: ['Vite', 'TypeScript', 'Tailwind', 'APIs'],
    live: '#',
    source: '#',
  },
];

export const experience = [
  {
    period: '2024 - Present',
    title: 'Full-Stack Developer',
    detail:
      'Designs production web applications from interface systems to backend integration, balancing implementation quality with product clarity.',
  },
  {
    period: '2022 - 2024',
    title: 'Frontend Engineer',
    detail:
      'Built accessible component systems, optimized Vite delivery pipelines, and partnered closely with design and product stakeholders.',
  },
  {
    period: '2020 - 2022',
    title: 'Software Developer',
    detail:
      'Delivered REST services, SQL-backed features, internal tools, and deployment workflows for growing digital products.',
  },
];
