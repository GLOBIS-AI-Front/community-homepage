"use client";

import { useState } from "react";

import Reveal from "./Reveal";

const MUST = [
  { t: "GLOBIS生", d: "GLOBISの在校生・卒業生であること。" },
  { t: "AI使用実績", d: "AIを業務で活用していること。" },
  { t: "文化適合", d: "ギブ先行・受け身拒否のカルチャーに共鳴すること。" },
];

const STEPS = [
  {
    n: "01",
    t: "申し込みフォーム送信",
    d: "「入会を申し込む」からフォームに回答。",
    tag: "APPLY",
  },
  {
    n: "02",
    t: "運営による確認",
    d: "運営による審査。",
    tag: "REVIEW",
  },
  {
    n: "03",
    t: "Discord招待",
    d: "コミュニティDiscordサーバーへ招待。",
    tag: "ONBOARD",
  },
];

export default function Membership() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="section"
      id="s4"
      data-theme="light"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      <Reveal>
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
            応募から入会までの、
            <br />
            4ステップ<span style={{ color: "var(--accent)" }}>。</span>
          </h2>
        </div>
      </div>
      </Reveal>

      {/* MUST */}
      <Reveal>
      <div style={{ marginBottom: 96 }}>
        <div className="mono-label" style={{ marginBottom: 24 }}>
          MUST — 必須条件
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid var(--line)",
          }}
        >
          {MUST.map((r, i) => (
            <div
              key={r.t}
              style={{
                padding: "24px 20px 28px",
                borderRight: i < 2 ? "1px solid var(--line)" : "none",
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
      </Reveal>

      {/* Stepper */}
      <Reveal>
      <div>
        <div className="mono-label" style={{ marginBottom: 24 }}>
          FLOW — 入会フロー
        </div>
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 18,
              left: "16.67%",
              right: "16.67%",
              height: 1,
              background: "var(--line)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 18,
              left: "16.67%",
              height: 1,
              background: "var(--accent)",
              width: `${(active / 2) * 66.66}%`,
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
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: "50%",
                  transform: "translateX(-50%)",
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
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
