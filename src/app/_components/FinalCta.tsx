import { APPLY_FORM_URL } from "../_constants";

import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section
      id="apply-cta"
      style={{
        padding: 0,
        borderTop: "1px solid var(--line-soft)",
        position: "relative",
        overflow: "hidden",
        minHeight: 640,
      }}
    >
      {/* Banner echo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/hero-banner-clean.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
          filter: "saturate(.75) brightness(.85)",
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, var(--bg) 0%, color-mix(in oklab, var(--bg) 35%, transparent) 25%, color-mix(in oklab, var(--bg) 35%, transparent) 70%, var(--bg) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 40,
          right: 40,
          top: 40,
          bottom: 40,
          border: "1px solid color-mix(in oklab, var(--fg) 14%, transparent)",
          pointerEvents: "none",
        }}
      />

      <Reveal>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "160px 64px 160px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 44,
          }}
        >
          <span className="mono-label" style={{ color: "var(--fg)" }}>
            FINAL WORD
          </span>
        </div>
        <h2
          className="font-display font-jp"
          style={{
            fontSize: "clamp(56px, 8vw, 124px)",
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            fontWeight: 400,
            color: "var(--fg)",
            textShadow:
              "0 2px 40px color-mix(in oklab, var(--bg) 40%, transparent)",
          }}
        >
          <span style={{ fontWeight: 300 }}>共に</span>
          <span style={{ fontStyle: "italic", fontWeight: 600 }}>最前線へ</span>
        </h2>
        <p
          style={{
            marginTop: 40,
            fontSize: 15,
            color: "color-mix(in oklab, var(--fg) 82%, transparent)",
            lineHeight: 1.85,
            maxWidth: 580,
            margin: "40px auto 0",
          }}
        >
          実践者が繋がるコミュニティです。
          <br />
          共にAI活用の最前線へ飛び込みましょう。
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            marginTop: 56,
          }}
        >
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "20px 32px", fontSize: 15 }}
          >
            入会を申し込む <span className="arrow">→</span>
          </a>
          <a
            href="#s5"
            className="btn"
            style={{
              padding: "20px 32px",
              fontSize: 15,
              borderColor: "color-mix(in oklab, var(--fg) 45%, transparent)",
              color: "var(--fg)",
              backdropFilter: "blur(6px)",
              background: "color-mix(in oklab, var(--bg) 30%, transparent)",
            }}
          >
            FAQを読む
          </a>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
