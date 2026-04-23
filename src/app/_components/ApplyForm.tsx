"use client";

import { useState } from "react";

const STEPS = ["ABOUT", "PRACTICE", "SHIP", "CULTURE", "REVIEW"] as const;

type FormData = Record<string, string | boolean>;

interface FieldProps {
  l: string;
  p: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}

function Field({ l, p, value, onChange, textarea }: FieldProps) {
  return (
    <div style={{ marginBottom: 24 }}>
      <label className="mono-label" style={{ display: "block", marginBottom: 10 }}>
        {l}
      </label>
      {textarea ? (
        <textarea
          rows={4}
          placeholder={p}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100%",
            background: "transparent",
            color: "var(--fg)",
            border: "none",
            borderBottom: "1px solid var(--line)",
            padding: "12px 0",
            fontSize: 15,
            fontFamily: "inherit",
            resize: "none",
            outline: "none",
          }}
        />
      ) : (
        <input
          placeholder={p}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100%",
            background: "transparent",
            color: "var(--fg)",
            border: "none",
            borderBottom: "1px solid var(--line)",
            padding: "12px 0",
            fontSize: 15,
            fontFamily: "inherit",
            outline: "none",
          }}
        />
      )}
    </div>
  );
}

const CULTURE_ITEMS = [
  "Give First — 先に渡す姿勢に共鳴できる",
  "Ship over Study — 学ぶより、まず作る",
  "Done > Perfect — 完璧より、完成させる",
  "Share Raw — 失敗や途中経過も共有できる",
];

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({});
  const set = (k: string, v: string | boolean) =>
    setData((d) => ({ ...d, [k]: v }));

  const done = step === STEPS.length;

  return (
    <section
      id="apply"
      style={{
        padding: "140px 64px 160px",
        borderTop: "1px solid var(--line-soft)",
        background: "var(--bg-elev)",
      }}
    >
      <div className="section-head">
        <div className="section-idx">— 07 / APPLY</div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            ENTRY
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              fontWeight: 500,
            }}
          >
            入会を申し込む<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80 }}>
        {/* Stepper */}
        <div>
          <div className="mono-label" style={{ marginBottom: 24 }}>
            STEPS / 05
          </div>
          {STEPS.map((s, i) => (
            <div
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "16px 0",
                borderBottom: "1px solid var(--line-soft)",
                opacity: i <= step ? 1 : 0.4,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background:
                    i < step
                      ? "var(--accent)"
                      : "transparent",
                  border:
                    "1px solid " +
                    (i <= step ? "var(--accent)" : "var(--line)"),
                }}
              />
              <div className="mono-label">
                {String(i + 1).padStart(2, "0")} · {s}
              </div>
            </div>
          ))}
        </div>

        {/* Body */}
        <div
          style={{
            minHeight: 460,
            border: "1px solid var(--line)",
            padding: "48px 52px",
            background: "var(--bg)",
          }}
        >
          {done ? (
            <div>
              <div className="mono-label" style={{ marginBottom: 20 }}>
                / SUBMITTED
              </div>
              <h3
                className="font-display font-jp"
                style={{
                  fontSize: 44,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  marginBottom: 24,
                }}
              >
                応募を受け付けました
                <span style={{ color: "var(--accent)" }}>.</span>
              </h3>
              <p
                className="font-jp"
                style={{
                  fontSize: 15,
                  color: "var(--fg-dim)",
                  lineHeight: 1.9,
                  maxWidth: 560,
                }}
              >
                運営による書類審査の結果は、通常 5〜10 営業日以内にお知らせします。
                <br />
                結果まで、手元の Ship を一つ進めてお待ちください。
              </p>
              <button
                type="button"
                className="btn"
                style={{ marginTop: 36 }}
                onClick={() => {
                  setStep(0);
                  setData({});
                }}
              >
                ← フォームを閉じる
              </button>
            </div>
          ) : (
            <>
              <div className="mono-label" style={{ marginBottom: 24 }}>
                / STEP {String(step + 1).padStart(2, "0")} — {STEPS[step]}
              </div>
              {step === 0 && (
                <div>
                  <h3
                    className="font-display font-jp"
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                      marginBottom: 28,
                    }}
                  >
                    まず、あなたについて。
                  </h3>
                  {(
                    [
                      { k: "name", l: "お名前", p: "山田 太郎" },
                      {
                        k: "affiliation",
                        l: "GLOBIS 所属・ステータス",
                        p: "例：2023 修了 / 本科在籍中",
                      },
                      {
                        k: "role",
                        l: "現在の役割",
                        p: "経営者 / 事業責任者 / AI推進 / ...",
                      },
                    ] as const
                  ).map((f) => (
                    <Field
                      key={f.k}
                      l={f.l}
                      p={f.p}
                      value={(data[f.k] as string) || ""}
                      onChange={(v) => set(f.k, v)}
                    />
                  ))}
                </div>
              )}
              {step === 1 && (
                <div>
                  <h3
                    className="font-display font-jp"
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                      marginBottom: 28,
                    }}
                  >
                    現在の AI 実務を、事実で。
                  </h3>
                  {(
                    [
                      {
                        k: "tools",
                        l: "日常的に使っているツール",
                        p: "Claude, GPT-4, Cursor, n8n, ...",
                      },
                      { k: "frequency", l: "実務投入頻度", p: "週5日 / 毎日 / ..." },
                      {
                        k: "last_build",
                        l: "直近で自分の手で動かしたもの",
                        p: "社内ボット・スクリプト・ワークフロー等",
                      },
                    ] as const
                  ).map((f) => (
                    <Field
                      key={f.k}
                      l={f.l}
                      p={f.p}
                      value={(data[f.k] as string) || ""}
                      onChange={(v) => set(f.k, v)}
                    />
                  ))}
                </div>
              )}
              {step === 2 && (
                <div>
                  <h3
                    className="font-display font-jp"
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                      marginBottom: 28,
                    }}
                  >
                    一番誇れる Ship を、1 つ。
                  </h3>
                  <Field
                    l="プロダクト / 施策名"
                    p="社内AIアシスタント「Atlas」など"
                    value={(data.ship_name as string) || ""}
                    onChange={(v) => set("ship_name", v)}
                  />
                  <Field
                    l="何を解決し、どんな数字が動いたか"
                    p="工数週20時間削減 / リード転換率 +18% など"
                    textarea
                    value={(data.ship_desc as string) || ""}
                    onChange={(v) => set("ship_desc", v)}
                  />
                </div>
              )}
              {step === 3 && (
                <div>
                  <h3
                    className="font-display font-jp"
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                      marginBottom: 28,
                    }}
                  >
                    文化適合の確認。
                  </h3>
                  {CULTURE_ITEMS.map((x, i) => (
                    <label
                      key={x}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                        padding: "16px 0",
                        borderBottom: "1px solid var(--line-soft)",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={!!data[`v${i}`]}
                        onChange={(e) => set(`v${i}`, e.target.checked)}
                        style={{ marginTop: 4, accentColor: "var(--accent)" }}
                      />
                      <span
                        className="font-jp"
                        style={{ fontSize: 14, color: "var(--fg)" }}
                      >
                        {x}
                      </span>
                    </label>
                  ))}
                </div>
              )}
              {step === 4 && (
                <div>
                  <h3
                    className="font-display font-jp"
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                      marginBottom: 28,
                    }}
                  >
                    内容を確認して送信.
                  </h3>
                  <div
                    style={{
                      border: "1px solid var(--line)",
                      padding: 24,
                      marginBottom: 28,
                    }}
                  >
                    {Object.entries(data)
                      .filter(([k]) => !k.startsWith("v"))
                      .map(([k, v]) => (
                        <div
                          key={k}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "200px 1fr",
                            gap: 16,
                            padding: "10px 0",
                            borderBottom: "1px solid var(--line-soft)",
                          }}
                        >
                          <span className="mono-label">{k}</span>
                          <span style={{ fontSize: 13, color: "var(--fg-dim)" }}>
                            {String(v) || "—"}
                          </span>
                        </div>
                      ))}
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--fg-mute)",
                      lineHeight: 1.8,
                      maxWidth: 560,
                    }}
                  >
                    送信後、運営による審査を行います。結果は通常5〜10営業日以内にご連絡します。
                  </p>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 48,
                }}
              >
                <button
                  type="button"
                  className="btn"
                  disabled={step === 0}
                  onClick={() => setStep(step - 1)}
                  style={{ opacity: step === 0 ? 0.3 : 1 }}
                >
                  ← 戻る
                </button>
                <div className="mono-label">
                  {String(step + 1).padStart(2, "0")} /{" "}
                  {String(STEPS.length).padStart(2, "0")}
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setStep(step + 1)}
                >
                  {step === STEPS.length - 1 ? "送信する" : "次へ"}{" "}
                  <span className="arrow">→</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
