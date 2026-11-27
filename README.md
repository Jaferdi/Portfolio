# Portfolio

My personal site: the projects I've built, my experience and the technologies I work with.

**Live:** [portfolio-jaferdi.vercel.app](https://portfolio-jaferdi.vercel.app)

Built with [Lit](https://lit.dev) web components, [Vite](https://vite.dev), [Tailwind CSS](https://tailwindcss.com) and [three.js](https://threejs.org), with a focus on performance, clean architecture and user experience.

## Run it locally

```bash
pnpm install
pnpm dev       # development server
pnpm build     # production build in dist/
pnpm preview   # serve the build
```

## Customize

- Profile, projects, skills and experience: `src/data/content.js`.
- CV: `pnpm cv:pdf` builds `public/cv/javier-ferrer-cv-es.pdf` from `src/cv/javier-ferrer-cv-es.ms` (needs `groff`).
