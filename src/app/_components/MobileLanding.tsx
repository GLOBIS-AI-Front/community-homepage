"use client";

import { useState } from "react";

import { APPLY_FORM_URL } from "../_constants";

import Reveal from "./Reveal";

const METRICS: [string, string][] = [
  ["情報感度", "高"],
  ["心理的安全性", "高"],
  ["負担", "少"],
];

const PILLARS = [
  {
    en: "FRONT",
    jp: "先端を走る",
    d: "研究・実務の両輪で、国内外の最新を最短で実装にまで落とす。机上ではなく、動いているものに向き合う。",
  },
  {
    en: "GIVE FIRST",
    jp: "ギブ先行",
    d: "奪う前に渡す。実務で得た知見・プロンプト・仕組みを、まず自分から開示する者だけが残る。",
  },
  {
    en: "SHIP OVER STUDY",
    jp: "実装主義",
    d: "学びの正解より、動くプロトタイプ。失敗とコード、数字と顧客の反応だけが通貨になる。",
  },
];

const FIT = ["経営者", "事業オーナー", "AI推進担当", "AIヘビーユーザー"];
const NOT_FIT = ["ROM専", "受け身の学習者", "未実装", "情報商材マインド"];

const VALUES: [string, string][] = [
  ["Give First", "まずは自分から与える"],
  ["Ship over Study", "学ぶより、まず作る"],
  ["Done > Perfect", "完璧より、完成させる"],
  ["Share Raw", "失敗も途中経過も共有する"],
];

const STEPS: [string, string][] = [
  ["01", "申し込みフォーム送信"],
  ["02", "運営による確認"],
  ["03", "Discord招待"],
];

const FAQS: [string, string][] = [
  [
    "コミュニティは完全にクローズドですか？",
    "はい。会員以外への共有・引用は禁止です。",
  ],
  ["費用はかかりますか？", "いいえ。参加費無料のコミュニティです。"],
  ["GLOBIS生でないと入れませんか？", "はい、GLOBIS 生が必須条件です。"],
];

const NAV_ITEMS: [string, string][] = [
  ["Why now", "#m-s0"],
  ["What", "#m-s1"],
  ["Who", "#m-s2"],
  ["Values", "#m-s3"],
  ["Membership", "#m-s4"],
  ["FAQ", "#m-s5"],
];

