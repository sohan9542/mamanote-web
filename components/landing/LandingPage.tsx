"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import s from "./LandingPage.module.css";

import logo from "../../assets/logo.png";
import p1   from "../../assets/p1.png";
import p2   from "../../assets/p2.png";
import p3   from "../../assets/p3.png";
import p4   from "../../assets/p4.png";
import p5   from "../../assets/p5.png";
import p6   from "../../assets/p6.png";

/* ─── Scroll-reveal ──────────────────────────────────────────── */
function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}
      className={`${s.reveal} ${on ? s.revealVisible : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

/* ─── Play icon ──────────────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={s.playIconSvg} fill="currentColor">
      <path d="M4 2.8a1 1 0 0 1 1.52-.86l13 8a1 1 0 0 1 0 1.72l-13 8A1 1 0 0 1 4 18.6V2.8z" />
    </svg>
  );
}

/* ─── Phone frame ────────────────────────────────────────────── */
function Phone({ src, alt, glow = "glowPink", delay = 0 }: {
  src: StaticImageData; alt: string;
  glow?: "glowPink" | "glowPurple" | "glowMint"; delay?: number;
}) {
  return (
    <Reveal delay={delay} className={s.phoneFrame}>
      <div className={`${s.phoneGlow} ${s[glow]}`} aria-hidden="true" />
      <Image src={src} alt={alt} className={s.phoneImg}
        sizes="(max-width: 640px) 80vw, (max-width: 1060px) 44vw, 300px" />
    </Reveal>
  );
}

/* ─── FAQ accordion ──────────────────────────────────────────── */
function FaqItem({ q, a, open, onToggle }: {
  q: string; a: string; open: boolean; onToggle: () => void;
}) {
  return (
    <div className={`${s.faqItem} ${open ? s.faqItemOpen : ""}`}>
      <button type="button" className={s.faqQuestion} onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className={`${s.faqChevron} ${open ? s.faqChevronOpen : ""}`} aria-hidden="true">▾</span>
      </button>
      <div className={`${s.faqAnswer} ${open ? s.faqAnswerOpen : ""}`} aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

/* ─── Feature cards ──────────────────────────────────────────── */
const FEATURES = [
  { icon: "🍼", bg: s.cardLavender, title: "Feeding Log",
    desc: "Breastfeeding with left/right timers, bottle amounts, pumping sessions, and nutrition — all in one tap." },
  { icon: "😴", bg: s.cardPeach, title: "Sleep Tracker",
    desc: "Log every nap and night sleep. See daily totals and weekly sleep patterns at a glance." },
  { icon: "🧷", bg: s.cardPink, title: "Diaper & Health",
    desc: "Quick diaper logs, temperature tracking, and doctor visit notes. Spot what's normal, fast." },
  { icon: "📤", bg: s.cardMint, title: "Shared Access",
    desc: "Share your baby's full activity log with anyone — partner, doctor, daycare — via a simple QR code." },
  { icon: "🌿", bg: s.cardBlue, title: "Activities & Play",
    desc: "Track bath time, tummy time, playtime, and daily diary notes. Build your baby's complete picture." },
  { icon: "📈", bg: s.cardYellow, title: "Growth & Milestones",
    desc: "Follow weight, height, and developmental milestones. Capture every precious first in a warm timeline." },
] as const;

/* ─── Pricing ────────────────────────────────────────────────── */
const PRICING = [
  {
    tier: "Monthly", price: "5.99", period: "/mo",
    monthlyEquiv: null, save: null,
    features: ["Unlimited activity logs", "Multiple baby profiles", "Family sharing", "Full insights & weekly charts", "AI daily routine"],
    cta: "Start 7-Day Free Trial", ctaClass: s.pricingCtaOutline,
    trialNote: "No credit card required",
    cardClass: s.pricingCard, tierClass: "", badge: null,
  },
  {
    tier: "Annual", price: "39.99", period: "/yr",
    monthlyEquiv: "~$3.33 / month", save: "Save 44%",
    features: ["Everything in Monthly Plus", "Best per-month value", "All future Plus updates", "AI daily routine", "Priority support"],
    cta: "Start 7-Day Free Trial", ctaClass: s.pricingCtaPrimary,
    trialNote: "No credit card required",
    cardClass: s.pricingCardBest, tierClass: s.pricingTierBest, badge: "⭐ Best Value",
  },
  {
    tier: "Lifetime", price: "59.99", period: " once",
    monthlyEquiv: null, save: null,
    features: ["Everything in Plus", "Pay once, use forever", "All future Plus updates", "Multiple baby profiles", "AI daily routine"],
    cta: "Get Lifetime Access", ctaClass: s.pricingCtaLifetime,
    trialNote: "One-time payment, no renewals",
    cardClass: s.pricingCard, tierClass: "", badge: null,
  },
] as const;

/* ─── FAQ ────────────────────────────────────────────────────── */
const FAQS = [
  { q: "Is MamaNote free to download?",
    a: "Yes. MamaNote is free to download and use. Free users can view all past logs and create up to 3 new logs per day, forever. A 7-day Plus trial is included — no credit card needed." },
  { q: "What's included in the 7-day Plus trial?",
    a: "You get full access to every Plus feature: unlimited logs, multiple baby profiles, family sharing, full insights dashboard, weekly charts, and AI daily routine generation. No restrictions." },
  { q: "Do I need a credit card to start?",
    a: "No. The 7-day Plus trial requires no credit card. Just download and tap 'Start Trial' in settings. You'll only be asked for payment if you choose to subscribe after." },
  { q: "What happens when the trial ends?",
    a: "Your account stays active on the free plan. You keep all your logs and history. You'll just be limited to 3 new logs per day going forward." },
  { q: "Can I share logs with my partner, doctor, or daycare?",
    a: "Yes. With Shared Access, you can share your baby's full activity log with anyone — a family member, pediatrician, daycare provider, or nanny — with a single QR code scan. No app needed on their side." },
  { q: "Is my baby's data private?",
    a: "Absolutely. We use a secure backend with row-level access controls. Medicine reminders are stored locally on your device and never leave it. We do not sell user data — ever." },
  { q: "Which plan offers the best value?",
    a: "The Annual plan at $39.99/year (~$3.33/mo) saves 44% vs monthly. Lifetime at $59.99 pays for itself in under 18 months and includes all future updates." },
  { q: "What activities can I track?",
    a: "MamaNote supports 13+ activity types: breastfeeding, bottle, nutrition, pumping, sleep, diapers, medicine, temperature, bath, tummy time, playtime, growth measurements, doctor visits, and diary notes." },
] as const;

/* ─── Main ───────────────────────────────────────────────────── */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const close = () => setMenuOpen(false);
  const playStoreUrlFromEnv = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim();
  const playUrl =
    playStoreUrlFromEnv && /^https?:\/\//.test(playStoreUrlFromEnv)
      ? playStoreUrlFromEnv
      : "https://play.google.com/store/apps/details?id=com.mamanote.app";

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={s.page}>
      {showIntro && (
        <div className={s.introOverlay} aria-hidden="true">
          <Image
            src={logo as StaticImageData}
            alt=""
            className={s.introLogo}
            priority
            sizes="160px"
          />
        </div>
      )}

      {/* ═══ HEADER ════════════════════════════════════════════ */}
      <header className={s.header}>
        <nav className={s.nav} aria-label="Primary navigation">
          <Link href="/" className={s.brand} aria-label="MamaNote home">
            <div className={s.logoWrap}>
              <Image src={logo as StaticImageData} alt="" aria-hidden="true"
                className={s.logoImg} priority />
            </div>
            <span className={s.brandName}>
              MamaNote
              <span className={s.brandTag}>Baby Tracker & Diary</span>
            </span>
          </Link>

          <div className={s.desktopNav}>
            <a href="#features"  className={s.navLink}>Features</a>
            <a href="#pricing"   className={s.navLink}>Pricing</a>
            <a href="#faq"       className={s.navLink}>FAQ</a>
            <a href={playUrl}    className={s.navCta}>Try Free </a>
          </div>

          <button type="button"
            className={`${s.hamburger} ${menuOpen ? s.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen} aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}>
            <span /><span /><span />
          </button>
        </nav>

        <nav id="mobile-nav"
          className={`${s.mobileNav} ${menuOpen ? s.mobileNavOpen : ""}`}
          aria-hidden={!menuOpen} aria-label="Mobile navigation">
          <a href="#features" onClick={close}>Features</a>
          <a href="#pricing"  onClick={close}>Pricing</a>
          <a href="#faq"      onClick={close}>FAQ</a>
          <a href={playUrl} className={s.navCta} onClick={close}>Try Free</a>
        </nav>
      </header>

      <div className={s.content} role="main">

        {/* ═══ HERO ══════════════════════════════════════════════ */}
        <section aria-labelledby="hero-h1" className={s.hero}>
          <div className={s.heroBg} aria-hidden="true">
            <div className={`${s.blob} ${s.blob1}`} />
            <div className={`${s.blob} ${s.blob2}`} />
          </div>

          <div className={s.heroInner}>
            <Reveal>
              <div className={s.heroText}>
                <span className={s.heroBadge}>Get MamaNote Free</span>

                <h1 id="hero-h1">
                  The{" "}
                  <span className={s.heroAccent}>Simple Baby Tracker App</span>{" "}
                  That Keeps You Calm and Connected.
                </h1>

                <p className={s.heroSub}>
                  MamaNote is a gentle <strong>baby tracker &amp; diary</strong> for new parents.
                  Log feedings, sleep, diapers, medicine, and precious milestones —
                  then watch meaningful patterns emerge, calmly.
                </p>

                <p className={s.heroTrialNote}>
                  Free forever · 7-day Plus trial included · No credit card needed
                </p>

                <div className={s.ctaGroup}>
                  <a href={playUrl} className={s.btnPrimary}
                    aria-label="Download MamaNote baby tracker free on Google Play">
                    <PlayIcon />
                    Download Free on Google Play
                  </a>
                  <a href="#features" className={s.btnGhost}>See Features ↓</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className={s.heroPhoneWrap}>
                {/* <div className={s.heroPhoneGlow} aria-hidden="true" /> */}
                <Image src={p1 as StaticImageData} className={s.heroPhone} priority
                  alt="MamaNote baby tracker app home screen — daily activity overview"
                  sizes="(max-width: 640px) 80vw, (max-width: 1060px) 42vw, 320px" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ FEATURES GRID ═════════════════════════════════════ */}
        <section id="features" aria-labelledby="features-h2" className={s.features}>
          <div className={s.inner}>
            <Reveal>
              <span className={`${s.eyebrow} ${s.eyebrowLavender}`}>13+ Tracking Activities</span>
              <h2 id="features-h2">One App for Every Part of Your Baby&apos;s Day.</h2>
            </Reveal>

            <div className={s.featuresGrid}>
              {FEATURES.map(({ icon, bg, title, desc }, i) => (
                <Reveal key={title} delay={i * 75}>
                  <article className={`${s.featureCard} ${bg}`}>
                    <div className={s.featureIconWrap} aria-hidden="true">{icon}</div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SHOWCASE 1 — Shared Access (p2) ══════════════════
             Layout: text LEFT  |  phone RIGHT                  */}
        <section aria-labelledby="s1-h2"
          className={`${s.showcase} ${s.showcaseLavender}`}>
          <div className={s.showcaseInner}>
            <Reveal>
              <div className={s.showcaseText}>
                <span className={`${s.eyebrow} ${s.eyebrowLavender}`}>Shared Access</span>
                <h2 id="s1-h2">Share Your Baby&apos;s Activity with Anyone — in One Click.</h2>
                <p>
                  Keeping everyone in the loop has never been easier. With MamaNote&apos;s
                  <strong> Shared Access</strong>, you can share your baby&apos;s complete
                  activity log with just a QR code scan — no app download required
                  on their end.
                </p>
                <ul className={s.checkList} aria-label="Shared access benefits">
                  <li>
                    <span className={`${s.check} ${s.checkPurple}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Share with your <strong>partner</strong> so they always see the latest logs in real time</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPurple}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Show your <strong>pediatrician</strong> the full feeding and sleep history at every appointment</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPurple}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Let <strong>daycare staff</strong>, nannies, or grandparents stay informed without installing anything</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPurple}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Just scan a QR code — view-only access, no sign-up needed</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Phone src={p2 as StaticImageData}
              alt="MamaNote shared access screen — sharing baby activity log via QR code"
              glow="glowPurple" delay={120} />
          </div>
        </section>

        {/* ═══ SHOWCASE 2 — Daily Routine (p3) ══════════════════
             Layout: phone LEFT  |  text RIGHT                  */}
        <section aria-labelledby="s2-h2"
          className={`${s.showcase} ${s.showcasePink} ${s.showcaseReverse}`}>
          <div className={s.showcaseInner}>
            <Reveal>
              <div className={s.showcaseText}>
                <span className={`${s.eyebrow} ${s.eyebrowPink}`}>Daily Routine</span>
                <h2 id="s2-h2">Your Baby&apos;s Personalized Daily Schedule — Built Automatically.</h2>
                <p>
                  Stop guessing when to feed or put your baby down for a nap.
                  MamaNote watches your baby&apos;s real patterns and <strong>creates a
                  personalized daily routine</strong> that actually works for your family.
                </p>
                <ul className={s.checkList} aria-label="Daily routine benefits">
                  <li>
                    <span className={`${s.check} ${s.checkPink}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>AI analyzes your baby's recent logs and maps them into a clear daily schedule</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPink}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Suggests <strong>optimal nap windows</strong> and feed times based on actual patterns</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPink}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Routine <strong>updates automatically</strong> as your baby grows and their needs change</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPink}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>One-tap generation — no manual planning or guesswork needed</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Phone src={p3 as StaticImageData}
              alt="MamaNote daily routine screen showing personalized baby schedule built from activity logs"
              glow="glowPink" delay={120} />
          </div>
        </section>

        {/* ═══ SHOWCASE 3 — Sleep Schedule (p4) ═════════════════
             Layout: text LEFT  |  phone RIGHT                  */}
        <section aria-labelledby="s3-h2"
          className={`${s.showcase} ${s.showcaseMint}`}>
          <div className={s.showcaseInner}>
            <Reveal>
              <div className={s.showcaseText}>
                <span className={`${s.eyebrow} ${s.eyebrowMint}`}>Sleep Tracking</span>
                <h2 id="s3-h2">Control Your Baby&apos;s Sleep and Build a Gentle Sleep Schedule.</h2>
                <p>
                  Sleep is everything — for your baby and for you. MamaNote logs every
                  nap and night sleep, shows you daily totals, and helps you build a
                  <strong> sleep schedule</strong> around your baby&apos;s natural rhythm.
                </p>
                <ul className={s.checkList} aria-label="Sleep tracking benefits">
                  <li>
                    <span className={`${s.check} ${s.checkMint}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Log nap start and end times — see <strong>daily and weekly sleep totals</strong> at a glance</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkMint}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Understand <strong>wake windows</strong> and ideal sleep timing for your baby&apos;s age</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkMint}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Build a gentle, flexible <strong>sleep schedule</strong> based on your baby&apos;s real patterns</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkMint}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Share the sleep log with your partner — no more morning briefings</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Phone src={p4 as StaticImageData}
              alt="MamaNote sleep tracking screen showing nap times, night sleep, and daily sleep schedule"
              glow="glowMint" delay={120} />
          </div>
        </section>

        {/* ═══ SHOWCASE 4 — Growth Milestones (p5) ══════════════
             Layout: phone LEFT  |  text RIGHT                  */}
        <section aria-labelledby="s4-h2"
          className={`${s.showcase} ${s.showcaseLavender} ${s.showcaseReverse}`}>
          <div className={s.showcaseInner}>
            <Reveal>
              <div className={s.showcaseText}>
                <span className={`${s.eyebrow} ${s.eyebrowLavender}`}>Growth Milestones</span>
                <h2 id="s4-h2">Watch Every Skill Your Baby Learns — Month by Month.</h2>
                <p>
                  From tummy time to first steps, MamaNote tracks the key developmental
                  milestones your baby reaches — so you always have a beautiful, private
                  record of how much they&apos;ve grown.
                </p>
                <ul className={s.checkList} aria-label="Growth milestone benefits">
                  <li>
                    <span className={`${s.check} ${s.checkPurple}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Monitor the <strong>basic skills</strong> and developmental milestones your baby is learning each month</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPurple}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Track <strong>weight, height, and head circumference</strong> with visual growth charts over time</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPurple}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Log first smile, first word, first steps — saved forever in a warm, private timeline</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPurple}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Share growth reports with your <strong>pediatrician</strong> at checkups, instantly</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Phone src={p5 as StaticImageData}
              alt="MamaNote growth milestones screen showing baby developmental skills and weight chart"
              glow="glowPurple" delay={120} />
          </div>
        </section>

        {/* ═══ SHOWCASE 5 — Medicine Reminders & Widgets (p6) ═══
             Layout: text LEFT  |  phone RIGHT                  */}
        <section aria-labelledby="s5-h2"
          className={`${s.showcase} ${s.showcasePink}`}>
          <div className={s.showcaseInner}>
            <Reveal>
              <div className={s.showcaseText}>
                <span className={`${s.eyebrow} ${s.eyebrowPink}`}>Medicine & Widgets</span>
                <h2 id="s5-h2">Never Miss a Medicine Dose — with Widgets and Private Reminders.</h2>
                <p>
                  Add a home screen widget for instant one-tap logging, and set
                  <strong> custom medicine reminders</strong> that stay completely private
                  on your device — so nothing important ever slips through the cracks.
                </p>
                <ul className={s.checkList} aria-label="Medicine and widget benefits">
                  <li>
                    <span className={`${s.check} ${s.checkPink}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}><strong>Home screen widgets</strong> for instant one-tap logging without opening the app</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPink}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Custom <strong>medicine reminders</strong> — stored privately on your device, never synced</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPink}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>No medicine data ever leaves your phone — completely private and secure</span>
                  </li>
                  <li>
                    <span className={`${s.check} ${s.checkPink}`} aria-hidden="true">✓</span>
                    <span className={s.checkText}>Works <strong>offline</strong> — log activities and get reminders without an internet connection</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Phone src={p6 as StaticImageData}
              alt="MamaNote medicine reminder and home screen widget setup"
              glow="glowPink" delay={120} />
          </div>
        </section>

        {/* ═══ PRICING ════════════════════════════════════════════ */}
        <section id="pricing" aria-labelledby="pricing-h2" className={s.pricing}>
          <div className={s.inner}>
            <Reveal>
              <span className={`${s.eyebrow} ${s.eyebrowPink}`}>Simple Pricing</span>
              <h2 id="pricing-h2" style={{ textAlign: "center" }}>Start Free. Upgrade Anytime.</h2>
              <p className={s.pricingNote}>All Plus plans include a 7-day free trial · No credit card required</p>
            </Reveal>

            <div className={s.pricingGrid}>
              {PRICING.map((plan, i) => (
                <Reveal key={plan.tier} delay={i * 100}>
                  <div className={plan.cardClass}>
                    {plan.badge && <div className={s.pricingBadge}>{plan.badge}</div>}

                    <div className={`${s.pricingTier} ${plan.tierClass}`}>{plan.tier}</div>

                    <div className={s.pricingAmount}>
                      <span className={s.pricingCurrency}>$</span>
                      <span className={s.pricingNumber}>{plan.price}</span>
                      <span className={s.pricingPeriod}>{plan.period}</span>
                    </div>

                    {plan.monthlyEquiv && <div className={s.pricingMonthly}>{plan.monthlyEquiv}</div>}
                    {plan.save && <span className={s.pricingSave}>{plan.save}</span>}
                    {!plan.save && !plan.monthlyEquiv && <div style={{ height: "24px" }} />}

                    <div className={s.pricingDivider} />

                    <ul className={s.pricingFeatures}>
                      {plan.features.map(f => (
                        <li key={f}>
                          <span className={s.pricingCheck} aria-hidden="true">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a href={playUrl} className={`${s.pricingCta} ${plan.ctaClass}`}
                      aria-label={`${plan.cta} — MamaNote ${plan.tier}`}>
                      {plan.cta}
                    </a>
                    <p className={s.pricingTrialNote}>{plan.trialNote}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ════════════════════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-h2" className={s.faqSection}>
          <div className={s.inner}>
            <Reveal>
              <span className={`${s.eyebrow} ${s.eyebrowLavender}`}>Questions Answered</span>
              <h2 id="faq-h2">Everything New Parents Ask.</h2>
            </Reveal>

            <div className={s.faqList} role="list">
              {FAQS.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ══════════════════════════════════════════ */}
        <section aria-labelledby="final-h2" className={s.finalCta}>
          <div className={s.finalCtaInner}>
            <Reveal>
              <h2 id="final-h2">Ready to Find Your Calm?</h2>
              <p>Download MamaNote free. Your first 7 days include full Plus access.</p>
              <p className={s.finalTrialNote}>No credit card. No commitments. Cancel any time.</p>
              <a href={playUrl} className={s.btnFinalPrimary}
                aria-label="Download MamaNote free on Google Play">
                <PlayIcon />
                Download Free on Google Play
              </a>
            </Reveal>
          </div>
        </section>

      </div>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <Link href="/" className={s.footerBrand} aria-label="MamaNote home">
            <div className={s.footerLogoWrap}>
              <Image src={logo as StaticImageData} alt="" aria-hidden="true"
                className={s.footerLogoImg} />
            </div>
            <span className={s.footerBrandName}>MamaNote</span>
          </Link>

          <nav className={s.footerLinks} aria-label="Legal and support">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="mailto:support@mamanote.app">Support</a>
          </nav>

          <p className={s.footerCopy}>© 2024 MamaNote. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
