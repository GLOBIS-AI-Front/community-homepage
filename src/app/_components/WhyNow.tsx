import Reveal from "./Reveal";

type Row = {
  k: string;
  v: string;
  pct: number;
  d: string;
  icon: React.ReactNode;
};

const ROWS: Row[] = [
  {
    k: "情報感度",
    v: "高",
    pct: 90,
    d: "最新モデル・論文・OSSの流通速度は十分。",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="3" fill="var(--accent)" />
        <circle
          cx="20"
          cy="20"
          r="9"
          stroke="var(--accent)"
          strokeOpacity=".7"
        />
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke="var(--accent)"
          strokeOpacity=".35"
        />
        <circle
          cx="20"
          cy="20"
          r="19"
          stroke="var(--accent)"
          strokeOpacity=".15"
        />
      </svg>
    ),
  },
  {
    k: "心理的安全性",
    v: "高",
    pct: 100,
    d: "場も関係性もある。だが、それだけでは動かない。",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 6 L34 12 V22 C34 30 28 34 20 36 C12 34 6 30 6 22 V12 Z"
          stroke="var(--accent)"
          strokeWidth="1.4"
          fill="none"
          opacity=".85"
        />
        <path
          d="M14 20 L19 25 L28 15"
          stroke="var(--accent)"
          strokeWidth="1.4"
          fill="none"
          opacity=".35"
          strokeDasharray="2 2"
        />
      </svg>
    ),
  },
  {
    k: "負担",
    v: "少",
    pct: 20,
    d: "ツールもテンプレートも揃い、最初の一歩は軽い。",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="4"
          y="26"
          width="6"
          height="10"
          fill="var(--accent)"
          opacity=".9"
        />
        <rect
          x="13"
          y="20"
          width="6"
          height="16"
          fill="var(--accent)"
          opacity=".45"
        />
        <rect
          x="22"
          y="14"
          width="6"
          height="22"
          fill="var(--accent)"
          opacity=".22"
        />
        <rect
          x="31"
          y="8"
          width="6"
          height="28"
          fill="var(--accent)"
          opacity=".1"
        />
      </svg>
    ),
  },
];

export default function WhyNow() {
  return (
    <section className="section" id="s0">
      <Reveal>
        <div className="section-head">
          <div>
            <div className="section-idx">— 01 / WHY NOW</div>
          </div>
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: 72,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                fontWeight: 500,
                maxWidth: 1000,
              }}
            >
              「情報収集」で
              <br />
              止まっていないか。
            </h2>
          </div>
        </div>
      </Reveal>

      <Reveal>
      <div className="grid-12">
        <div style={{ gridColumn: "span 3" }}>
          <div className="mono-label">CONTEXT</div>
        </div>
        <div style={{ gridColumn: "span 6" }}>
          <p
            className="font-jp"
            style={{
              fontSize: 20,
              lineHeight: 1.85,
              fontWeight: 300,
              color: "var(--fg)",
            }}
          >
            AIは、知識として語られる段階を過ぎた。
            <br />
            いま問われているのは
            <strong style={{ fontWeight: 500 }}>実践</strong>と
            <strong style={{ fontWeight: 500 }}>実装</strong>だ。
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "var(--fg-dim)",
              marginTop: 32,
              maxWidth: 620,
            }}
          >
            事業の現場では、誰もがAI質問している。それでも「成長の武器」として組み込めている人は、ごく一部でしかない。情報交換の場は豊富にある一方で、実践に接続する場は驚くほど少ない。
          </p>
        </div>
      </div>
      </Reveal>

      <Reveal>
      <div style={{ marginTop: 96 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--line)",
            borderLeft: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          {ROWS.map((r, i) => (
            <div
              key={r.k}
              style={{
                padding: "32px 28px 36px",
                borderRight: "1px solid var(--line)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div className="mono-label">
                  0{i + 1} / {r.k.toUpperCase()}
                </div>
                {r.icon}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <div
                  className="font-display"
                  style={{
                    fontSize: 72,
                    fontWeight: 400,
                    letterSpacing: "-0.045em",
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {r.v}
                </div>
                <div
                  className="font-mono"
                  style={{ fontSize: 12, color: "var(--fg-mute)" }}
                >
                  {r.pct}%
                </div>
              </div>
              <div
                style={{
                  height: 2,
                  background: "var(--line)",
                  position: "relative",
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: `${r.pct}%`,
                    background: "var(--accent)",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--fg-dim)",
                  lineHeight: 1.7,
                  marginTop: 4,
                }}
              >
                {r.d}
              </div>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
