"use client";

import { useState } from "react";

import Reveal from "./Reveal";

const ITEMS = [
  {
    q: "コミュニティは完全にクローズドですか？",
    a: "はい。会員以外への共有・引用は禁止です。",
  },
  {
    q: "費用はかかりますか？",
    a: "いいえ。参加費無料のコミュニティです。",
  },
  {
    q: "GLOBIS生でないと入れませんか？",
    a: "はい、現時点では在学・修了を含む GLOBIS 生が必須条件です。",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      className="section"
      id="s5"
      data-theme="light"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      <Reveal>
      <div className="section-head">
        <div className="section-idx">— 06 / FAQ</div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            想定される問い
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
            FAQ<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
      </div>
      </Reveal>
      <Reveal>
      <div style={{ borderTop: "1px solid var(--line)" }}>
        {ITEMS.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q} style={{ borderBottom: "1px solid var(--line)" }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  padding: "32px 0",
                  cursor: "pointer",
                  color: "var(--fg)",
                  display: "grid",
                  gridTemplateColumns: "64px 1fr 40px",
                  gap: 24,
                  alignItems: "center",
                }}
              >
                <div className="mono-label">/ 0{i + 1}</div>
                <div
                  className="font-display font-jp"
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {it.q}
                </div>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    position: "relative",
                    justifySelf: "end",
                    transition: "transform .4s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      width: 24,
                      height: 1,
                      background: "var(--fg-dim)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      height: 24,
                      width: 1,
                      background: "var(--fg-dim)",
                    }}
                  />
                </div>
              </button>
              <div
                style={{
                  maxHeight: isOpen ? 240 : 0,
                  overflow: "hidden",
                  transition: "max-height .5s ease, opacity .4s",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div
                  style={{
                    padding: "0 0 36px 88px",
                    maxWidth: 800,
                    fontSize: 14,
                    color: "var(--fg-dim)",
                    lineHeight: 1.85,
                  }}
                >
                  {it.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </Reveal>
    </section>
  );
}
