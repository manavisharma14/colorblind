"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#09090b",
        color: "#fafafa",
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
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .card-link {
          text-decoration: none;
          display: block;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }

        .card-link:nth-child(1) { animation-delay: 0.3s; }
        .card-link:nth-child(2) { animation-delay: 0.45s; }

        .test-card {
          background: #111113;
          border: 1px solid #1f1f23;
          border-radius: 20px;
          padding: 40px;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          cursor: pointer;
          height: 100%;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .card-ishihara:hover {
          border-color: #e55c30;
          background: #120f0e;
          transform: translateY(-3px);
        }

        .card-hue:hover {
          border-color: #5b5bd6;
          background: #0e0e15;
          transform: translateY(-3px);
        }

        .arrow-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #2a2a2e;
          transition: border-color 0.2s, background 0.2s;
        }

        .card-ishihara:hover .arrow-icon {
          background: #e55c30;
          border-color: #e55c30;
        }

        .card-hue:hover .arrow-icon {
          background: #5b5bd6;
          border-color: #5b5bd6;
        }

        .badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 10px;
          border-radius: 100px;
          border: 1px solid;
          margin-bottom: 24px;
        }

        .badge-red {
          color: #f08060;
          border-color: #3d1f14;
          background: #1c0f09;
        }

        .badge-indigo {
          color: #9090ee;
          border-color: #2a2a5a;
          background: #0e0e24;
        }

        .plate-dot {
          border-radius: 50%;
          position: absolute;
        }

        .hero-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5f5f6e;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.05s forwards;
        }

        .hero-title {
          opacity: 0;
          animation: fadeUp 0.5s ease 0.1s forwards;
        }

        .hero-sub {
          opacity: 0;
          animation: fadeUp 0.5s ease 0.2s forwards;
        }

        .divider {
          width: 40px;
          height: 1px;
          background: #2a2a2e;
          margin: 40px auto;
          opacity: 0;
          animation: fadeUp 0.4s ease 0.25s forwards;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
          max-width: 780px;
        }

        @media (max-width: 620px) {
          .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Subtle radial glow behind content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(91,91,214,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "780px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <p className="hero-tag">Clinical Vision Assessment</p>

        {/* Title */}
        <h1
          className="hero-title"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(42px, 7vw, 76px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#fafafa",
            margin: "0 0 20px",
          }}
        >
          Color Vision
          <br />
          <span style={{ color: "#3d3d4e", fontStyle: "italic" }}>Testing Suite</span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-sub"
          style={{
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "#6b6b7b",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          Scientifically validated assessments for red-green deficiency and hue
          discrimination. Results for educational screening only.
        </p>

        <div className="divider" />

        {/* Cards */}
        <div className="cards-grid">
          {/* Ishihara Card */}
          <Link href="/ishihara" className="card-link">
            <div className="test-card card-ishihara">
              {/* Decorative plate illustration */}
              <div
                style={{
                  position: "relative",
                  width: "56px",
                  height: "56px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#1e1210",
                    border: "1px solid #2d1a12",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {[
                    { w: 7, h: 7, top: 8, left: 10, bg: "#d44e22" },
                    { w: 5, h: 5, top: 6, left: 28, bg: "#c03e1a" },
                    { w: 8, h: 8, top: 20, left: 6, bg: "#b83415" },
                    { w: 6, h: 6, top: 22, left: 22, bg: "#e05a2a" },
                    { w: 5, h: 5, top: 18, left: 36, bg: "#cf4820" },
                    { w: 7, h: 7, top: 34, left: 14, bg: "#d44e22" },
                    { w: 9, h: 9, top: 32, left: 32, bg: "#bb3a16" },
                    { w: 5, h: 5, top: 8, left: 42, bg: "#d85428" },
                    { w: 6, h: 6, top: 42, left: 4, bg: "#c24018" },
                    { w: 4, h: 4, top: 44, left: 26, bg: "#e06030" },
                  ].map((dot, i) => (
                    <div
                      key={i}
                      className="plate-dot"
                      style={{
                        width: dot.w,
                        height: dot.h,
                        top: dot.top,
                        left: dot.left,
                        background: dot.bg,
                      }}
                    />
                  ))}
                </div>
              </div>

              <span className="badge badge-red">24 Plates</span>

              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "26px",
                  fontWeight: 400,
                  color: "#f5f0ef",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                  textAlign: "left",
                }}
              >
                Ishihara Test
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#5a5a6a",
                  lineHeight: 1.65,
                  margin: "0 0 32px",
                  textAlign: "left",
                }}
              >
                The gold standard for red-green color blindness detection using
                pseudoisochromatic plates.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{ fontSize: "13px", fontWeight: 500, color: "#e55c30" }}
                >
                  Start test
                </span>
                <div className="arrow-icon">
                  <ArrowRight size={14} color="#888" />
                </div>
              </div>
            </div>
          </Link>

          {/* Hue Discrimination Card */}
          <Link href="/hue" className="card-link">
            <div className="test-card card-hue">
              {/* Spectrum illustration */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(#e24b4a, #e87c30, #e6c840, #4caf6e, #378add, #7c5bd6, #c050a0, #e24b4a)",
                  marginBottom: "28px",
                  border: "1px solid #2a2a2e",
                  flexShrink: 0,
                }}
              />

              <span className="badge badge-indigo">Adaptive</span>

              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "26px",
                  fontWeight: 400,
                  color: "#f0f0f8",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                  textAlign: "left",
                }}
              >
                Hue Discrimination
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#5a5a6a",
                  lineHeight: 1.65,
                  margin: "0 0 32px",
                  textAlign: "left",
                }}
              >
                Test your ability to distinguish subtle color differences across
                the full spectrum with adaptive difficulty.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{ fontSize: "13px", fontWeight: 500, color: "#7878d8" }}
                >
                  Start test
                </span>
                <div className="arrow-icon">
                  <ArrowRight size={14} color="#888" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: "48px",
            fontSize: "12px",
            color: "#3a3a46",
            letterSpacing: "0.02em",
          }}
        >
          © {new Date().getFullYear()} Color Vision App · Not a medical diagnosis
        </p>
      </div>
    </main>
  );
}