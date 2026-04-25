import Reveal from "./Reveal";

interface PillarProps {
  idx: string;
  en: string;
  jp: string;
  body: string;
  icon: React.ReactNode;
}

function Pillar({ idx, en, jp, body, icon }: PillarProps) {
  return (
    <div
      style={{
        padding: "48px 36px 32px",
        borderRight: "1px solid var(--line)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        minHeight: 320,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* huge index backdrop */}
      <div
        className="font-display"
        aria-hidden
        style={{
          position: "absolute",
          right: -18,
          top: -30,
          fontSize: 260,
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "color-mix(in oklab, var(--fg) 4%, transparent)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        0{idx}
      </div>

      <div
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          zIndex: 1,
        }}
      >
        {icon}
      </div>
      <div style={{ position: "relative" }}>
        <div className="mono-label">0{idx} / 03</div>
      </div>
      <div style={{ marginTop: 40, position: "relative" }}>
        <div
          className="font-display"
          style={{
            fontSize: 12,
            letterSpacing: "0.3em",
            color: "var(--fg-mute)",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          {en}
        </div>
        <div
          className="font-display font-jp"
          style={{
            fontSize: 36,
            letterSpacing: "-0.02em",
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          {jp}
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.85,
            color: "var(--fg-dim)",
            maxWidth: 360,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export default function WhatIs() {
  return (
    <section
      className="section"
      id="s1"
      data-theme="light"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      <Reveal>
      <div className="section-head">
        <div className="section-idx">— 02 / WHAT IS IT</div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            GLOBIS AI FRONT
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              fontWeight: 500,
              maxWidth: 1100,
            }}
          >
            答えのない先端を、
            <br />
            全力で楽しめる集団。
          </h2>
          <p
            className="font-jp"
            style={{
              marginTop: 28,
              fontSize: 17,
              lineHeight: 1.9,
              fontWeight: 300,
              color: "var(--fg-dim)",
              maxWidth: 720,
            }}
          >
            「先端 / 先陣 / 先頭」 —
            AI実装・事業活用の最前線に立つ人たちが、ギブを先に差し出し、実践と実装の知見を持ち寄る場所。
          </p>
        </div>
      </div>
      </Reveal>

      <Reveal>
      <div
        style={{
          borderTop: "1px solid var(--line)",
          borderLeft: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <Pillar
          idx="1"
          en="FRONT"
          jp="先端を走る"
          body="研究・実務の両輪で、国内外の最新を最短で実装にまで落とす。空論ではなく、動いているものに向き合う。"
          icon={
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
              <circle
                cx="44"
                cy="44"
                r="42"
                stroke="var(--line)"
                strokeDasharray="1 3"
              />
              <circle cx="44" cy="44" r="30" stroke="var(--line)" />
              <circle
                cx="44"
                cy="44"
                r="18"
                stroke="color-mix(in oklab, var(--fg) 30%, transparent)"
              />
              <line
                x1="44"
                y1="6"
                x2="44"
                y2="18"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
              <line
                x1="44"
                y1="70"
                x2="44"
                y2="82"
                stroke="color-mix(in oklab, var(--fg) 25%, transparent)"
              />
              <line
                x1="6"
                y1="44"
                x2="18"
                y2="44"
                stroke="color-mix(in oklab, var(--fg) 25%, transparent)"
              />
              <line
                x1="70"
                y1="44"
                x2="82"
                y2="44"
                stroke="color-mix(in oklab, var(--fg) 25%, transparent)"
              />
              <path d="M44 20 L50 44 L44 48 L38 44 Z" fill="var(--accent)" />
              <circle
                cx="44"
                cy="44"
                r="3"
                fill="var(--bg)"
                stroke="var(--fg)"
                strokeWidth="1.2"
              />
              <circle cx="74" cy="18" r="2.2" fill="var(--accent)" />
            </svg>
          }
        />
        <Pillar
          idx="2"
          en="GIVE FIRST"
          jp="ギブ先行"
          body="奪う前に渡す。実務で得た知見・知識・仕組みを、まず自分から開示する者を評価する。"
          icon={
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
              <circle cx="44" cy="44" r="42" stroke="var(--line)" />
              <path
                d="M22 44 A22 22 0 0 1 66 44"
                stroke="color-mix(in oklab, var(--fg) 20%, transparent)"
                strokeWidth="1"
              />
              <path
                d="M16 44 A28 28 0 0 1 72 44"
                stroke="color-mix(in oklab, var(--fg) 12%, transparent)"
                strokeWidth="1"
              />
              <circle
                cx="28"
                cy="50"
                r="6"
                stroke="var(--fg)"
                strokeWidth="1.3"
                fill="var(--bg)"
              />
              <circle
                cx="60"
                cy="50"
                r="6"
                stroke="var(--fg)"
                strokeWidth="1.3"
                fill="var(--bg)"
              />
              <line
                x1="34"
                y1="50"
                x2="52"
                y2="50"
                stroke="var(--accent)"
                strokeWidth="1.6"
              />
              <path
                d="M48 46 L54 50 L48 54"
                stroke="var(--accent)"
                strokeWidth="1.6"
                fill="none"
              />
              <circle cx="28" cy="34" r="2.4" fill="var(--accent)" />
              <line
                x1="28"
                y1="36"
                x2="28"
                y2="44"
                stroke="var(--accent)"
                strokeWidth="1.2"
                strokeDasharray="1.5 1.5"
              />
            </svg>
          }
        />
        <Pillar
          idx="3"
          en="SHIP OVER STUDY"
          jp="実装主義"
          body="学びの正解より、動くプロトタイプ。失敗とコード、数字と顧客の反応だけが通貨になる。"
          icon={
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
              <rect x="6" y="6" width="76" height="76" stroke="var(--line)" />
              <line x1="6" y1="25" x2="82" y2="25" stroke="var(--line)" />
              <line x1="6" y1="63" x2="82" y2="63" stroke="var(--line)" />
              <line x1="25" y1="6" x2="25" y2="82" stroke="var(--line)" />
              <line x1="63" y1="6" x2="63" y2="82" stroke="var(--line)" />
              <rect
                x="16"
                y="56"
                width="8"
                height="14"
                fill="var(--accent)"
                opacity=".35"
              />
              <rect
                x="32"
                y="46"
                width="8"
                height="24"
                fill="var(--accent)"
                opacity=".6"
              />
              <rect
                x="48"
                y="34"
                width="8"
                height="36"
                fill="var(--accent)"
                opacity=".85"
              />
              <rect x="64" y="20" width="8" height="50" fill="var(--accent)" />
              <circle cx="68" cy="16" r="3" fill="var(--accent)" />
              <circle
                cx="68"
                cy="16"
                r="6"
                stroke="var(--accent)"
                strokeOpacity=".4"
              />
            </svg>
          }
        />
      </div>
      </Reveal>
    </section>
  );
}
