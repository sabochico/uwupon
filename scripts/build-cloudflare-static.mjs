import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const out = join(root, "cloudflare-dist");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
copyFileSync(join(root, "public", "og.png"), join(out, "og.png"));
copyFileSync(join(root, "public", "favicon.svg"), join(out, "favicon.svg"));

const html = String.raw`<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>uwupon | 日本発ショートフォーム音楽マーケティング</title>
    <meta name="description" content="uwupon is a Tokyo-based short-form music marketing studio for artists, labels, management teams, and Japan-global music releases." />
    <meta name="keywords" content="music marketing Japan, Japanese music marketing agency, TikTok music campaign, short-form music marketing, Japan music promotion, uwupon" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:site_name" content="uwupon" />
    <meta property="og:title" content="uwupon | Short-Form Music Marketing for Japan" />
    <meta property="og:description" content="A Tokyo-based music marketing studio creating short-form content systems for artists, labels, and Japan-global releases." />
    <meta property="og:image" content="/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="uwupon | Short-Form Music Marketing for Japan" />
    <meta name="twitter:description" content="Short-form campaign strategy, production, distribution, testing, and reporting for modern music releases." />
    <meta name="twitter:image" content="/og.png" />
    <link rel="icon" href="/favicon.svg" />
    <style>
      :root { --bg:#f5f1e9; --ink:#161616; --lime:#d6ff3f; --red:#ff5b45; }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin:0; overflow-x:hidden; background:var(--bg); color:var(--ink); font-family: Inter, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "Noto Sans JP", Arial, sans-serif; }
      ::selection { background:var(--lime); color:var(--ink); }
      a { color: inherit; text-decoration: none; }
      button, input, textarea { font: inherit; }
      .nav { position:fixed; inset:0 0 auto; height:80px; z-index:10; display:flex; align-items:center; justify-content:space-between; padding:0 clamp(20px,4vw,48px); border-bottom:1px solid #0002; background:color-mix(in srgb, var(--bg) 90%, transparent); backdrop-filter:blur(18px); }
      .brand { display:flex; align-items:center; gap:12px; font-weight:900; letter-spacing:.08em; }
      .mark { position:relative; width:40px; height:40px; display:grid; place-items:center; background:var(--ink); }
      .mark:before { content:""; position:absolute; width:54%; height:54%; border:2px solid var(--lime); border-radius:50%; }
      .mark:after { content:""; position:absolute; width:72%; height:72%; border:1px solid #fff8; border-radius:50%; }
      .dot { width:7px; height:7px; border-radius:50%; background:var(--red); z-index:1; }
      .navlinks { display:flex; gap:30px; align-items:center; font-size:12px; font-weight:800; letter-spacing:.16em; color:#0009; }
      .toggle { display:flex; border:1px solid #0003; font-size:12px; font-weight:900; }
      .toggle button { border:0; padding:9px 12px; background:transparent; cursor:pointer; }
      .toggle button.active { background:var(--ink); color:white; }
      .nav-cta, .btn-lime { background:var(--lime); padding:13px 20px; font-size:12px; font-weight:900; letter-spacing:.12em; text-transform:uppercase; }
      .menu-btn { display:none; width:44px; height:44px; border:1px solid #0003; background:transparent; }
      .section { padding:96px clamp(20px,4vw,48px); }
      .wrap { max-width:1540px; margin:0 auto; }
      .hero { min-height:100vh; padding-top:128px; position:relative; overflow:hidden; }
      .hero:before { content:""; position:absolute; inset:0; opacity:.12; background-image:linear-gradient(#161616 1px, transparent 1px), linear-gradient(90deg,#161616 1px,transparent 1px); background-size:42px 42px; }
      .hero-grid { position:relative; display:grid; grid-template-columns:.86fr .74fr; gap:32px; align-items:start; min-height:calc(100vh - 150px); align-content:space-between; }
      .eyebrow { margin:0 0 28px; font-size:12px; font-weight:900; letter-spacing:.08em; color:#0009; }
      h1 { margin:0; display:grid; max-width:9.6em; gap:.12em; font-size:clamp(2.75rem,7.2vw,7.8rem); line-height:1.03; font-weight:900; letter-spacing:.01em; font-feature-settings:"palt"; line-break:strict; text-wrap:balance; word-break:keep-all; overflow-wrap:normal; }
      h1 span { display:block; white-space:nowrap; }
      .en h1 { max-width:18ch; font-size:clamp(3rem,7.5vw,9.2rem); line-height:.92; text-transform:uppercase; }
      .en h1 span { white-space:normal; }
      .hero-img { position:relative; overflow:hidden; border:1px solid #0003; background:#000; box-shadow:0 24px 80px #0005; margin-top:48px; }
      .hero-img img { display:block; width:100%; aspect-ratio:16/10; object-fit:cover; opacity:.9; }
      .hero-caption { position:absolute; inset:auto 0 0; display:flex; justify-content:space-between; align-items:end; padding:20px; color:white; background:linear-gradient(to top,#000,#000a,transparent); font-weight:900; letter-spacing:.16em; font-size:12px; text-transform:uppercase; }
      .hero-caption b { color:var(--lime); font-size:52px; letter-spacing:0; }
      .hero-bottom { grid-column:1 / -1; display:grid; grid-template-columns:.9fr .7fr; gap:40px; align-items:end; }
      .actions { display:flex; flex-wrap:wrap; gap:12px; }
      .btn-dark { background:var(--ink); color:white; padding:17px 24px; font-size:14px; font-weight:900; letter-spacing:.13em; text-transform:uppercase; }
      .btn-outline { border:1px solid #0005; padding:17px 24px; font-size:14px; font-weight:900; letter-spacing:.13em; text-transform:uppercase; }
      .intro { margin:0; font-size:clamp(20px,2vw,28px); line-height:1.65; color:#000b; }
      .dark { background:var(--ink); color:white; }
      .proof { display:grid; grid-template-columns:.65fr 1fr; gap:40px; align-items:center; }
      h2 { margin:0; font-size:clamp(40px,4.8vw,90px); line-height:1.14; font-weight:900; letter-spacing:.01em; font-feature-settings:"palt"; line-break:strict; text-wrap:balance; word-break:normal; overflow-wrap:break-word; }
      .en h2 { line-height:.95; text-transform:uppercase; }
      .muted { color:inherit; opacity:.65; line-height:1.75; }
      .tile-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:#fff3; }
      .tile { background:var(--ink); color:#fffc; padding:24px; min-height:150px; }
      .tile p { margin:42px 0 0; font-size:24px; line-height:1; font-weight:900; text-transform:uppercase; }
      .stats, .services, .compare, .plans { display:grid; gap:1px; background:#0002; }
      .stats { grid-template-columns:repeat(3,1fr); margin-top:40px; background:#fff3; }
      .stat, .service, .plan, .card { background:var(--ink); padding:28px; }
      .stat strong { display:block; color:var(--lime); font-size:64px; line-height:.9; }
      .stat span, .metric span, .detail-label { display:block; margin-top:14px; font-size:12px; letter-spacing:.12em; font-weight:900; text-transform:uppercase; opacity:.62; }
      .split { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:#0002; }
      .panel { padding:40px; min-height:380px; }
      .panel.black { background:var(--ink); color:white; }
      .panel.lime { background:var(--lime); }
      .model { display:grid; grid-template-columns:.52fr 1fr; gap:40px; }
      .steps { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:#0002; counter-reset:step; }
      .step { background:var(--bg); min-height:192px; padding:24px; position:relative; }
      .step.active { background:var(--lime); }
      .step small { font-weight:900; opacity:.45; }
      .step h3 { margin:36px 0 0; font-size:40px; line-height:1; font-weight:900; text-transform:uppercase; }
      .step p { margin:16px 0 0; color:#000a; line-height:1.7; }
      .services { grid-template-columns:repeat(3,1fr); margin-top:56px; }
      .service { background:white; min-height:288px; }
      .service h3, .plan h3 { margin:36px 0 0; font-size:34px; line-height:1; font-weight:900; text-transform:uppercase; }
      .service p, .plan p { line-height:1.72; color:#000a; }
      .compare { grid-template-columns:1fr 1fr; margin-top:56px; background:#fff3; }
      .compare .card:last-child { background:var(--lime); color:#000; }
      .compare .card:first-child { background:#222; color:#fffb; }
      ul { list-style:none; padding:0; margin:34px 0 0; }
      li { display:flex; justify-content:space-between; gap:18px; border-top:1px solid currentColor; padding:16px 0; font-size:18px; font-weight:900; }
      .ecosystem { background:var(--lime); position:relative; overflow:hidden; }
      .eco { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:56px; }
      .eco div { border-top:4px solid #000; padding-top:20px; }
      .eco strong { display:block; font-size:clamp(54px,6vw,96px); line-height:.9; }
      .eco span { display:block; margin-top:18px; font-size:12px; font-weight:900; letter-spacing:.12em; text-transform:uppercase; }
      .plans-wrap { display:grid; grid-template-columns:.6fr 1fr; gap:36px; }
      .plan { background:white; }
      .plan-head { display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; }
      .plan-use { margin:0; font-size:12px; font-weight:900; letter-spacing:.16em; opacity:.42; text-transform:uppercase; }
      .badge { background:var(--lime); padding:9px 12px; font-size:12px; font-weight:900; letter-spacing:.12em; text-transform:uppercase; }
      .metrics { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#0002; margin-top:30px; }
      .metric { background:white; padding:16px; }
      .metric b { display:block; margin-top:8px; font-size:14px; color:#000b; }
      .about { display:grid; grid-template-columns:1fr .65fr; gap:42px; align-items:end; }
      .contact { display:grid; grid-template-columns:.62fr 1fr; gap:48px; }
      form { display:grid; gap:20px; }
      .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
      label { display:grid; gap:8px; }
      label span { color:#fffa; font-size:12px; font-weight:900; letter-spacing:.16em; text-transform:uppercase; }
      input, textarea { width:100%; border:1px solid #fff3; background:#fff1; color:white; padding:16px; outline:none; }
      input { height:56px; }
      textarea { min-height:144px; resize:vertical; }
      input:focus, textarea:focus { border-color:var(--lime); }
      .error { color:#ff775f; font-size:12px; font-weight:800; }
      .success { border:1px solid #d6ff3f66; background:#d6ff3f1a; color:var(--lime); padding:16px; font-weight:800; }
      .legal { display:grid; grid-template-columns:.4fr 1fr 1fr; gap:32px; border-top:1px solid #0002; padding-top:40px; }
      .legal h3 { margin:0; font-size:18px; text-transform:uppercase; }
      .footer { display:flex; justify-content:space-between; align-items:center; gap:20px; border-top:1px solid #0002; padding-top:30px; margin-top:40px; }
      .mobile { display:none; }
      @media (max-width: 1180px) {
        .navlinks { display:none; }
        .menu-btn { display:block; }
        .mobile.open { display:grid; position:fixed; z-index:11; top:80px; inset-inline:0; background:var(--bg); border-bottom:1px solid #0002; padding:22px; gap:16px; font-size:22px; font-weight:900; }
        .hero-grid, .proof, .model, .plans-wrap, .about, .contact { grid-template-columns:1fr; }
        .hero-bottom { grid-template-columns:1fr; }
        .hero-img { margin-top:0; }
      }
      @media (max-width: 760px) {
        .section { padding:72px 20px; }
        .hero { padding-top:118px; }
        h1 { max-width:100%; gap:.08em; font-size:clamp(42px,13vw,66px); line-height:1.05; }
        .en h1 { font-size:clamp(44px,12vw,72px); }
        h2 { font-size:clamp(34px,9.8vw,58px); line-height:1.16; }
        .tile-grid, .stats, .steps, .services, .compare, .eco, .metrics, .split, .form-grid, .legal { grid-template-columns:1fr; }
        .panel { padding:28px; min-height:300px; }
        .footer { align-items:flex-start; flex-direction:column; }
      }
    </style>
  </head>
  <body>
    <nav class="nav">
      <a class="brand" href="#top"><span class="mark"><span class="dot"></span></span><span>uwupon</span></a>
      <div class="navlinks">
        <a href="#work">WORK</a><a href="#services">SERVICES</a><a href="#how-it-works">HOW IT WORKS</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a>
        <span class="toggle"><button data-lang="jp" class="active">JP</button><button data-lang="en">EN</button></span>
        <a class="nav-cta" href="#contact" data-t="cta">キャンペーンを相談する</a>
      </div>
      <button class="menu-btn" id="menu" aria-label="Open navigation">☰</button>
    </nav>
    <div class="mobile" id="mobile"><a href="#work">WORK</a><a href="#services">SERVICES</a><a href="#how-it-works">HOW IT WORKS</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a><span class="toggle"><button data-lang="jp" class="active">JP</button><button data-lang="en">EN</button></span></div>

    <main>
      <section id="top" class="hero section">
        <div class="wrap hero-grid">
          <div>
            <p class="eyebrow" data-t="eyebrow">日本の音楽市場に特化したショートフォーム戦略</p>
            <h1 id="hero-title"><span>1曲から</span><br /><span>何十本もの</span><br /><span>ショート動画へ</span></h1>
          </div>
          <div class="hero-img"><img src="/og.png" alt="uwupon short-form music content ecosystem visual" /><div class="hero-caption"><span>Release Signal Map</span><b>50+</b></div></div>
          <div class="hero-bottom">
            <div class="actions"><a class="btn-dark" href="#contact" data-t="cta">キャンペーンを相談する</a><a class="btn-outline" href="#how-it-works" data-t="secondary">仕組みを見る</a></div>
            <p class="intro" data-t="intro">uwuponは、楽曲からショート動画の企画をつくり、まとめて制作し、複数の投稿面へ配信し、反応を見ながら改善する音楽マーケティングスタジオです。</p>
          </div>
        </div>
      </section>
      <section id="work" class="section dark"><div class="wrap"><div class="proof"><div><h2 data-t="proofTitle">レーベル、マネジメント、アーティストチームのための実行体制。</h2><p class="muted" data-t="proofCopy">新曲リリース、旧譜の再発見、海外展開、日本市場へのローカライズまで。高額な単発投稿に頼り切らず、複数の企画と制作量で反応の入口を広げます。</p></div><div class="tile-grid" id="audience"></div></div><div class="stats" id="stats"></div></div></section>
      <section class="section"><div class="wrap split"><article class="panel black"><h2 data-t="problemTitle">音楽プロモーションは、試せる回数で差がつく。</h2><p class="muted" data-t="problem"></p></article><article class="panel lime"><h2 data-t="answerTitle">uwuponは、曲の使われ方を増やします。</h2><p class="muted" data-t="answer"></p></article></div></section>
      <section id="how-it-works" class="section"><div class="wrap model"><div><p class="eyebrow">The Model</p><h2 data-t="modelTitle">1曲から、複数の発見経路へ。</h2><p class="muted" data-t="modelCopy"></p></div><div class="steps" id="steps"></div></div></section>
      <section id="services" class="section" style="background:white"><div class="wrap"><h2 data-t="servicesTitle">リリースのためのコンテンツ運用基盤。</h2><div class="services" id="servicesGrid"></div></div></section>
      <section class="section dark"><div class="wrap"><h2 data-t="whyTitle">ひとつの投稿ではなく、反応が集まる構造をつくる。</h2><div class="compare"><article class="card"><h2 data-t="traditional">従来型の単発施策</h2><ul id="traditionalList"></ul></article><article class="card"><h2 data-t="ours">uwuponの運用モデル</h2><ul id="oursList"></ul></article></div></div></section>
      <section class="section ecosystem"><div class="wrap"><h2 data-t="ecosystemTitle">1曲を、コンテンツの生態系へ。</h2><div class="eco" id="ecosystem"></div></div></section>
      <section class="section"><div class="wrap plans-wrap"><div><h2 data-t="plansTitle">uwuponでできること。</h2><p class="muted" data-t="plansNote"></p></div><div class="plans" id="plans"></div></div></section>
      <section id="about" class="section" style="background:white"><div class="wrap about"><h2 data-t="aboutTitle">広告ではなく、インターネットが使いたくなる理由をつくる。</h2><p class="intro" data-t="about"></p></div></section>
      <section id="contact" class="section dark"><div class="wrap contact"><div><p class="eyebrow" style="color:var(--lime)">Contact</p><h2 data-t="formTitle">次のリリースを相談する。</h2><p class="muted" data-t="formIntro"></p></div><form action="https://formsubmit.co/aweandco@gmail.com" method="POST" id="leadForm" novalidate><input type="hidden" name="_subject" value="New uwupon campaign inquiry" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_next" value="/?sent=1" /><input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off" /><div class="form-grid" id="fields"></div><label><span data-field-label="goal">キャンペーン目標</span><input name="campaign_goal" data-field="goal" placeholder="認知拡大、UGC、海外展開、発売週の話題化など" /></label><label><span data-field-label="info">追加情報</span><textarea name="additional_information" data-field="info" placeholder="素材状況、SNS状況、締切、参考キャンペーンなど"></textarea></label><button class="btn-lime" type="submit" data-t="cta">キャンペーンを相談する</button><p class="success" id="success" hidden data-t="success">ありがとうございます。お問い合わせを受け付けました。</p></form></div></section>
      <section class="section"><div class="wrap legal"><div><p class="eyebrow" data-t="legalTitle">Legal</p><h3>uwupon</h3><p class="muted" data-t="footer">Tokyo, Japan</p></div><article><h3 data-t="privacyTitle">プライバシーポリシー</h3><p class="muted" data-t="privacy"></p></article><article><h3 data-t="termsTitle">利用条件</h3><p class="muted" data-t="terms"></p></article></div><div class="wrap footer"><p class="eyebrow">Copyright 2026 uwupon. All rights reserved.</p><span class="toggle"><button data-lang="jp" class="active">JP</button><button data-lang="en">EN</button></span></div></section>
    </main>

    <script>
      const C = {
        jp: {
          cta:"キャンペーンを相談する", secondary:"仕組みを見る", eyebrow:"日本の音楽市場に特化したショートフォーム戦略", hero:["1曲から","何十本もの","ショート動画へ"],
          intro:"uwuponは、楽曲からショート動画の企画をつくり、まとめて制作し、複数の投稿面へ配信し、反応を見ながら改善する音楽マーケティングスタジオです。",
          proofTitle:"レーベル、マネジメント、アーティストチームのための実行体制。", proofCopy:"新曲リリース、旧譜の再発見、海外展開、日本市場へのローカライズまで。高額な単発投稿に頼り切らず、複数の企画と制作量で反応の入口を広げます。",
          audience:["Record Labels","Artist Management","Music Publishers","Entertainment Agencies","Independent Artists","Japan / Global"], stats:[["3","主要ショートフォーム面"],["50+","1曲から設計できる動画案"],["7","戦略からレポートまでの工程"]],
          problemTitle:"音楽プロモーションは、試せる回数で差がつく。", problem:"単発のインフルエンサー投稿だけでは、どの文脈で曲が届くのか見えにくい。制作本数が少ないほど、曲の可能性はひとつの表現に固定されます。",
          answerTitle:"uwuponは、曲の使われ方を増やします。", answer:"サビ、歌詞、ムード、ストーリー、編集テンポ、ミーム性、コミュニティの文脈を複数に分解。反応を見ながら、強い企画へ制作と配信を集中させます。",
          modelTitle:"1曲から、複数の発見経路へ。", modelCopy:"楽曲の魅力をひとつの広告に閉じ込めず、ショートフォーム上で使われやすい形へ展開します。流れはシンプルに、運用は細かく。",
          steps:[["SONG","楽曲、発売日、ターゲット市場、既存素材を確認。"],["STRATEGY","誰に、どの文脈で、どのフックを届けるかを設計。"],["CREATE","字幕、編集、構成、テンポを変えながら複数案を制作。"],["DISTRIBUTE","関連性のある投稿面、アカウント、コミュニティへ展開。"],["TEST","視聴維持、保存、コメント、共有、二次利用の兆しを読む。"],["SCALE","反応の強い表現へ制作量と配信量を寄せる。"],["REPORT","次の判断につながる形で成果と学びを整理。"]],
          servicesTitle:"リリースのためのコンテンツ運用基盤。", services:[["Short-Form Campaigns","TikTok、Reels、Shortsに合わせた、楽曲中心のショートフォームキャンペーン。"],["Creative Strategy","曲のフック、歌詞の切り口、参加しやすい使われ方、届けるべきコミュニティを整理。"],["Content Production","広告っぽさを抑え、自然に見られる編集、字幕、構成で複数バリエーションを制作。"],["Distribution","楽曲との相性を見ながら、関連アカウントや投稿面へ計画的に展開。"],["Testing & Optimization","初動の反応から勝ち筋を見つけ、制作と配信を改善。"],["Campaign Intelligence","投稿本数、再生、反応、企画別の傾向を、チームで判断しやすい形に整理。"],["Japan ↔ Global","日本の楽曲を海外へ。海外の楽曲を日本の文脈へ。言語と文化の両方から設計。"]],
          whyTitle:"ひとつの投稿ではなく、反応が集まる構造をつくる。", traditional:"従来型の単発施策", ours:"uwuponの運用モデル", traditionalList:["投稿者が限られる","表現の検証が少ない","費用対効果を読みづらい","短期間で終わりやすい","次の施策に学びが残りにくい"], oursList:["複数の企画軸を同時に試す","制作本数で接触機会を増やす","反応を見て改善する","日本語圏と海外圏を分けて設計する","次のリリースに使える知見を残す"],
          ecosystemTitle:"1曲を、コンテンツの生態系へ。", ecosystem:[["01","ONE SONG"],["10","CREATIVE DIRECTIONS"],["50+","CONTENT PIECES"],["1000s","DISCOVERY MOMENTS"]],
          plansTitle:"uwuponでできること。", plansNote:"過去実績ではなく、相談時に設計できるキャンペーン例です。再生数、配信面、ストリーム増加は楽曲、素材、予算、投稿先、時期により変動します。",
          planLabels:{output:"制作本数",distribution:"配信先",target:"目標レンジ",stream:"ストリームへの接続",detail:"実施内容"}, plans:[["Launch Test","新曲の初動テスト","1ヶ月","20-35本","10-25アカウント","5万-30万再生を目標設計","プロフィール、音源ページ、広告素材へ接続","サビ、歌詞、本人素材、ムード動画など複数の切り口を試し、反応の強い企画を早い段階で見つけます。"],["Market Build","発売週から1ヶ月の話題化","2ヶ月","50-80本","25-60アカウント","20万-100万再生を目標設計","Spotify / Apple Music / YouTubeへの導線を強化","初動で反応した企画を増産し、日本語圏と海外圏で別々の見せ方を設計します。"],["Scale System","旧譜・重点曲の継続運用","3ヶ月","90-150本","50-120アカウント","50万-300万再生を目標設計","反応の高い動画を広告、PR、プレイリスト提案に転用","毎週の反応を見ながら投稿テーマを入れ替え、曲が使われる場面と接触回数を継続的に増やします。"]],
          aboutTitle:"広告ではなく、インターネットが使いたくなる理由をつくる。", about:"いま音楽は、プレイリストやメディア露出だけで広がるものではありません。ショート動画、編集、ミーム、クリエイター、コミュニティ、アルゴリズムの中で、曲は何度も違う意味を持ちます。uwuponは、その環境に合わせて、楽曲が見つかる入口を増やします。",
          formTitle:"次のリリースを相談する。", formIntro:"楽曲、発売日、目標市場、予算感を共有してください。確認後、キャンペーン設計に必要な質問を整理してご連絡します。",
          fields:{name:"氏名",company:"会社 / チーム",email:"メールアドレス",artist:"アーティスト",project:"楽曲 / プロジェクト",budget:"キャンペーン予算",market:"ターゲット市場",release_date:"リリース日",goal:"キャンペーン目標",info:"追加情報"}, success:"ありがとうございます。お問い合わせを受け付けました。",
          legalTitle:"Legal", footer:"Tokyo, Japan", privacyTitle:"プライバシーポリシー", privacy:"お問い合わせで取得した氏名、会社名、メールアドレス、アーティスト名、プロジェクト情報は、キャンペーン相談への回答、提案、連絡、サービス改善の目的でのみ利用します。本人の同意なく第三者へ販売することはありません。", termsTitle:"利用条件", terms:"本サイトの情報は一般的なサービス紹介を目的としています。キャンペーン内容、費用、納期、成果指標は個別の合意により決定されます。掲載内容の無断転載、複製、商用利用を禁止します。"
        },
        en: {
          cta:"START A CAMPAIGN", secondary:"SEE HOW IT WORKS", eyebrow:"SHORT-FORM MUSIC STRATEGY FOR JAPAN", hero:["ONE SONG.","DOZENS OF","DISCOVERY MOMENTS."], intro:"uwupon turns songs into short-form concepts, produces them at volume, distributes them across relevant accounts, then tests and improves the campaign around audience response.",
          proofTitle:"Built for labels, management teams, and modern artists.", proofCopy:"For new releases, catalog rediscovery, Japan localization, and global expansion. We do not rely on a single expensive post; we build many credible entry points around a song.", audience:["Record Labels","Artist Management","Music Publishers","Entertainment Agencies","Independent Artists","Japan / Global"], stats:[["3","core short-form surfaces"],["50+","possible content ideas from one song"],["7","steps from strategy to reporting"]],
          problemTitle:"Music promotion is now a game of attempts.", problem:"One-off influencer posts can be expensive, narrow, and hard to learn from. When creative volume is low, a song gets trapped inside one expression before the audience can show what works.", answerTitle:"uwupon multiplies the ways a song can be used.", answer:"We break a track into hooks, captions, edits, narratives, meme angles, moods, and community contexts, then concentrate production around the strongest signals.", modelTitle:"ONE SONG. MANY ENTRY POINTS.", modelCopy:"A track should not be reduced to one ad. We turn songs into short-form formats people can understand, share, comment on, and use.",
          steps:[["SONG","Map the track, release date, target market, and available assets."],["STRATEGY","Define the audience, cultural context, hooks, and campaign angles."],["CREATE","Produce variations across captions, edits, structures, and pacing."],["DISTRIBUTE","Deploy through relevant surfaces, accounts, and communities."],["TEST","Read retention, saves, comments, shares, and re-use signals."],["SCALE","Increase production and distribution around the strongest formats."],["REPORT","Turn results into clear decisions for the release team."]],
          servicesTitle:"Content infrastructure for music releases.", services:[["Short-Form Campaigns","Song-led TikTok, Reels, and Shorts campaigns built for high-volume creative testing."],["Creative Strategy","Identify hooks, lyric angles, usage moments, communities, and platform-native formats."],["Content Production","Create native-feeling short-form videos with variations in edit, caption, structure, and tempo."],["Distribution","Deploy content through relevant accounts, channels, and campaign surfaces."],["Testing & Optimization","Find the formats earning the best response, then increase output around winners."],["Campaign Intelligence","Readable reporting across output, views, engagement, creative performance, and audience signals."],["Japan ↔ Global","Help Japanese music travel internationally and international music enter Japan with cultural context."]],
          whyTitle:"Not one post. A structure for more signal.", traditional:"Traditional one-off promotion", ours:"uwupon operating model", traditionalList:["Limited creators","Few creative tests","Hard-to-read efficiency","Short campaign life","Little learning for the next release"], oursList:["Multiple creative directions","Higher content volume","Continuous optimization","Separate Japan and global angles","Reusable learning for future releases"],
          ecosystemTitle:"ONE SONG BECOMES A CONTENT ECOSYSTEM.", ecosystem:[["01","ONE SONG"],["10","CREATIVE DIRECTIONS"],["50+","CONTENT PIECES"],["1000s","DISCOVERY MOMENTS"]],
          plansTitle:"What uwupon can do for you.", plansNote:"These are campaign structures, not past-client results. Views, distribution count, and stream impact vary by song, assets, budget, timing, and account fit.", planLabels:{output:"Content Output",distribution:"Distribution",target:"Target Range",stream:"Stream Connection",detail:"What Happens"}, plans:[["Launch Test","Pre-release signal testing","1 month","20-35 videos","10-25 accounts","Designed for 50K-300K views","Connect to artist profile, track page, and ad-ready assets","Test chorus hooks, lyric moments, artist footage, mood edits, and audience angles to find what earns response early."],["Market Build","Release-week momentum","2 months","50-80 videos","25-60 accounts","Designed for 200K-1M views","Strengthen paths to Spotify, Apple Music, and YouTube","Scale the strongest concepts from the first wave and separate Japan-facing creative from global-facing creative."],["Scale System","Catalog or priority-track operation","3 months","90-150 videos","50-120 accounts","Designed for 500K-3M views","Reuse winning clips for paid, PR, playlist, and creator outreach","Run weekly creative refreshes so the song keeps gaining new scenes, new contexts, and new audience entry points."]],
          aboutTitle:"We do not simply advertise songs. We create reasons for the internet to use them.", about:"Music discovery no longer lives in one place. Songs move through short videos, edits, memes, creators, communities, and recommendation systems. uwupon is built for that environment: a team that expands the number of credible entry points around a release.",
          formTitle:"Start the next release conversation.", formIntro:"Send the track, release timing, target market, and budget range. After review, we will reply with the questions needed to shape a campaign.", fields:{name:"Name",company:"Company / Team",email:"Email",artist:"Artist",project:"Song / Project",budget:"Campaign Budget",market:"Target Market",release_date:"Release Date",goal:"Campaign Goal",info:"Additional Information"}, success:"Thank you. Your message has been received.",
          legalTitle:"Legal", footer:"Tokyo, Japan", privacyTitle:"Privacy Policy", privacy:"Information submitted through the contact form, including name, company, email address, artist, and project details, is used only to respond to inquiries, prepare proposals, communicate about services, and improve operations. We do not sell submitted personal information to third parties.", termsTitle:"Terms", terms:"This website provides general information about uwupon services. Campaign scope, fees, timing, deliverables, and performance indicators are determined by individual agreement. Unauthorized copying, redistribution, or commercial use of site content is prohibited."
        }
      };
      let lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : (navigator.language.toLowerCase().startsWith("ja") ? "jp" : "en");
      const $ = (s) => document.querySelector(s);
      const $$ = (s) => [...document.querySelectorAll(s)];
      function render() {
        const t = C[lang]; document.documentElement.lang = lang === "jp" ? "ja" : "en"; document.body.className = lang === "en" ? "en" : "jp";
        $$("[data-t]").forEach(el => { if (t[el.dataset.t]) el.textContent = t[el.dataset.t]; });
        $("#hero-title").innerHTML = t.hero.map(x => "<span>"+x+"</span>").join("<br />");
        $("#audience").innerHTML = t.audience.map(x => '<div class="tile"><span class="mark"><span class="dot"></span></span><p>'+x+'</p></div>').join("");
        $("#stats").innerHTML = t.stats.map(x => '<div class="stat"><strong>'+x[0]+'</strong><span>'+x[1]+'</span></div>').join("");
        $("#steps").innerHTML = t.steps.map((x,i) => '<article class="step '+(i===0?'active':'')+'"><small>'+String(i+1).padStart(2,"0")+'</small><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>').join("");
        $("#servicesGrid").innerHTML = t.services.map((x,i) => '<article class="service"><span class="detail-label">'+String(i+1).padStart(2,"0")+'</span><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>').join("");
        $("#traditionalList").innerHTML = t.traditionalList.map(x => "<li><span>"+x+"</span><b>-</b></li>").join("");
        $("#oursList").innerHTML = t.oursList.map(x => "<li><span>"+x+"</span><b>+</b></li>").join("");
        $("#ecosystem").innerHTML = t.ecosystem.map(x => "<div><strong>"+x[0]+"</strong><span>"+x[1]+"</span></div>").join("");
        $("#plans").innerHTML = t.plans.map(x => '<article class="plan"><div class="plan-head"><div><p class="plan-use">'+x[1]+'</p><h3>'+x[0]+'</h3></div><span class="badge">'+x[2]+'</span></div><div class="metrics"><div class="metric"><span>'+t.planLabels.output+'</span><b>'+x[3]+'</b></div><div class="metric"><span>'+t.planLabels.distribution+'</span><b>'+x[4]+'</b></div><div class="metric"><span>'+t.planLabels.target+'</span><b>'+x[5]+'</b></div><div class="metric"><span>'+t.planLabels.stream+'</span><b>'+x[6]+'</b></div></div><p><b>'+t.planLabels.detail+':</b> '+x[7]+'</p></article>').join("");
        Object.entries(t.fields).forEach(([k,v]) => $$('[data-field-label="'+k+'"]').forEach(el => el.textContent = v));
        $$("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
      }
      $("#fields").innerHTML = [["name"],["company"],["email","email"],["artist"],["project"],["budget"],["market"],["release_date","date"]].map(([name,type]) => '<label><span data-field-label="'+name+'"></span><input name="'+name+'" data-field="'+name+'" type="'+(type || "text")+'" /></label>').join("");
      $$("[data-lang]").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; render(); }));
      $("#menu").addEventListener("click", () => $("#mobile").classList.toggle("open"));
      $("#leadForm").addEventListener("submit", (e) => { const required=["name","email","artist","project","budget","market","goal"]; let ok=true; $$(".error").forEach(e=>e.remove()); required.forEach(name=>{ const input = $('[data-field="'+name+'"]'); if (!input.value.trim()) { ok=false; input.insertAdjacentHTML("afterend", '<span class="error">Required</span>'); }}); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('[data-field="email"]').value)) ok=false; if(!ok) e.preventDefault(); });
      if (new URLSearchParams(location.search).get("sent") === "1") $("#success").hidden = false;
      render();
    </script>
  </body>
</html>`;

writeFileSync(join(out, "index.html"), html);
writeFileSync(join(out, "_redirects"), "/* /index.html 200\n");
console.log(`Cloudflare Pages static site written to ${out}`);
