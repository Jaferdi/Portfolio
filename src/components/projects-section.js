import { LitElement, html } from 'lit';
import { projects } from '../data/content.js';

class ProjectsSection extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="projects" class="border-y border-[color:var(--line-color)] bg-[color:var(--soft)]/60 px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto max-w-7xl">
          <div class="motion-item mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Projects</p>
              <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Public work from GitHub.</h2>
            </div>
            <p class="max-w-2xl text-lg leading-8 text-[color:var(--muted-copy)] lg:justify-self-end">
              These projects are pulled from the public profile and described around what is visible in the repositories: source code, documentation, deployment, and stack.
            </p>
          </div>
          <div class="grid gap-5 lg:grid-cols-2">
            ${projects.map(
              (project, index) => html`
                <article class="motion-item interactive-card group flex min-h-[25rem] flex-col rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--bg)] p-6 hover:border-accent/80" style="--delay: ${index * 110}ms">
                  <div class="flex items-center justify-between gap-6">
                    <span class="font-display text-5xl font-semibold text-[color:var(--fg)]/10">0${index + 1}</span>
                    <span class=${index === 1 ? 'h-3 w-12 bg-mint transition-all duration-300 group-hover:w-16' : 'h-3 w-12 bg-accent transition-all duration-300 group-hover:w-16'}></span>
                  </div>
                  <h3 class="mt-10 font-display text-2xl font-semibold">${project.title}</h3>
                  <p class="mt-4 flex-1 leading-7 text-[color:var(--muted-copy)]">${project.description}</p>
                  <div class="mt-8 flex flex-wrap gap-2">
                    ${project.stack.map(
                      (item) => html`
                        <span class="rounded-[6px] bg-[color:var(--soft)] px-3 py-1.5 text-xs font-medium text-[color:var(--muted-copy)]">
                          ${item}
                        </span>
                      `,
                    )}
                  </div>
                  <div class="mt-8 flex gap-4 text-sm font-semibold">
                    <a class="magnetic-link rounded-[6px] px-1 text-accent hover:opacity-70" href=${project.live} target="_blank" rel="noopener" aria-label="Open live preview for ${project.title}">
                      Live
                    </a>
                    <a class="magnetic-link rounded-[6px] px-1 text-[color:var(--fg)] hover:text-accent" href=${project.source} target="_blank" rel="noopener" aria-label="Open source code for ${project.title}">
                      Source
                    </a>
                  </div>
                </article>
              `,
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('projects-section', ProjectsSection);
