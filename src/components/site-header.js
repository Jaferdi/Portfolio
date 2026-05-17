import { LitElement, html } from 'lit';
import { profile } from '../data/content.js';

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'CV', 'Contact'];

class SiteHeader extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <header class="sticky top-0 z-40 border-b border-[color:var(--line-color)] bg-[color:var(--bg)]/82 backdrop-blur-xl">
        <div class="h-px w-full origin-left bg-gradient-to-r from-accent via-mint to-transparent"></div>
        <nav
          class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
          aria-label="Primary navigation"
        >
          <a href="#top" class="group inline-flex shrink-0 items-center gap-3 font-display text-sm font-semibold tracking-[0.16em] uppercase" aria-label="${profile.name} home">
            <span class="grid h-7 w-7 place-items-center border border-[color:var(--line-color)] bg-[color:var(--panel)]">
              <span class="h-2.5 w-2.5 rounded-full bg-accent transition-transform group-hover:scale-125"></span>
            </span>
            <span>JF</span>
          </a>
          <div class="hidden items-center gap-1 rounded-[8px] border border-[color:var(--line-color)] bg-[color:var(--panel)] p-1 lg:flex">
            ${navItems.map(
              (item) => html`
                <a
                  class="magnetic-link rounded-[6px] px-3 py-2 text-sm text-[color:var(--muted-copy)] hover:bg-[color:var(--soft)] hover:text-[color:var(--fg)]"
                  href="#${item.toLowerCase()}"
                >
                  ${item}
                </a>
              `,
            )}
          </div>
          <a
            class="shrink-0 rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-4 py-2 text-sm font-medium shadow-sm hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_14px_40px_rgba(242,82,58,0.14)]"
            href="mailto:${profile.email}"
          >
            Contact
          </a>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
