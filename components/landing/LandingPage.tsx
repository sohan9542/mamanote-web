"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import styles from "./LandingPage.module.css";

import logo       from "../../assets/logo.png";
import p1         from "../../assets/p1.png";
import p2         from "../../assets/p2.png";
import p3         from "../../assets/p3.png";
import p4         from "../../assets/p4.png";
import p5         from "../../assets/p5.png";
import p6         from "../../assets/p6.png";

/* ─── Scroll reveal wrapper ───────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -56px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${on ? styles.revealVisible : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ─── Google Play triangle icon ───────────────────────────────── */
function PlayTriangle() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={styles.playIconSvg} fill="currentColor">
      <path d="M4 2.8a1 1 0 0 1 1.52-.86l13 8a1 1 0 0 1 0 1.72l-13 8A1 1 0 0 1 4 18.6V2.8z" />
    </svg>
  );
}

/* ─── Reusable phone frame ────────────────────────────────────── */
function Phone({
  src,
  alt,
  glow = "glowPink",
  delay = 0,
}: {
  src: StaticImageData;
  alt: string;
  glow?: "glowPink" | "glowPurple" | "glowMint";
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={styles.phoneFrame}>
      <div className={`${styles.phoneFrameGlow} ${styles[glow]}`} aria-hidden="true" />
      <Image
        src={src}
        alt={alt}
        className={styles.phoneImg}
        sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 280px"
      />
    </Reveal>
  );
}

/* ─── Feature card data ───────────────────────────────────────── */
const FEATURES = [
  {
    icon: "🤱",
    bg: styles.cardLavender,
    title: "Breastfeeding Log",
    desc: "Track nursing sessions with left/right side timers, bottle feeds, pumping, and medicine — all in one calm tap.",
  },
  {
    icon: "😴",
    bg: styles.cardPeach,
    title: "Sleep Log",
    desc: "Log nap start and end times, night sleep, and see daily totals at a glance so you always know what's normal.",
  },
  {
    icon: "📔",
    bg: styles.cardPink,
    title: "Baby Diary",
    desc: "Capture precious moments, milestones, first smiles, and daily notes in a warm diary you'll treasure forever.",
  },
  {
    icon: "📊",
    bg: styles.cardMint,
    title: "Growth & Insights",
    desc: "Follow weight, height, and feeding patterns with beautiful charts and AI-powered daily rhythm suggestions.",
  },
] as const;

