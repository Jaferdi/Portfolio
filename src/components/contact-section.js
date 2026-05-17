import { LitElement, html } from 'lit';
import { profile } from '../data/content.js';

class ContactSection extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="contact" class="px-5 pb-8 pt-20 sm:px-8 lg:pt-28">
        <div class="mx-auto max-w-7xl border-t border-[color:var(--line-color)] pt-12">
          <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div class="motion-item">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
              <h2 class="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
                Available for software development roles and technical internships.
              </h2>
            </div>
            <div class="motion-item grid gap-4 text-sm" style="--delay: 140ms">
              <a
                class="relative overflow-hidden rounded-[6px] bg-accent px-5 py-4 text-center font-semibold text-white shadow-[0_20px_60px_rgba(242,82,58,0.26)] hover:-translate-y-1 hover:bg-[#d84430] hover:shadow-[0_26px_80px_rgba(242,82,58,0.34)]"
                href="mailto:${profile.email}"
              >
                ${profile.email}
              </a>
              <div class="grid grid-cols-2 gap-3">
                <a class="interactive-card rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-4 py-3 text-center font-semibold hover:border-accent hover:text-accent" href=${profile.github}>
                  GitHub
                </a>
                <a class="interactive-card rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-4 py-3 text-center font-semibold hover:border-accent hover:text-accent" href=${profile.linkedin}>
                  LinkedIn
                </a>
              </div>
              <a class="interactive-card rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-4 py-3 text-center font-semibold hover:border-accent hover:text-accent" href="tel:${profile.phone.replaceAll(' ', '')}">
                ${profile.phone}
              </a>
            </div>
          </div>
          <footer class="mt-16 flex flex-col gap-3 border-t border-[color:var(--line-color)] py-6 text-sm text-[color:var(--muted-copy)] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 ${profile.name}. Built with Lit, Vite, Tailwind CSS, and pnpm.</p>
            <a class="hover:text-accent" href="#top">Back to top</a>
          </footer>
        </div>
      </section>
    `;
  }
}

customElements.define('contact-section', ContactSection);
