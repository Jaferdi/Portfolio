export const profile = {
  name: 'Javier Ferrer Díaz',
  role: 'Junior Software Developer',
  location: 'Granada, Spain',
  email: 'javierferrerdiaz1@gmail.com',
  github: 'https://github.com/Jaferdi',
  linkedin: 'https://linkedin.com/in/javierfd1',
  summary:
    'Junior software developer trained in web and multiplatform application development. I work with Java, PHP, Laravel, React, JavaScript, TypeScript, MySQL, MongoDB, Git, and GitHub, with professional experience resolving incidents, debugging, planning development tasks, and adapting to new languages and codebases.',
};

export const skills = [
  {
    group: 'Frontend & UI',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    items: ['Java', 'PHP', 'Laravel', 'Object-oriented programming', 'Functional analysis'],
  },
  {
    group: 'Data & Tools',
    items: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Debugging'],
  },
  {
    group: 'Languages & Work',
    items: ['Spanish', 'English B2 in progress', 'Teamwork', 'Task planning', 'Continuous improvement'],
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
];

export const projects = [
  {
    title: 'Portfolio',
    description:
      'Personal portfolio built to present my projects, experience, education, and technical profile with a polished, responsive interface.',
    stack: ['JavaScript', 'Lit', 'Vite', 'Tailwind CSS', 'Three.js'],
    live: 'https://portfolio-jaferdi.vercel.app/',
    source: 'https://github.com/Jaferdi/Portfolio',
  },
  {
    title: 'Tres en Raya',
    description:
      'Java tic-tac-toe project with domain classes for the board, cells, players, and generated Javadoc documentation published through GitHub Pages.',
    stack: ['Java', 'HTML', 'CSS', 'JavaScript', 'Javadoc'],
    live: 'https://jaferdi.github.io/TresEnRaya/',
    source: 'https://github.com/Jaferdi/TresEnRaya',
  },
];

export const experience = [
  {
    period: '2025 - Present',
    title: 'Software Developer',
    company: 'Innovaciones Tecnológicas del Sur',
    detail: 'Develops and maintains software while resolving incidents, debugging, and improving existing functionality.',
    highlights: ['Software development', 'Incident resolution', 'Debugging', 'Continuous improvement'],
  },
  {
    period: '2025',
    title: 'Software Development Intern',
    company: 'Innovaciones Tecnológicas del Sur',
    detail:
      'Supported programming tasks, incident resolution, functional analysis, and adaptation to new languages during professional practice.',
    highlights: ['Coding tasks', 'Functional analysis', 'Task planning', 'New language adaptation'],
  },
  {
    period: '2024',
    title: 'Intern',
    company: 'Grupo Euro-CENTER',
    detail:
      'Completed technical internship work focused on problem solving, observation, analysis, planning, and collaborative delivery.',
    highlights: ['Problem solving', 'Planning and organization', 'Observation and analysis', 'Teamwork'],
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
    value: '2',
    label: 'higher degrees',
  },
  {
    value: '3',
    label: 'professional stages',
  },
  {
    value: '2',
    label: 'public GitHub repos',
  },
];
