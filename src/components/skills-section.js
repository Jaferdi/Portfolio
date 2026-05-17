import { LitElement, html } from 'lit';
import { skills } from '../data/content.js';

class SkillsSection extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="skills" class="px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto max-w-7xl">
          <div class="motion-item mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div class="flex max-w-3xl flex-col gap-4">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Skills</p>
              <h2 class="font-display text-3xl font-semibold sm:text-5xl">A compact toolkit for complete products.</h2>
            </div>
            <div class="hidden border border-[color:var(--line-color)] bg-[color:var(--panel)] p-4 text-right lg:block">
              <p class="font-display text-4xl font-semibold">${String(skills.length).padStart(2, '0')}</p>
              <p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">disciplines</p>
            </div>
          </div>
          <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            ${skills.map(
              (skill, index) => html`
                <article class="motion-item interactive-card group rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--panel)] p-6 backdrop-blur-sm hover:border-accent/70" style="--delay: ${index * 90}ms">
                  <div class="flex items-start justify-between gap-4">
                    <h3 class="font-display text-xl font-semibold">${skill.group}</h3>
                    <span class="font-display text-3xl font-semibold text-[color:var(--fg)]/10">0${index + 1}</span>
                  </div>
                  <div class="mt-6 flex flex-wrap gap-2">
                    ${skill.items.map(
                      (item) => html`
                        <span class="rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--bg)]/40 px-3 py-2 text-sm text-[color:var(--muted-copy)] transition-colors duration-200 group-hover:border-[color:var(--fg)]/20 group-hover:text-[color:var(--fg)]">
                          ${item}
                        </span>
                      `,
                    )}
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

customElements.define('skills-section', SkillsSection);
