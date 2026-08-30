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
    cta: "キャンペーンを相談する",
    secondary: "仕組みを見る",
    eyebrow: "日本の音楽市場に特化したショートフォーム戦略",
    hero: "1曲から何十本ものショート動画へ",
    intro:
      "uwuponは、楽曲からショート動画の企画をつくり、まとめて制作し、複数の投稿面へ配信し、反応を見ながら改善する音楽マーケティングスタジオです。",
    proofTitle: "レーベル、マネジメント、アーティストチームのための実行体制。",
    proofCopy:
      "新曲リリース、旧譜の再発見、海外展開、日本市場へのローカライズまで。高額な単発投稿に頼り切らず、複数の企画と制作量で反応の入口を広げます。",
    audience: ["Record Labels", "Artist Management", "Music Publishers", "Entertainment Agencies", "Independent Artists", "Japan / Global"],
    stats: [
      ["3", "主要ショートフォーム面"],
      ["50+", "1曲から設計できる動画案"],
      ["7", "戦略からレポートまでの工程"],
    ],
    problemTitle: "音楽プロモーションは、試せる回数で差がつく。",
    problem:
      "単発のインフルエンサー投稿だけでは、どの文脈で曲が届くのか見えにくい。制作本数が少ないほど、曲の可能性はひとつの表現に固定されます。",
    answerTitle: "uwuponは、曲の使われ方を増やします。",
    answer:
      "サビ、歌詞、ムード、ストーリー、編集テンポ、ミーム性、コミュニティの文脈を複数に分解。反応を見ながら、強い企画へ制作と配信を集中させます。",
    modelTitle: "1曲から、複数の発見経路へ。",
    modelCopy:
      "楽曲の魅力をひとつの広告に閉じ込めず、ショートフォーム上で使われやすい形へ展開します。流れはシンプルに、運用は細かく。",
    steps: [
      ["SONG", "楽曲、発売日、ターゲット市場、既存素材を確認。"],
      ["STRATEGY", "誰に、どの文脈で、どのフックを届けるかを設計。"],
      ["CREATE", "字幕、編集、構成、テンポを変えながら複数案を制作。"],
      ["DISTRIBUTE", "関連性のある投稿面、アカウント、コミュニティへ展開。"],
      ["TEST", "視聴維持、保存、コメント、共有、二次利用の兆しを読む。"],
      ["SCALE", "反応の強い表現へ制作量と配信量を寄せる。"],
      ["REPORT", "次の判断につながる形で成果と学びを整理。"],
    ],
    servicesTitle: "リリースのためのコンテンツ運用基盤。",
    services: [
      ["Short-Form Campaigns", "TikTok、Reels、Shortsに合わせた、楽曲中心のショートフォームキャンペーン。"],
      ["Creative Strategy", "曲のフック、歌詞の切り口、参加しやすい使われ方、届けるべきコミュニティを整理。"],
      ["Content Production", "広告っぽさを抑え、自然に見られる編集、字幕、構成で複数バリエーションを制作。"],
      ["Distribution", "楽曲との相性を見ながら、関連アカウントや投稿面へ計画的に展開。"],
      ["Testing & Optimization", "初動の反応から勝ち筋を見つけ、制作と配信を改善。"],
      ["Campaign Intelligence", "投稿本数、再生、反応、企画別の傾向を、チームで判断しやすい形に整理。"],
      ["Japan ↔ Global", "日本の楽曲を海外へ。海外の楽曲を日本の文脈へ。言語と文化の両方から設計。"],
    ],
    whyTitle: "ひとつの投稿ではなく、反応が集まる構造をつくる。",
    traditional: "従来型の単発施策",
    ours: "uwuponの運用モデル",
    traditionalList: ["投稿者が限られる", "表現の検証が少ない", "費用対効果を読みづらい", "短期間で終わりやすい", "次の施策に学びが残りにくい"],
    oursList: ["複数の企画軸を同時に試す", "制作本数で接触機会を増やす", "反応を見て改善する", "日本語圏と海外圏を分けて設計する", "次のリリースに使える知見を残す"],
    ecosystemTitle: "1曲を、コンテンツの生態系へ。",
    ecosystem: [
      ["01", "ONE SONG"],
      ["10", "CREATIVE DIRECTIONS"],
      ["50+", "CONTENT PIECES"],
      ["1000s", "DISCOVERY MOMENTS"],
    ],
    plansTitle: "uwuponでできること。",
    plansNote:
      "過去実績ではなく、相談時に設計できるキャンペーン例です。再生数、配信面、ストリーム増加は楽曲、素材、予算、投稿先、時期により変動します。",
    planLabels: {
      duration: "期間",
      output: "制作本数",
      distribution: "配信先",
      target: "目標レンジ",
      stream: "ストリームへの接続",
      detail: "実施内容",
    },
    plans: [
      {
        title: "Launch Test",
        use: "新曲の初動テスト",
        duration: "1ヶ月",
        output: "20-35本",
        distribution: "10-25アカウント",
        target: "5万-30万再生を目標設計",
        stream: "プロフィール、音源ページ、広告素材へ接続",
        detail:
          "サビ、歌詞、本人素材、ムード動画など複数の切り口を試し、反応の強い企画を早い段階で見つけます。",
      },
      {
        title: "Market Build",
        use: "発売週から1ヶ月の話題化",
        duration: "2ヶ月",
        output: "50-80本",
        distribution: "25-60アカウント",
        target: "20万-100万再生を目標設計",
        stream: "Spotify / Apple Music / YouTubeへの導線を強化",
        detail:
          "初動で反応した企画を増産し、日本語圏と海外圏で別々の見せ方を設計します。",
      },
      {
        title: "Scale System",
        use: "旧譜・重点曲の継続運用",
        duration: "3ヶ月",
        output: "90-150本",
        distribution: "50-120アカウント",
        target: "50万-300万再生を目標設計",
        stream: "反応の高い動画を広告、PR、プレイリスト提案に転用",
        detail:
          "毎週の反応を見ながら投稿テーマを入れ替え、曲が使われる場面と接触回数を継続的に増やします。",
      },
    ],
    aboutTitle: "広告ではなく、インターネットが使いたくなる理由をつくる。",
    about:
      "いま音楽は、プレイリストやメディア露出だけで広がるものではありません。ショート動画、編集、ミーム、クリエイター、コミュニティ、アルゴリズムの中で、曲は何度も違う意味を持ちます。uwuponは、その環境に合わせて、楽曲が見つかる入口を増やします。",
    formTitle: "次のリリースを相談する。",
    formIntro:
      "楽曲、発売日、目標市場、予算感を共有してください。確認後、キャンペーン設計に必要な質問を整理してご連絡します。",
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
      market: "日本 / 海外 / 両方",
      goal: "認知拡大、UGC、海外展開、発売週の話題化など",
      info: "素材状況、SNS状況、締切、参考キャンペーンなど",
    },
    required: "必須項目を入力してください。",
    invalidEmail: "有効なメールアドレスを入力してください。",
    sending: "送信中...",
    success: "ありがとうございます。お問い合わせを受け付けました。",
    legalTitle: "Legal",
    privacyTitle: "プライバシーポリシー",
    privacy:
      "お問い合わせで取得した氏名、会社名、メールアドレス、アーティスト名、プロジェクト情報は、キャンペーン相談への回答、提案、連絡、サービス改善の目的でのみ利用します。本人の同意なく第三者へ販売することはありません。",
    termsTitle: "利用条件",
    terms:
      "本サイトの情報は一般的なサービス紹介を目的としています。キャンペーン内容、費用、納期、成果指標は個別の合意により決定されます。掲載内容の無断転載、複製、商用利用を禁止します。",
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
    eyebrow: "SHORT-FORM MUSIC STRATEGY FOR JAPAN",
    hero: "ONE SONG. CHANGES EVERYTHING.",
    intro:
      "uwupon turns songs into short-form concepts, produces them at volume, distributes them across relevant accounts, then tests and improves the campaign around audience response.",
    proofTitle: "Built for labels, management teams, and modern artists.",
    proofCopy:
      "For new releases, catalog rediscovery, Japan localization, and global expansion. We do not rely on a single expensive post; we build many credible entry points around a song.",
    audience: ["Record Labels", "Artist Management", "Music Publishers", "Entertainment Agencies", "Independent Artists", "Japan / Global"],
    stats: [
      ["3", "core short-form surfaces"],
      ["50+", "possible content ideas from one song"],
      ["7", "steps from strategy to reporting"],
    ],
    problemTitle: "Music promotion is now a game of attempts.",
    problem:
      "One-off influencer posts can be expensive, narrow, and hard to learn from. When creative volume is low, a song gets trapped inside one expression before the audience can show what works.",
    answerTitle: "uwupon multiplies the ways a song can be used.",
    answer:
      "We break a track into hooks, captions, edits, narratives, meme angles, moods, and community contexts, then concentrate production around the strongest signals.",
    modelTitle: "ONE SONG. MANY ENTRY POINTS.",
    modelCopy:
      "A track should not be reduced to one ad. We turn songs into short-form formats people can understand, share, comment on, and use.",
    steps: [
      ["SONG", "Map the track, release date, target market, and available assets."],
      ["STRATEGY", "Define the audience, cultural context, hooks, and campaign angles."],
      ["CREATE", "Produce variations across captions, edits, structures, and pacing."],
      ["DISTRIBUTE", "Deploy through relevant surfaces, accounts, and communities."],
      ["TEST", "Read retention, saves, comments, shares, and re-use signals."],
      ["SCALE", "Increase production and distribution around the strongest formats."],
      ["REPORT", "Turn results into clear decisions for the release team."],
    ],
    servicesTitle: "Content infrastructure for music releases.",
    services: [
      ["Short-Form Campaigns", "Song-led TikTok, Reels, and Shorts campaigns built for high-volume creative testing."],
      ["Creative Strategy", "Identify hooks, lyric angles, usage moments, communities, and platform-native formats."],
      ["Content Production", "Create native-feeling short-form videos with variations in edit, caption, structure, and tempo."],
      ["Distribution", "Deploy content through relevant accounts, channels, and campaign surfaces."],
      ["Testing & Optimization", "Find the formats earning the best response, then increase output around winners."],
      ["Campaign Intelligence", "Readable reporting across output, views, engagement, creative performance, and audience signals."],
      ["Japan ↔ Global", "Help Japanese music travel internationally and international music enter Japan with cultural context."],
    ],
    whyTitle: "Not one post. A structure for more signal.",
    traditional: "Traditional one-off promotion",
    ours: "uwupon operating model",
    traditionalList: ["Limited creators", "Few creative tests", "Hard-to-read efficiency", "Short campaign life", "Little learning for the next release"],
    oursList: ["Multiple creative directions", "Higher content volume", "Continuous optimization", "Separate Japan and global angles", "Reusable learning for future releases"],
    ecosystemTitle: "ONE SONG BECOMES A CONTENT ECOSYSTEM.",
    ecosystem: [
      ["01", "ONE SONG"],
      ["10", "CREATIVE DIRECTIONS"],
      ["50+", "CONTENT PIECES"],
      ["1000s", "DISCOVERY MOMENTS"],
    ],
    plansTitle: "What uwupon can do for you.",
    plansNote:
      "These are campaign structures, not past-client results. Views, distribution count, and stream impact vary by song, assets, budget, timing, and account fit.",
    planLabels: {
      duration: "Duration",
      output: "Content Output",
      distribution: "Distribution",
      target: "Target Range",
      stream: "Stream Connection",
      detail: "What Happens",
    },
    plans: [
      {
        title: "Launch Test",
        use: "Pre-release signal testing",
        duration: "1 month",
        output: "20-35 videos",
        distribution: "10-25 accounts",
        target: "Designed for 50K-300K views",
        stream: "Connect to artist profile, track page, and ad-ready assets",
        detail:
          "Test chorus hooks, lyric moments, artist footage, mood edits, and audience angles to find what earns response early.",
      },
      {
        title: "Market Build",
        use: "Release-week momentum",
        duration: "2 months",
        output: "50-80 videos",
        distribution: "25-60 accounts",
        target: "Designed for 200K-1M views",
        stream: "Strengthen paths to Spotify, Apple Music, and YouTube",
        detail:
          "Scale the strongest concepts from the first wave and separate Japan-facing creative from global-facing creative.",
      },
      {
        title: "Scale System",
        use: "Catalog or priority-track operation",
        duration: "3 months",
        output: "90-150 videos",
        distribution: "50-120 accounts",
        target: "Designed for 500K-3M views",
        stream: "Reuse winning clips for paid, PR, playlist, and creator outreach",
        detail:
          "Run weekly creative refreshes so the song keeps gaining new scenes, new contexts, and new audience entry points.",
      },
    ],
    aboutTitle: "We do not simply advertise songs. We create reasons for the internet to use them.",
    about:
      "Music discovery no longer lives in one place. Songs move through short videos, edits, memes, creators, communities, and recommendation systems. uwupon is built for that environment: a team that expands the number of credible entry points around a release.",
    formTitle: "Start the next release conversation.",
    formIntro:
      "Send the track, release timing, target market, and budget range. After review, we will reply with the questions needed to shape a campaign.",
    fields: {
      name: "Name",
      company: "Company / Team",
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
    required: "Please complete this required field.",
    invalidEmail: "Please enter a valid email address.",
    sending: "Sending...",
    success: "Thank you. Your message has been received.",
    legalTitle: "Legal",
    privacyTitle: "Privacy Policy",
    privacy:
      "Information submitted through the contact form, including name, company, email address, artist, and project details, is used only to respond to inquiries, prepare proposals, communicate about services, and improve operations. We do not sell submitted personal information to third parties.",
    termsTitle: "Terms",
    terms:
      "This website provides general information about uwupon services. Campaign scope, fees, timing, deliverables, and performance indicators are determined by individual agreement. Unauthorized copying, redistribution, or commercial use of site content is prohibited.",
    footer: "Tokyo, Japan",
  },
} as const;

