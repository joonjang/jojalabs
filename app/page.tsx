const links = {
  productSite: "https://www.learnedgrowth.com",
  ios: "https://apps.apple.com/us/app/learned-growth/id6756195213",
  android: "https://play.google.com/store/apps/details?id=com.joonjang.LearnedGrowth",
  linkedin: "https://linkedin.com/in/joon-jang",
  github: "https://github.com/joonjang",
  email: "mailto:w.joon.jang@gmail.com",
} as const;

const productProof = [
  "Shipped a cross-platform mobile product to iOS and Android stores.",
  "Built server-side orchestration with validation and access control (Edge Functions + RLS).",
  "Implemented subscriptions with paywalls, entitlements, and restore purchases.",
  "Deployed a web funnel with analytics to track acquisition and iterate releases.",
];

const capabilities = [
  {
    icon: "product",
    title: "Product Design & Delivery",
    description:
      "Turning product ideas into intuitive web and mobile experiences from concept to launch.",
  },
  {
    icon: "backend",
    title: "Backend & AI Architecture",
    description:
      "Building scalable data and backend systems that support evolving logic and intelligent features.",
  },
  {
    icon: "reliability",
    title: "Resilient Systems Engineering",
    description:
      "Designing fault-tolerant systems with observability and recovery built into daily operations.",
  },
  {
    icon: "cloud",
    title: "Cloud & Release Operations",
    description:
      "Streamlining release workflows to ship safely, continuously, and without operational drag.",
  },
] as const;

type CapabilityIconKind = (typeof capabilities)[number]["icon"];

function CapabilityGlyph({ kind }: { kind: CapabilityIconKind }) {
  if (kind === "product") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8" />
      </svg>
    );
  }

  if (kind === "backend") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (kind === "reliability") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2 4 6v6c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6l-8-4z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 15a4 4 0 0 1 4-4 5 5 0 0 1 9.7 1A3.5 3.5 0 1 1 18 19H7.5A3.5 3.5 0 0 1 4 15z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="portfolio-page">
      <div className="page-glow" aria-hidden />

      <section className="hero" aria-labelledby="joja-title">
        <h1 id="joja-title" className="logo" aria-label="Joja Labs">
          <span className="logo-text">Joja Labs</span>
          <span className="logo-dot" aria-hidden />
        </h1>

        <p className="hero-subtitle">Independent product studio based in Vancouver.</p>
      </section>

      <section className="section" aria-labelledby="current-product-title">
        <div className="section-head">
          <h2 id="current-product-title" className="section-title">
            <span className="title-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m9 11 3 3 8-8" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </span>
            Current product
          </h2>
          <span className="status-pill">Live</span>
        </div>

        <article className="product-card">
          <p className="product-title">
            <span className="product-name">
              <span className="sprout-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21v-7" />
                  <path d="M12 14c0-3 2-5 5-5 0 3-2 5-5 5Z" />
                  <path d="M12 12c0-3-2-5-5-5 0 3 2 5 5 5Z" />
                </svg>
              </span>
              <strong>Learned Growth</strong>
            </span>
            <span className="product-kind">Reframe your thoughts.</span>
          </p>

          <ul className="proof-list">
            {productProof.map((item) => (
              <li key={item}>
                <span className="proof-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="product-links">
            <div className="store-badges-row">
              <a
                href={links.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-link"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="store-badge store-badge-apple"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a
                href={links.android}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-link"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="store-badge store-badge-play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
            <a
              href={links.productSite}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              Visit Learned Growth
            </a>
          </div>
        </article>
      </section>

      <section className="section" aria-labelledby="what-i-build-title">
        <div className="section-head">
          <h2 id="what-i-build-title" className="section-title">
            <span className="title-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M10 5H8a3 3 0 0 0-3 3v2a2 2 0 0 1-2 2 2 2 0 0 1 2 2v2a3 3 0 0 0 3 3h2" />
                <path d="M14 5h2a3 3 0 0 1 3 3v2a2 2 0 0 0 2 2 2 2 0 0 0-2 2v2a3 3 0 0 1-3 3h-2" />
                <path d="m14.5 4-5 16" />
              </svg>
            </span>
            Development Focus
          </h2>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.title} className="capability-card">
              <div className="capability-head">
                <h3 className="capability-title">{item.title}</h3>
                <span className="capability-icon" aria-hidden>
                  <CapabilityGlyph kind={item.icon} />
                </span>
              </div>
              <p className="capability-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="section-head">
          <h2 id="contact-title" className="section-title">
            <span className="title-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                <path d="M8 10h8" />
                <path d="M8 14h5" />
              </svg>
            </span>
            Contact
          </h2>
        </div>

        <div className="contact-list">
          <a className="contact-item" href={links.email}>
            <span className="contact-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span className="contact-text">
              <span className="contact-label">Email</span>
              <span className="contact-value">w.joon.jang@gmail.com</span>
            </span>
          </a>

          <a
            className="contact-item"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            <span className="contact-text">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/joon-jang</span>
            </span>
          </a>

          <a
            className="contact-item"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.3 0 6.8-2 6.8-9A7 7 0 0 0 19 1.77 6.5 6.5 0 0 0 18.91 1S17.73.65 15 2.48a13.4 13.4 0 0 0-6 0C6.27.65 5.09 1 5.09 1A6.5 6.5 0 0 0 5 1.77 7 7 0 0 0 3.2 5.6c0 7 3.5 9 6.8 9A4.8 4.8 0 0 0 9 18v4" />
                <path d="M9 18c-4.5 2-5-2-7-2" />
              </svg>
            </span>
            <span className="contact-text">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/joonjang</span>
            </span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Joja Labs. Built by Joon Jang.</p>
      </footer>
    </main>
  );
}
