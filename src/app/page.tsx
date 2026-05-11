"use client";

import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fafaf8",
        color: "#0f172a",
        fontFamily: "'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display:ital@0;1&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #fafaf8;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade {
          opacity: 0;
          animation: fadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .d1 { animation-delay: .05s; }
        .d2 { animation-delay: .15s; }
        .d3 { animation-delay: .25s; }
        .d4 { animation-delay: .35s; }

        /* NAVBAR */

        .bc-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 42px;
          background: rgba(250,250,248,0.9);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(15,23,42,0.06);
        }

        .bc-nav-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bc-logo {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .bc-nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          color: #0f172a;
          text-decoration: none;
        }

        .bc-nav-logo span {
          color: #2563eb;
        }

        .bc-nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
          list-style: none;
        }

        .bc-nav-links a {
          text-decoration: none;
          color: #475569;
          font-size: 14px;
          transition: .2s;
        }

        .bc-nav-links a:hover {
          color: #0f172a;
        }

        .bc-nav-cta {
          padding: 10px 22px;
          border-radius: 999px;
          background: #0f172a;
          color: white !important;
          font-weight: 500;
        }

        /* HERO */

        .bc-hero {
          max-width: 1240px;
          margin: 0 auto;
          padding: 155px 42px 100px;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 72px;
          align-items: center;
        }

        .bc-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 999px;
          color: #2563eb;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 28px;
        }

        .bc-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
        }

        .bc-hero h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(58px, 6vw, 88px);
          line-height: .96;
          letter-spacing: -0.05em;
          margin-bottom: 28px;
        }

        .bc-hero h1 em {
          font-style: italic;
          color: #64748b;
        }

        .bc-hero-sub {
          font-size: 18px;
          line-height: 1.9;
          color: #64748b;
          font-weight: 300;
          max-width: 620px;
          margin-bottom: 38px;
        }

        .bc-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .bc-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0f172a;
          color: white;
          text-decoration: none;
          padding: 15px 28px;
          border-radius: 999px;
          font-size: 15px;
          transition: .2s;
        }

        .bc-btn-primary:hover {
          background: #1e293b;
          transform: translateY(-2px);
        }

        .bc-btn-ghost {
          display: inline-flex;
          align-items: center;
          color: #475569;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        .bc-btn-ghost:hover {
          color: #0f172a;
        }

        .bc-hero-card {
          background: white;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(15,23,42,0.06);
          box-shadow: 0 20px 60px rgba(15,23,42,0.08);
        }

        .bc-image {
          width: 100%;
          display: block;
        }

        /* SECTIONS */

        .bc-section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 100px 42px;
        }

        .bc-section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .14em;
          color: #94a3b8;
          margin-bottom: 18px;
        }

        .bc-section-h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(38px, 4vw, 60px);
          line-height: 1.04;
          letter-spacing: -0.04em;
          margin-bottom: 22px;
        }

        .bc-section-sub {
          font-size: 17px;
          line-height: 1.9;
          color: #64748b;
          font-weight: 300;
          max-width: 720px;
          margin-bottom: 58px;
        }

        .bc-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 54px;
          align-items: center;
        }

        .bc-image-wrap {
          background: white;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(15,23,42,0.06);
          box-shadow: 0 10px 40px rgba(15,23,42,0.05);
        }

        /* STATS */

        .bc-stats-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 18px;
        }

        .bc-stat-card {
          background: white;
          border-radius: 24px;
          padding: 30px;
          border: 1px solid rgba(15,23,42,0.06);
        }

        .bc-stat-number {
          font-family: 'DM Serif Display', serif;
          font-size: 42px;
          margin-bottom: 10px;
        }

        .bc-stat-desc {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        /* FEATURES */

        .bc-feature-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .bc-feature-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          color: #475569;
          font-size: 15px;
          line-height: 1.8;
        }

        .bc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          margin-top: 11px;
          flex-shrink: 0;
        }

        /* TRACTION */

        .bc-traction-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
          gap: 18px;
        }

        .bc-traction-card {
          background: white;
          border-radius: 22px;
          border: 1px solid rgba(15,23,42,0.06);
          padding: 28px;
        }

        .bc-traction-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: #94a3b8;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .bc-traction-value {
          color: #334155;
          line-height: 1.8;
          font-size: 15px;
        }

        /* DARK SECTION */

        .bc-dark {
          background: #0f172a;
          color: white;
        }

        .bc-dark .bc-section-h2 {
          color: white;
        }

        .bc-dark .bc-section-sub {
          color: #94a3b8;
        }

        .bc-team-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 24px;
          margin-top: 54px;
        }

        .bc-team-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 26px;
          padding: 34px;
        }

        .bc-team-avatar {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg,#2563eb,#0f172a);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .bc-team-name {
          font-size: 20px;
          margin-bottom: 4px;
        }

        .bc-team-role {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: #60a5fa;
          margin-bottom: 14px;
        }

        .bc-team-bio {
          color: #94a3b8;
          line-height: 1.8;
          font-size: 14px;
        }

        /* CTA */

        .bc-cta-box {
          background: white;
          border-radius: 32px;
          padding: 64px;
          border: 1px solid rgba(15,23,42,0.06);
          box-shadow: 0 12px 50px rgba(15,23,42,0.05);
        }

        /* FOOTER */

        .bc-footer {
          border-top: 1px solid rgba(15,23,42,0.06);
          padding: 34px 42px;
        }

        .bc-footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .bc-footer-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bc-footer-copy {
          font-size: 13px;
          color: #94a3b8;
        }

        @media (max-width: 980px) {

          .bc-nav-links {
            display: none;
          }

          .bc-hero,
          .bc-grid-2,
          .bc-team-grid {
            grid-template-columns: 1fr;
          }

          .bc-stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .bc-footer-inner {
            flex-direction: column;
            text-align: center;
          }

          .bc-cta-box {
            padding: 42px;
          }
        }

        @media (max-width: 640px) {

          .bc-nav {
            padding: 0 20px;
          }

          .bc-hero,
          .bc-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .bc-stats-grid {
            grid-template-columns: 1fr;
          }

          .bc-hero {
            padding-top: 130px;
          }

          .bc-footer {
            padding: 28px 20px;
          }
        }
      `}</style>

      {/* NAVBAR */}

      <nav className="bc-nav">
        <div className="bc-nav-left">
          <img
            src="/beyondcolor-logo.png"
            alt="BeyondColor"
            className="bc-logo"
          />

          <a href="#" className="bc-nav-logo">
            Beyond<span>Color</span>
          </a>
        </div>

        <ul className="bc-nav-links">
          <li><a href="#solution">Solution</a></li>
          <li><a href="#validation">Validation</a></li>
          <li><a href="#traction">Traction</a></li>
          <li><a href="#about">About</a></li>

          <li>
            <a
              href="mailto:rahilfaruk@gmail.com"
              className="bc-nav-cta"
            >
              Request Demo
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}

      <section className="bc-hero">
        <div>
          <div className="bc-pill fade d1">
            <span className="bc-pill-dot" />
            Prospective clinical validation completed
          </div>

          <h1 className="fade d2">
            See the world<br />
            <em>your way.</em>
          </h1>

          <p className="bc-hero-sub fade d3">
            AI-powered color vision assessment that combines clinical
            screening with functional hue discrimination to generate
            personalized Color Perception Summaries for education,
            accessibility, and occupational screening.
          </p>

          <div className="bc-hero-actions fade d4">
            <a
              href="mailto:rahilfaruk@gmail.com"
              className="bc-btn-primary"
            >
              Request a demo <ArrowRight size={15} />
            </a>

            <a href="#solution" className="bc-btn-ghost">
              Explore platform →
            </a>
          </div>
        </div>

        <div className="bc-hero-card fade d4">
          <img
            src="/slides/slide7.png"
            alt="BeyondColor Platform"
            className="bc-image"
          />
        </div>
      </section>

      {/* STATS */}

      <section
        className="bc-section"
        style={{ paddingTop: 0 }}
      >
        <div className="bc-stats-grid">

          {[
            {
              n: "60+",
              d: "Participants enrolled in prospective UAE clinical validation study"
            },
            {
              n: "AUC 1.0",
              d: "Functional hue discrimination model performance for occupational prediction"
            },
            {
              n: "85%",
              d: "Of ophthalmologists report Ishihara alone does not meet diagnostic needs"
            },
            {
              n: "350M+",
              d: "People globally affected by color vision deficiency"
            }
          ].map((item) => (
            <div
              className="bc-stat-card"
              key={item.n}
            >
              <div className="bc-stat-number">
                {item.n}
              </div>

              <div className="bc-stat-desc">
                {item.d}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* SOLUTION */}

      <section
        className="bc-section"
        id="solution"
      >
        <p className="bc-section-eyebrow">
          The BeyondColor Platform
        </p>

        <h2 className="bc-section-h2">
          A complete picture<br />
          of color perception.
        </h2>

        <p className="bc-section-sub">
          BeyondColor combines diagnostic screening,
          functional hue discrimination, and AI interpretation
          to generate multidimensional color perception profiles
          for clinicians, schools, occupational health programs,
          and digital accessibility systems.
        </p>

        <div className="bc-grid-2">

          <div className="bc-image-wrap">
            <img
              src="/slides/slide8.png"
              alt="Accessibility Engine"
              className="bc-image"
            />
          </div>

          <div className="bc-feature-list">

            {[
              "Combines Ishihara screening with functional hue discrimination analysis",
              "Detects acquired deficiencies traditional screening often misses",
              "Generates personalized Color Perception Summaries (CPS)",
              "Produces adaptive accessibility recommendations for digital interfaces",
              "Designed for education, healthcare, occupational screening, and EdTech platforms"
            ].map((feature) => (
              <div
                className="bc-feature-item"
                key={feature}
              >
                <span className="bc-dot" />
                {feature}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VALIDATION */}

      <section
        className="bc-section"
        id="validation"
      >
        <p className="bc-section-eyebrow">
          Prospective Clinical Validation
        </p>

        <h2 className="bc-section-h2">
          Evaluating real-world<br />
          color functionality.
        </h2>

        <p className="bc-section-sub">
          BeyondColor was evaluated in a hospital-based
          prospective study comparing traditional Ishihara
          screening against functional hue discrimination
          and occupational performance tasks.
        </p>

        <div className="bc-grid-2">

          <div className="bc-image-wrap">
            <img
              src="/slides/slide11.png"
              alt="Clinical Validation"
              className="bc-image"
            />
          </div>

          <div className="bc-feature-list">

            {[
              "60+ participants across multiple age groups and occupational backgrounds",
              "Included electricians, drivers, and blue-collar professionals",
              "Observed mismatch between Ishihara classification and real-world functional ability",
              "Detected acquired deficiencies missed by traditional screening",
              "Functional hue testing outperformed Ishihara in occupational prediction"
            ].map((feature) => (
              <div
                className="bc-feature-item"
                key={feature}
              >
                <span className="bc-dot" />
                {feature}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROBLEM */}

      <section className="bc-section">
        <p className="bc-section-eyebrow">
          Why Current Screening Fails
        </p>

        <h2 className="bc-section-h2">
          The Ishihara test was built for a different era.
        </h2>

        <p className="bc-section-sub">
          Created in 1917, Ishihara remains the global
          standard despite major limitations in functional
          assessment, accessibility adaptation, and
          occupational evaluation.
        </p>

        <div className="bc-grid-2">

          <div className="bc-feature-list">

            {[
              "Binary pass/fail classification with limited functional insight",
              "Cannot detect many acquired deficiencies",
              "No severity grading or contextual interpretation",
              "Limited relevance to real-world occupational performance",
              "Misses blue-yellow deficiencies entirely",
              "No personalized accessibility recommendations"
            ].map((feature) => (
              <div
                className="bc-feature-item"
                key={feature}
              >
                <span className="bc-dot" />
                {feature}
              </div>
            ))}

          </div>

          <div className="bc-image-wrap">
            <img
              src="/slides/slide5.png"
              alt="Ishihara Test Limitations"
              className="bc-image"
            />
          </div>

        </div>
      </section>

      {/* TRACTION */}

      <section
        className="bc-section"
        id="traction"
      >
        <p className="bc-section-eyebrow">
          Research & Recognition
        </p>

        <div className="bc-traction-grid">

          {[
            {
              l: "Clinical Validation",
              v: "60+ participant prospective hospital study evaluating functional color perception and occupational performance"
            },
            {
              l: "Innovation Ecosystem",
              v: "Developed through University of Chicago Medicine and the Innovate2Market Program at the Polsky Center for Entrepreneurship and Innovation"
            },
            {
              l: "NSF Recognition",
              v: "Selected for the National Science Foundation (NSF) I-Corps Regional Program through SPIE Photonics West"
            },
            {
              l: "AI Ecosystem",
              v: "Presented BeyondColor at Microsoft Chicago through Butter x The AI Collective Chicago"
            },
            {
              l: "Accessibility Vision",
              v: "Developing adaptive AI-driven accessibility systems for education, healthcare, and digital learning environments"
            }
          ].map((item) => (
            <div
              className="bc-traction-card"
              key={item.l}
            >
              <div className="bc-traction-label">
                {item.l}
              </div>

              <div className="bc-traction-value">
                {item.v}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}

      <section
        className="bc-section bc-dark"
        id="about"
      >
        <p className="bc-section-eyebrow">
          The Team
        </p>

        <h2 className="bc-section-h2">
          Building the future of<br />
          accessible color perception.
        </h2>

        <p className="bc-section-sub">
          BeyondColor sits at the intersection of clinical
          diagnostics, accessibility engineering, AI systems,
          education technology, and occupational screening.
        </p>

        <div className="bc-team-grid">

          <div className="bc-team-card">
            <div className="bc-team-avatar">
              RA
            </div>

            <div className="bc-team-name">
              Rahil Abbu
            </div>

            <div className="bc-team-role">
              Founder
            </div>

            <div className="bc-team-bio">
              Research Analyst at the University of Chicago
              Medicine focused on translational diagnostics,
              clinical AI, and accessibility-driven healthcare systems.
            </div>
          </div>

          <div className="bc-team-card">
            <div className="bc-team-avatar">
              MS
            </div>

            <div className="bc-team-name">
              Manavi Sharma
            </div>

            <div className="bc-team-role">
              Co-Founder
            </div>

            <div className="bc-team-bio">
              MSc Computer Science student at the University
              of Kansas leading platform engineering,
              AI systems integration, and accessibility infrastructure.
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bc-section">

        <div className="bc-cta-box">

          <p className="bc-section-eyebrow">
            Education · Healthcare · Accessibility
          </p>

          <h2
            className="bc-section-h2"
            style={{ marginBottom: 18 }}
          >
            Ready to pilot BeyondColor?
          </h2>

          <p
            className="bc-section-sub"
            style={{ marginBottom: 34 }}
          >
            We’re actively partnering with schools,
            healthcare systems, occupational health programs,
            and digital accessibility platforms.
          </p>

          <a
            href="mailto:rahilfaruk@gmail.com"
            className="bc-btn-primary"
          >
            Request a demo <ArrowRight size={15} />
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bc-footer">

        <div className="bc-footer-inner">

          <div className="bc-footer-left">

            <img
              src="/beyondcolor-logo.png"
              alt="BeyondColor"
              className="bc-logo"
            />

            <span className="bc-nav-logo">
              Beyond<span>Color</span>
            </span>

          </div>

          <div className="bc-footer-copy">
            © {new Date().getFullYear()} BeyondColor ·
            AI-powered color vision accessibility platform
          </div>

        </div>

      </footer>
    </main>
  );
}