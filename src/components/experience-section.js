import { LitElement, html } from 'lit';
import { experience } from '../data/content.js';

class ExperienceSection extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="experience" class="px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div class="motion-item">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Experience</p>
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Career highlights, reduced to signal.</h2>
          </div>
          <div class="relative">
            <div class="timeline-line absolute bottom-0 left-[0.42rem] top-2 w-px bg-gradient-to-b from-accent via-mint to-[color:var(--line-color)]"></div>
            <ol class="grid gap-10">
              ${experience.map(
                (item, index) => html`
                  <li class="motion-item interactive-card group relative grid gap-2 rounded-[8px] border border-transparent bg-[color:var(--bg)]/40 py-5 pl-10 pr-5 hover:border-[color:var(--line-color)]" style="--delay: ${index * 100}ms">
                    <span class="absolute left-0 top-7 h-3 w-3 bg-accent ring-4 ring-[color:var(--bg)] transition-transform duration-300 group-hover:scale-125"></span>
                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">${item.period}</p>
                    <h3 class="font-display text-2xl font-semibold">${item.title}</h3>
                    <p class="font-semibold text-accent">${item.company}</p>
                    <p class="max-w-2xl leading-7 text-[color:var(--muted-copy)]">${item.detail}</p>
                    <div class="mt-3 flex max-w-2xl flex-wrap gap-2">
                      ${item.highlights.map(
                        (highlight) => html`
                          <span class="rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--soft)]/70 px-3 py-1.5 text-xs font-semibold text-[color:var(--muted-copy)]">
                            ${highlight}
                          </span>
                        `,
                      )}
                    </div>
                  </li>
                `,
              )}
            </ol>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('experience-section', ExperienceSection);
