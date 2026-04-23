// Final CTA + Footer + multi-step Apply form
const FinalCTA = () => (
  <section style={{
    padding:'0',
    borderTop:'1px solid var(--line-soft)',
    position:'relative', overflow:'hidden',
    minHeight:640
  }} id="apply-cta">
    {/* Banner echo */}
    <div style={{
      position:'absolute', inset:0,
      backgroundImage:'url(assets/hero-banner-clean.png)',
      backgroundSize:'cover', backgroundPosition:'center 55%',
      filter:'saturate(.75) brightness(.85)',
      opacity:.55
    }}/>
    <div style={{
      position:'absolute', inset:0,
      background:'linear-gradient(180deg, var(--bg) 0%, color-mix(in oklab, var(--bg) 35%, transparent) 25%, color-mix(in oklab, var(--bg) 35%, transparent) 70%, var(--bg) 100%)'
    }}/>
    <div style={{position:'absolute', left:40, right:40, top:40, bottom:40, border:'1px solid color-mix(in oklab, var(--fg) 14%, transparent)', pointerEvents:'none'}}/>

    <div style={{position:'relative', zIndex:2, padding:'160px 64px 160px', textAlign:'center'}}>
      <div className="eyebrow" style={{justifyContent:'center', marginBottom:44, color:'var(--fg)'}}>
        <span style={{background:'var(--accent)'}}/>FINAL WORD
      </div>
      <h2 className="font-display font-jp" style={{
        fontSize:'clamp(56px, 8vw, 124px)', lineHeight:1.08, letterSpacing:'-0.035em', fontWeight:400,
        color:'var(--fg)', textShadow:'0 2px 40px color-mix(in oklab, var(--bg) 40%, transparent)'
      }}>
        先に、<br/>
        <span style={{fontStyle:'italic', fontWeight:300}}>ギブしに来てください<span style={{color:'var(--accent)', fontStyle:'normal'}}>.</span></span>
      </h2>
      <p style={{marginTop:40, fontSize:15, color:'color-mix(in oklab, var(--fg) 82%, transparent)', lineHeight:1.85, maxWidth:580, margin:'40px auto 0'}}>
        受け取る前に、渡す。それを共有できる人だけが、この場に相応しい。<br/>
        まず、あなたの手元で動いているものを教えてください。
      </p>
      <div style={{display:'flex', justifyContent:'center', gap:14, marginTop:56}}>
        <a href="#apply" className="btn btn-primary" style={{padding:'20px 32px', fontSize:15}}>
          入会を申し込む <span className="arrow">→</span>
        </a>
        <a href="#s5" className="btn" style={{
          padding:'20px 32px', fontSize:15,
          borderColor:'color-mix(in oklab, var(--fg) 45%, transparent)', color:'var(--fg)',
          backdropFilter:'blur(6px)',
          background:'color-mix(in oklab, var(--bg) 30%, transparent)'
        }}>
          FAQを読む
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{padding:'80px 64px 48px', borderTop:'1px solid var(--line)'}}>
    <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, marginBottom:64}}>
      <div>
        <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:28}}>
          <div style={{width:10, height:10, background:'var(--accent)', borderRadius:'50%'}}/>
          <div className="font-display" style={{fontSize:22, fontWeight:500, letterSpacing:'-0.01em'}}>GLOBIS AI Front</div>
        </div>
        <p className="font-jp" style={{fontSize:13, color:'var(--fg-dim)', lineHeight:1.9, maxWidth:400}}>
          GLOBIS発、AI実装者のための<br/>クローズドコミュニティ。
        </p>
        <div className="mono-label" style={{marginTop:40}}>MMXXVI · COHORT 01 · 60°12′N</div>
      </div>
      {[
        {h:'Community', l:['Why Now','What is','Values','Membership']},
        {h:'Access', l:['審査応募','お問い合わせ','運営について']},
        {h:'Legal', l:['プライバシー','特定商取引法','運営会社']},
      ].map((c,i)=>(
        <div key={i}>
          <div className="mono-label" style={{marginBottom:20}}>/ {c.h}</div>
          {c.l.map(x=>(
            <div key={x} style={{marginBottom:10}}>
              <a href="#" className="ul-link font-jp" style={{fontSize:13, color:'var(--fg-dim)'}}>{x}</a>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div className="hair" style={{marginBottom:28}}/>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div className="mono-label">© 2026 GLOBIS AI FRONT · ALL RIGHTS RESERVED</div>
      <div className="mono-label">BUILT FOR OPERATORS</div>
    </div>
  </footer>
);

const ApplyForm = () => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({});
  const set = (k,v)=>setData(d=>({...d,[k]:v}));
  const steps = ['ABOUT','PRACTICE','SHIP','CULTURE','REVIEW'];

  const done = step === steps.length;

  return (
    <section id="apply" style={{
      padding:'140px 64px 160px', borderTop:'1px solid var(--line-soft)',
      background:'var(--bg-elev)'
    }}>
      <div className="section-head">
        <div className="section-idx">— 07 / APPLY</div>
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>ENTRY</div>
          <h2 className="font-display" style={{fontSize:72, lineHeight:1.05, letterSpacing:'-0.035em', fontWeight:500}}>
            入会を申し込む<span style={{color:'var(--accent)'}}>.</span>
          </h2>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'260px 1fr', gap:80}}>
        {/* Stepper */}
        <div>
          <div className="mono-label" style={{marginBottom:24}}>STEPS / 05</div>
          {steps.map((s,i)=>(
            <div key={s} style={{
              display:'flex', alignItems:'center', gap:16, padding:'16px 0',
              borderBottom:'1px solid var(--line-soft)',
              opacity: i<=step?1:.4
            }}>
              <div style={{
                width:10, height:10, borderRadius:'50%',
                background: i<step?'var(--accent)': i===step?'transparent':'transparent',
                border:'1px solid '+(i<=step?'var(--accent)':'var(--line)'),
              }}/>
              <div className="mono-label">{String(i+1).padStart(2,'0')} · {s}</div>
            </div>
          ))}
        </div>

        {/* Body */}
        <div style={{minHeight:460, border:'1px solid var(--line)', padding:'48px 52px', background:'var(--bg)'}}>
          {done ? (
            <div>
              <div className="mono-label" style={{marginBottom:20}}>/ SUBMITTED</div>
              <h3 className="font-display font-jp" style={{fontSize:44, fontWeight:500, letterSpacing:'-0.02em', marginBottom:24}}>
                応募を受け付けました<span style={{color:'var(--accent)'}}>.</span>
              </h3>
              <p className="font-jp" style={{fontSize:15, color:'var(--fg-dim)', lineHeight:1.9, maxWidth:560}}>
                運営による書類審査の結果は、通常 5〜10 営業日以内にお知らせします。<br/>
                結果まで、手元の Ship を一つ進めてお待ちください。
              </p>
              <button className="btn" style={{marginTop:36}} onClick={()=>{setStep(0); setData({});}}>
                ← フォームを閉じる
              </button>
            </div>
          ) : (
            <>
              <div className="mono-label" style={{marginBottom:24}}>/ STEP {String(step+1).padStart(2,'0')} — {steps[step]}</div>
              {step===0 && (
                <div>
                  <h3 className="font-display font-jp" style={{fontSize:32, fontWeight:500, letterSpacing:'-0.015em', marginBottom:28}}>
                    まず、あなたについて。
                  </h3>
                  {[
                    {k:'name', l:'お名前', p:'山田 太郎'},
                    {k:'affiliation', l:'GLOBIS 所属・ステータス', p:'例：2023 修了 / 本科在籍中'},
                    {k:'role', l:'現在の役割', p:'経営者 / 事業責任者 / AI推進 / ...'},
                  ].map(f=>(
                    <Field key={f.k} {...f} value={data[f.k]||''} onChange={v=>set(f.k,v)}/>
                  ))}
                </div>
              )}
              {step===1 && (
                <div>
                  <h3 className="font-display font-jp" style={{fontSize:32, fontWeight:500, letterSpacing:'-0.015em', marginBottom:28}}>
                    現在の AI 実務を、事実で。
                  </h3>
                  {[
                    {k:'tools', l:'日常的に使っているツール', p:'Claude, GPT-4, Cursor, n8n, ...'},
                    {k:'frequency', l:'実務投入頻度', p:'週5日 / 毎日 / ...'},
                    {k:'last_build', l:'直近で自分の手で動かしたもの', p:'社内ボット・スクリプト・ワークフロー等'},
                  ].map(f=>(
                    <Field key={f.k} {...f} value={data[f.k]||''} onChange={v=>set(f.k,v)}/>
                  ))}
                </div>
              )}
              {step===2 && (
                <div>
                  <h3 className="font-display font-jp" style={{fontSize:32, fontWeight:500, letterSpacing:'-0.015em', marginBottom:28}}>
                    一番誇れる Ship を、1 つ。
                  </h3>
                  <Field k="ship_name" l="プロダクト / 施策名" p="社内AIアシスタント「Atlas」など" value={data.ship_name||''} onChange={v=>set('ship_name',v)}/>
                  <Field k="ship_desc" l="何を解決し、どんな数字が動いたか" p="工数週20時間削減 / リード転換率 +18% など" textarea value={data.ship_desc||''} onChange={v=>set('ship_desc',v)}/>
                </div>
              )}
              {step===3 && (
                <div>
                  <h3 className="font-display font-jp" style={{fontSize:32, fontWeight:500, letterSpacing:'-0.015em', marginBottom:28}}>
                    文化適合の確認。
                  </h3>
                  {[
                    'Give First — 先に渡す姿勢に共鳴できる',
                    'Ship over Study — 学ぶより、まず作る',
                    'Done > Perfect — 完璧より、完成させる',
                    'Share Raw — 失敗や途中経過も共有できる',
                  ].map((x,i)=>(
                    <label key={i} style={{
                      display:'flex', alignItems:'flex-start', gap:14, padding:'16px 0',
                      borderBottom:'1px solid var(--line-soft)', cursor:'pointer'
                    }}>
                      <input type="checkbox"
                        checked={!!data[`v${i}`]}
                        onChange={e=>set(`v${i}`, e.target.checked)}
                        style={{marginTop:4, accentColor:'var(--accent)'}}/>
                      <span className="font-jp" style={{fontSize:14, color:'var(--fg)'}}>{x}</span>
                    </label>
                  ))}
                </div>
              )}
              {step===4 && (
                <div>
                  <h3 className="font-display font-jp" style={{fontSize:32, fontWeight:500, letterSpacing:'-0.015em', marginBottom:28}}>
                    内容を確認して送信.
                  </h3>
                  <div style={{border:'1px solid var(--line)', padding:24, marginBottom:28}}>
                    {Object.entries(data).filter(([k])=>!k.startsWith('v')).map(([k,v])=>(
                      <div key={k} style={{display:'grid', gridTemplateColumns:'200px 1fr', gap:16, padding:'10px 0', borderBottom:'1px solid var(--line-soft)'}}>
                        <span className="mono-label">{k}</span>
                        <span style={{fontSize:13, color:'var(--fg-dim)'}}>{v||'—'}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{fontSize:12, color:'var(--fg-mute)', lineHeight:1.8, maxWidth:560}}>
                    送信後、運営による審査を行います。結果は通常5〜10営業日以内にご連絡します。
                  </p>
                </div>
              )}

              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:48}}>
                <button className="btn"
                  disabled={step===0}
                  onClick={()=>setStep(step-1)}
                  style={{opacity:step===0?.3:1}}>
                  ← 戻る
                </button>
                <div className="mono-label">{String(step+1).padStart(2,'0')} / {String(steps.length).padStart(2,'0')}</div>
                <button className="btn btn-primary" onClick={()=>setStep(step+1)}>
                  {step===steps.length-1?'送信する':'次へ'} <span className="arrow">→</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Field = ({ k, l, p, value, onChange, textarea }) => (
  <div style={{marginBottom:24}}>
    <label className="mono-label" style={{display:'block', marginBottom:10}}>{l}</label>
    {textarea ? (
      <textarea
        rows="4"
        placeholder={p} value={value} onChange={e=>onChange(e.target.value)}
        style={{
          width:'100%', background:'transparent', color:'var(--fg)',
          border:'none', borderBottom:'1px solid var(--line)', padding:'12px 0',
          fontSize:15, fontFamily:'inherit', resize:'none', outline:'none'
        }}
      />
    ) : (
      <input
        placeholder={p} value={value} onChange={e=>onChange(e.target.value)}
        style={{
          width:'100%', background:'transparent', color:'var(--fg)',
          border:'none', borderBottom:'1px solid var(--line)', padding:'12px 0',
          fontSize:15, fontFamily:'inherit', outline:'none'
        }}
      />
    )}
  </div>
);

window.FinalCTA = FinalCTA;
window.Footer = Footer;
window.ApplyForm = ApplyForm;
