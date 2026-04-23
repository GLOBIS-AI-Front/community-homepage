// Three hero variants — switchable via prop
const HeroA = () => (
  // Typography primacy — bold editorial
  <section style={{
    position:'relative', padding:'120px 64px 160px', minHeight:'92vh',
    display:'flex', flexDirection:'column', justifyContent:'space-between',
    background:'var(--bg)', overflow:'hidden'
  }}>
    {/* Geometry */}
    <svg style={{position:'absolute', right:-80, top:80, width:680, height:680, opacity:.6}}>
      <circle cx="340" cy="340" r="338" fill="none" stroke="var(--line)" strokeWidth="1"/>
      <circle cx="340" cy="340" r="260" fill="none" stroke="var(--line-soft)" strokeWidth="1"/>
      <circle cx="340" cy="340" r="180" fill="none" stroke="var(--line-soft)" strokeWidth="1"/>
      <line x1="0" y1="340" x2="680" y2="340" stroke="var(--line-soft)" strokeWidth="1" strokeDasharray="2 6"/>
      <line x1="340" y1="0" x2="340" y2="680" stroke="var(--line-soft)" strokeWidth="1" strokeDasharray="2 6"/>
    </svg>

    <div style={{position:'relative', zIndex:2, display:'flex', justifyContent:'space-between'}}>
      <div className="eyebrow">NORTH · 60°12′N / BLUE HOUR</div>
      <div className="mono-label">MMXXVI · VOL. 01</div>
    </div>

    <div style={{position:'relative', zIndex:2, maxWidth:1280}}>
      <h1 className="font-display" style={{
        fontSize:'clamp(88px, 13.2vw, 208px)', lineHeight:.88, letterSpacing:'-0.055em',
        fontWeight:500, marginBottom:40
      }}>
        <span style={{display:'block'}}>Ship.</span>
        <span style={{display:'block'}}>Share.</span>
        <span style={{display:'block', color:'var(--fg-dim)'}}>Run<span style={{color:'var(--accent)'}}>.</span></span>
      </h1>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, maxWidth:1100, marginTop:64}}>
        <div>
          <div className="mono-label" style={{marginBottom:12}}>TAGLINE · JP</div>
          <p className="font-jp" style={{fontSize:22, lineHeight:1.6, fontWeight:300, color:'var(--fg)'}}>
            AI時代、最前線の<br/>実践者コミュニティ。
          </p>
        </div>
        <div>
          <div className="mono-label" style={{marginBottom:12}}>ABSTRACT</div>
          <p style={{fontSize:14, lineHeight:1.75, color:'var(--fg-dim)', maxWidth:440}}>
            GLOBIS発、AIを学ぶ対象から稼ぐ武器へ。情報商材ではなく、実装と収益に接続するための、静かで強いコミュニティ。
          </p>
        </div>
      </div>
    </div>

    <div style={{position:'relative', zIndex:2, display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:80}}>
      <div style={{display:'flex', gap:16}}>
        <a href="#apply" className="btn btn-primary">入会を申し込む <span className="arrow">→</span></a>
        <a href="#s1" className="btn">コミュニティを知る</a>
      </div>
      <div style={{display:'flex', gap:40, alignItems:'flex-end'}}>
        <div>
          <div className="mono-label">MEMBERSHIP</div>
          <div className="font-display" style={{fontSize:20, marginTop:6}}>審査制 · GLOBIS生限定</div>
        </div>
        <div>
          <div className="mono-label">COHORT</div>
          <div className="font-display" style={{fontSize:20, marginTop:6}}>01 — 2026 Spring</div>
        </div>
      </div>
    </div>
  </section>
);

