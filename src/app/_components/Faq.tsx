"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "コミュニティは完全にクローズドですか？",
    a: "はい。会員以外への共有・引用は禁止です。Chatham House Rule に準じた情報運用を行います。",
  },
  {
    q: "継続条件はありますか？",
    a: "四半期ごとにアクティビティを確認します。ギブ実績 / Ship実績 / 共有数のいずれかが水準を下回った場合は個別面談の上、退会をお願いすることがあります。",
  },
  {
    q: "費用感はどの程度ですか？",
    a: "運営費に限定した実費ベースです。詳細はお申込みフォーム送信後、審査通過時にお伝えします。情報商材的な高額課金は一切ありません。",
  },
  {
    q: "GLOBIS生でないと入れませんか？",
    a: "はい、現時点では在学・修了を含む GLOBIS 生が必須条件です。将来的な拡張は検討中ですが、当面はクローズドで運用します。",
  },
  {
    q: "業種・職種の偏りはありますか？",
    a: "経営者・事業オーナー・AI推進担当・ヘビーユーザーを核に、業種は分散しています。重要なのは属性ではなく、実装と数字に向き合っているかです。",
  },
  {
    q: "オフライン集まりはありますか？",
    a: "定期的に都内でオフラインセッション / デモデイを開催します。希望者のみ参加可。コアはオンラインで回ります。",
  },
  {
    q: "匿名参加は可能ですか？",
    a: "不可です。実名・所属の開示が前提となります。",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section" id="s5">
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
            Frequently asked.
          </h2>
        </div>
      </div>
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
    </section>
  );
}
