import { LitElement, html } from 'lit';

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
            <h2 class="mt-4 font-display text-3xl font-semibold sm:text-5xl">Reliable systems for product and data work.</h2>
          </div>
          <div class="motion-item grid gap-8 text-lg leading-8 text-[color:var(--muted-copy)]" style="--delay: 120ms">
            <p>
              I am a full-stack developer who works across Angular interfaces, Node.js APIs, Python automation, ETL processes, and data-backed systems. My work connects frontend clarity with backend reliability and practical data flows.
            </p>
            <p>
              I use tools like TypeScript, MongoDB, InfluxDB, SQL, and Docker to build services and internal workflows that stay understandable, maintainable, and useful as requirements change.
            </p>
            <div class="grid gap-3 pt-2 sm:grid-cols-3">
              ${['Frontend systems', 'API contracts', 'Data workflows'].map(
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
