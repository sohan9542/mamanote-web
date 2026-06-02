import { cn } from "@/lib/cn";

export const h1Class =
  "font-[family-name:var(--font-jakarta),system-ui,sans-serif] !text-[clamp(2.4rem,5.5vw,4rem)] max-[380px]:!text-[2rem] !font-extrabold !leading-[1.08] tracking-[-0.03em] text-[#1c1428] !mb-5";
export const h2Class =
  "font-[family-name:var(--font-jakarta),system-ui,sans-serif] text-[clamp(1.65rem,3.5vw,2.5rem)] max-[380px]:text-[1.55rem] font-bold leading-[1.18] tracking-[-0.02em] text-[#1c1428] mb-3.5";
export const h3Class =
  "font-[family-name:var(--font-jakarta),system-ui,sans-serif] text-[1.075rem] font-bold text-[#2a1e40] mt-3.5 mb-2";
export const bodyP = "text-[1.025rem] leading-[1.75] text-[#5c4f7a] m-0";

const eyebrowBase =
  "inline-block text-[0.73rem] font-bold tracking-[0.12em] uppercase rounded-full px-[13px] py-[5px] mb-3";
export const eyebrowPink = cn(eyebrowBase, "text-[#cc3d7a] bg-[#ffeef5]");
export const eyebrowMint = cn(eyebrowBase, "text-[#2a7a50] bg-[#e4f8ee]");
export const eyebrowLavender = cn(eyebrowBase, "text-[#5b3cbf] bg-[#eee9ff]");

export const inner = "max-w-[1160px] mx-auto px-7";
export const showcaseGrid =
  "max-w-[1160px] mx-auto px-7 grid grid-cols-1 min-[1061px]:grid-cols-2 items-center gap-8 min-[1061px]:gap-12";

const cardBase =
  "rounded-[22px] border-[1.5px] p-6 px-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(28_20_40/9%)]";
export const CARD = {
  lavender: cn(cardBase, "bg-[#f0eeff] border-[#ddd5ff]"),
  peach: cn(cardBase, "bg-[#fff4e8] border-[#ffe4c8]"),
  pink: cn(cardBase, "bg-[#ffe8ef] border-[#ffd0df]"),
  mint: cn(cardBase, "bg-[#e8fff4] border-[#c8ffe0]"),
  blue: cn(cardBase, "bg-[#e8f4ff] border-[#c8e0ff]"),
  yellow: cn(cardBase, "bg-[#fffde8] border-[#fff0c0]"),
} as const;

const checkBase =
  "shrink-0 inline-flex items-center justify-center w-[22px] h-[22px] rounded-full text-[0.62rem] font-extrabold mt-0.5";
export const checkPurple = cn(checkBase, "bg-[#ddd5ff] text-[#4b2fc0]");
export const checkPink = cn(checkBase, "bg-[#ffd0e0] text-[#be1d5a]");
export const checkMint = cn(checkBase, "bg-[#c8f5dc] text-[#1a7840]");
export const checkText =
  "flex-1 min-w-0 text-[0.9375rem] text-[#4a3c68] leading-[1.7] [&_strong]:text-[#2a1e40] [&_strong]:font-bold";

export const glowMap = {
  glowPink: "bg-[radial-gradient(circle,rgb(255_107_157/20%)_0%,transparent_65%)]",
  glowPurple: "bg-[radial-gradient(circle,rgb(155_122_234/18%)_0%,transparent_65%)]",
  glowMint: "bg-[radial-gradient(circle,rgb(72_199_142/14%)_0%,transparent_65%)]",
} as const;
export type GlowKey = keyof typeof glowMap;

export const btnPrimary =
  "inline-flex items-center gap-2.5 px-[26px] py-[15px] text-[0.9375rem] font-bold !text-white whitespace-nowrap rounded-full no-underline bg-gradient-to-br from-[#ff6b9d] to-[#d94f82] shadow-[0_10px_30px_rgb(255_107_157/38%)] transition-all duration-200 hover:-translate-y-0.5 hover:!text-white hover:shadow-[0_16px_40px_rgb(255_107_157/48%)]";
export const btnGhost =
  "inline-flex items-center gap-1.5 px-6 py-[15px] text-[0.9375rem] font-semibold text-[#5c4f7a] whitespace-nowrap rounded-full no-underline border-[1.5px] border-[#d8d0f0] bg-transparent transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5f0ff] hover:border-[#b8a8e8]";
export const navCta =
  "ml-2 px-5 py-2.5 text-[0.9375rem] font-semibold !text-white whitespace-nowrap rounded-full no-underline bg-gradient-to-br from-[#ff6b9d] to-[#d94f82] shadow-[0_6px_20px_rgb(255_107_157/35%)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_10px_26px_rgb(255_107_157/45%)]";
