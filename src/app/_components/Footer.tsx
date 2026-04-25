import { APPLY_FORM_URL } from "../_constants";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  h: string;
  l: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    h: "Community",
    l: [
      { label: "Why Now", href: "#s0" },
      { label: "What is", href: "#s1" },
      { label: "Who", href: "#s2" },
      { label: "Values", href: "#s3" },
      { label: "Membership", href: "#s4" },
    ],
  },
  {
    h: "Apply",
    l: [
      { label: "FAQ", href: "#s5" },
      { label: "Apply Form", href: APPLY_FORM_URL, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{ padding: "80px 64px 48px", borderTop: "1px solid var(--line)" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gaf_icon.svg"
              alt=""
              style={{ height: 28, width: "auto", display: "block" }}
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
              <div key={x.label} style={{ marginBottom: 10 }}>
                <a
                  href={x.href}
                  {...(x.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="ul-link font-jp"
                  style={{ fontSize: 13, color: "var(--fg-dim)" }}
                >
                  {x.label}
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
        <div className="mono-label">BUILT FOR RYOTA</div>
      </div>
    </footer>
  );
}
