export const profile = {
  name: 'Javier Ferrer Díaz',
  role: 'Full Stack Developer',
  location: 'Granada, Spain',
  email: 'javierferrerdiaz1@gmail.com',
  github: 'https://github.com/Jaferdi',
  linkedin: 'https://linkedin.com/in/javierfd1',
  summary:
    'Full stack developer with a year and a half of production experience building software for the public sector and smart cities: a multi-tenant platform for city councils, ETL pipelines, IoT and camera integrations, and the migration of legacy C applications to Angular. I work with Angular, NestJS, TypeScript, MySQL, PostGIS, MongoDB and InfluxDB, and I use AI coding agents every day.',
};

export const skills = [
  {
    group: 'Frontend & UI',
    items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Kendo UI', 'PrimeNG', 'Tailwind CSS', 'Leaflet'],
  },
  {
    group: 'Backend',
    items: ['NestJS', 'Node.js / Express', 'TypeORM', 'Socket.IO', 'Python', 'PHP', 'Java'],
  },
  {
    group: 'Data & Integrations',
    items: ['MySQL', 'PostgreSQL / PostGIS', 'MongoDB', 'InfluxDB', 'ETL', 'LoRaWAN', 'Power BI', 'BoldBI'],
  },
  {
    group: 'Tools & Ways of Working',
    items: ['Git / GitLab', 'Docker', 'Playwright', 'GitHub Actions', 'Code review', 'Claude Code', 'Spanish (native)', 'English B2'],
  },
];

export const cvLinks = [
  {
    language: 'Español',
    label: 'Ver CV en español',
    description: 'Currículo técnico completo con experiencia, estudios, competencias, idiomas y proyectos públicos.',
    action: 'Abrir CV en español',
    href: '/cv/javier-ferrer-cv-es.html',
  },
  {
    language: 'English',
    label: 'View CV in English',
    description: 'English version focused on junior software development roles, public work, and technical skills.',
    action: 'Open English CV',
    href: '/cv/javier-ferrer-cv-en.html',
  },
  {
    language: 'PDF',
    label: 'Descargar CV PDF',
    description: 'Versión imprimible y más limpia para candidaturas, generada desde el CV actualizado.',
    action: 'Abrir PDF',
    href: '/cv/javier-ferrer-cv-es.pdf',
  },
  {
    language: 'PDF (EN)',
    label: 'Download CV PDF',
    description: 'Printable English version for international applications.',
    action: 'Open PDF',
    href: '/cv/javier-ferrer-cv-en.pdf',
  },
];

export const projects = [
  {
    title: 'Tokenometro',
    description:
      'Local dashboard that shows what Claude Code sessions cost, where the tokens go and what to change to spend less. Dependency-free Python with tests and CI on Linux, macOS and Windows, installable with pipx and as a Claude Code plugin.',
    stack: ['Python', 'SQLite', 'GitHub Actions', 'Claude Code plugin'],
    source: 'https://github.com/Jaferdi/tokenometro',
  },
  {
    title: 'Gestión de citas',
    description:
      'Full stack app to manage departments, staff, rooms, procedures and appointments: NestJS 11 with hexagonal architecture, JWT roles, real-time notifications, S3-compatible file storage and a Next.js 15 front end with an appointment calendar.',
    stack: ['NestJS', 'TypeScript', 'MySQL', 'Socket.io', 'MinIO', 'Next.js', 'React', 'Docker'],
    source: 'https://github.com/Jaferdi/gestion-citas-fullstack',
  },
  {
    title: 'Portfolio',
    description:
      'Personal portfolio built to present my projects, experience, education, and technical profile with a polished, responsive interface.',
    stack: ['JavaScript', 'Lit', 'Vite', 'Tailwind CSS', 'Three.js'],
    live: 'https://portfolio-jaferdi.vercel.app/',
    source: 'https://github.com/Jaferdi/Portfolio',
  },
];

export const experience = [
  {
    period: 'Jun 2025 - Nov 2026',
    title: 'Full Stack Developer',
    company: 'Innovaciones Tecnológicas del Sur',
    detail:
      'Built a multi-tenant smart city platform for city councils, ETL pipelines, IoT and licence plate camera integrations, and migrated legacy C applications to Angular. Daily AI-assisted development with Claude Code, agents and MCP.',
    highlights: ['Angular', 'NestJS', 'ETL & IoT', 'Legacy migration', 'Code review', 'AI automation'],
  },
  {
    period: 'Mar 2025 - Jun 2025',
    title: 'Software Development Intern',
    company: 'Innovaciones Tecnológicas del Sur',
    detail:
      'Built a full stack appointment and staff management app on my own: NestJS with hexagonal architecture, JWT, Socket.io, MinIO, Next.js 15 and Docker.',
    highlights: ['NestJS', 'Next.js', 'Hexagonal architecture', 'Docker'],
  },
  {
    period: '2024',
    title: 'Intern',
    company: 'Grupo Euro-CENTER',
    detail:
      'Completed technical internship work focused on problem solving, observation, analysis, planning, and collaborative delivery.',
    highlights: ['Problem solving', 'Planning and organization', 'Teamwork'],
  },
];

export const education = [
  {
    period: '2024 - 2025',
    school: 'STEM Granada',
    degree: 'Higher Technician in Web Application Development',
    detail: 'Specialized training in web development, application structure, databases, and modern programming workflows.',
  },
  {
    period: '2022 - 2024',
    school: 'MEDAC Nevada',
    degree: 'Higher Technician in Multiplatform Application Development',
    detail: 'Training in software development fundamentals, Java, databases, and multiplatform application logic.',
  },
];

export const facts = [
  {
    value: '1.5',
    label: 'years in production',
  },
  {
    value: 'Full stack',
    label: 'Angular + NestJS',
  },
  {
    value: 'AI-first',
    label: 'Claude Code, agents, MCP',
  },
];
