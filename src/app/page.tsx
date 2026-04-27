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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade {
          opacity: 0;
          animation: fadeUp .75s ease forwards;
        }

        .delay-1 { animation-delay: .05s; }
        .delay-2 { animation-delay: .15s; }
        .delay-3 { animation-delay: .25s; }
        .delay-4 { animation-delay: .35s; }

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

        .badge-blue {
          background: #eff6ff;
          color: #0f6fff;
        }

        .badge-green {
          background: #ecfdf5;
          color: #059669;
        }

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

        @media (max-width: 760px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* background glow */}
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
          Clinical Vision Assessment
        </p>

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
          Color Vision
          <br />
          <span style={{ color: "#64748b", fontStyle: "italic" }}>
            Testing Suite
          </span>
        </h1>

        <p
          className="fade delay-3"
          style={{
            margin: "22px auto 46px",
            maxWidth: 580,
            fontSize: 17,
            lineHeight: 1.8,
            color: "#64748b",
            fontWeight: 400,
          }}
        >
          Scientifically validated assessments for red-green deficiency and hue
          discrimination in a refined, modern clinical experience.
        </p>

        <div className="cards-grid fade delay-4">
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
                <span
                  style={{
                    color: "#0f6fff",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
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
                <span
                  style={{
                    color: "#059669",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Start test
                </span>

                <div className="arrow">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <p
          style={{
            marginTop: 44,
            fontSize: 12,
            color: "#94a3b8",
          }}
        >
          © {new Date().getFullYear()} Color Vision App · Educational screening
          only
        </p>
      </div>
    </main>
  );
}