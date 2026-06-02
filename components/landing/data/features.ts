import { CARD } from "../styles";

export const FEATURES = [
  { icon: "🍼", bg: CARD.lavender, title: "Breastfeeding Log", desc: "Breastfeeding with left/right timers, bottle amounts, pumping sessions, and nutrition — all in one tap." },
  { icon: "😴", bg: CARD.peach, title: "Baby Sleep Tracker", desc: "Log every nap and night sleep. See daily totals and weekly sleep patterns at a glance." },
  { icon: "🧷", bg: CARD.pink, title: "Diaper & Health", desc: "Quick diaper logs, temperature tracking, and doctor visit notes. Spot what's normal, fast." },
  { icon: "📤", bg: CARD.mint, title: "Shared Access", desc: "Share your baby's full activity log with anyone — partner, doctor, daycare — via a simple QR code." },
  { icon: "🌿", bg: CARD.blue, title: "Activities & Play", desc: "Track bath time, tummy time, playtime, and daily diary notes. Build your baby's complete picture." },
  { icon: "📈", bg: CARD.yellow, title: "Growth & Milestones", desc: "Follow weight, height, and developmental milestones. Capture every precious first in a warm timeline." },
] as const;
