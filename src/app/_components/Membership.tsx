"use client";

import { useState } from "react";

const MUST = [
  { t: "GLOBIS生", d: "在学・修了を問わず、GLOBIS生コミュニティに属していること。" },
  { t: "実績アンケート", d: "AI実装の現在地を事実ベースで開示できること。" },
  { t: "使用実態", d: "週単位で AI を業務に投入していること。" },
  { t: "文化適合", d: "ギブ先行・受け身拒否のカルチャーに共鳴すること。" },
  { t: "審査通過", d: "運営による最終判断を経ること。" },
];

const STEPS = [
  {
    n: "01",
    t: "応募フォーム送信",
    d: "実績・使用実態・動機を記述。フォームは通常15〜20分。",
    tag: "APPLY",
  },
  {
    n: "02",
    t: "実績アンケート",
    d: "AI活用の現状・運用しているプロダクト・数字を詳細に共有。",
    tag: "SCREEN",
  },
  {
    n: "03",
    t: "文化適合の審査",
    d: "運営による書類審査とライトな面談。ギブ文化との整合を確認。",
    tag: "REVIEW",
  },
  {
    n: "04",
    t: "オンボーディング",
    d: "Discord招待 / 初回ギブセッション / 初回Ship課題のアサイン。",
    tag: "ONBOARD",
  },
];

export default function Membership() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" id="s4">
      <div className="section-head">
        <div className="section-idx">— 05 / MEMBERSHIP</div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            入会条件と流れ
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
            審査を通過した人だけが、
            <br />
            入口を開ける<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
      </div>

      {/* MUST */}
      <div style={{ marginBottom: 96 }}>
        <div className="mono-label" style={{ marginBottom: 24 }}>
          MUST — 必須条件
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 0,
            border: "1px solid var(--line)",
          }}
        >
          {MUST.map((r, i) => (
            <div
              key={r.t}
              style={{
                padding: "24px 20px 28px",
                borderRight: i < 4 ? "1px solid var(--line)" : "none",
              }}
            >
              <div className="mono-label" style={{ marginBottom: 10 }}>
                / 0{i + 1}
              </div>
              <div
                className="font-display font-jp"
                style={{ fontSize: 18, fontWeight: 500, marginBottom: 10 }}
              >
                {r.t}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--fg-dim)",
                  lineHeight: 1.7,
                }}
              >
                {r.d}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stepper */}
      <div>
        <div className="mono-label" style={{ marginBottom: 24 }}>
          FLOW — 入会フロー
        </div>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 18,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "var(--line)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 18,
              left: "12.5%",
              height: 1,
              background: "var(--accent)",
              width: `${(active / 3) * 75}%`,
              transition: "width .5s ease",
            }}
          />
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              onMouseEnter={() => setActive(i)}
              style={{
                position: "relative",
                paddingTop: 48,
                textAlign: "left",
                paddingRight: 32,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 0,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: active >= i ? "var(--accent)" : "var(--bg)",
                  border:
                    "1px solid " +
                    (active >= i ? "var(--accent)" : "var(--line)"),
                  transition: "all .4s ease",
                }}
              />
              <div className="mono-label" style={{ marginBottom: 8 }}>
                {s.n} · {s.tag}
              </div>
              <div
                className="font-display font-jp"
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.t}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--fg-dim)",
                  lineHeight: 1.7,
                  maxWidth: 260,
                }}
              >
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
