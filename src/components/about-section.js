import { LitElement, html } from 'lit';
import { profile } from '../data/content.js';

class AboutSection extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="about" class="border-y border-[color:var(--line-color)] bg-[color:var(--panel)] px-5 py-20 sm:px-8 lg:py-28">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div class="motion-item">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About</p>
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">A junior profile with real delivery practice.</h2>
          </div>
          <div class="motion-item grid gap-8 text-lg leading-8 text-[color:var(--muted-copy)]" style="--delay: 120ms">
            <p>
              ${profile.summary}
            </p>
            <p>
              My background combines Web Application Development and Multiplatform Application Development studies with professional practice at Grupo Euro-CENTER and Innovaciones Tecnológicas del Sur.
            </p>
            <div class="grid gap-3 pt-2 sm:grid-cols-3">
              ${['Software development', 'Incident resolution', 'Functional analysis'].map(
                (item, index) => html`
                  <div class="interactive-card rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--bg)]/70 p-4" style="--delay: ${180 + index * 80}ms">
                    <span class=${index === 1 ? 'mb-5 block h-1.5 w-10 bg-mint' : 'mb-5 block h-1.5 w-10 bg-accent'}></span>
                    <p class="font-display text-lg font-semibold text-[color:var(--fg)]">${item}</p>
                  </div>
                `,
              )}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('about-section', AboutSection);