export default function MobileLanding() {
  const [open, setOpen] = useState<number>(-1);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        fontFamily: '"Noto Sans JP","Space Grotesk",sans-serif',
        overflow: "clip",
      }}
    >
      {/* Top nav */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 22px",
          borderBottom: "1px solid var(--line-soft)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background: "color-mix(in oklab, var(--bg) 78%, transparent)",
        }}
      >
        <a
          href="#"
          aria-label="GLOBIS AI Front"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gaf_icon.svg"
            alt=""
            style={{ height: 26, width: "auto", display: "block" }}
          />
          <span
            className="font-display"
            style={{ fontSize: 13, fontWeight: 500 }}
          >
            GLOBIS AI Front
          </span>
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="mono-label"
          style={{
            fontSize: 9,
            background: "transparent",
            border: "none",
            color: "var(--fg)",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <span style={{ width: 18, height: 1, background: "var(--fg)" }} />
            <span style={{ width: 18, height: 1, background: "var(--fg)" }} />
          </span>
          MENU
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="ナビゲーションメニュー"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "var(--bg)",
            color: "var(--fg)",
            display: "flex",
            flexDirection: "column",
            padding: "12px 22px 32px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 12,
              borderBottom: "1px solid var(--line-soft)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gaf_icon.svg"
                alt=""
                style={{ height: 26, width: "auto", display: "block" }}
              />
              <span
                className="font-display"
                style={{ fontSize: 13, fontWeight: 500 }}
              >
                GLOBIS AI Front
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="メニューを閉じる"
              className="mono-label"
              style={{
                fontSize: 9,
                background: "transparent",
                border: "none",
                color: "var(--fg)",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              CLOSE
              <span
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: 14,
                  height: 14,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: 14,
                    height: 1,
                    background: "var(--fg)",
                    transform: "rotate(45deg)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: 14,
                    height: 1,
                    background: "var(--fg)",
                    transform: "rotate(-45deg)",
                  }}
                />
              </span>
            </button>
          </div>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 24,
            }}
          >
            {NAV_ITEMS.map(([label, href], i) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="font-display"
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--line-soft)",
                  color: "var(--fg)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span>{label}</span>
                <span
                  className="mono-label"
                  style={{ fontSize: 10, color: "var(--fg-dim)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary"
            style={{
              fontSize: 12,
              padding: "14px 18px",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            入会を申し込む <span className="arrow">→</span>
          </a>
        </div>
      )}

      {/* Hero */}
      <div
        style={{
          padding: "28px 22px 36px",
          position: "relative",
          overflow: "hidden",
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: "url(/hero-banner-clean.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--bg) 50%, transparent) 0%, color-mix(in oklab, var(--bg) 85%, transparent) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="eyebrow" style={{ fontSize: 9, color: "#fff" }}>
            AI Community
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: 76,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              fontWeight: 500,
              marginTop: 40,
              color: "var(--fg)",
            }}
          >
            Ship.
            <br />
            Share.
            <br />
            Run<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <div
            style={{
              width: 36,
              height: 1,
              background: "var(--fg)",
              margin: "24px 0 18px",
            }}
          />
          <p
            className="font-jp"
            style={{
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.6,
              color: "var(--fg)",
            }}
          >
            AI時代、最前線の
            <br />
            実践者コミュニティ。
          </p>
          <p
            style={{
              fontSize: 11,
              color: "var(--fg-dim)",
              marginTop: 10,
              lineHeight: 1.7,
            }}
          >
            GLOBIS発 / AI実装者のためのクローズドコミュニティ
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 30,
            }}
          >
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                fontSize: 12,
                padding: "14px 18px",
                justifyContent: "center",
              }}
            >
              入会を申し込む <span className="arrow">→</span>
            </a>
            <a
              href="#m-s1"
              className="btn"
              style={{
                fontSize: 12,
                padding: "14px 18px",
                justifyContent: "center",
                borderColor: "var(--fg-dim)",
                color: "var(--fg)",
              }}
            >
              コミュニティを知る
            </a>
          </div>
        </div>
      </div>

      {/* Why Now */}
      <div
        style={{
          padding: "56px 22px",
          borderTop: "1px solid var(--line-soft)",
        }}
        id="m-s0"
      >
        <Reveal>
          <div className="section-idx">— 01 / WHY NOW</div>
          <h2
            className="font-display font-jp"
            style={{
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginTop: 20,
            }}
          >
            「情報収集」で
            <br />
            止まっていないか
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p
            className="font-jp"
            style={{
              fontSize: 13,
              lineHeight: 1.85,
              color: "var(--fg-dim)",
              marginTop: 20,
            }}
          >
            情報交換の場は豊富にある一方で、実装と収益に接続する場は、驚くほど少ない。
          </p>
        </Reveal>
        <Reveal>
          <div style={{ marginTop: 28, borderTop: "1px solid var(--line)" }}>
            {METRICS.map((r, i) => (
              <div
                key={r[0]}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--line-soft)",
                  alignItems: "center",
                }}
              >
                <span className="mono-label" style={{ fontSize: 10 }}>
                  0{i + 1} · {r[0]}
                </span>
                <span
                  className="font-display"
                  style={{ fontSize: 22, color: "var(--accent)" }}
                >
                  {r[1]}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* What is — pillars */}
      <div
        style={{
          padding: "56px 22px",
          borderTop: "1px solid var(--line-soft)",
          background: "var(--bg)",
          color: "var(--fg)",
        }}
        id="m-s1"
        data-theme="light"
      >
        <Reveal>
          <div className="section-idx">— 02 / WHAT IS IT</div>
          <div className="eyebrow" style={{ marginTop: 16 }}>
            GLOBIS AI FRONT
          </div>
          <h2
            className="font-display font-jp"
            style={{
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              marginTop: 16,
            }}
          >
            答えのない先端を、
            <br />
            全力で楽しめる集団。
          </h2>
          <p
            className="font-jp"
            style={{
              marginTop: 18,
              fontSize: 13,
              lineHeight: 1.9,
              fontWeight: 300,
              color: "var(--fg-dim)",
            }}
          >
            「先端 / 先陣 / 先頭」 —
            AI実装・事業活用の最前線に立つ人たちが、ギブを先に差し出し、実践と実装の知見を持ち寄る場所。
          </p>
        </Reveal>
        <Reveal>
          <div style={{ marginTop: 32 }}>
            {PILLARS.map((p, i) => (
              <div
                key={p.en}
                style={{
                  padding: "20px 0",
                  borderTop: "1px solid var(--line)",
                }}
              >
                <div
                  className="mono-label"
                  style={{ fontSize: 10, marginBottom: 8 }}
                >
                  0{i + 1} · {p.en}
                </div>
                <div
                  className="font-display font-jp"
                  style={{ fontSize: 22, fontWeight: 500, marginBottom: 6 }}
                >
                  {p.jp}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--fg-dim)",
                    lineHeight: 1.7,
                  }}
                >
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Who */}
      <div
        style={{
          padding: "56px 22px",
          borderTop: "1px solid var(--line-soft)",
          background: "var(--bg)",
          color: "var(--fg)",
        }}
        id="m-s2"
        data-theme="light"
      >
        <Reveal>
          <div className="section-idx">— 03 / WHO</div>
          <h2
            className="font-display font-jp"
            style={{
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              marginTop: 20,
              marginBottom: 28,
            }}
          >
            この場所が
            <br />
            向いている人。
          </h2>
        </Reveal>
        <Reveal>
          <div
            className="mono-label"
            style={{ fontSize: 10, marginBottom: 14 }}
          >
            FIT
          </div>
          {FIT.map((x, i) => (
            <div
              key={x}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderTop: "1px solid var(--line-soft)",
              }}
            >
              <span className="font-jp" style={{ fontSize: 15 }}>
                {x}
              </span>
              <span className="mono-label" style={{ fontSize: 10 }}>
                0{i + 1}
              </span>
            </div>
          ))}
        </Reveal>
        <Reveal>
          <div
            className="mono-label"
            style={{
              fontSize: 10,
              marginTop: 32,
              marginBottom: 14,
              color: "var(--danger)",
            }}
          >
            NOT FIT
          </div>
          {NOT_FIT.map((x, i) => (
            <div
              key={x}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderTop: "1px solid var(--line-soft)",
              }}
            >
              <span
                className="font-jp"
                style={{ fontSize: 14, color: "var(--fg-dim)" }}
              >
                {x}
              </span>
              <span
                className="mono-label"
                style={{ fontSize: 10, color: "var(--danger)" }}
              >
                0{i + 1}
              </span>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Values */}
      <div
        style={{
          padding: "56px 22px",
          borderTop: "1px solid var(--line-soft)",
        }}
        id="m-s3"
      >
        <Reveal>
          <div className="section-idx">— 04 / VALUES</div>
          <h2
            className="font-display"
            style={{
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              marginTop: 20,
              marginBottom: 28,
            }}
          >
            実践者の、
            <br />
            4つの原則。
          </h2>
        </Reveal>
        <Reveal>
          {VALUES.map((v, i) => (
            <div
              key={v[0]}
              style={{
                display: "grid",
                gridTemplateColumns: "36px 1fr 1fr",
                gap: 8,
                padding: "16px 0",
                borderTop: "1px solid var(--line-soft)",
                alignItems: "baseline",
              }}
            >
              <span className="mono-label" style={{ fontSize: 10 }}>
                / 0{i + 1}
              </span>
              <span
                className="font-display"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                {v[0]}
              </span>
              <span
                className="font-jp"
                style={{
                  fontSize: 11,
                  color: "var(--fg-dim)",
                  textAlign: "right",
                }}
              >
                {v[1]}
              </span>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Membership */}
      <div
        style={{
          padding: "56px 22px",
          borderTop: "1px solid var(--line-soft)",
          background: "var(--bg)",
          color: "var(--fg)",
        }}
        id="m-s4"
        data-theme="light"
      >
        <Reveal>
          <div className="section-idx">— 05 / MEMBERSHIP</div>
          <h2
            className="font-display font-jp"
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginTop: 20,
              marginBottom: 28,
            }}
          >
            応募から入会
            <br />
            までのステップ。
          </h2>
        </Reveal>
        <Reveal>
          <div
            className="mono-label"
            style={{ fontSize: 10, marginBottom: 14 }}
          >
            FLOW
          </div>
          {STEPS.map((s, i) => (
            <div
              key={s[0]}
              style={{
                display: "flex",
                gap: 16,
                padding: "18px 0",
                borderTop: "1px solid var(--line-soft)",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "1px solid var(--accent)",
                  background: i === 0 ? "var(--accent)" : "transparent",
                }}
              />
              <div className="mono-label" style={{ fontSize: 10, width: 28 }}>
                {s[0]}
              </div>
              <div
                className="font-jp"
                style={{ fontSize: 14, fontWeight: 500 }}
              >
                {s[1]}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* FAQ */}
      <div
        style={{
          padding: "56px 22px",
          borderTop: "1px solid var(--line-soft)",
          background: "var(--bg)",
          color: "var(--fg)",
        }}
        id="m-s5"
        data-theme="light"
      >
        <Reveal>
          <div className="section-idx">— 06 / FAQ</div>
          <h2
            className="font-display"
            style={{
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              marginTop: 20,
              marginBottom: 28,
            }}
          >
            FAQ.
          </h2>
        </Reveal>
        <Reveal>
          {FAQS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it[0]}
                style={{ borderTop: "1px solid var(--line-soft)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    padding: "18px 0",
                    background: "transparent",
                    border: "none",
                    color: "var(--fg)",
                    display: "grid",
                    gridTemplateColumns: "1fr 20px",
                    gap: 12,
                    alignItems: "center",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="font-jp"
                    style={{ fontSize: 13, fontWeight: 500 }}
                  >
                    {it[0]}
                  </span>
                  <span
                    style={{
                      transition: "transform .3s",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      fontSize: 18,
                      color: "var(--fg-dim)",
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--fg-dim)",
                      lineHeight: 1.85,
                      paddingBottom: 18,
                    }}
                  >
                    {it[1]}
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>

      {/* Final CTA */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "80px 22px",
          borderTop: "1px solid var(--line-soft)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/hero-banner-clean.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 55%",
            filter: "saturate(.75) brightness(.85)",
            opacity: 0.55,
            transform: "scale(1.2)",
            transformOrigin: "center",
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
            left: 16,
            right: 16,
            top: 16,
            bottom: 16,
            border: "1px solid color-mix(in oklab, var(--fg) 14%, transparent)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span className="mono-label" style={{ fontSize: 9 }}>
                FINAL WORD
              </span>
            </div>
            <h2
              className="font-display font-jp"
              style={{
                fontSize: 44,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                fontWeight: 400,
                marginTop: 24,
              }}
            >
              <span style={{ fontWeight: 300 }}>共に</span>
              <span style={{ fontStyle: "italic", fontWeight: 600 }}>
                最前線へ
              </span>
            </h2>
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                fontSize: 12,
                padding: "14px 18px",
                justifyContent: "center",
                marginTop: 36,
                display: "inline-flex",
              }}
            >
              入会を申し込む <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "40px 22px 32px",
          borderTop: "1px solid var(--line)",
        }}
      >
        <div
          className="font-display"
          style={{
            fontSize: 13,
            fontWeight: 500,
            textAlign: "center",
            marginBottom: 14,
          }}
        >
          GLOBIS AI Front
        </div>
      </div>
    </div>
  );
}
