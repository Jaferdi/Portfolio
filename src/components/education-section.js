import { LitElement, html } from 'lit';
import { education } from '../data/content.js';

class EducationSection extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="education" class="border-y border-[color:var(--line-color)] bg-[color:var(--panel)] px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div class="motion-item">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Education</p>
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Formal studies behind the technical profile.</h2>
          </div>
          <div class="grid gap-4">
            ${education.map(
              (item, index) => html`
                <article class="motion-item interactive-card rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--bg)]/70 p-6" style="--delay: ${index * 100}ms">
                  <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">${item.period}</p>
                  <h3 class="mt-3 font-display text-2xl font-semibold">${item.degree}</h3>
                  <p class="mt-1 font-semibold text-accent">${item.school}</p>
                  <p class="mt-4 max-w-3xl leading-7 text-[color:var(--muted-copy)]">${item.detail}</p>
                </article>
              `,
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('education-section', EducationSection);
