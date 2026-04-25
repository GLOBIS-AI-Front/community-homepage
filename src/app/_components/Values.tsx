"use client";

import { useState } from "react";

import Reveal from "./Reveal";

const VALUES = [
  {
    en: "Give First",
    jp: "まずは自分から与える",
    d: "受け取る前に渡す。知見、プロンプト、人。コミュニティの通貨はギブの総量。",
  },
  {
    en: "Ship over Study",
    jp: "学ぶより、まず作る",
    d: "学習の時間を、実装の時間に置き換える。完成度より、稼働している事実。",
  },
  {
    en: "Done > Perfect",
    jp: "完璧を目指すより、完成させる",
    d: "未完の完璧より、荒削りの完成。世に出してから磨く。",
  },
  {
    en: "Share Raw",
    jp: "リアルな失敗や途中経過も共有する",
    d: "整えてから出す、はもう遅い。数字も失敗も、生々しく共有する。",
  },
];

export default function Values() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="section" id="s3">
      <Reveal>
      <div className="section-head">
        <div className="section-idx">— 04 / VALUES</div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            行動指針
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
            実践者の、
            <br />
            4つの原則<span style={{ color: "var(--accent)" }}>。</span>
          </h2>
        </div>
      </div>
      </Reveal>

      <Reveal>
      <div style={{ borderTop: "1px solid var(--line)" }}>
        {VALUES.map((v, i) => (
          <div
            key={v.en}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 340px 1fr 1fr",
              gap: 32,
              padding: "36px 0 40px",
              borderBottom: "1px solid var(--line)",
              alignItems: "center",
              cursor: "default",
              transition: "all .4s ease",
              background:
                hover === i
                  ? "color-mix(in oklab, var(--accent) 4%, transparent)"
                  : "transparent",
              paddingLeft: hover === i ? 16 : 0,
              paddingRight: hover === i ? 16 : 0,
            }}
          >
            <div className="mono-label">/ 0{i + 1}</div>
            <div
              className="font-display"
              style={{
                fontSize: 40,
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--fg)",
                transition: "color .3s",
                fontStyle: hover === i ? "italic" : "normal",
                whiteSpace: "nowrap",
              }}
            >
              {v.en}
            </div>
            <div
              className="font-jp"
              style={{
                fontSize: 20,
                fontWeight: 300,
                letterSpacing: "0.03em",
                color: "var(--fg-dim)",
              }}
            >
              {v.jp}
            </div>
            <div
              style={{
                fontSize: 13,
                lineHeight: 1.8,
                color: "var(--fg-dim)",
                opacity: hover === null || hover === i ? 1 : 0.4,
                transition: "opacity .3s",
              }}
            >
              {v.d}
            </div>
          </div>
        ))}
      </div>
      </Reveal>
    </section>
  );
}