const HeroB = () => (
  // Banner-as-background, editorial — v2
  <section style={{
    position:'relative', minHeight:'100vh', padding:'0', overflow:'hidden',
    background:'var(--bg)'
  }}>
    {/* Image layer */}
    <div style={{
      position:'absolute', inset:0,
      backgroundImage:'url(assets/hero-banner-clean.png)',
      backgroundSize:'cover', backgroundPosition:'center 40%',
      filter:'saturate(.88) contrast(1.02)',
    }}/>
    {/* Tri-layer overlay for depth + legibility */}
    <div style={{
      position:'absolute', inset:0,
      background:'linear-gradient(180deg, color-mix(in oklab, var(--bg) 68%, transparent) 0%, color-mix(in oklab, var(--bg) 28%, transparent) 38%, color-mix(in oklab, var(--bg) 35%, transparent) 62%, color-mix(in oklab, var(--bg) 96%, transparent) 100%)'
    }}/>
    <div style={{
      position:'absolute', inset:0,
      background:'linear-gradient(90deg, color-mix(in oklab, var(--bg) 55%, transparent) 0%, transparent 45%, transparent 100%)'
    }}/>
    {/* Hairline frame */}
    <div style={{
      position:'absolute', left:40, right:40, top:40, bottom:40,
      border:'1px solid color-mix(in oklab, var(--fg) 18%, transparent)',
      pointerEvents:'none', zIndex:1
    }}/>

    {/* Content */}
    <div style={{
      position:'relative', zIndex:2,
      padding:'72px 80px 88px',
      minHeight:'100vh',
      display:'grid',
      gridTemplateColumns:'1fr 52px',
      gap:40,
    }}>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        {/* Top row */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
          <div className="eyebrow" style={{color:'var(--fg)'}}>01 / COHORT MMXXVI</div>
          <div style={{textAlign:'right'}}/>
        </div>

        {/* Middle — title block */}
        <div style={{maxWidth:1150, marginTop:40}}>
          <h1 className="font-display" style={{
            fontSize:'clamp(96px, 13.2vw, 212px)', lineHeight:.9, letterSpacing:'-0.055em',
            fontWeight:500, marginBottom:36, color:'var(--fg)',
            textShadow:'0 2px 40px color-mix(in oklab, var(--bg) 45%, transparent)'
          }}>
            Ship.<br/>Share.<br/>Run<span style={{color:'var(--accent)'}}>.</span>
          </h1>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, maxWidth:1060}}>
            <div>
              <div style={{width:48, height:1, background:'var(--accent)', marginBottom:20}}/>
              <p className="font-jp" style={{
                fontSize:26, fontWeight:300, lineHeight:1.5, color:'var(--fg)',
                letterSpacing:'0.02em', textShadow:'0 1px 20px color-mix(in oklab, var(--bg) 40%, transparent)'
              }}>
                AI時代、<br/>最前線の実践者コミュニティ。
              </p>
            </div>
            <div style={{paddingTop:20, borderTop:'1px solid color-mix(in oklab, var(--fg) 22%, transparent)'}}>
              <div className="mono-label" style={{color:'color-mix(in oklab, var(--fg) 60%, transparent)', marginBottom:10}}>
                ABSTRACT
              </div>
              <p style={{fontSize:14, color:'color-mix(in oklab, var(--fg) 82%, transparent)', lineHeight:1.85, maxWidth:420}}>
                GLOBIS発 / AI実装者のためのクローズドコミュニティ。情報だけではなく、実践に接続する人だけのための、静かで強い場所。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:56}}>
          <div style={{display:'flex', gap:14}}>
            <a href="#apply" className="btn btn-primary" style={{padding:'18px 26px', fontSize:14}}>
              入会を申し込む <span className="arrow">→</span>
            </a>
            <a href="#s1" className="btn" style={{
              borderColor:'color-mix(in oklab, var(--fg) 45%, transparent)',
              color:'var(--fg)', padding:'18px 26px', fontSize:14,
              backdropFilter:'blur(6px)',
              background:'color-mix(in oklab, var(--bg) 30%, transparent)'
            }}>
              コミュニティを知る
            </a>
          </div>
          <div style={{display:'flex', gap:48, alignItems:'flex-end'}}>
            <div>
              <div className="mono-label" style={{color:'color-mix(in oklab, var(--fg) 55%, transparent)'}}>MEMBERSHIP</div>
              <div className="font-display font-jp" style={{fontSize:15, marginTop:4, color:'var(--fg)', fontWeight:500}}>審査制</div>
            </div>
            <div>
              <div className="mono-label" style={{color:'color-mix(in oklab, var(--fg) 55%, transparent)'}}>STATUS</div>
              <div className="font-display font-jp" style={{fontSize:15, marginTop:4, color:'var(--fg)', fontWeight:500}}>
                申込受付中
              </div>
            </div>
            <div>
              <div className="mono-label" style={{color:'color-mix(in oklab, var(--fg) 55%, transparent)'}}>REF</div>
              <div className="font-display" style={{fontSize:15, marginTop:4, color:'var(--fg)', fontWeight:500, fontFamily:'"JetBrains Mono",monospace'}}>
                GAF · 26.01
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right rail — vertical index */}
      <div style={{
        display:'flex', flexDirection:'column', justifyContent:'space-between',
        alignItems:'center', paddingTop:4, paddingBottom:4
      }}>
        <div style={{
          writingMode:'vertical-rl', transform:'rotate(180deg)',
          fontFamily:'JetBrains Mono,monospace', fontSize:10,
          letterSpacing:'0.3em', color:'color-mix(in oklab, var(--fg) 55%, transparent)',
          textTransform:'uppercase'
        }}>
          A COHORT FOR AI OPERATORS — NOT STUDENTS
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:8}}>
          <div style={{width:1, height:40, background:'color-mix(in oklab, var(--fg) 40%, transparent)'}}/>
          <div className="mono-label" style={{color:'color-mix(in oklab, var(--fg) 60%, transparent)', fontSize:9, writingMode:'vertical-rl'}}>SCROLL</div>
        </div>
      </div>
    </div>
  </section>
);

