const FIT = [
  { k: "経営者", d: "自社のAI活用の最終意思決定を担う人。" },
  { k: "事業オーナー", d: "P/Lを背負い、収益にAIを接続したい人。" },
  { k: "AI推進担当", d: "組織の中でAI実装を牽引する実務責任者。" },
  { k: "AIヘビーユーザー", d: "業務で常用し、自らツール化まで踏み込む人。" },
];

const NOT_FIT = [
  { k: "情報商材マインド", d: "「AIで月100万」「誰でも簡単」を語る層。" },
  { k: "ROM専", d: "受け取るだけで、自らは何も出さない姿勢。" },
  { k: "受け身の学習者", d: "実装より理解優先。手を動かさない人。" },
  { k: "未着手フェーズ", d: "まだ自社業務にAIを差し込んだことがない。" },
];

export default function WhoJoin() {
  return (
    <section className="section" id="s2">
      <div className="section-head">
        <div className="section-idx">— 03 / WHO</div>
        <div>
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
            この場所が
            <br />
            向いている人<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
        <div>
          <div className="mono-label" style={{ marginBottom: 28 }}>
            / FIT — 相応しい
          </div>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {FIT.map((r, i) => (
              <div
                key={r.k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr 1fr",
                  gap: 24,
                  padding: "28px 0",
                  borderBottom: "1px solid var(--line)",
                  alignItems: "baseline",
                }}
              >
                <div className="mono-label">0{i + 1}</div>
                <div
                  className="font-display font-jp"
                  style={{
                    fontSize: 26,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {r.k}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--fg-dim)",
                    lineHeight: 1.75,
                  }}
                >
                  {r.d}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div
            className="mono-label"
            style={{ marginBottom: 28, color: "var(--danger)" }}
          >
            / NOT FIT — 向いていない
          </div>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {NOT_FIT.map((r) => (
              <div
                key={r.k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr 1fr",
                  gap: 24,
                  padding: "28px 0",
                  borderBottom: "1px solid var(--line)",
                  alignItems: "baseline",
                }}
              >
                <div className="mono-label" style={{ color: "var(--danger)" }}>
                  ×
                </div>
                <div
                  className="font-display font-jp"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "var(--fg-dim)",
                  }}
                >
                  {r.k}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--fg-mute)",
                    lineHeight: 1.75,
                  }}
                >
                  {r.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
