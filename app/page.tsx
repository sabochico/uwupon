"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Lang = "jp" | "en";
type Field =
  | "name"
  | "company"
  | "email"
  | "artist"
  | "project"
  | "budget"
  | "market"
  | "goal"
  | "release"
  | "info";

const content = {
  jp: {
    nav: [
      ["WORK", "work"],
      ["SERVICES", "services"],
      ["HOW IT WORKS", "how-it-works"],
      ["ABOUT", "about"],
      ["CONTACT", "contact"],
    ],
    cta: "キャンペーンを相談",
    secondary: "仕組みを見る",
    eyebrow: "TOKYO SHORT-FORM MUSIC INFRASTRUCTURE",
    hero: "曲を、無視できない存在へ。",
    intro:
      "楽曲を起点に、戦略、企画、量産、配信、検証までを一気通貫で設計する、音楽特化のショートフォーム・マーケティングスタジオです。",
    proofTitle: "音楽が動く場所に合わせて設計する。",
    proofCopy:
      "実績ロゴは後から差し替え可能な編集枠です。未提供のクライアント名や結果は掲載していません。",
    logoNote: "EDITABLE LOGO SLOT",
    stats: [
      ["3", "主要ショートフォーム面"],
      ["50+", "1曲から展開可能な制作本数"],
      ["7", "戦略から報告までの運用工程"],
    ],
    problemTitle: "従来型の音楽プロモーションは、試行回数が少なすぎる。",
    problem:
      "高額な単発投稿、限られたクリエイティブ、長い制作サイクル。楽曲の可能性がひとつの表現に閉じ込められてしまうことがあります。",
    answerTitle: "私たちは、楽曲の使われ方を増やす。",
    answer:
      "フック、字幕、編集、ミーム、ストーリー、コミュニティ角度を複数設計し、反応を見ながら制作と配信を更新します。",
    modelTitle: "ONE SONG. MANY SIGNALS.",
    modelCopy:
      "1曲を、文化に届くための複数の入口へ分解します。20秒で全体像が伝わるよう、工程は明快に、運用は緻密に。",
    steps: [
      ["SONG", "楽曲、発売日、狙う市場、既存素材を把握。"],
      ["STRATEGY", "フック、文脈、コミュニティ、言語圏を設計。"],
      ["CREATE", "複数形式のショート動画を高密度に制作。"],
      ["DISTRIBUTE", "関連性のあるアカウントや面へ展開。"],
      ["TEST", "視聴維持、保存、コメント、二次利用の兆しを確認。"],
      ["SCALE", "勝ち筋の表現へ制作量と配信を集中。"],
      ["REPORT", "次の判断につながる言葉で結果を共有。"],
    ],
    servicesTitle: "制作会社ではなく、リリースのためのコンテンツ基盤。",
    services: [
      ["Short-Form Campaigns", "TikTok、Reels、Shortsに最適化した高ボリュームの楽曲キャンペーン。"],
      ["Creative Strategy", "曲のフック、文化的文脈、参加しやすい使われ方、届けるコミュニティを特定。"],
      ["Content Production", "ネイティブに消費される編集、字幕、構成、テンポで複数バリエーションを制作。"],
      ["Distribution", "関連性のあるアカウント、チャンネル、投稿面へ計画的に展開。"],
      ["Testing & Optimization", "反応の強い形式を見つけ、勝ち筋へ制作と配信を寄せる。"],
      ["Campaign Intelligence", "本数、再生、反応、表現別パフォーマンス、オーディエンスの兆しを可視化。"],
      ["Japan ↔ Global", "日本発の楽曲を海外へ。海外楽曲を日本の文脈へ。双方向で設計。"],
    ],
    whyTitle: "単発投稿ではなく、反応を増やす構造。",
    traditional: "Traditional Influencer Marketing",
    ours: "Pulse Matrix Model",
    traditionalList: ["1人の投稿者", "1本の投稿", "高い単価", "検証が限定的", "短期間で終了"],
    oursList: ["複数の企画軸", "多量のコンテンツ", "継続的な検証", "複数の観客角度", "再現可能な配信と改善"],
    ecosystemTitle: "ONE SONG BECOMES A CONTENT ECOSYSTEM.",
    ecosystem: [
      ["01", "ONE SONG"],
      ["10", "CREATIVE DIRECTIONS"],
      ["50+", "PIECES OF CONTENT"],
      ["1000s", "DISTRIBUTION OPPORTUNITIES"],
    ],
    caseTitle: "差し替え前提のケーススタディ設計。",
    caseNote: "以下は構造確認用のデモデータです。実在のアーティスト実績ではありません。",
    cases: [
      {
        artist: "Demo Artist A",
        song: "Unreleased Single",
        objective: "発売前の認知形成",
        videos: "48 demo videos",
        views: "Replace with verified views",
        engagement: "Replace with verified engagement",
        best: "字幕フック + ライブ感のある編集",
        duration: "4 weeks",
        strategy: "サビ前の緊張感を複数の視点で切り出し、国内外で反応を比較。",
        result: "実績確定後に数値と学びを入力する枠。",
      },
      {
        artist: "Demo Artist B",
        song: "Catalog Track",
        objective: "旧譜の再発見",
        videos: "36 demo videos",
        views: "Replace with verified views",
        engagement: "Replace with verified engagement",
        best: "コメント誘発型のストーリー展開",
        duration: "3 weeks",
        strategy: "歌詞の一節を日常シーンに接続し、保存と共有の兆しを検証。",
        result: "実績確定後に数値と学びを入力する枠。",
      },
    ],
    aboutTitle: "広告するのではなく、使われる理由をつくる。",
    about:
      "音楽発見は、プレイリストやメディア露出だけでは完結しません。TikTok、Reels、Shorts、ミーム、編集動画、コミュニティ、アルゴリズムの中で、曲は何度も違う意味を持ちます。Pulse Matrixは、その環境に合わせて楽曲の入口を増やすチームです。",
    formTitle: "次のリリースを相談する。",
    formIntro:
      "楽曲、発売日、目標市場、予算感を共有してください。初回の返答では、キャンペーン設計に必要な確認事項を整理して戻します。",
    fields: {
      name: "氏名",
      company: "会社 / チーム",
      email: "メールアドレス",
      artist: "アーティスト",
      project: "楽曲 / プロジェクト",
      budget: "キャンペーン予算",
      market: "ターゲット市場",
      goal: "キャンペーン目標",
      release: "リリース日",
      info: "追加情報",
    },
    placeholders: {
      budget: "例: ¥2,000,000 - ¥5,000,000",
      market: "Japan / International / Both",
      goal: "認知、UGC、海外展開、発売初週の話題化など",
      info: "現在の素材、SNS状況、締切、参考キャンペーンなど",
    },
    required: "必須項目を確認してください。",
    invalidEmail: "有効なメールアドレスを入力してください。",
    sending: "送信中...",
    success: "ありがとうございます。キャンペーン相談内容を受け付けました。",
    footer: "Tokyo, Japan",
  },
  en: {
    nav: [
      ["WORK", "work"],
      ["SERVICES", "services"],
      ["HOW IT WORKS", "how-it-works"],
      ["ABOUT", "about"],
      ["CONTACT", "contact"],
    ],
    cta: "START A CAMPAIGN",
    secondary: "SEE HOW IT WORKS",
    eyebrow: "TOKYO SHORT-FORM MUSIC INFRASTRUCTURE",
    hero: "WE MAKE SONGS IMPOSSIBLE TO IGNORE.",
    intro:
      "A music-first short-form marketing studio building the strategy, concepts, content volume, distribution, testing, optimization, and reporting around a release.",
    proofTitle: "Built for the way music moves now.",
    proofCopy:
      "Logo slots are editable placeholders. No unverified client relationships or results are claimed.",
    logoNote: "EDITABLE LOGO SLOT",
    stats: [
      ["3", "core short-form surfaces"],
      ["50+", "possible assets from one song"],
      ["7", "steps from strategy to reporting"],
    ],
    problemTitle: "Traditional music promotion does not create enough attempts.",
    problem:
      "High-cost one-off influencer posts, limited creative volume, and slow campaign cycles can trap a song inside one expression before the audience has a chance to teach you what works.",
    answerTitle: "We multiply the ways a song can be used.",
    answer:
      "Hooks, captions, edits, memes, narratives, and community angles are designed in parallel, then sharpened through live audience response.",
    modelTitle: "ONE SONG. MANY SIGNALS.",
    modelCopy:
      "A track is broken into multiple cultural entry points. The framework is simple enough to understand in 20 seconds and rigorous enough to run a serious release.",
    steps: [
      ["SONG", "Map the track, release window, target market, and existing assets."],
      ["STRATEGY", "Define hooks, communities, languages, formats, and audience angles."],
      ["CREATE", "Produce high-density short-form variations with native platform logic."],
      ["DISTRIBUTE", "Deploy through relevant accounts, channels, and posting surfaces."],
      ["TEST", "Read retention, saves, comments, re-use signals, and format response."],
      ["SCALE", "Increase output around the concepts that earn the strongest signals."],
      ["REPORT", "Turn campaign data into clear decisions for the next move."],
    ],
    servicesTitle: "Not a production vendor. Content infrastructure for releases.",
    services: [
      ["Short-Form Campaigns", "High-volume TikTok, Reels, and Shorts campaigns engineered around songs."],
      ["Creative Strategy", "Identify hooks, communities, trends, usage moments, and cultural angles around a track."],
      ["Content Production", "Create native-feeling video variations built for short-form consumption."],
      ["Distribution", "Deploy content through relevant accounts, channels, and surfaces."],
      ["Testing & Optimization", "Find the formats that generate response, then increase output around winners."],
      ["Campaign Intelligence", "Readable reporting across output, views, engagement, creative performance, and audience signals."],
      ["Japan ↔ Global", "Help Japanese music reach Western audiences and international music connect with Japanese audiences."],
    ],
    whyTitle: "Not one post. A system for more signals.",
    traditional: "Traditional Influencer Marketing",
    ours: "Pulse Matrix Model",
    traditionalList: ["One creator", "One post", "High cost", "Limited testing", "Campaign fades quickly"],
    oursList: ["Many creative concepts", "Many content pieces", "Continuous testing", "Multiple audience angles", "Repeatable distribution and optimization"],
    ecosystemTitle: "ONE SONG BECOMES A CONTENT ECOSYSTEM.",
    ecosystem: [
      ["01", "ONE SONG"],
      ["10", "CREATIVE DIRECTIONS"],
      ["50+", "PIECES OF CONTENT"],
      ["1000s", "DISTRIBUTION OPPORTUNITIES"],
    ],
    caseTitle: "A reusable case-study system.",
    caseNote: "The examples below use clearly marked demo data. They are not real artist results.",
    cases: [
      {
        artist: "Demo Artist A",
        song: "Unreleased Single",
        objective: "Pre-release awareness",
        videos: "48 demo videos",
        views: "Replace with verified views",
        engagement: "Replace with verified engagement",
        best: "Caption-led hook + live-feeling edit",
        duration: "4 weeks",
        strategy: "Break the pre-chorus tension into several audience angles and compare Japan/global response.",
        result: "A placeholder for verified numbers and campaign learning.",
      },
      {
        artist: "Demo Artist B",
        song: "Catalog Track",
        objective: "Catalog rediscovery",
        videos: "36 demo videos",
        views: "Replace with verified views",
        engagement: "Replace with verified engagement",
        best: "Comment-trigger story format",
        duration: "3 weeks",
        strategy: "Connect a lyric fragment to everyday scenes and test for saves, shares, and comment velocity.",
        result: "A placeholder for verified numbers and campaign learning.",
      },
    ],
    aboutTitle: "We do not simply advertise songs. We create reasons for the internet to use them.",
    about:
      "Music discovery no longer lives in one place. Songs move through TikTok, Reels, Shorts, memes, edits, communities, creators, and recommendation systems. Pulse Matrix is built for that environment: a team that expands the number of credible entry points around a release.",
    formTitle: "Start the next release conversation.",
    formIntro:
      "Send the track, release timing, target market, and budget range. We will come back with the key questions needed to shape a campaign.",
    fields: {
      name: "Name",
      company: "Company",
      email: "Email",
      artist: "Artist",
      project: "Song / Project",
      budget: "Campaign Budget",
      market: "Target Market",
      goal: "Campaign Goal",
      release: "Release Date",
      info: "Additional Information",
    },
    placeholders: {
      budget: "e.g. ¥2,000,000 - ¥5,000,000",
      market: "Japan / International / Both",
      goal: "Awareness, UGC, global expansion, release-week heat...",
      info: "Existing assets, social context, deadline, reference campaigns...",
    },
    required: "Please complete the required fields.",
    invalidEmail: "Please enter a valid email address.",
    sending: "Sending...",
    success: "Thank you. Your campaign request has been received.",
    footer: "Tokyo, Japan",
  },
} as const;

