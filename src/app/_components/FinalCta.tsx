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

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "160px 64px 160px",
          textAlign: "center",
        }}
      >
        <div
          className="eyebrow"
          style={{
            justifyContent: "center",
            marginBottom: 44,
            color: "var(--fg)",
          }}
        >
          FINAL WORD
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
          先に、
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 300 }}>
            ギブしに来てください
            <span style={{ color: "var(--accent)", fontStyle: "normal" }}>.</span>
          </span>
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
          受け取る前に、渡す。それを共有できる人だけが、この場に相応しい。
          <br />
          まず、あなたの手元で動いているものを教えてください。
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
            href="#apply"
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
    </section>
  );
}
