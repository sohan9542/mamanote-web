import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import type { GlowKey } from "../styles";
import { checkMint, checkPink, checkPurple, eyebrowLavender, eyebrowMint, eyebrowPink } from "../styles";

export type ShowcaseItem = {
  headingId: string;
  sectionClass: string;
  eyebrow: string;
  eyebrowClass: string;
  title: string;
  description: ReactNode;
  checkLabel: string;
  checks: ReactNode[];
  checkClass: string;
  image: StaticImageData;
  alt: string;
  glow: GlowKey;
};

export const SHOWCASES: ShowcaseItem[] = [
  {
    headingId: "s1-h2",
    sectionClass: "py-[92px] bg-[#faf8ff]",
    eyebrow: "Shared Access",
    eyebrowClass: eyebrowLavender,
    title: "Share Your Baby's Activity with Anyone — in One Click.",
    description: (
      <>
        Keeping everyone in the loop has never been easier. With MamaNote&apos;s
        <strong> Shared Access</strong>, you can share your baby&apos;s complete activity log with just a QR code scan — no app
        download required on their end.
      </>
    ),
    checkLabel: "Shared access benefits",
    checks: [
      <>Share with your <strong>partner</strong> so they always see the latest logs in real time</>,
      <>Show your <strong>pediatrician</strong> the full feeding and sleep history at every appointment</>,
      <>Let <strong>daycare staff</strong>, nannies, or grandparents stay informed without installing anything</>,
      <>Just scan a QR code — view-only access, no sign-up needed</>,
    ],
    checkClass: checkPurple,
    image: p2,
    alt: "MamaNote shared access screen — sharing baby activity log via QR code",
    glow: "glowPurple",
  },
  {
    headingId: "s2-h2",
    sectionClass: "py-[92px] bg-[#fff8fb]",
    eyebrow: "Daily Routine",
    eyebrowClass: eyebrowPink,
    title: "Baby Diary & Daily Routine — Built from Your Breastfeeding & Sleep Logs",
    description: (
      <>
        Stop guessing when to feed or put your baby down for a nap. MamaNote watches your baby&apos;s real patterns and{" "}
        <strong>creates a personalized daily routine</strong> that actually works for your family.
      </>
    ),
    checkLabel: "Daily routine benefits",
    checks: [
      <>AI analyzes your baby&apos;s recent logs and maps them into a clear daily schedule</>,
      <>Suggests <strong>optimal nap windows</strong> and feed times based on actual patterns</>,
      <>Routine <strong>updates automatically</strong> as your baby grows and their needs change</>,
      <>One-tap generation — no manual planning or guesswork needed</>,
    ],
    checkClass: checkPink,
    image: p3,
    alt: "MamaNote daily routine screen showing personalized baby schedule",
    glow: "glowPink",
  },
  {
    headingId: "s3-h2",
    sectionClass: "py-[92px] bg-[#f8fffb]",
    eyebrow: "Sleep Tracking",
    eyebrowClass: eyebrowMint,
    title: "Baby Sleep Tracker — Log Naps & Build a Gentle Sleep Schedule",
    description: (
      <>
        Sleep is everything — for your baby and for you. MamaNote logs every nap and night sleep, shows you daily totals, and
        helps you build a <strong>sleep schedule</strong> around your baby&apos;s natural rhythm.
      </>
    ),
    checkLabel: "Sleep tracking benefits",
    checks: [
      <>Log nap start and end times — see <strong>daily and weekly sleep totals</strong> at a glance</>,
      <>Understand <strong>wake windows</strong> and ideal sleep timing for your baby&apos;s age</>,
      <>Build a gentle, flexible <strong>sleep schedule</strong> based on your baby&apos;s real patterns</>,
      <>Share the sleep log with your partner — no more morning briefings</>,
    ],
    checkClass: checkMint,
    image: p4,
    alt: "MamaNote sleep tracking screen",
    glow: "glowMint",
  },
  {
    headingId: "s4-h2",
    sectionClass: "py-[92px] bg-[#faf8ff]",
    eyebrow: "Growth Milestones",
    eyebrowClass: eyebrowLavender,
    title: "Watch Every Skill Your Baby Learns — Month by Month.",
    description: (
      <>
        From tummy time to first steps, MamaNote tracks the key developmental milestones your baby reaches — so you always have
        a beautiful, private record of how much they&apos;ve grown.
      </>
    ),
    checkLabel: "Growth milestone benefits",
    checks: [
      <>Monitor the <strong>basic skills</strong> and developmental milestones your baby is learning each month</>,
      <>Track <strong>weight, height, and head circumference</strong> with visual growth charts over time</>,
      <>Log first smile, first word, first steps — saved forever in a warm, private timeline</>,
      <>Share growth reports with your <strong>pediatrician</strong> at checkups, instantly</>,
    ],
    checkClass: checkPurple,
    image: p5,
    alt: "MamaNote growth milestones screen",
    glow: "glowPurple",
  },
  {
    headingId: "s5-h2",
    sectionClass: "py-[92px] bg-[#fff8fb]",
    eyebrow: "Medicine & Widgets",
    eyebrowClass: eyebrowPink,
    title: "Never Miss a Medicine Dose — with Widgets and Private Reminders.",
    description: (
      <>
        Add a home screen widget for instant one-tap logging, and set <strong>custom medicine reminders</strong> that stay
        completely private on your device — so nothing important ever slips through the cracks.
      </>
    ),
    checkLabel: "Medicine and widget benefits",
    checks: [
      <><strong>Home screen widgets</strong> for instant one-tap logging without opening the app</>,
      <>Custom <strong>medicine reminders</strong> — stored privately on your device, never synced</>,
      <>No medicine data ever leaves your phone — completely private and secure</>,
      <>Works <strong>offline</strong> — log activities and get reminders without an internet connection</>,
    ],
    checkClass: checkPink,
    image: p6,
    alt: "MamaNote medicine reminder and home screen widget setup",
    glow: "glowPink",
  },
];
