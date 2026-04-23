const COLUMNS = [
  { h: "Community", l: ["Why Now", "What is", "Values", "Membership"] },
  { h: "Access", l: ["審査応募", "お問い合わせ", "運営について"] },
  { h: "Legal", l: ["プライバシー", "特定商取引法", "運営会社"] },
];

export default function Footer() {
  return (
    <footer
      style={{ padding: "80px 64px 48px", borderTop: "1px solid var(--line)" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          marginBottom: 64,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                background: "var(--accent)",
                borderRadius: "50%",
              }}
            />
            <div
              className="font-display"
              style={{
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              GLOBIS AI Front
            </div>
          </div>
          <p
            className="font-jp"
            style={{
              fontSize: 13,
              color: "var(--fg-dim)",
              lineHeight: 1.9,
              maxWidth: 400,
            }}
          >
            GLOBIS発、AI実装者のための
            <br />
            クローズドコミュニティ。
          </p>
          <div className="mono-label" style={{ marginTop: 40 }}>
            MMXXVI · COHORT 01 · 60°12′N
          </div>
        </div>
        {COLUMNS.map((c) => (
          <div key={c.h}>
            <div className="mono-label" style={{ marginBottom: 20 }}>
              / {c.h}
            </div>
            {c.l.map((x) => (
              <div key={x} style={{ marginBottom: 10 }}>
                <a
                  href="#"
                  className="ul-link font-jp"
                  style={{ fontSize: 13, color: "var(--fg-dim)" }}
                >
                  {x}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="hair" style={{ marginBottom: 28 }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="mono-label">
          © 2026 GLOBIS AI FRONT · ALL RIGHTS RESERVED
        </div>
        <div className="mono-label">BUILT FOR OPERATORS</div>
      </div>
    </footer>
  );
}
