const links = {
  productSite: "https://www.learnedgrowth.com",
  ios: "https://apps.apple.com/us/app/learned-growth/id6756195213",
  android: "https://play.google.com/store/apps/details?id=com.joonjang.LearnedGrowth",
  email: "mailto:contact@jojalabs.com",
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
            Current Product
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
                <path
                  d="M10.2 4.7H9C7 4.7 5.9 5.9 5.9 7.9v1.5c0 1.4-1 2.3-2.5 2.6 1.5.3 2.5 1.2 2.5 2.6v1.5c0 2 1.1 3.2 3.1 3.2h1.2"
                  transform="translate(-1.6 0)"
                />
                <path
                  d="M13.8 4.7H15c2 0 3.1 1.2 3.1 3.2v1.5c0 1.4 1 2.3 2.5 2.6-1.5.3-2.5 1.2-2.5 2.6v1.5c0 2-1.1 3.2-3.1 3.2h-1.2"
                  transform="translate(1.6 0)"
                />
                <circle cx="8.2" cy="12" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="15.8" cy="12" r="1.2" fill="currentColor" stroke="none" />
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

      <section className="section" aria-labelledby="contact-title" style={{ marginTop: "4rem" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .contact-card-layout {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
            min-height: 0 !important;
            height: auto !important;
            background-color: rgba(150, 150, 150, 0.25) !important;
            border: 1px solid rgba(150, 150, 150, 0.4) !important;
          }
          .contact-card-layout::before,
          .contact-card-layout::after {
            display: none !important;
          }
          .contact-card-text {
            text-align: left;
            flex: 1 1 auto;
          }
          .contact-card-title {
            justify-content: flex-start;
          }
        `}} />
        <article className="capability-card contact-card-layout">
          <div className="contact-card-text">
            <h2 id="contact-title" className="section-title contact-card-title" style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem", border: "none", padding: 0 }}>
              <span className="title-icon" aria-hidden style={{ transform: "scale(1.15)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              Contact
            </h2>
            <p style={{ margin: 0, opacity: 0.7, fontSize: "0.95rem" }}>
              For questions and general inquiries.
            </p>
          </div>

          <a
            href={links.email}
            style={{
              display: "inline-flex",
              margin: "0 auto",
              padding: "0.6rem 1.25rem",
              color: "inherit",
              textDecoration: "none",
              backgroundColor: "rgba(150, 150, 150, 0.1)",
              border: "1px solid rgba(150, 150, 150, 0.2)",
              borderRadius: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          >
            contact@jojalabs.com
          </a>
        </article>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Joja Labs.
        </p>
      </footer>
    </main>
  );
}
