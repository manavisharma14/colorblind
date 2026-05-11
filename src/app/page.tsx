"use client";

import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fafaf8",
        color: "#0f172a",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }

        .fade  { opacity: 0; animation: fadeUp .8s cubic-bezier(.22,1,.36,1) forwards; }
        .scale { opacity: 0; animation: scaleIn .7s cubic-bezier(.22,1,.36,1) forwards; }
        .d1 { animation-delay: .05s; } .d2 { animation-delay: .18s; }
        .d3 { animation-delay: .30s; } .d4 { animation-delay: .42s; }
        .d5 { animation-delay: .54s; } .d6 { animation-delay: .66s; }

        /* NAV */
        .bc-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; height: 64px;
          background: rgba(250,250,248,0.88); backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(15,23,42,0.06);
        }
        .bc-nav-logo { font-family:'DM Serif Display',serif; font-size:20px; color:#0f172a; text-decoration:none; }
        .bc-nav-logo span { color:#0f6fff; }
        .bc-nav-links { display:flex; align-items:center; gap:32px; list-style:none; }
        .bc-nav-links a { font-size:14px; color:#475569; text-decoration:none; font-weight:400; transition:color .2s; }
        .bc-nav-links a:hover { color:#0f172a; }
        .bc-nav-cta { padding:9px 20px; background:#0f172a; color:#fff !important; border-radius:999px; font-weight:500 !important; font-size:13px !important; transition:background .2s,transform .2s !important; }
        .bc-nav-cta:hover { background:#1e293b !important; transform:translateY(-1px); }

        /* HERO */
        .bc-hero {
          padding: 148px 40px 96px; max-width:1200px; margin:0 auto;
          display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center;
        }
        .bc-pill {
          display:inline-flex; align-items:center; gap:6px;
          padding:6px 14px 6px 8px; background:#eff6ff; border:1px solid #bfdbfe;
          border-radius:999px; font-size:12px; font-weight:600; color:#1d4ed8;
          letter-spacing:.04em; margin-bottom:28px;
        }
        .bc-pill-dot { width:6px; height:6px; border-radius:50%; background:#3b82f6; flex-shrink:0; }
        .bc-hero-h1 {
          font-family:'DM Serif Display',serif; font-size:clamp(48px,5.5vw,76px);
          line-height:1.02; letter-spacing:-.02em; color:#0f172a; margin-bottom:24px;
        }
        .bc-hero-h1 em { font-style:italic; color:#64748b; }
        .bc-hero-sub { font-size:17px; line-height:1.85; color:#64748b; font-weight:300; max-width:460px; margin-bottom:40px; }
        .bc-hero-actions { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
        .bc-btn-primary {
          display:inline-flex; align-items:center; gap:8px; padding:14px 28px;
          background:#0f172a; color:#fff; border-radius:999px; font-size:15px;
          font-weight:500; text-decoration:none; transition:background .2s,transform .2s;
        }
        .bc-btn-primary:hover { background:#1e293b; transform:translateY(-2px); }
        .bc-btn-ghost { display:inline-flex; align-items:center; gap:6px; font-size:14px; font-weight:500; color:#475569; text-decoration:none; transition:color .2s; }
        .bc-btn-ghost:hover { color:#0f172a; }

        /* HERO FLOAT CARDS */
        .bc-hero-right { position:relative; height:380px; }
        .bc-float-card {
          position:absolute; background:#fff;
          border:1px solid rgba(15,23,42,0.08); border-radius:20px;
          padding:20px 24px; box-shadow:0 8px 40px rgba(15,23,42,0.07);
        }
        .bc-float-card.main { top:0; left:0; right:0; border-radius:24px; padding:28px; }
        .bc-float-card.stat1 { bottom:50px; left:-20px; min-width:180px; animation:fadeUp .9s cubic-bezier(.22,1,.36,1) .6s both; }
        .bc-float-card.stat2 { bottom:0; right:-10px; min-width:200px; animation:fadeUp .9s cubic-bezier(.22,1,.36,1) .75s both; }
        .bc-cps-label { font-size:10px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#94a3b8; margin-bottom:14px; }
        .bc-cps-row { display:flex; align-items:center; margin-bottom:10px; gap:12px; }
        .bc-cps-row:last-child { margin-bottom:0; }
        .bc-cps-name { font-size:13px; color:#334155; min-width:124px; }
        .bc-cps-bar-wrap { flex:1; height:6px; background:#f1f5f9; border-radius:999px; overflow:hidden; }
        .bc-cps-bar { height:100%; border-radius:999px; }
        .bc-cps-pct { font-size:12px; font-weight:600; color:#0f172a; min-width:34px; text-align:right; }
        .bc-float-num { font-size:28px; font-weight:700; color:#0f172a; line-height:1; }
        .bc-float-lbl { font-size:12px; color:#64748b; margin-top:4px; }

        /* STATS STRIP */
        .bc-stats-strip {
          border-top:1px solid rgba(15,23,42,0.06); border-bottom:1px solid rgba(15,23,42,0.06);
          padding:32px 40px; display:grid; grid-template-columns:repeat(4,1fr);
          max-width:1200px; margin:0 auto;
        }
        .bc-stat-item { padding:0 32px; border-right:1px solid rgba(15,23,42,0.06); text-align:center; }
        .bc-stat-item:first-child { padding-left:0; }
        .bc-stat-item:last-child { border-right:none; }
        .bc-stat-big { font-family:'DM Serif Display',serif; font-size:38px; color:#0f172a; line-height:1; margin-bottom:6px; }
        .bc-stat-desc { font-size:13px; color:#94a3b8; line-height:1.5; }

        /* SECTION SHARED */
        .bc-section { max-width:1200px; margin:0 auto; padding:96px 40px; }
        .bc-section-eyebrow { font-size:11px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#94a3b8; margin-bottom:16px; }
        .bc-section-h2 { font-family:'DM Serif Display',serif; font-size:clamp(34px,4vw,52px); line-height:1.08; color:#0f172a; margin-bottom:16px; letter-spacing:-.02em; max-width:560px; }
        .bc-section-sub { font-size:16px; line-height:1.8; color:#64748b; max-width:520px; font-weight:300; margin-bottom:56px; }

        /* PRODUCT CARD */
        .bc-product-card {
          background:#fff; border:1px solid rgba(15,23,42,0.07); border-radius:28px;
          padding:48px; display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center;
          box-shadow:0 4px 24px rgba(15,23,42,0.04);
        }
        .bc-product-tag { display:inline-block; padding:5px 12px; border-radius:999px; font-size:10px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; background:#eff6ff; color:#1d4ed8; margin-bottom:20px; }
        .bc-product-name { font-family:'DM Serif Display',serif; font-size:36px; font-weight:400; margin-bottom:16px; color:#0f172a; letter-spacing:-.01em; line-height:1.1; }
        .bc-product-desc { font-size:15px; line-height:1.85; color:#64748b; font-weight:300; margin-bottom:32px; }
        .bc-product-features { list-style:none; display:flex; flex-direction:column; gap:10px; }
        .bc-product-features li { display:flex; align-items:flex-start; gap:10px; font-size:14px; color:#475569; line-height:1.6; }
        .bc-feat-dot { width:5px; height:5px; border-radius:50%; background:#3b82f6; flex-shrink:0; margin-top:7px; }

        .bc-product-right { display:flex; flex-direction:column; gap:16px; }
        .bc-product-stat {
          background:#f8fafc; border:1px solid rgba(15,23,42,0.06); border-radius:16px; padding:20px 24px;
        }
        .bc-product-stat-num { font-family:'DM Serif Display',serif; font-size:32px; color:#0f172a; line-height:1; margin-bottom:4px; }
        .bc-product-stat-lbl { font-size:13px; color:#64748b; }

        /* TRACTION */
        .bc-traction-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .bc-tr-card { background:#fff; border:1px solid rgba(15,23,42,0.07); border-radius:16px; padding:20px; }
        .bc-tr-label { font-size:10px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#94a3b8; margin-bottom:6px; }
        .bc-tr-val { font-size:14px; color:#1e293b; line-height:1.55; }

        /* ABOUT */
        .bc-about { background:#0f172a; color:#fff; padding:96px 40px; }
        .bc-about-inner { max-width:1200px; margin:0 auto; }
        .bc-about-top { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; margin-bottom:72px; }
        .bc-about-eyebrow { font-size:11px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#475569; margin-bottom:20px; }
        .bc-about-h2 { font-family:'DM Serif Display',serif; font-size:clamp(32px,3.5vw,48px); line-height:1.1; letter-spacing:-.02em; color:#f8fafc; margin-bottom:24px; }
        .bc-about-h2 em { font-style:italic; color:#94a3b8; }
        .bc-about-body { font-size:16px; line-height:1.85; color:#94a3b8; font-weight:300; }
        .bc-mission-quote { font-family:'DM Serif Display',serif; font-size:22px; font-style:italic; line-height:1.5; color:#cbd5e1; border-left:2px solid #334155; padding-left:24px; margin-bottom:32px; }
        .bc-highlights { display:flex; flex-direction:column; gap:12px; }
        .bc-highlight { display:flex; align-items:center; gap:12px; font-size:14px; color:#94a3b8; }
        .bc-highlight-icon { width:32px; height:32px; border-radius:8px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:14px; }
        .bc-team-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .bc-team-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); border-radius:20px; padding:28px; transition:background .25s,border-color .25s; }
        .bc-team-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(255,255,255,0.12); }
        .bc-team-avatar { width:52px; height:52px; border-radius:50%; background:linear-gradient(135deg,#1e3a5f,#0f6fff); display:flex; align-items:center; justify-content:center; font-family:'DM Serif Display',serif; font-size:18px; color:#bfdbfe; margin-bottom:18px; }
        .bc-team-name { font-size:16px; font-weight:500; color:#f1f5f9; margin-bottom:3px; }
        .bc-team-role { font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#3b82f6; margin-bottom:10px; }
        .bc-team-bio { font-size:13px; line-height:1.7; color:#64748b; font-weight:300; }

        /* DEMO CTA */
        .bc-demo-section { max-width:1200px; margin:0 auto; padding:96px 40px; }
        .bc-demo-inner { background:#fff; border:1px solid rgba(15,23,42,0.07); border-radius:32px; padding:64px; display:grid; grid-template-columns:1fr auto; gap:48px; align-items:center; box-shadow:0 8px 40px rgba(15,23,42,0.05); }
        .bc-demo-h3 { font-family:'DM Serif Display',serif; font-size:40px; line-height:1.1; color:#0f172a; letter-spacing:-.02em; margin-bottom:14px; }
        .bc-demo-sub { font-size:16px; color:#64748b; font-weight:300; line-height:1.7; max-width:520px; }
        .bc-demo-email { font-size:14px; color:#94a3b8; margin-top:10px; }
        .bc-demo-email a { color:#3b82f6; text-decoration:none; }
        .bc-demo-email a:hover { text-decoration:underline; }
        .bc-demo-actions { display:flex; flex-direction:column; gap:12px; align-items:flex-end; }

        /* FOOTER */
        .bc-footer { border-top:1px solid rgba(15,23,42,0.06); padding:28px 40px; display:flex; align-items:center; justify-content:space-between; max-width:1200px; margin:0 auto; }
        .bc-footer-logo { font-family:'DM Serif Display',serif; font-size:16px; color:#0f172a; }
        .bc-footer-logo span { color:#0f6fff; }
        .bc-footer-copy { font-size:12px; color:#94a3b8; }

        /* RESPONSIVE */
        @media (max-width:900px) {
          .bc-hero { grid-template-columns:1fr; padding-top:120px; }
          .bc-hero-right { display:none; }
          .bc-stats-strip { grid-template-columns:repeat(2,1fr); }
          .bc-stat-item { border-right:none; border-bottom:1px solid rgba(15,23,42,0.06); padding:20px 0; }
          .bc-product-card { grid-template-columns:1fr; gap:32px; padding:32px; }
          .bc-traction-grid { grid-template-columns:repeat(2,1fr); }
          .bc-about-top { grid-template-columns:1fr; gap:40px; }
          .bc-team-grid { grid-template-columns:1fr; }
          .bc-demo-inner { grid-template-columns:1fr; }
          .bc-demo-actions { align-items:flex-start; }
          .bc-footer { flex-direction:column; gap:12px; text-align:center; }
          .bc-nav { padding:0 20px; }
          .bc-nav-links { display:none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="bc-nav">
        <a href="#" className="bc-nav-logo">Beyond<span>Color</span></a>
        <ul className="bc-nav-links">
          <li><a href="#product">The test</a></li>
          <li><a href="#about">About</a></li>
          <li>
            <a
              href="mailto:rahilfaruk@gmail.com?subject=BeyondColor%20Demo%20Request"
              className="bc-nav-cta"
            >
              Request demo
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="bc-hero">
        <div className="bc-hero-left">
          <div className="bc-pill fade d1">
            <span className="bc-pill-dot" />
            Prototype available · beyondcolor.vercel.app
          </div>
          <h1 className="bc-hero-h1 fade d2">
            See the world<br /><em>your way.</em>
          </h1>
          <p className="bc-hero-sub fade d3">
            AI-powered color vision testing that goes beyond binary pass/fail —
            delivering a personalized Color Perception Summary for students,
            clinicians, and workplaces.
          </p>
          <div className="bc-hero-actions fade d4">
            <a
              href="mailto:rahilfaruk@gmail.com?subject=BeyondColor%20Demo%20Request"
              className="bc-btn-primary"
            >
              Request a demo <ArrowRight size={15} />
            </a>
            <a href="#product" className="bc-btn-ghost">
              See how it works →
            </a>
          </div>
        </div>

        {/* Floating CPS mockup */}
        <div className="bc-hero-right scale d3">
          <div className="bc-float-card main">
            <div className="bc-cps-label">Color Perception Summary</div>
            {[
              { label: "Red / Brown zone",       pct: 78, color: "#ef4444" },
              { label: "Yellow / Green zone",    pct: 52, color: "#f59e0b" },
              { label: "Blue / Purple zone",     pct: 91, color: "#6366f1" },
              { label: "Color Resilience Index", pct: 68, color: "#10b981" },
            ].map((row) => (
              <div className="bc-cps-row" key={row.label}>
                <span className="bc-cps-name">{row.label}</span>
                <div className="bc-cps-bar-wrap">
                  <div className="bc-cps-bar" style={{ width: `${row.pct}%`, background: row.color }} />
                </div>
                <span className="bc-cps-pct">{row.pct}%</span>
              </div>
            ))}
          </div>
          <div className="bc-float-card stat1">
            <div className="bc-float-num">AUC 1.0</div>
            <div className="bc-float-lbl">Hue model job-fit accuracy</div>
          </div>
          <div className="bc-float-card stat2">
            <div className="bc-float-num">60+</div>
            <div className="bc-float-lbl">UAE hospital study participants</div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="bc-stats-strip fade d4">
        {[
          { n: "350M+",   d: "People worldwide affected by color vision deficiency" },
          { n: "80%",     d: "Of color-blind students enter secondary school undiagnosed" },
          { n: "1 in 12", d: "Men are color blind — at least one in every classroom" },
          { n: "$1.2B",   d: "Global color vision testing market in 2024, growing fast" },
        ].map((s) => (
          <div className="bc-stat-item" key={s.n}>
            <div className="bc-stat-big">{s.n}</div>
            <div className="bc-stat-desc">{s.d}</div>
          </div>
        ))}
      </div>

      {/* PRODUCT */}
      <section className="bc-section" id="product">
        <p className="bc-section-eyebrow fade d1">The BeyondColor Test</p>
        <h2 className="bc-section-h2 fade d2">A complete picture<br />of how you see color.</h2>
        <p className="bc-section-sub fade d3">
          One test. A multidimensional profile — not just a label.
        </p>

        <div className="bc-product-card fade d4">
          <div>
            <span className="bc-product-tag">AI-Powered Assessment</span>
            <h3 className="bc-product-name">The BeyondColor<br />Test</h3>
            <p className="bc-product-desc">
              BeyondColor combines clinical screening with functional color
              discrimination to generate your personalized Color Perception Summary —
              a multidimensional report that goes far beyond binary pass/fail.
            </p>
            <ul className="bc-product-features">
              {[
                "Identifies deficiency type and severity with diagnostic confidence scoring",
                "Zone-specific analysis across red, yellow, blue, and purple ranges",
                "Detects acquired deficiencies that standard tests miss entirely",
                "Generates a Color Resilience Index (0–100) for real-world context",
                "Designed for students, clinicians, and occupational health programs",
              ].map((f) => (
                <li key={f}><span className="bc-feat-dot" />{f}</li>
              ))}
            </ul>
          </div>
          <div className="bc-product-right">
            {[
              { n: "AUC 1.0", l: "Hue model job-fit prediction accuracy" },
              { n: "85%",     l: "Of ophthalmologists say Ishihara alone doesn't meet their needs" },
              { n: "60+",     l: "Participants in our UAE hospital clinical validation study" },
            ].map((s) => (
              <div className="bc-product-stat" key={s.n}>
                <div className="bc-product-stat-num">{s.n}</div>
                <div className="bc-product-stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section className="bc-section" style={{ paddingTop: 0 }}>
        <p className="bc-section-eyebrow fade d1">Traction &amp; Recognition</p>
        <div className="bc-traction-grid fade d2">
          {[
            { l: "Recognition",      v: "NSF I-Corps Regional Program — Interior Northeast Hub" },
            { l: "Presented at",     v: "SPIE Photonics West · Tech for Good, UChicago Institute of Politics" },
            { l: "Clinical partner", v: "Dr. Manish Jain, Specialist Ophthalmology · Al Dhannah Hospital, UAE" },
            { l: "Funding secured",  v: "$6,000 non-dilutive · Pre-seed fundraising in progress" },
          ].map((t) => (
            <div className="bc-tr-card" key={t.l}>
              <div className="bc-tr-label">{t.l}</div>
              <div className="bc-tr-val">{t.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bc-about" id="about">
        <div className="bc-about-inner">
          <div className="bc-about-top">
            <div>
              <p className="bc-about-eyebrow">Our story</p>
              <h2 className="bc-about-h2">
                Built for the<br /><em>1 in 12</em> who<br />see differently.
              </h2>
              <p className="bc-about-body">
                BeyondColor started with a simple observation: the Ishihara test,
                created in 1917, is still the global standard — yet 85% of
                ophthalmologists admit it doesn't meet their diagnostic needs.
                <br /><br />
                We set out to build something better: a platform that combines
                diagnostic screening with functional hue discrimination to generate
                a full Color Perception Summary — empowering educators, clinicians,
                and occupational health programs to make fairer, smarter decisions.
              </p>
            </div>
            <div style={{ paddingTop: 8 }}>
              <p className="bc-mission-quote">
                "Help kids see the world their way."
              </p>
              <div className="bc-highlights">
                {[
                  { icon: "🏥", text: "Hospital-based clinical validation study, UAE" },
                  { icon: "🎓", text: "Pilot interest from University of Chicago Student Disability Services" },
                  { icon: "🔬", text: "Innovate2Market program, Polsky Center, UChicago" },
                  { icon: "🌍", text: "Scaling for Middle East EdTech via Hub71, Abu Dhabi" },
                ].map((h) => (
                  <div className="bc-highlight" key={h.text}>
                    <div className="bc-highlight-icon">{h.icon}</div>
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <p className="bc-about-eyebrow" style={{ marginBottom: 24 }}>The team</p>
            <div className="bc-team-grid">
              {[
                {
                  initials: "RA",
                  name: "Rahil Abbu",
                  role: "Founder",
                  bio: "MSc Research Analyst at the University of Chicago Medicine. Leads clinical research design and product strategy.",
                },
                {
                  initials: "MS",
                  name: "Manavi Sharma",
                  role: "Co-Founder",
                  bio: "MSc Computer Science, University of Kansas. Drives platform architecture, AI model development, and accessibility engineering.",
                },
                {
                  initials: "MJ",
                  name: "Dr. Manish Jain",
                  role: "Clinical Advisor",
                  bio: "MBBS, DNB, FRCS. Specialist Ophthalmologist at Al Dhannah Hospital, UAE. Leads the prospective clinical validation study.",
                },
              ].map((p) => (
                <div className="bc-team-card" key={p.name}>
                  <div className="bc-team-avatar">{p.initials}</div>
                  <div className="bc-team-name">{p.name}</div>
                  <div className="bc-team-role">{p.role}</div>
                  <div className="bc-team-bio">{p.bio}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEMO CTA */}
      <section className="bc-demo-section fade d3">
        <div className="bc-demo-inner">
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 14 }}>
              For schools, clinics &amp; platforms
            </p>
            <h3 className="bc-demo-h3">Ready to pilot<br />BeyondColor?</h3>
            <p className="bc-demo-sub">
              We're actively partnering with educational institutions, occupational
              health programs, and EdTech platforms. Let's build something meaningful together.
            </p>
            <p className="bc-demo-email">
              Or email us directly at{" "}
              <a href="mailto:rahilfaruk@gmail.com">rahilfaruk@gmail.com</a>
            </p>
          </div>
          <div className="bc-demo-actions">
            <a
              href="mailto:rahilfaruk@gmail.com?subject=BeyondColor%20Demo%20Request"
              className="bc-btn-primary"
              style={{ fontSize: 15, padding: "16px 32px" }}
            >
              Request a demo <ArrowRight size={15} />
            </a>
            <a
              href="https://beyondcolor.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bc-btn-ghost"
            >
              View live prototype →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(15,23,42,0.06)" }}>
        <div className="bc-footer">
          <span className="bc-footer-logo">Beyond<span>Color</span></span>
          <span className="bc-footer-copy">
            © {new Date().getFullYear()} BeyondColor · University of Chicago Medicine ·{" "}
            Educational screening only ·{" "}
            <a href="mailto:rahilfaruk@gmail.com" style={{ color: "#94a3b8", textDecoration: "none" }}>
              rahilfaruk@gmail.com
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}