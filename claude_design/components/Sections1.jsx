// Why Now — problem framing
const WhyNow = () => (
  <section className="section" id="s0">
    <div className="section-head">
      <div>
        <div className="section-idx">— 01 / WHY NOW</div>
      </div>
      <div>
        <h2 className="font-display" style={{fontSize:72, lineHeight:1.05, letterSpacing:'-0.035em', fontWeight:500, maxWidth:1000}}>
          「情報収集」で<br/>
          止まっていないか<span style={{color:'var(--accent)'}}>.</span>
        </h2>
      </div>
    </div>

    <div className="grid-12">
      <div style={{gridColumn:'span 3'}}>
        <div className="mono-label">CONTEXT</div>
      </div>
      <div style={{gridColumn:'span 6'}}>
        <p className="font-jp" style={{fontSize:20, lineHeight:1.85, fontWeight:300, color:'var(--fg)'}}>
          AIは、知識として語られる段階を過ぎた。<br/>
          いま問われているのは<strong style={{fontWeight:500}}>実践</strong>と<strong style={{fontWeight:500}}>実装</strong>だ。
        </p>
        <p style={{fontSize:15, lineHeight:1.9, color:'var(--fg-dim)', marginTop:32, maxWidth:620}}>
          事業の現場では、誰もがGPTを開き、誰もがClaudeに質問している。
          それでも「稼ぐ武器」として組み込めている人は、ごく一部でしかない。
          情報交換の場は豊富にある一方で、実装と収益に接続する場は、
          驚くほど少ない。
        </p>
      </div>
    </div>

    <div style={{marginTop:96}}>
      <div className="hair" style={{marginBottom:36}}/>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0, borderLeft:'1px solid var(--line)'}}>
        {[
          {
            k:'情報感度', v:'高', pct:90, d:'最新モデル・論文・OSSの流通速度は十分。',
            icon:(
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="3" fill="var(--accent)"/>
                <circle cx="20" cy="20" r="9" stroke="var(--accent)" strokeOpacity=".7"/>
                <circle cx="20" cy="20" r="15" stroke="var(--accent)" strokeOpacity=".35"/>
                <circle cx="20" cy="20" r="19" stroke="var(--accent)" strokeOpacity=".15"/>
              </svg>
            )
          },
          {
            k:'心理的安全性', v:'高', pct:100, d:'場も関係性もある。だが、それだけでは動かない。',
            icon:(
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 6 L34 12 V22 C34 30 28 34 20 36 C12 34 6 30 6 22 V12 Z"
                  stroke="var(--accent)" strokeWidth="1.4" fill="none" opacity=".85"/>
                <path d="M14 20 L19 25 L28 15" stroke="var(--accent)" strokeWidth="1.4" fill="none" opacity=".35" strokeDasharray="2 2"/>
              </svg>
            )
          },
          {
            k:'負担', v:'少', pct:20, d:'ツールもテンプレートも揃い、最初の一歩は軽い。',
            icon:(
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="4"  y="26" width="6" height="10" fill="var(--accent)" opacity=".9"/>
                <rect x="13" y="20" width="6" height="16" fill="var(--accent)" opacity=".45"/>
                <rect x="22" y="14" width="6" height="22" fill="var(--accent)" opacity=".22"/>
                <rect x="31" y="8"  width="6" height="28" fill="var(--accent)" opacity=".1"/>
              </svg>
            )
          },
        ].map((r,i)=>(
          <div key={i} style={{
            padding:'32px 28px 36px', borderRight:'1px solid var(--line)',
            display:'flex', flexDirection:'column', gap:16
          }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
              <div className="mono-label">0{i+1} / {r.k.toUpperCase()}</div>
              {r.icon}
            </div>
            <div style={{display:'flex', alignItems:'baseline', gap:12}}>
              <div className="font-display" style={{fontSize:72, fontWeight:400, letterSpacing:'-0.045em', color:'var(--accent)', lineHeight:1}}>
                {r.v}
              </div>
              <div className="font-mono" style={{fontSize:12, color:'var(--fg-mute)'}}>
                {r.pct}%
              </div>
            </div>
            {/* Progress bar */}
            <div style={{height:2, background:'var(--line)', position:'relative', marginTop:4}}>
              <div style={{position:'absolute', left:0, top:0, height:'100%', width:`${r.pct}%`, background:'var(--accent)'}}/>
            </div>
            <div style={{fontSize:13, color:'var(--fg-dim)', lineHeight:1.7, marginTop:4}}>{r.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// What is GLOBIS AI Front — three pillars
const Pillar = ({ idx, en, jp, body, icon }) => (
  <div style={{
    padding:'48px 36px', borderRight:'1px solid var(--line)',
    display:'flex', flexDirection:'column', gap:20,
    minHeight:420, position:'relative', overflow:'hidden'
  }}>
    {/* huge index backdrop */}
    <div className="font-display" aria-hidden style={{
      position:'absolute', right:-18, top:-30, fontSize:260, fontWeight:500,
      lineHeight:1, letterSpacing:'-0.04em',
      color:'color-mix(in oklab, var(--fg) 4%, transparent)',
      pointerEvents:'none', userSelect:'none'
    }}>0{idx}</div>

    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', position:'relative'}}>
      <div className="mono-label">0{idx} / 03</div>
      {icon}
    </div>
    <div style={{marginTop:40, position:'relative'}}>
      <div className="font-display" style={{fontSize:12, letterSpacing:'0.3em', color:'var(--fg-mute)', textTransform:'uppercase', marginBottom:14}}>
        {en}
      </div>
      <div className="font-display font-jp" style={{fontSize:36, letterSpacing:'-0.02em', fontWeight:500, marginBottom:20}}>
        {jp}
      </div>
      <p style={{fontSize:14, lineHeight:1.85, color:'var(--fg-dim)', maxWidth:360}}>
        {body}
      </p>
    </div>
  </div>
);

const WhatIs = () => (
  <section className="section" id="s1">
    <div className="section-head">
      <div className="section-idx">— 02 / WHAT IS IT</div>
      <div>
        <div className="eyebrow" style={{marginBottom:24}}>GLOBIS AI FRONT</div>
        <h2 className="font-display" style={{fontSize:72, lineHeight:1.05, letterSpacing:'-0.035em', fontWeight:500, maxWidth:1100}}>
          先頭に立つ人たちの、<br/>静かな集団.
        </h2>
        <p className="font-jp" style={{marginTop:28, fontSize:17, lineHeight:1.9, fontWeight:300, color:'var(--fg-dim)', maxWidth:720}}>
          「先端 / 先陣 / 先頭」 — AI実装・事業活用の最前線に立つ人たちが、
          ギブを先に差し出し、実装と収益の知見を持ち寄る場所。
        </p>
      </div>
    </div>

    <div style={{borderTop:'1px solid var(--line)', borderLeft:'1px solid var(--line)',
      display:'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>
      <Pillar idx="1" en="FRONT" jp="先端を走る"
        body="研究・実務の両輪で、国内外の最新を最短で実装にまで落とす。机上ではなく、動いているものに向き合う。"
        icon={
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
            {/* orbit rings */}
            <circle cx="44" cy="44" r="42" stroke="var(--line)" strokeDasharray="1 3"/>
            <circle cx="44" cy="44" r="30" stroke="var(--line)"/>
            <circle cx="44" cy="44" r="18" stroke="color-mix(in oklab, var(--fg) 30%, transparent)"/>
            {/* compass arm */}
            <line x1="44" y1="6"  x2="44" y2="18" stroke="var(--accent)" strokeWidth="1.5"/>
            <line x1="44" y1="70" x2="44" y2="82" stroke="color-mix(in oklab, var(--fg) 25%, transparent)"/>
            <line x1="6"  y1="44" x2="18" y2="44" stroke="color-mix(in oklab, var(--fg) 25%, transparent)"/>
            <line x1="70" y1="44" x2="82" y2="44" stroke="color-mix(in oklab, var(--fg) 25%, transparent)"/>
            {/* needle */}
            <path d="M44 20 L50 44 L44 48 L38 44 Z" fill="var(--accent)"/>
            <circle cx="44" cy="44" r="3" fill="var(--bg)" stroke="var(--fg)" strokeWidth="1.2"/>
            {/* leading dot */}
            <circle cx="74" cy="18" r="2.2" fill="var(--accent)"/>
          </svg>
        }/>
      <Pillar idx="2" en="GIVE FIRST" jp="ギブ先行"
        body="奪う前に渡す。実務で得た知見・プロンプト・仕組みを、まず自分から開示する者だけが残る。"
        icon={
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
            {/* outer frame */}
            <circle cx="44" cy="44" r="42" stroke="var(--line)"/>
            {/* three concentric arcs — outgoing */}
            <path d="M22 44 A22 22 0 0 1 66 44" stroke="color-mix(in oklab, var(--fg) 20%, transparent)" strokeWidth="1"/>
            <path d="M16 44 A28 28 0 0 1 72 44" stroke="color-mix(in oklab, var(--fg) 12%, transparent)" strokeWidth="1"/>
            {/* pair of figures */}
            <circle cx="28" cy="50" r="6" stroke="var(--fg)" strokeWidth="1.3" fill="var(--bg)"/>
            <circle cx="60" cy="50" r="6" stroke="var(--fg)" strokeWidth="1.3" fill="var(--bg)"/>
            {/* arrow — give across */}
            <line x1="34" y1="50" x2="52" y2="50" stroke="var(--accent)" strokeWidth="1.6"/>
            <path d="M48 46 L54 50 L48 54" stroke="var(--accent)" strokeWidth="1.6" fill="none"/>
            {/* offering dot */}
            <circle cx="28" cy="34" r="2.4" fill="var(--accent)"/>
            <line x1="28" y1="36" x2="28" y2="44" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="1.5 1.5"/>
          </svg>
        }/>
      <Pillar idx="3" en="SHIP OVER STUDY" jp="実装主義"
        body="学びの正解より、動くプロトタイプ。失敗とコード、数字と顧客の反応だけが通貨になる。"
        icon={
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
            {/* grid backdrop */}
            <rect x="6" y="6" width="76" height="76" stroke="var(--line)"/>
            <line x1="6"  y1="25" x2="82" y2="25" stroke="var(--line)"/>
            <line x1="6"  y1="63" x2="82" y2="63" stroke="var(--line)"/>
            <line x1="25" y1="6"  x2="25" y2="82" stroke="var(--line)"/>
            <line x1="63" y1="6"  x2="63" y2="82" stroke="var(--line)"/>
            {/* ascending bars — ship trajectory */}
            <rect x="16" y="56" width="8" height="14" fill="var(--accent)" opacity=".35"/>
            <rect x="32" y="46" width="8" height="24" fill="var(--accent)" opacity=".6"/>
            <rect x="48" y="34" width="8" height="36" fill="var(--accent)" opacity=".85"/>
            <rect x="64" y="20" width="8" height="50" fill="var(--accent)"/>
            {/* pulse dot atop the latest bar */}
            <circle cx="68" cy="16" r="3" fill="var(--accent)"/>
            <circle cx="68" cy="16" r="6" stroke="var(--accent)" strokeOpacity=".4"/>
          </svg>
        }/>
    </div>
  </section>
);

// Who should join
const WhoJoin = () => (
  <section className="section" id="s2">
    <div className="section-head">
      <div className="section-idx">— 03 / WHO</div>
      <div>
        <h2 className="font-display" style={{fontSize:72, lineHeight:1.05, letterSpacing:'-0.035em', fontWeight:500, maxWidth:1100}}>
          この場所が<br/>向いている人<span style={{color:'var(--accent)'}}>.</span>
        </h2>
      </div>
    </div>

    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:72}}>
      <div>
        <div className="mono-label" style={{marginBottom:28}}>/ FIT — 相応しい</div>
        <div style={{borderTop:'1px solid var(--line)'}}>
          {[
            {k:'経営者', d:'自社のAI活用の最終意思決定を担う人。'},
            {k:'事業オーナー', d:'P/Lを背負い、収益にAIを接続したい人。'},
            {k:'AI推進担当', d:'組織の中でAI実装を牽引する実務責任者。'},
            {k:'AIヘビーユーザー', d:'業務で常用し、自らツール化まで踏み込む人。'},
          ].map((r,i)=>(
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'40px 1fr 1fr', gap:24,
              padding:'28px 0', borderBottom:'1px solid var(--line)',
              alignItems:'baseline'
            }}>
              <div className="mono-label">0{i+1}</div>
              <div className="font-display font-jp" style={{fontSize:26, fontWeight:500, letterSpacing:'-0.01em'}}>{r.k}</div>
              <div style={{fontSize:13, color:'var(--fg-dim)', lineHeight:1.75}}>{r.d}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mono-label" style={{marginBottom:28, color:'var(--danger)'}}>/ NOT FIT — 向いていない</div>
        <div style={{borderTop:'1px solid var(--line)'}}>
          {[
            {k:'情報商材マインド', d:'「AIで月100万」「誰でも簡単」を語る層。'},
            {k:'ROM専', d:'受け取るだけで、自らは何も出さない姿勢。'},
            {k:'受け身の学習者', d:'実装より理解優先。手を動かさない人。'},
            {k:'未着手フェーズ', d:'まだ自社業務にAIを差し込んだことがない。'},
          ].map((r,i)=>(
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'40px 1fr 1fr', gap:24,
              padding:'28px 0', borderBottom:'1px solid var(--line)',
              alignItems:'baseline'
            }}>
              <div className="mono-label" style={{color:'var(--danger)'}}>×</div>
              <div className="font-display font-jp" style={{fontSize:22, fontWeight:400, letterSpacing:'-0.01em', color:'var(--fg-dim)'}}>{r.k}</div>
              <div style={{fontSize:13, color:'var(--fg-mute)', lineHeight:1.75}}>{r.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

window.WhyNow = WhyNow;
window.WhatIs = WhatIs;
window.WhoJoin = WhoJoin;
