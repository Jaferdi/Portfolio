import { LitElement, html } from 'lit';
import './site-header.js';
import './hero-section.js';
import './about-section.js';
import './skills-section.js';
import './projects-section.js';
import './experience-section.js';
import './cv-section.js';
import './contact-section.js';

class PortfolioApp extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this._observer = null;
  }

  firstUpdated() {
    requestAnimationFrame(() => this._setupMotion());
  }

  _setupMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.querySelectorAll('.motion-item, .timeline-line').forEach((item) => {
        item.classList.add('is-visible');
      });
      return;
    }

    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this._observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.16 },
    );

    this.querySelectorAll('.motion-item, .timeline-line').forEach((item) => {
      this._observer.observe(item);
    });

    this.querySelectorAll('.interactive-card').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
      });
    });
  }

  disconnectedCallback() {
    this._observer?.disconnect();
    super.disconnectedCallback();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <a
        class="skip-link rounded-[6px] bg-accent px-4 py-3 text-sm font-semibold text-white shadow-lg"
        href="#main"
      >
        Skip to content
      </a>
      <site-header></site-header>
      <main id="main" class="relative">
        <hero-section></hero-section>
        <about-section></about-section>
        <skills-section></skills-section>
        <projects-section></projects-section>
        <experience-section></experience-section>
        <cv-section></cv-section>
        <contact-section></contact-section>
      </main>
    `;
  }
}

customElements.define('portfolio-app', PortfolioApp);
