const NAV_ITEMS = ["Why now", "What", "Who", "Values", "Membership", "FAQ"];

export default function Nav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        backdropFilter: "blur(18px)",
        background: "color-mix(in oklab, var(--bg) 78%, transparent)",
        borderBottom: "1px solid var(--line-soft)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 64px",
          gap: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
            style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            GLOBIS AI Front
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV_ITEMS.map((label, i) => (
            <a
              key={label}
              href={`#s${i}`}
              className="ul-link font-display"
              style={{ fontSize: 13, color: "var(--fg-dim)" }}
            >
              {String(i + 1).padStart(2, "0")} {label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            className="btn btn-primary"
            href="#apply"
            style={{ padding: "12px 18px", fontSize: 13 }}
          >
            入会を申し込む <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <div
        style={{
          height: 1,
          background: "var(--line-soft)",
          position: "relative",
        }}
      />
    </div>
  );
}
