import { LitElement, html } from 'lit';
import { cvLinks } from '../data/content.js';

class CvSection extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="cv" class="border-y border-[color:var(--line-color)] bg-[color:var(--panel)] px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div class="motion-item">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Curriculum vitae</p>
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Two versions, one technical profile.</h2>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            ${cvLinks.map(
              (cv, index) => html`
                <article class="motion-item interactive-card flex min-h-[18rem] flex-col rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--bg)]/70 p-6" style="--delay: ${index * 100}ms">
                  <div class="flex items-start justify-between gap-4">
                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">${cv.language}</p>
                    <span class=${index === 0 ? 'h-3 w-12 bg-accent' : 'h-3 w-12 bg-mint'}></span>
                  </div>
                  <h3 class="mt-8 font-display text-2xl font-semibold">${cv.label}</h3>
                  <p class="mt-4 flex-1 leading-7 text-[color:var(--muted-copy)]">${cv.description}</p>
                  <a
                    class="mt-8 inline-flex items-center justify-center rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-5 py-3 text-sm font-semibold hover:-translate-y-1 hover:border-accent hover:text-accent"
                    href=${cv.href}
                    target="_blank"
                    rel="noopener"
                  >
                    ${cv.action}
                  </a>
                </article>
              `,
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('cv-section', CvSection);
