export const profile = {
  name: 'Javier Ferrer',
  role: 'Full-Stack Developer',
  email: 'javierferrerdiaz1@gmail.com',
  github: 'https://github.com/Jaferdi',
  linkedin: 'https://linkedin.com/in/javierfd1',
};

export const skills = [
  {
    group: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    group: 'Backend & APIs',
    items: ['Node.js', 'REST APIs', 'Python', 'Automation scripts', 'ETLs'],
  },
  {
    group: 'Data & DevOps',
    items: ['SQL', 'MongoDB', 'InfluxDB', 'Docker', 'Git'],
  },
];

export const cvLinks = [
  {
    language: 'English',
    label: 'View CV in English',
    description: 'A focused resume for international roles, API work, automation, and data-heavy product teams.',
    action: 'Open English CV',
    href: '/cv/javier-ferrer-cv-en.html',
  },
  {
    language: 'Español',
    label: 'Ver CV en español',
    description: 'Una versión clara del currículo para equipos técnicos, automatización, APIs y flujos de datos.',
    action: 'Abrir CV en español',
    href: '/cv/javier-ferrer-cv-es.html',
  },
];

export const projects = [
  {
    title: 'Angular Operations Workspace',
    description:
      'An internal workspace for monitoring jobs, API health, and operational workflows with clear status views and fast filtering.',
    stack: ['Angular', 'TypeScript', 'Node.js', 'SQL'],
    live: '#',
    source: '#',
  },
  {
    title: 'Automation API Hub',
    description:
      'A Node.js service layer that connects third-party APIs, validates payloads, and automates recurring integration tasks.',
    stack: ['Node.js', 'REST APIs', 'MongoDB', 'Docker'],
    live: '#',
    source: '#',
  },
  {
    title: 'Data Pipeline Monitor',
    description:
      'A practical ETL workflow for normalizing business data, storing time-series metrics, and keeping data quality visible.',
    stack: ['Python', 'ETLs', 'InfluxDB', 'SQL'],
    live: '#',
    source: '#',
  },
];

export const experience = [
  {
    period: '2024 - Present',
    title: 'Full-Stack Developer',
    detail:
      'Builds Angular interfaces, Node.js APIs, automation scripts, and data workflows that connect product needs with reliable operations.',
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
      'Delivered REST services, SQL-backed features, ETL processes, internal tools, and Docker-based deployment workflows.',
  },
];
