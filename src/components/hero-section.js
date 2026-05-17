import { LitElement, html } from 'lit';
import { profile } from '../data/content.js';
import './code-constellation.js';

class HeroSection extends LitElement {
  firstUpdated() {
    const art = this.querySelector('.hero-art');

    if (!art || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    art.addEventListener('pointermove', (event) => {
      const rect = art.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      art.style.setProperty('--tilt-y', `${x * 7}deg`);
      art.style.setProperty('--tilt-x', `${y * -7}deg`);
      art.style.setProperty('--mx', `${x * 18}px`);
      art.style.setProperty('--my', `${y * 18}px`);
    });

    art.addEventListener('pointerleave', () => {
      art.style.setProperty('--tilt-y', '0deg');
      art.style.setProperty('--tilt-x', '0deg');
      art.style.setProperty('--mx', '0px');
      art.style.setProperty('--my', '0px');
    });
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="top" class="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
        <div class="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-[42rem] -translate-x-1/2 border border-[color:var(--line-color)] opacity-50"></div>
        <div class="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="max-w-4xl">
            <p class="reveal mb-5 inline-flex items-center gap-3 rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">
              <span class="h-2 w-2 animate-pulse bg-mint"></span>
              Available for focused product work
            </p>
            <h1 class="reveal delay-1 font-display text-5xl font-semibold leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
              ${profile.name}
              <span class="block">${profile.role}</span>
              <span class="block text-accent">for precise digital products.</span>
            </h1>
            <p class="reveal delay-2 mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted-copy)] sm:text-xl">
              I build clean interfaces, reliable services, and product systems that stay understandable as they grow.
            </p>
            <div class="reveal delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                class="inline-flex items-center justify-center rounded-[6px] bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(242,82,58,0.24)] hover:-translate-y-1 hover:bg-[#d84430] hover:shadow-[0_24px_70px_rgba(242,82,58,0.34)]"
              >
                View selected work
              </a>
              <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-[6px] border border-[color:var(--line-color)] bg-[color:var(--panel)] px-6 py-3 text-sm font-semibold hover:-translate-y-1 hover:border-mint hover:text-mint"
              >
                Contact me
              </a>
            </div>
            <div class="reveal delay-4 mt-12 grid max-w-2xl grid-cols-3 border-y border-[color:var(--line-color)]">
              ${[
                ['8+', 'shipped products'],
                ['3', 'core layers'],
                ['100%', 'English content'],
              ].map(
                ([value, label]) => html`
                  <div class="border-r border-[color:var(--line-color)] py-4 pr-4 last:border-r-0 last:pl-4 sm:pr-6 sm:last:pl-6">
                    <p class="font-display text-2xl font-semibold sm:text-3xl">${value}</p>
                    <p class="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[color:var(--muted-copy)]">${label}</p>
                  </div>
                `,
              )}
            </div>
          </div>

          <div class="hero-art reveal delay-2 relative min-h-[30rem] sm:min-h-[36rem]" aria-hidden="true">
            <div class="hero-plane absolute inset-0 overflow-hidden border border-[color:var(--line-color)] bg-[color:var(--panel-strong)] shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <code-constellation class="absolute inset-0 z-0 opacity-95"></code-constellation>
              <div class="absolute inset-6 z-10 border border-[color:var(--line-color)]"></div>
              <div class="scan-line absolute left-6 right-6 top-1/2 z-10 h-px bg-accent/80"></div>
              <div class="orbit-ring absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[color:var(--fg)]/28"></div>
              <div class="absolute left-1/2 top-1/2 z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2 border-2 border-[color:var(--fg)] bg-[color:var(--bg)]/10"></div>
              <div class="absolute left-[18%] top-[40%] z-10 h-px w-[64%] bg-[color:var(--fg)]/70"></div>
              <div class="absolute left-[52%] top-[18%] z-10 h-[64%] w-px bg-[color:var(--fg)]/70"></div>
              <div class="floating-node absolute left-8 top-8 z-10 h-20 w-20 border border-accent bg-accent/10"></div>
              <div class="floating-node absolute right-10 top-12 z-10 h-28 w-28 bg-mint/18"></div>
              <div class="floating-node absolute bottom-10 left-10 z-10 h-36 w-36 border border-[color:var(--line-color)] bg-[color:var(--soft)]/50"></div>
              <div class="floating-node absolute bottom-16 right-8 z-10 h-44 w-44 bg-accent/75 mix-blend-multiply dark:mix-blend-normal"></div>
              <div class="absolute bottom-8 left-8 right-8 z-20 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <span class="font-display text-7xl font-semibold leading-none text-[color:var(--fg)]/10">01</span>
                <div class="grid w-full max-w-xs gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-copy)]">
                  <div>
                    <div class="mb-2 flex justify-between gap-4">
                      <span>Frontend</span>
                      <span>92</span>
                    </div>
                    <div class="metric-bar h-1.5 bg-[color:var(--line-color)]">
                      <div class="h-full w-[92%] bg-accent"></div>
                    </div>
                  </div>
                  <div>
                    <div class="mb-2 flex justify-between gap-4">
                      <span>Backend</span>
                      <span>88</span>
                    </div>
                    <div class="metric-bar h-1.5 bg-[color:var(--line-color)]">
                      <div class="h-full w-[88%] bg-mint"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