/* ─── Main component ──────────────────────────────────────────── */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  const playUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "#download";

  return (
    <div className={styles.page}>

      {/* ═══ HEADER ════════════════════════════════════════════════ */}
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Primary navigation">

          <Link href="/" className={styles.brand} aria-label="MamaNote — home">
            <div className={styles.logoWrap}>
              <Image src={logo as StaticImageData} alt="" aria-hidden="true"
                className={styles.logoImg} priority />
            </div>
            <span className={styles.brandName}>MamaNote <span className={styles.brandTag}>Baby Tracker & Diary</span></span>
          </Link>

          <div className={styles.desktopNav}>
            <a href="#features"    className={styles.navLink}>Features</a>
            <a href="#how-it-works" className={styles.navLink}>How It Works</a>
            <a href="#download"    className={styles.navLink}>Pricing</a>
            <a href={playUrl}      className={styles.navCta}>Download Free</a>
          </div>

          <button
            type="button"
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span /><span /><span />
          </button>
        </nav>

        <nav
          id="mobile-nav"
          className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
          aria-hidden={!menuOpen}
          aria-label="Mobile navigation"
        >
          <a href="#features"     onClick={close}>Features</a>
          <a href="#how-it-works" onClick={close}>How It Works</a>
          <a href="#download"     onClick={close}>Pricing</a>
          <a href={playUrl} className={styles.navCta} onClick={close}>Download Free</a>
        </nav>
      </header>

      {/* Page body — uses div[role="main"] to bypass globals.css `main { display:flex }` */}
      <div className={styles.content} role="main">

        {/* ═══ SECTION 1 — HERO ══════════════════════════════════ */}
        <section aria-labelledby="hero-title" className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true">
            <div className={styles.heroBgBlob1} />
            <div className={styles.heroBgBlob2} />
          </div>

          <div className={styles.heroInner}>
            <Reveal>
              <div className={styles.heroText}>
                <span className={styles.heroBadge}>🌸 Baby Tracker & Diary App</span>

                {/* THE ONE H1 — contains primary keyword */}
                <h1 id="hero-title">
                  MamaNote:{" "}
                  <span className={styles.heroH1Accent}>Baby Tracker & Diary</span>{" "}
                  — Breastfeeding, Sleep Log & Every Precious Moment.
                </h1>

                <p className={styles.heroSub}>
                  The calm, beautiful <strong>baby tracker app</strong> built for new moms.
                  Log <strong>breastfeeding sessions</strong>, <strong>sleep logs</strong>,
                  diaper changes, and baby diary entries — then watch your little one grow,
                  all from one peaceful place.
                </p>

                <div className={styles.ctaGroup}>
                  <a href={playUrl} className={styles.btnPrimary}
                    aria-label="Download MamaNote on Google Play Store">
                    <PlayTriangle />
                    Download on Play Store
                  </a>
                  <a href="#features" className={styles.btnGhost}>
                    See Features ↓
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className={styles.heroPhoneWrap}>
                <div className={styles.heroPhoneGlow} aria-hidden="true" />
                <Image
                  src={p1 as StaticImageData}
                  alt="MamaNote baby tracker & diary app home screen — daily activity overview with breastfeeding and sleep log"
                  className={styles.heroPhone}
                  priority
                  sizes="(max-width: 640px) 80vw, (max-width: 1000px) 40vw, 340px"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ STATS BAND ════════════════════════════════════════ */}
        <div className={styles.stats} role="region" aria-label="App statistics">
          <Reveal>
            <div className={styles.statsInner}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>50K+</span>
                <span className={styles.statLabel}>Happy Moms</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2M+</span>
                <span className={styles.statLabel}>Moments Logged</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.9 ★</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ═══ SECTION 2 — CORE FEATURES ════════════════════════ */}
        <section id="features" aria-labelledby="features-title" className={styles.features}>
          <div className={styles.featuresInner}>
            <Reveal>
              <span className={styles.sectionEyebrow}>Core Features</span>
              <h2 id="features-title">
                One App for Everything — Breastfeeding, Sleep, Diary & Growth.
              </h2>
            </Reveal>

            <div className={styles.featuresGrid}>
              {FEATURES.map(({ icon, bg, title, desc }, i) => (
                <Reveal key={title} delay={i * 85}>
                  <article className={`${styles.featureCard} ${bg}`}>
                    <div className={styles.featureIconWrap} aria-hidden="true">{icon}</div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3 — SHOWCASE A: Daily Tracking (2 phones) ═ */}
        <section
          id="how-it-works"
          aria-labelledby="showcase-a-title"
          className={`${styles.showcase} ${styles.showcaseLavender}`}
        >
          <div className={styles.showcaseInner}>
            <Reveal>
              <div className={styles.showcaseText}>
                <span className={styles.sectionEyebrowLavender}>Breastfeeding & Sleep Log</span>
                <h2 id="showcase-a-title">Every Feed. Every Nap. Logged in Seconds.</h2>
                <p>
                  MamaNote is your <strong>breastfeeding log</strong> and{" "}
                  <strong>sleep log</strong> in one — no complex forms,
                  just a calm tap and it&apos;s saved. Track left/right nursing side,
                  bottle amounts, pumping sessions, and every nap cycle throughout the day.
                </p>
                <ul className={styles.featureList} aria-label="Breastfeeding and sleep log features">
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotPurple}`} aria-hidden="true">✓</span>
                    Breastfeeding log with left/right side timers and session history
                  </li>
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotPurple}`} aria-hidden="true">✓</span>
                    Sleep log with nap start/end, night sleep, and daily totals
                  </li>
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotPurple}`} aria-hidden="true">✓</span>
                    Bottle, pumping, medicine, and nutrition logs — all in one place
                  </li>
                </ul>
              </div>
            </Reveal>

            <div className={styles.dualPhoneWrap}>
              <Phone src={p2 as StaticImageData}
                alt="MamaNote breastfeeding log screen showing nursing session history and daily schedule"
                glow="glowPurple" delay={80} />
              <Phone src={p5 as StaticImageData}
                alt="MamaNote sleep log and daily statistics showing nap totals and feeding counts"
                glow="glowPurple" delay={180} />
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4 — SHOWCASE B: Milestones (reverse) ══════ */}
        <section
          aria-labelledby="showcase-b-title"
          className={`${styles.showcase} ${styles.showcasePink} ${styles.showcaseReverse}`}
        >
          <div className={styles.showcaseInner}>
            <Reveal>
              <div className={styles.showcaseText}>
                <span className={styles.sectionEyebrow}>Baby Diary</span>
                <h2 id="showcase-b-title">A Beautiful Baby Diary for Every Magical First.</h2>
                <p>
                  Beyond tracking, MamaNote is your <strong>baby diary</strong> — a warm,
                  private space to write notes, record milestones, and capture every precious
                  moment. First smile, first word, first steps — saved forever, just for you.
                </p>
                <ul className={styles.featureList} aria-label="Baby diary features">
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotPink}`} aria-hidden="true">✓</span>
                    Daily diary entries with photos, notes, and mood tags
                  </li>
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotPink}`} aria-hidden="true">✓</span>
                    Milestone timeline — first smile, first word, first steps
                  </li>
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotPink}`} aria-hidden="true">✓</span>
                    Share logs and diary entries with your partner or pediatrician
                  </li>
                </ul>
              </div>
            </Reveal>

            <Phone src={p3 as StaticImageData}
              alt="MamaNote baby diary screen showing milestone timeline and precious moment entries"
              glow="glowPink" delay={120} />
          </div>
        </section>

        {/* ═══ SECTION 5 — SHOWCASE C: Growth Charts ════════════ */}
        <section
          aria-labelledby="showcase-c-title"
          className={`${styles.showcase} ${styles.showcaseMint}`}
        >
          <div className={styles.showcaseInner}>
            <Reveal>
              <div className={styles.showcaseText}>
                <span className={styles.sectionEyebrowMint}>Insights & Growth</span>
                <h2 id="showcase-c-title">Understand Your Baby&apos;s Patterns at a Glance.</h2>
                <p>
                  MamaNote turns your daily logs into beautiful insights. See feeding trends,
                  sleep patterns, and growth data — and let the AI suggest a gentle daily
                  rhythm that works for your baby&apos;s unique schedule.
                </p>
                <ul className={styles.featureList} aria-label="Insights features">
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotMint}`} aria-hidden="true">✓</span>
                    Daily, weekly, and monthly statistics for sleep and feeding
                  </li>
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotMint}`} aria-hidden="true">✓</span>
                    AI maps your baby&apos;s week into a simple daily schedule
                  </li>
                  <li>
                    <span className={`${styles.checkDot} ${styles.checkDotMint}`} aria-hidden="true">✓</span>
                    Growth tracking with weight, height, and head circumference charts
                  </li>
                </ul>
              </div>
            </Reveal>

            <div className={styles.dualPhoneWrap}>
              <Phone src={p4 as StaticImageData}
                alt="MamaNote insights screen showing AI-generated daily rhythm for baby"
                glow="glowMint" delay={80} />
              <Phone src={p6 as StaticImageData}
                alt="MamaNote growth and statistics screen with weekly feeding and sleep summaries"
                glow="glowMint" delay={180} />
            </div>
          </div>
        </section>

        {/* ═══ SECTION 6 — DOWNLOAD CTA ══════════════════════════ */}
        <section id="download" aria-labelledby="download-title" className={styles.download}>
          <div className={styles.downloadInner}>
            <Reveal>
              <div className={styles.downloadText}>
                <span className={styles.sectionEyebrow}>Get the App — It&apos;s Free</span>
                <h2 id="download-title">Download MamaNote — Baby Tracker & Diary.</h2>
                <p>
                  Join thousands of moms who have already found their calm. Your{" "}
                  <strong>breastfeeding log</strong>, <strong>sleep log</strong>, baby diary,
                  and growth insights — all beautifully organised in one free app.
                </p>

                <a href={playUrl} className={styles.playBadge}
                  aria-label="Get MamaNote Baby Tracker & Diary on Google Play">
                  <div className={styles.playBadgeIconWrap} aria-hidden="true">
                    <svg viewBox="0 0 34 34" fill="none" width="34" height="34">
                      <path d="M7 3.5 27.5 17 7 30.5V3.5Z" fill="white" opacity="0.9"/>
                      <path d="M7 3.5l12.5 13.5L7 30.5" fill="url(#dl_g1)"/>
                      <defs>
                        <linearGradient id="dl_g1" x1="7" y1="3.5" x2="7" y2="30.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#a8e6cf"/>
                          <stop offset="1" stopColor="#ffd6e7"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.playBadgeText}>
                    <span className={styles.playBadgeSmall}>GET IT ON</span>
                    <span className={styles.playBadgeLarge}>Google Play</span>
                  </div>
                </a>
              </div>
            </Reveal>

            <Phone src={p1 as StaticImageData}
              alt="MamaNote baby tracker & diary app — home screen on Android showing breastfeeding log and sleep log"
              glow="glowPink" delay={120} />
          </div>
        </section>

      </div>{/* end role="main" */}

      {/* ═══ FOOTER ═══════════════════════════════════════════════ */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/" className={styles.footerBrand} aria-label="MamaNote home">
            <div className={styles.footerLogoWrap}>
              <Image src={logo as StaticImageData} alt="" aria-hidden="true"
                className={styles.footerLogoImg} />
            </div>
            <span className={styles.footerBrandName}>MamaNote</span>
          </Link>

          <nav className={styles.footerLinks} aria-label="Legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </nav>

          <p className={styles.footerCopy}>© 2024 MamaNote. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
