// Values — hover details
const VALUES = [
  { en:'Give First', jp:'まずは自分から与える', d:'受け取る前に渡す。知見、プロンプト、人。コミュニティの通貨はギブの総量。' },
  { en:'Ship over Study', jp:'学ぶより、まず作る', d:'学習の時間を、実装の時間に置き換える。完成度より、稼働している事実。' },
  { en:'Done > Perfect', jp:'完璧を目指すより、完成させる', d:'未完の完璧より、荒削りの完成。世に出してから磨く。' },
  { en:'Share Raw', jp:'リアルな失敗や途中経過も共有する', d:'整えてから出す、はもう遅い。数字も失敗も、生々しく共有する。' },
];

const Values = () => {
  const [hover, setHover] = React.useState(null);
  return (
    <section className="section" id="s3">
      <div className="section-head">
        <div className="section-idx">— 04 / VALUES</div>
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>行動指針</div>
          <h2 className="font-display" style={{fontSize:72, lineHeight:1.05, letterSpacing:'-0.035em', fontWeight:500, maxWidth:1100}}>
            Four rules of<br/>the operator<span style={{color:'var(--accent)'}}>.</span>
          </h2>
        </div>
      </div>

      <div style={{borderTop:'1px solid var(--line)'}}>
        {VALUES.map((v,i)=>(
          <div
            key={i}
            onMouseEnter={()=>setHover(i)}
            onMouseLeave={()=>setHover(null)}
            style={{
              display:'grid', gridTemplateColumns:'80px 260px 1fr 1fr',
              gap:32, padding:'36px 0 40px', borderBottom:'1px solid var(--line)',
              alignItems:'baseline', cursor:'default',
              transition:'all .4s ease',
              background: hover===i ? 'color-mix(in oklab, var(--accent) 4%, transparent)' : 'transparent',
              paddingLeft: hover===i ? 16 : 0,
              paddingRight: hover===i ? 16 : 0
            }}>
            <div className="mono-label">/ 0{i+1}</div>
            <div className="font-display" style={{
              fontSize:40, fontWeight:400, letterSpacing:'-0.025em',
              color: hover===i ? 'var(--fg)' : 'var(--fg)',
              transition:'color .3s',
              fontStyle: hover===i ? 'italic' : 'normal'
            }}>
              {v.en}
            </div>
            <div className="font-jp" style={{fontSize:20, fontWeight:300, letterSpacing:'0.03em', color:'var(--fg-dim)'}}>
              {v.jp}
            </div>
            <div style={{
              fontSize:13, lineHeight:1.8, color:'var(--fg-dim)',
              opacity: hover===null || hover===i ? 1 : .4,
              transition:'opacity .3s'
            }}>
              {v.d}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Membership — stepper + MUST conditions
const Membership = () => {
  const [active, setActive] = React.useState(0);
  const steps = [
    { n:'01', t:'応募フォーム送信', d:'実績・使用実態・動機を記述。フォームは通常15〜20分。', tag:'APPLY' },
    { n:'02', t:'実績アンケート', d:'AI活用の現状・運用しているプロダクト・数字を詳細に共有。', tag:'SCREEN' },
    { n:'03', t:'文化適合の審査', d:'運営による書類審査とライトな面談。ギブ文化との整合を確認。', tag:'REVIEW' },
    { n:'04', t:'オンボーディング', d:'Discord招待 / 初回ギブセッション / 初回Ship課題のアサイン。', tag:'ONBOARD' },
  ];

  return (
    <section className="section" id="s4">
      <div className="section-head">
        <div className="section-idx">— 05 / MEMBERSHIP</div>
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>入会条件と流れ</div>
          <h2 className="font-display" style={{fontSize:72, lineHeight:1.05, letterSpacing:'-0.035em', fontWeight:500, maxWidth:1100}}>
            審査を通過した人だけが、<br/>入口を開ける<span style={{color:'var(--accent)'}}>.</span>
          </h2>
        </div>
      </div>

      {/* MUST */}
      <div style={{marginBottom:96}}>
        <div className="mono-label" style={{marginBottom:24}}>MUST — 必須条件</div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:0, border:'1px solid var(--line)'}}>
          {[
            {t:'GLOBIS生', d:'在学・修了を問わず、GLOBIS生コミュニティに属していること。'},
            {t:'実績アンケート', d:'AI実装の現在地を事実ベースで開示できること。'},
            {t:'使用実態', d:'週単位で AI を業務に投入していること。'},
            {t:'文化適合', d:'ギブ先行・受け身拒否のカルチャーに共鳴すること。'},
            {t:'審査通過', d:'運営による最終判断を経ること。'},
          ].map((r,i)=>(
            <div key={i} style={{padding:'24px 20px 28px', borderRight: i<4?'1px solid var(--line)':'none'}}>
              <div className="mono-label" style={{marginBottom:10}}>/ 0{i+1}</div>
              <div className="font-display font-jp" style={{fontSize:18, fontWeight:500, marginBottom:10}}>{r.t}</div>
              <div style={{fontSize:12, color:'var(--fg-dim)', lineHeight:1.7}}>{r.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stepper */}
      <div>
        <div className="mono-label" style={{marginBottom:24}}>FLOW — 入会フロー</div>
        <div style={{position:'relative', display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0}}>
          <div style={{
            position:'absolute', top:18, left:'12.5%', right:'12.5%', height:1,
            background:'var(--line)'
          }}/>
          <div style={{
            position:'absolute', top:18, left:'12.5%', height:1,
            background:'var(--accent)',
            width: `${(active/3)*75}%`,
            transition:'width .5s ease'
          }}/>
          {steps.map((s,i)=>(
            <div
              key={i}
              onMouseEnter={()=>setActive(i)}
              style={{
                position:'relative', paddingTop:48, textAlign:'left', paddingRight:32,
                cursor:'pointer'
              }}>
              <div style={{
                position:'absolute', top:12, left:0,
                width:14, height:14, borderRadius:'50%',
                background: active>=i ? 'var(--accent)' : 'var(--bg)',
                border:'1px solid '+(active>=i ? 'var(--accent)' : 'var(--line)'),
                transition:'all .4s ease'
              }}/>
              <div className="mono-label" style={{marginBottom:8}}>{s.n} · {s.tag}</div>
              <div className="font-display font-jp" style={{fontSize:22, fontWeight:500, marginBottom:10, letterSpacing:'-0.01em'}}>{s.t}</div>
              <div style={{fontSize:13, color:'var(--fg-dim)', lineHeight:1.7, maxWidth:260}}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const items = [
    {q:'コミュニティは完全にクローズドですか？', a:'はい。会員以外への共有・引用は禁止です。Chatham House Rule に準じた情報運用を行います。'},
    {q:'継続条件はありますか？', a:'四半期ごとにアクティビティを確認します。ギブ実績 / Ship実績 / 共有数のいずれかが水準を下回った場合は個別面談の上、退会をお願いすることがあります。'},
    {q:'費用感はどの程度ですか？', a:'運営費に限定した実費ベースです。詳細はお申込みフォーム送信後、審査通過時にお伝えします。情報商材的な高額課金は一切ありません。'},
    {q:'GLOBIS生でないと入れませんか？', a:'はい、現時点では在学・修了を含む GLOBIS 生が必須条件です。将来的な拡張は検討中ですが、当面はクローズドで運用します。'},
    {q:'業種・職種の偏りはありますか？', a:'経営者・事業オーナー・AI推進担当・ヘビーユーザーを核に、業種は分散しています。重要なのは属性ではなく、実装と数字に向き合っているかです。'},
    {q:'オフライン集まりはありますか？', a:'定期的に都内でオフラインセッション / デモデイを開催します。希望者のみ参加可。コアはオンラインで回ります。'},
    {q:'匿名参加は可能ですか？', a:'不可です。実名・所属の開示が前提となります。'},
  ];
  return (
    <section className="section" id="s5">
      <div className="section-head">
        <div className="section-idx">— 06 / FAQ</div>
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>想定される問い</div>
          <h2 className="font-display" style={{fontSize:72, lineHeight:1.05, letterSpacing:'-0.035em', fontWeight:500, maxWidth:1100}}>
            Frequently asked.
          </h2>
        </div>
      </div>
      <div style={{borderTop:'1px solid var(--line)'}}>
        {items.map((it,i)=>{
          const isOpen = open===i;
          return (
            <div key={i} style={{borderBottom:'1px solid var(--line)'}}>
              <button
                onClick={()=>setOpen(isOpen?-1:i)}
                style={{
                  width:'100%', textAlign:'left', background:'transparent', border:'none',
                  padding:'32px 0', cursor:'pointer', color:'var(--fg)',
                  display:'grid', gridTemplateColumns:'64px 1fr 40px', gap:24, alignItems:'center'
                }}>
                <div className="mono-label">/ 0{i+1}</div>
                <div className="font-display font-jp" style={{fontSize:22, fontWeight:500, letterSpacing:'-0.005em'}}>{it.q}</div>
                <div style={{
                  width:24, height:24, position:'relative', justifySelf:'end',
                  transition:'transform .4s', transform:isOpen?'rotate(45deg)':'rotate(0)'
                }}>
                  <div style={{position:'absolute', left:0, top:'50%', width:24, height:1, background:'var(--fg-dim)'}}/>
                  <div style={{position:'absolute', top:0, left:'50%', height:24, width:1, background:'var(--fg-dim)'}}/>
                </div>
              </button>
              <div style={{
                maxHeight: isOpen ? 240 : 0, overflow:'hidden',
                transition:'max-height .5s ease, opacity .4s',
                opacity: isOpen ? 1 : 0
              }}>
                <div style={{
                  padding:'0 0 36px 88px', maxWidth:800,
                  fontSize:14, color:'var(--fg-dim)', lineHeight:1.85
                }}>
                  {it.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

window.Values = Values;
window.Membership = Membership;
window.FAQ = FAQ;