const requiredFields: Field[] = ["name", "email", "artist", "project", "budget", "market", "goal"];
const initialForm = {
  name: "",
  company: "",
  email: "",
  artist: "",
  project: "",
  budget: "",
  market: "",
  goal: "",
  release: "",
  info: "",
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("jp");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<Record<Field, string>>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [activeStep, setActiveStep] = useState(0);
  const t = useMemo(() => content[lang], [lang]);

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    setLang(browserLang.startsWith("ja") ? "jp" : "en");
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((value) => (value + 1) % t.steps.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [t.steps.length]);

  function updateField(field: Field, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<Field, string>> = {};
    requiredFields.forEach((field) => {
      if (!form[field].trim()) nextErrors[field] = t.required;
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = t.invalidEmail;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 900);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e9] text-[#161616]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f5f1e9]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Pulse Matrix home">
            <span className="grid h-9 w-9 place-items-center bg-[#161616] text-xs font-black text-[#f5f1e9] transition-transform group-hover:rotate-6">
              PM
            </span>
            <span className="text-sm font-black uppercase tracking-[0.16em]">Pulse Matrix</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {t.nav.map(([item, id]) => (
              <a key={id} href={`#${id}`} className="text-xs font-bold tracking-[0.16em] text-black/62 transition hover:text-black">
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle lang={lang} setLang={setLang} />
            <a href="#contact" className="bg-[#d6ff3f] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition hover:bg-[#161616] hover:text-white">
              {t.cta}
            </a>
          </div>
          <button className="grid h-11 w-11 place-items-center border border-black/20 lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Open navigation" aria-expanded={menuOpen}>
            <span className="h-0.5 w-5 bg-black shadow-[0_7px_0_#000,0_-7px_0_#000]" />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-black/10 bg-[#f5f1e9] px-5 py-5 lg:hidden">
            <div className="grid gap-4">
              {t.nav.map(([item, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-xl font-black">
                  {item}
                </a>
              ))}
              <LanguageToggle lang={lang} setLang={setLang} />
              <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 bg-[#d6ff3f] px-5 py-3 text-center text-xs font-black uppercase tracking-[0.12em]">
                {t.cta}
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="relative min-h-screen px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#161616_1px,transparent_1px),linear-gradient(90deg,#161616_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1540px] content-between gap-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
            <div>
              <p className="mb-7 text-xs font-black uppercase tracking-[0.26em] text-black/55">{t.eyebrow}</p>
              <h1 className="max-w-[12ch] text-[clamp(3.7rem,12vw,13rem)] font-black uppercase leading-[0.8] tracking-normal">
                {t.hero}
              </h1>
            </div>
            <div className="relative mt-4 overflow-hidden border border-black/15 bg-black shadow-2xl lg:mt-12">
              <img src="/og.png" alt="Pulse Matrix music content ecosystem visual" className="aspect-[16/10] w-full object-cover opacity-90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black via-black/65 to-transparent p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">Release Signal Map</p>
                <p className="text-5xl font-black text-[#d6ff3f]">50+</p>
              </div>
            </div>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(420px,0.55fr)] lg:items-end">
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-[#161616] px-6 py-4 text-sm font-black uppercase tracking-[0.13em] text-white transition hover:bg-[#d6ff3f] hover:text-black">
                {t.cta}
              </a>
              <a href="#how-it-works" className="border border-black/25 px-6 py-4 text-sm font-black uppercase tracking-[0.13em] transition hover:border-black hover:bg-white">
                {t.secondary}
              </a>
            </div>
            <p className="max-w-2xl text-xl leading-relaxed text-black/70 sm:text-2xl">{t.intro}</p>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-black/10 bg-[#161616] px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.65fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-normal sm:text-5xl">{t.proofTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/58">{t.proofCopy}</p>
          </div>
          <div className="grid gap-px bg-white/15 md:grid-cols-3">
            {["LABEL", "MANAGEMENT", "PUBLISHER", "AGENCY", "GLOBAL", "INDIE"].map((slot) => (
              <div key={slot} className="bg-[#161616] p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d6ff3f]">{t.logoNote}</p>
                <p className="mt-8 text-2xl font-black text-white/50">{slot}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1540px] gap-px bg-white/15 md:grid-cols-3">
          {t.stats.map(([number, label]) => (
            <div key={label} className="bg-[#161616] p-6">
              <p className="text-6xl font-black text-[#d6ff3f]">{number}</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-white/62">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1540px] gap-px bg-black/15 lg:grid-cols-2">
          <Panel title={t.problemTitle} body={t.problem} tone="dark" />
          <Panel title={t.answerTitle} body={t.answer} tone="lime" />
        </div>
      </section>

      <section id="how-it-works" className="bg-[#f5f1e9] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 lg:grid-cols-[0.52fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">The Model</p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none sm:text-7xl">{t.modelTitle}</h2>
              <p className="mt-8 text-lg leading-relaxed text-black/65">{t.modelCopy}</p>
            </div>
            <ol className="grid gap-px bg-black/15 md:grid-cols-2">
              {t.steps.map(([step, description], index) => (
                <li key={step} onMouseEnter={() => setActiveStep(index)} className={`group relative min-h-48 overflow-hidden p-6 transition ${activeStep === index ? "bg-[#d6ff3f]" : "bg-[#f5f1e9] hover:bg-white"}`}>
                  <span className="text-sm font-black text-black/42">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-9 text-4xl font-black uppercase">{step}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/64">{description}</p>
                  <span className="absolute bottom-4 right-5 text-7xl font-black text-black/10">+</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="max-w-5xl text-5xl font-black uppercase leading-none sm:text-7xl">{t.servicesTitle}</h2>
          <div className="mt-14 grid gap-px bg-black/12 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map(([title, body], index) => (
              <article key={title} className={`min-h-72 bg-white p-7 transition hover:bg-[#f5f1e9] ${index === 6 ? "xl:col-span-3" : ""}`}>
                <p className="text-xs font-black text-black/35">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-10 text-3xl font-black uppercase leading-none">{title}</h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-black/62">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#161616] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="max-w-4xl text-5xl font-black uppercase leading-none sm:text-7xl">{t.whyTitle}</h2>
          <div className="mt-14 grid gap-px bg-white/15 lg:grid-cols-2">
            <Compare title={t.traditional} items={t.traditionalList} muted />
            <Compare title={t.ours} items={t.oursList} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d6ff3f] px-5 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[repeating-linear-gradient(0deg,#161616_0_3px,transparent_3px_18px)] opacity-10 lg:block" />
        <div className="relative mx-auto max-w-[1540px]">
          <h2 className="max-w-5xl text-5xl font-black uppercase leading-none sm:text-8xl">{t.ecosystemTitle}</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {t.ecosystem.map(([number, label]) => (
              <div key={label} className="border-t-4 border-black pt-5">
                <p className="text-6xl font-black sm:text-8xl">{number}</p>
                <p className="mt-4 text-sm font-black uppercase tracking-[0.12em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e9] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1fr]">
            <div>
              <h2 className="text-5xl font-black uppercase leading-none sm:text-7xl">{t.caseTitle}</h2>
              <p className="mt-7 text-base leading-relaxed text-black/62">{t.caseNote}</p>
            </div>
            <div className="grid gap-6">
              {t.cases.map((item) => (
                <article key={item.artist} className="border border-black/12 bg-white p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-black/38">{item.artist}</p>
                      <h3 className="mt-2 text-3xl font-black uppercase">{item.song}</h3>
                    </div>
                    <p className="bg-[#f5f1e9] px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">{item.duration}</p>
                  </div>
                  <div className="mt-8 grid gap-px bg-black/10 md:grid-cols-4">
                    {[
                      ["Objective", item.objective],
                      ["Videos", item.videos],
                      ["Views", item.views],
                      ["Engagement", item.engagement],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/35">{label}</p>
                        <p className="mt-2 text-sm font-bold text-black/72">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-5 md:grid-cols-3">
                    <CaseDetail label="Best Creative" value={item.best} />
                    <CaseDetail label="Strategy" value={item.strategy} />
                    <CaseDetail label="Result" value={item.result} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <h2 className="text-5xl font-black uppercase leading-none sm:text-8xl">{t.aboutTitle}</h2>
          <p className="text-xl leading-relaxed text-black/66">{t.about}</p>
        </div>
      </section>

      <section id="contact" className="bg-[#161616] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[0.62fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d6ff3f]">Contact</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-none sm:text-7xl">{t.formTitle}</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/62">{t.formIntro}</p>
          </div>
          <form onSubmit={submit} noValidate className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Input label={t.fields.name} value={form.name} error={errors.name} onChange={(value) => updateField("name", value)} required />
              <Input label={t.fields.company} value={form.company} onChange={(value) => updateField("company", value)} />
              <Input label={t.fields.email} type="email" value={form.email} error={errors.email} onChange={(value) => updateField("email", value)} required />
              <Input label={t.fields.artist} value={form.artist} error={errors.artist} onChange={(value) => updateField("artist", value)} required />
              <Input label={t.fields.project} value={form.project} error={errors.project} onChange={(value) => updateField("project", value)} required />
              <Input label={t.fields.budget} value={form.budget} placeholder={t.placeholders.budget} error={errors.budget} onChange={(value) => updateField("budget", value)} required />
              <Input label={t.fields.market} value={form.market} placeholder={t.placeholders.market} error={errors.market} onChange={(value) => updateField("market", value)} required />
              <Input label={t.fields.release} type="date" value={form.release} onChange={(value) => updateField("release", value)} />
            </div>
            <Input label={t.fields.goal} value={form.goal} placeholder={t.placeholders.goal} error={errors.goal} onChange={(value) => updateField("goal", value)} required />
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/58">{t.fields.info}</span>
              <textarea value={form.info} onChange={(event) => updateField("info", event.target.value)} placeholder={t.placeholders.info} className="min-h-36 border border-white/18 bg-white/7 px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]" />
            </label>
            <button disabled={status === "sending"} className="mt-2 bg-[#d6ff3f] px-6 py-5 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white disabled:cursor-wait disabled:opacity-70">
              {status === "sending" ? t.sending : t.cta}
            </button>
            {status === "success" && <p className="border border-[#d6ff3f]/35 bg-[#d6ff3f]/10 p-4 text-sm font-bold text-[#d6ff3f]">{t.success}</p>}
          </form>
        </div>
      </section>

      <footer className="bg-[#f5f1e9] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1540px] flex-col gap-8 border-t border-black/12 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.12em]">Pulse Matrix</p>
            <p className="mt-2 text-sm font-bold text-black/50">{t.footer}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-black uppercase tracking-[0.14em] text-black/56">
            {["Instagram", "TikTok", "YouTube", "X", "Contact", "Privacy Policy", "Terms"].map((item) => (
              <a key={item} href={item === "Contact" ? "#contact" : "#top"} className="transition hover:text-black">
                {item}
              </a>
            ))}
          </div>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>
        <p className="mx-auto mt-10 max-w-[1540px] text-xs font-bold uppercase tracking-[0.14em] text-black/35">
          Copyright 2026 Pulse Matrix. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

function LanguageToggle({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="flex w-max border border-black/20 text-xs font-black">
      <button className={`px-3 py-2 transition ${lang === "jp" ? "bg-[#161616] text-white" : "hover:bg-white"}`} onClick={() => setLang("jp")} type="button" aria-pressed={lang === "jp"}>
        JP
      </button>
      <button className={`px-3 py-2 transition ${lang === "en" ? "bg-[#161616] text-white" : "hover:bg-white"}`} onClick={() => setLang("en")} type="button" aria-pressed={lang === "en"}>
        EN
      </button>
    </div>
  );
}

function Panel({ title, body, tone }: { title: string; body: string; tone: "dark" | "lime" }) {
  return (
    <article className={`min-h-96 p-7 sm:p-10 ${tone === "dark" ? "bg-[#161616] text-white" : "bg-[#d6ff3f] text-black"}`}>
      <h2 className="max-w-2xl text-4xl font-black uppercase leading-none sm:text-6xl">{title}</h2>
      <p className={`mt-8 max-w-2xl text-lg leading-relaxed ${tone === "dark" ? "text-white/66" : "text-black/68"}`}>{body}</p>
    </article>
  );
}

function Compare({ title, items, muted = false }: { title: string; items: readonly string[]; muted?: boolean }) {
  return (
    <article className={`p-7 sm:p-10 ${muted ? "bg-[#222] text-white/72" : "bg-[#d6ff3f] text-black"}`}>
      <h3 className="text-3xl font-black uppercase leading-none sm:text-5xl">{title}</h3>
      <ul className="mt-10 grid gap-3">
        {items.map((item) => (
          <li key={item} className={`flex items-center justify-between gap-4 border-t py-4 text-lg font-black ${muted ? "border-white/14" : "border-black/18"}`}>
            <span>{item}</span>
            <span>{muted ? "-" : "+"}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CaseDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/35">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-black/64">{value}</p>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-black uppercase tracking-[0.16em] text-white/58">
        {label}
        {required ? " *" : ""}
      </span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} type={type} aria-invalid={Boolean(error)} className="h-14 border border-white/18 bg-white/7 px-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]" />
      {error && <span className="text-xs font-bold text-[#ff775f]">{error}</span>}
    </label>
  );
}