const HeroC = () => {
  // Abstract geometry hero — most "editorial" option
  return (
    <section style={{
      position:'relative', minHeight:'94vh', padding:'72px 64px', overflow:'hidden',
      display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:80, alignItems:'center'
    }}>
      {/* dot grid background */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'radial-gradient(var(--line) 1px, transparent 1px)',
        backgroundSize:'28px 28px', opacity:.5, maskImage:'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}/>
      <div style={{position:'relative', zIndex:2}}>
        <div className="eyebrow" style={{marginBottom:40}}>01 / COHORT MMXXVI</div>
        <h1 className="font-display" style={{
          fontSize:'clamp(80px, 11vw, 176px)', lineHeight:.9, letterSpacing:'-0.05em',
          fontWeight:500
        }}>
          Ship.<br/>
          Share.<br/>
          <span style={{fontStyle:'italic', fontWeight:300}}>Run.</span>
        </h1>
        <div style={{display:'flex', gap:0, alignItems:'center', marginTop:36, marginBottom:28}}>
          <div style={{height:1, width:48, background:'var(--accent)'}}/>
          <div className="mono-label" style={{marginLeft:14}}>A COHORT FOR AI OPERATORS</div>
        </div>
        <p className="font-jp" style={{fontSize:22, lineHeight:1.7, fontWeight:300, maxWidth:560}}>
          勉強会で止まっているAI活用を、<br/>
          実装と収益に接続する実践者コミュニティ。
        </p>
        <div style={{display:'flex', gap:16, marginTop:48}}>
          <a href="#apply" className="btn btn-primary">入会を申し込む <span className="arrow">→</span></a>
          <a href="#s1" className="btn">コミュニティを知る</a>
        </div>
      </div>

      {/* Geometric composition */}
      <div style={{position:'relative', zIndex:2, aspectRatio:'1/1', maxWidth:620, marginLeft:'auto'}}>
        <svg viewBox="0 0 600 600" style={{width:'100%', height:'100%'}}>
          <defs>
            <linearGradient id="fadeLine" x1="0" x2="1">
              <stop offset="0" stopColor="var(--fg)" stopOpacity="0"/>
              <stop offset=".5" stopColor="var(--fg)" stopOpacity="1"/>
              <stop offset="1" stopColor="var(--fg)" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Outer circle */}
          <circle cx="300" cy="300" r="290" fill="none" stroke="var(--line)" strokeWidth="1"/>
          <circle cx="300" cy="300" r="220" fill="none" stroke="var(--line)" strokeWidth="1"/>
          <circle cx="300" cy="300" r="140" fill="none" stroke="var(--line-soft)" strokeWidth="1"/>

          {/* crosshair */}
          <line x1="10" y1="300" x2="590" y2="300" stroke="url(#fadeLine)" strokeWidth="1"/>
          <line x1="300" y1="10" x2="300" y2="590" stroke="url(#fadeLine)" strokeWidth="1"/>

          {/* arc marker */}
          <path d="M 300,10 A 290,290 0 0 1 590,300" fill="none" stroke="var(--accent)" strokeWidth="2"/>

          {/* dots on ring */}
          {Array.from({length:24}).map((_,i)=>{
            const a = (i/24)*Math.PI*2;
            const x = 300 + Math.cos(a)*290;
            const y = 300 + Math.sin(a)*290;
            return <circle key={i} cx={x} cy={y} r={i%6===0?3:1.2} fill="var(--fg-dim)"/>
          })}

          {/* center mass */}
          <circle cx="300" cy="300" r="60" fill="var(--accent)" opacity=".08"/>
          <circle cx="300" cy="300" r="4" fill="var(--accent)"/>

          {/* labels */}
          <text x="300" y="26" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fg-mute)"
            textAnchor="middle" letterSpacing="3">N</text>
          <text x="582" y="304" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fg-mute)" letterSpacing="2">E</text>
          <text x="300" y="588" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fg-mute)"
            textAnchor="middle" letterSpacing="3">S</text>
          <text x="8" y="304" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fg-mute)" letterSpacing="2">W</text>

          <text x="310" y="288" fontFamily="JetBrains Mono" fontSize="9" fill="var(--fg-dim)" letterSpacing="2">OPERATORS</text>
          <text x="310" y="320" fontFamily="JetBrains Mono" fontSize="9" fill="var(--fg-dim)" letterSpacing="2">60°12′N</text>
        </svg>

        <div style={{
          position:'absolute', top:10, right:10,
          display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4
        }}>
          <div className="mono-label">VOL.01</div>
          <div className="font-display" style={{fontSize:13}}>MMXXVI</div>
        </div>
      </div>
    </section>
  );
};

window.HeroA = HeroA;
window.HeroB = HeroB;
window.HeroC = HeroC;
