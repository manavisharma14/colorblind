"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fcfefe 0%, #f8fafc 48%, #f1f5f9 100%)",
        color: "#0f172a",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade { opacity: 0; animation: fadeUp .75s ease forwards; }
        .delay-1 { animation-delay: .05s; }
        .delay-2 { animation-delay: .15s; }
        .delay-3 { animation-delay: .25s; }
        .delay-4 { animation-delay: .35s; }
        .delay-5 { animation-delay: .45s; }
        .delay-6 { animation-delay: .55s; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          width: 100%;
          max-width: 860px;
          margin: 0 auto 36px;
        }

        .stat-card {
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(226,232,240,0.8);
          border-radius: 16px;
          padding: 16px 14px;
          text-align: center;
        }

        .stat-num {
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.1;
        }

        .stat-lbl {
          font-size: 11px;
          color: #64748b;
          margin-top: 4px;
          line-height: 1.4;
        }

        .traction-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          width: 100%;
          max-width: 860px;
          margin: 0 auto 40px;
        }

        .traction-card {
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(226,232,240,0.7);
          border-radius: 14px;
          padding: 14px;
          text-align: left;
        }

        .traction-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 5px;
        }

        .traction-val {
          font-size: 12px;
          color: #334155;
          line-height: 1.5;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          width: 100%;
          max-width: 860px;
        }

        .card-link {
          text-decoration: none;
          color: inherit;
        }

        .card {
          background: rgba(255,255,255,0.84);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.85);
          border-radius: 30px;
          padding: 34px;
          box-shadow:
            0 14px 40px rgba(15,23,42,0.05),
            0 4px 12px rgba(15,23,42,0.04);
          transition: all .28s ease;
          height: 100%;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 22px 55px rgba(15,23,42,0.08),
            0 8px 18px rgba(15,23,42,0.05);
        }

        .card-blue:hover { border-color: #b9d6ff; }
        .card-green:hover { border-color: #b8ecd8; }

        .badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .badge-blue { background: #eff6ff; color: #0f6fff; }
        .badge-green { background: #ecfdf5; color: #059669; }

        .arrow {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          transition: all .2s ease;
        }

        .card:hover .arrow {
          transform: translateX(2px);
          box-shadow: 0 6px 12px rgba(15,23,42,0.08);
        }

        .demo-banner {
          width: 100%;
          max-width: 860px;
          margin: 36px auto 0;
          background: rgba(255,255,255,0.84);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(226,232,240,0.9);
          border-radius: 24px;
          padding: 28px 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          text-align: left;
          box-shadow: 0 8px 32px rgba(15,23,42,0.05);
        }

        .demo-btn {
          flex-shrink: 0;
          padding: 12px 26px;
          border-radius: 999px;
          background: #0f172a;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background .2s ease, transform .2s ease;
          display: inline-block;
        }

        .demo-btn:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }

        @media (max-width: 760px) {
          .cards-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .traction-grid { grid-template-columns: repeat(2, 1fr); }
          .demo-banner { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* background glows */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(15,111,255,0.08)",
          filter: "blur(90px)",
          top: -120,
          right: -80,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(18,185,129,0.08)",
          filter: "blur(90px)",
          bottom: -120,
          left: -80,
        }}
      />

      <div
        style={{
          maxWidth: 880,
          width: "100%",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          className="fade delay-1"
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#64748b",
            marginBottom: 24,
          }}
        >
          BeyondColor · AI-Powered Color Vision Platform
        </p>

        {/* Headline */}
        <h1
          className="fade delay-2"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(44px, 8vw, 78px)",
            lineHeight: 1.03,
            margin: 0,
            color: "#0f172a",
          }}
        >
          See the world
          <br />
          <span style={{ color: "#64748b", fontStyle: "italic" }}>
            your way
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="fade delay-3"
          style={{
            margin: "22px auto 40px",
            maxWidth: 580,
            fontSize: 17,
            lineHeight: 1.8,
            color: "#64748b",
            fontWeight: 400,
          }}
        >
          Clinically validated color vision testing with AI analytics — detecting
          color vision differences early and adapting learning environments for
          every student.
        </p>

        {/* Stats */}
        <div className="stats-grid fade delay-3">
          <div className="stat-card">
            <div className="stat-num">350M+</div>
            <div className="stat-lbl">people affected by CVD worldwide</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">80%</div>
            <div className="stat-lbl">of color-blind students enter secondary school undiagnosed</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">60+</div>
            <div className="stat-lbl">clinical study participants, UAE hospital</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">AUC 1.0</div>
            <div className="stat-lbl">hue-model accuracy in job-fit prediction</div>
          </div>
        </div>

        {/* Traction */}
        <div className="traction-grid fade delay-4">
          <div className="traction-card">
            <div className="traction-label">Recognition</div>
            <div className="traction-val">NSF I-Corps Regional Program</div>
          </div>
          <div className="traction-card">
            <div className="traction-label">Presented at</div>
            <div className="traction-val">SPIE Photonics West · Tech for Good, UChicago</div>
          </div>
          <div className="traction-card">
            <div className="traction-label">Clinical partner</div>
            <div className="traction-val">Dr. Manish Jain, Al Dhannah Hospital, UAE</div>
          </div>
          <div className="traction-card">
            <div className="traction-label">Funding secured</div>
            <div className="traction-val">$6,000 non-dilutive · Pre-seed in progress</div>
          </div>
        </div>

        {/* Test cards */}
        <div className="cards-grid fade delay-5">
          {/* Ishihara */}
          <Link href="/ishihara" className="card-link">
            <div className="card card-blue">
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, #7dd3fc, #0f6fff)",
                  marginBottom: 24,
                }}
              />
              <span className="badge badge-blue">24 Plates</span>
              <h2
                style={{
                  fontSize: 28,
                  margin: "0 0 10px",
                  fontFamily: "'DM Serif Display', serif",
                  fontWeight: 400,
                }}
              >
                Ishihara Test
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "#64748b",
                  marginBottom: 28,
                }}
              >
                Gold-standard screening for red-green color vision deficiency
                using clinically recognized pseudoisochromatic plates.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#0f6fff", fontWeight: 600, fontSize: 14 }}>
                  Start test
                </span>
                <div className="arrow">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>

          {/* Hue */}
          <Link href="/hue" className="card-link">
            <div className="card card-green">
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(#0f6fff,#06b6d4,#12b981,#84cc16,#0f6fff)",
                  marginBottom: 24,
                }}
              />
              <span className="badge badge-green">Adaptive</span>
              <h2
                style={{
                  fontSize: 28,
                  margin: "0 0 10px",
                  fontFamily: "'DM Serif Display', serif",
                  fontWeight: 400,
                }}
              >
                Hue Discrimination
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "#64748b",
                  marginBottom: 28,
                }}
              >
                Measure sensitivity to subtle color differences across the full
                visible spectrum with adaptive precision.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#059669", fontWeight: 600, fontSize: 14 }}>
                  Start test
                </span>
                <div className="arrow">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Demo request banner */}
        <div className="demo-banner fade delay-6">
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#94a3b8",
                marginBottom: 6,
              }}
            >
              For schools, clinics & platforms
            </p>
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 24,
                fontWeight: 400,
                margin: "0 0 6px",
                color: "#0f172a",
              }}
            >
              Request a demo
            </h3>
            <p style={{ fontSize: 14, color: "#64748b", margin: 0, lineHeight: 1.6 }}>
              Interested in piloting BeyondColor? Reach out at{" "}
              <a
                href="mailto:rahilfaruk@gmail.com"
                style={{ color: "#0f6fff", textDecoration: "none" }}
              >
                rahilfaruk@gmail.com
              </a>
            </p>
          </div>
          <a
            href="mailto:rahilfaruk@gmail.com?subject=BeyondColor%20Demo%20Request"
            className="demo-btn"
          >
            Request demo →
          </a>
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: 36,
            fontSize: 12,
            color: "#94a3b8",
          }}
        >
          © {new Date().getFullYear()} BeyondColor · University of Chicago Medicine ·{" "}
          Educational screening only ·{" "}
          <a
            href="mailto:rahilfaruk@gmail.com"
            style={{ color: "#94a3b8", textDecoration: "none" }}
          >
            rahilfaruk@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}