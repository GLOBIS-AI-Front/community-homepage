import { APPLY_FORM_URL } from "../_constants";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: 0,
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Image layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/hero-banner-clean.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          filter: "saturate(.88) contrast(1.02)",
        }}
      />
      {/* Tri-layer overlay for depth + legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--bg) 68%, transparent) 0%, color-mix(in oklab, var(--bg) 28%, transparent) 38%, color-mix(in oklab, var(--bg) 35%, transparent) 62%, color-mix(in oklab, var(--bg) 96%, transparent) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, color-mix(in oklab, var(--bg) 55%, transparent) 0%, transparent 45%, transparent 100%)",
        }}
      />
      {/* Hairline frame */}
      <div
        style={{
          position: "absolute",
          left: 40,
          right: 40,
          top: 40,
          bottom: 40,
          border: "1px solid color-mix(in oklab, var(--fg) 18%, transparent)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "72px 80px 88px",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 52px",
          gap: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div className="eyebrow" style={{ color: "var(--fg)" }}>
              AI Community
            </div>
          </div>

          {/* Middle — title block */}
          <div style={{ maxWidth: 1150, marginTop: 40 }}>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(96px, 13.2vw, 212px)",
                lineHeight: 0.9,
                letterSpacing: "-0.055em",
                fontWeight: 500,
                marginBottom: 36,
                color: "var(--fg)",
                textShadow:
                  "0 2px 40px color-mix(in oklab, var(--bg) 45%, transparent)",
              }}
            >
              Ship.
              <br />
              Share.
              <br />
              Run<span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                maxWidth: 1060,
              }}
            >
              <div>
                <div
                  style={{
                    width: 48,
                    height: 1,
                    background: "var(--accent)",
                    marginBottom: 20,
                  }}
                />
                <p
                  className="font-jp"
                  style={{
                    fontSize: 26,
                    fontWeight: 300,
                    lineHeight: 1.5,
                    color: "var(--fg)",
                    letterSpacing: "0.02em",
                    textShadow:
                      "0 1px 20px color-mix(in oklab, var(--bg) 40%, transparent)",
                  }}
                >
                  AI時代、
                  <br />
                  最前線の実践者コミュニティ。
                </p>
              </div>
              <div
                style={{
                  paddingTop: 20,
                  borderTop:
                    "1px solid color-mix(in oklab, var(--fg) 22%, transparent)",
                }}
              >
                <div
                  className="mono-label"
                  style={{
                    color: "color-mix(in oklab, var(--fg) 60%, transparent)",
                    marginBottom: 10,
                  }}
                >
                  ABSTRACT
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "color-mix(in oklab, var(--fg) 82%, transparent)",
                    lineHeight: 1.85,
                    maxWidth: 420,
                  }}
                >
                  GLOBIS発 / AI実践者のためのクローズドコミュニティ。
                  <br />
                  情報だけではなく、実践に接続する人だけのための場所。
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 56,
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "18px 26px", fontSize: 14 }}
              >
                入会を申し込む <span className="arrow">→</span>
              </a>
              <a
                href="#s1"
                className="btn"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--fg) 45%, transparent)",
                  color: "var(--fg)",
                  padding: "18px 26px",
                  fontSize: 14,
                  backdropFilter: "blur(6px)",
                  background: "color-mix(in oklab, var(--bg) 30%, transparent)",
                }}
              >
                コミュニティを知る
              </a>
            </div>
            <div style={{ display: "flex", gap: 48, alignItems: "flex-end" }}>
              <div>
                <div
                  className="mono-label"
                  style={{
                    color: "color-mix(in oklab, var(--fg) 55%, transparent)",
                  }}
                >
                  MEMBERSHIP
                </div>
                <div
                  className="font-display font-jp"
                  style={{
                    fontSize: 15,
                    marginTop: 4,
                    color: "var(--fg)",
                    fontWeight: 500,
                  }}
                >
                  審査制
                </div>
              </div>
              <div>
                <div
                  className="mono-label"
                  style={{
                    color: "color-mix(in oklab, var(--fg) 55%, transparent)",
                  }}
                >
                  STATUS
                </div>
                <div
                  className="font-display font-jp"
                  style={{
                    fontSize: 15,
                    marginTop: 4,
                    color: "var(--fg)",
                    fontWeight: 500,
                  }}
                >
                  申込受付中
                </div>
              </div>
              <div>
                <div
                  className="mono-label"
                  style={{
                    color: "color-mix(in oklab, var(--fg) 55%, transparent)",
                  }}
                >
                  FOUNDED
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: 15,
                    marginTop: 4,
                    color: "var(--fg)",
                    fontWeight: 500,
                    fontFamily: '"JetBrains Mono",monospace',
                  }}
                >
                  2026/04/17
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right rail — vertical index */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <div
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontFamily: "JetBrains Mono,monospace",
              fontSize: 10,
              letterSpacing: "0.3em",
              color: "color-mix(in oklab, var(--fg) 55%, transparent)",
              textTransform: "uppercase",
            }}
          >
            A COHORT FOR AI OPERATORS — NOT STUDENTS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 1,
                height: 40,
                background: "color-mix(in oklab, var(--fg) 40%, transparent)",
              }}
            />
            <div
              className="mono-label"
              style={{
                color: "color-mix(in oklab, var(--fg) 60%, transparent)",
                fontSize: 9,
                writingMode: "vertical-rl",
              }}
            >
              SCROLL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