const requiredFields: Field[] = ["name", "email", "artist", "project", "budget", "market", "goal"];
const initialForm: Record<Field, string> = {
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
  const isJp = lang === "jp";

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const requestedLang = new URLSearchParams(window.location.search).get("lang");
    setLang(requestedLang === "en" ? "en" : browserLang.startsWith("ja") ? "jp" : "en");
    if (new URLSearchParams(window.location.search).get("sent") === "1") setStatus("success");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "jp" ? "ja" : "en";
  }, [lang]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((value) => (value + 1) % t.steps.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [t.steps.length]);

  function updateField(field: Field, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "success") setStatus("idle");
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
    event.currentTarget.submit();
  }

  return (
    <main className={`min-h-screen overflow-hidden bg-[#f5f1e9] text-[#161616] ${isJp ? "jp-page" : "en-page"}`}>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f5f1e9]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="uwupon home">
            <BrandMark />
            <span className="text-base font-black lowercase tracking-[0.08em]">uwupon</span>
          </a>
          <div className="hidden items-center gap-7 xl:flex">
            {t.nav.map(([item, id]) => (
              <a key={id} href={`#${id}`} className="text-xs font-bold tracking-[0.16em] text-black/62 transition hover:text-black">
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-4 xl:flex">
            <LanguageToggle lang={lang} setLang={setLang} />
            <a href="#contact" className="bg-[#d6ff3f] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition hover:bg-[#161616] hover:text-white">
              {t.cta}
            </a>
          </div>
          <button className="grid h-11 w-11 place-items-center border border-black/20 xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Open navigation" aria-expanded={menuOpen}>
            <span className="h-0.5 w-5 bg-black shadow-[0_7px_0_#000,0_-7px_0_#000]" />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-black/10 bg-[#f5f1e9] px-5 py-5 xl:hidden">
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
          <div className={`grid gap-8 lg:items-start ${isJp ? "lg:grid-cols-[0.86fr_0.74fr]" : "lg:grid-cols-[1fr_0.78fr]"}`}>
            <div>
              <p className={`mb-7 text-xs font-black text-black/55 ${isJp ? "tracking-[0.08em]" : "uppercase tracking-[0.2em]"}`}>{t.eyebrow}</p>
              <h1 className={isJp ? "jp-display jp-hero-title font-black" : "grid gap-[0.04em] text-[clamp(2.6rem,9.5vw,8.6rem)] font-black uppercase leading-[0.9] tracking-normal [&>span]:whitespace-nowrap"}>
                {isJp ? (
                  <>
                    <span>1曲から</span>
                    <span>何十本もの</span>
                    <span>ショート動画へ</span>
                  </>
                ) : (
                  <>
                    <span>ONE SONG.</span>
                    <span>CHANGES</span>
                    <span>EVERYTHING.</span>
                  </>
                )}
              </h1>
            </div>
            <div className="relative mt-4 overflow-hidden border border-black/15 bg-black shadow-2xl lg:mt-12">
              <img src="/og.png" alt="uwupon short-form music content ecosystem visual" className="aspect-[16/10] w-full object-cover opacity-90" />
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
            <h2 className={`font-black tracking-normal ${isJp ? "jp-display jp-heading-compact" : "text-3xl uppercase sm:text-5xl"}`}>{t.proofTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/58">{t.proofCopy}</p>
          </div>
          <div className="grid gap-px bg-white/15 md:grid-cols-3">
            {t.audience.map((slot) => (
              <div key={slot} className="bg-[#161616] p-5 transition hover:bg-[#202020]">
                <BrandMark small />
                <p className="mt-8 text-2xl font-black uppercase leading-none text-white/70">{slot}</p>
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
          <Panel title={t.problemTitle} body={t.problem} tone="dark" isJp={isJp} />
          <Panel title={t.answerTitle} body={t.answer} tone="lime" isJp={isJp} />
        </div>
      </section>

      <section id="how-it-works" className="bg-[#f5f1e9] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 lg:grid-cols-[0.52fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">The Model</p>
              <h2 className={`mt-4 font-black ${isJp ? "jp-display jp-heading-compact" : "text-5xl uppercase leading-none sm:text-7xl"}`}>{t.modelTitle}</h2>
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
          <h2 className={`max-w-5xl font-black ${isJp ? "jp-display jp-heading" : "text-5xl uppercase leading-none sm:text-7xl"}`}>{t.servicesTitle}</h2>
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
          <h2 className={`max-w-4xl font-black ${isJp ? "jp-display jp-heading" : "text-5xl uppercase leading-none sm:text-7xl"}`}>{t.whyTitle}</h2>
          <div className="mt-14 grid gap-px bg-white/15 lg:grid-cols-2">
            <Compare title={t.traditional} items={t.traditionalList} muted isJp={isJp} />
            <Compare title={t.ours} items={t.oursList} isJp={isJp} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d6ff3f] px-5 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[repeating-linear-gradient(0deg,#161616_0_3px,transparent_3px_18px)] opacity-10 lg:block" />
        <div className="relative mx-auto max-w-[1540px]">
          <h2 className={`max-w-5xl font-black ${isJp ? "jp-display jp-heading" : "text-5xl uppercase leading-none sm:text-8xl"}`}>{t.ecosystemTitle}</h2>
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
              <h2 className={`font-black ${isJp ? "jp-display jp-heading-compact" : "text-5xl uppercase leading-none sm:text-7xl"}`}>{t.plansTitle}</h2>
              <p className="mt-7 text-base leading-relaxed text-black/62">{t.plansNote}</p>
            </div>
            <div className="grid gap-px bg-black/12">
              {t.plans.map((item) => (
                <article key={item.title} className="bg-white p-6 transition hover:bg-[#fbfaf5]">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-black/38">{item.use}</p>
                      <h3 className="mt-2 text-4xl font-black uppercase leading-none">{item.title}</h3>
                    </div>
                    <p className="bg-[#d6ff3f] px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">{item.duration}</p>
                  </div>
                  <div className="mt-8 grid gap-px bg-black/10 md:grid-cols-4">
                    {[
                      [t.planLabels.output, item.output],
                      [t.planLabels.distribution, item.distribution],
                      [t.planLabels.target, item.target],
                      [t.planLabels.stream, item.stream],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/35">{label}</p>
                        <p className="mt-2 text-sm font-bold text-black/72">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <CaseDetail label={t.planLabels.detail} value={item.detail} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <h2 className={`font-black ${isJp ? "jp-display jp-heading" : "text-5xl uppercase leading-none sm:text-8xl"}`}>{t.aboutTitle}</h2>
          <p className="text-xl leading-relaxed text-black/66">{t.about}</p>
        </div>
      </section>

      <section id="contact" className="bg-[#161616] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[0.62fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d6ff3f]">Contact</p>
            <h2 className={`mt-5 font-black ${isJp ? "jp-display jp-heading-compact" : "text-5xl uppercase leading-none sm:text-7xl"}`}>{t.formTitle}</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/62">{t.formIntro}</p>
          </div>
          <form action="https://formsubmit.co/aweandco@gmail.com" method="POST" onSubmit={submit} noValidate className="grid gap-5">
            <input type="hidden" name="_subject" value="New uwupon campaign inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://uwupon.aweandco.chatgpt.site/?sent=1" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-5 md:grid-cols-2">
              <Input name="name" label={t.fields.name} value={form.name} error={errors.name} onChange={(value) => updateField("name", value)} required />
              <Input name="company" label={t.fields.company} value={form.company} onChange={(value) => updateField("company", value)} />
              <Input name="email" label={t.fields.email} type="email" value={form.email} error={errors.email} onChange={(value) => updateField("email", value)} required />
              <Input name="artist" label={t.fields.artist} value={form.artist} error={errors.artist} onChange={(value) => updateField("artist", value)} required />
              <Input name="project" label={t.fields.project} value={form.project} error={errors.project} onChange={(value) => updateField("project", value)} required />
              <Input name="budget" label={t.fields.budget} value={form.budget} placeholder={t.placeholders.budget} error={errors.budget} onChange={(value) => updateField("budget", value)} required />
              <Input name="market" label={t.fields.market} value={form.market} placeholder={t.placeholders.market} error={errors.market} onChange={(value) => updateField("market", value)} required />
              <Input name="release_date" label={t.fields.release} type="date" value={form.release} onChange={(value) => updateField("release", value)} />
            </div>
            <Input name="campaign_goal" label={t.fields.goal} value={form.goal} placeholder={t.placeholders.goal} error={errors.goal} onChange={(value) => updateField("goal", value)} required />
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-white/58">{t.fields.info}</span>
              <textarea name="additional_information" value={form.info} onChange={(event) => updateField("info", event.target.value)} placeholder={t.placeholders.info} className="min-h-36 border border-white/18 bg-white/7 px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]" />
            </label>
            <button disabled={status === "sending"} className="mt-2 bg-[#d6ff3f] px-6 py-5 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white disabled:cursor-wait disabled:opacity-70">
              {status === "sending" ? t.sending : t.cta}
            </button>
            {status === "success" && <p className="border border-[#d6ff3f]/35 bg-[#d6ff3f]/10 p-4 text-sm font-bold text-[#d6ff3f]">{t.success}</p>}
          </form>
        </div>
      </section>

      <section className="bg-[#f5f1e9] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1540px] gap-8 border-t border-black/12 pt-10 lg:grid-cols-[0.4fr_1fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-black/40">{t.legalTitle}</p>
            <p className="mt-4 text-2xl font-black lowercase">uwupon</p>
            <p className="mt-2 text-sm font-bold text-black/50">{t.footer}</p>
          </div>
          <LegalBlock title={t.privacyTitle} body={t.privacy} />
          <LegalBlock title={t.termsTitle} body={t.terms} />
        </div>
        <div className="mx-auto mt-10 flex max-w-[1540px] flex-col gap-5 border-t border-black/12 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/35">Copyright 2026 uwupon. All rights reserved.</p>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>
      </section>
    </main>
  );
}

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`relative grid place-items-center bg-[#161616] ${small ? "h-8 w-8" : "h-10 w-10"}`} aria-hidden="true">
      <span className="absolute h-1/2 w-1/2 rounded-full border-2 border-[#d6ff3f]" />
      <span className="absolute h-[72%] w-[72%] rounded-full border border-white/45" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff5b45]" />
    </span>
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

function Panel({ title, body, tone, isJp }: { title: string; body: string; tone: "dark" | "lime"; isJp: boolean }) {
  return (
    <article className={`min-h-96 p-7 sm:p-10 ${tone === "dark" ? "bg-[#161616] text-white" : "bg-[#d6ff3f] text-black"}`}>
      <h2 className={`max-w-2xl font-black ${isJp ? "jp-display jp-heading-compact" : "text-4xl uppercase leading-none sm:text-6xl"}`}>{title}</h2>
      <p className={`mt-8 max-w-2xl text-lg leading-relaxed ${tone === "dark" ? "text-white/66" : "text-black/68"}`}>{body}</p>
    </article>
  );
}

function Compare({ title, items, muted = false, isJp }: { title: string; items: readonly string[]; muted?: boolean; isJp: boolean }) {
  return (
    <article className={`p-7 sm:p-10 ${muted ? "bg-[#222] text-white/72" : "bg-[#d6ff3f] text-black"}`}>
      <h3 className={`font-black ${isJp ? "jp-display jp-heading-compact" : "text-3xl uppercase leading-none sm:text-5xl"}`}>{title}</h3>
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

function LegalBlock({ title, body }: { title: string; body: string }) {
  return (
    <article>
      <h2 className="text-lg font-black uppercase tracking-[0.08em]">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-black/58">{body}</p>
    </article>
  );
}

function Input({
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
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
      <input name={name} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} type={type} aria-invalid={Boolean(error)} className="h-14 border border-white/18 bg-white/7 px-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]" />
      {error && <span className="text-xs font-bold text-[#ff775f]">{error}</span>}
    </label>
  );
}
