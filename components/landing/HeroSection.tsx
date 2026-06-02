import Image from "next/image";
import type { StaticImageData } from "next/image";
import p1 from "@/assets/p1.png";
import { cn } from "@/lib/cn";
import { btnGhost, btnPrimary, h1Class } from "./styles";
import { PlayIcon } from "./ui/PlayIcon";
import { Reveal } from "./ui/Reveal";

type HeroSectionProps = {
  playUrl: string;
};

export function HeroSection({ playUrl }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-h1"
      className="relative overflow-hidden py-5 lg:py-[76px] pb-[72px] bg-[#fffbf8] bg-[radial-gradient(ellipse_80%_70%_at_68%_60%,rgb(255_107_157/13%)_0%,transparent_55%),radial-gradient(ellipse_55%_55%_at_12%_28%,rgb(155_122_234/11%)_0%,transparent_50%)]"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-[120px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgb(255_107_157/16%)_0%,transparent_65%)]" />
        <div className="absolute -bottom-[100px] -left-20 w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgb(155_122_234/13%)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-[1160px] mx-auto px-7 grid grid-cols-1 min-[1061px]:grid-cols-[1.15fr_0.85fr] items-center gap-8 min-[1061px]:gap-[52px] relative">
        <Reveal>
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-1.5 w-fit bg-white border-[1.5px] border-[#f5c6d8] rounded-full px-4 py-1.5 text-[0.8125rem] font-semibold text-[#cc3d7a] mb-5 shadow-[0_2px_12px_rgb(255_107_157/14%)]">
              Free Baby Tracker &amp; Diary
            </span>

            <h1 id="hero-h1" className={h1Class}>
              The{" "}
              <span className="bg-gradient-to-br from-[#ff6b9d] to-[#9b7aea] bg-clip-text text-transparent">
                Baby Tracker &amp; Diary
              </span>{" "}
              for Breastfeeding, Sleep &amp; Calm Days
            </h1>

            <p className="!text-[1.1rem] !leading-[1.78] !text-[#5c4f7a] max-w-[52ch] mb-2.5 [&_strong]:text-[#2a1e40] [&_strong]:font-semibold">
              MamaNote is a gentle <strong>baby tracker and diary</strong> for new parents. Log{" "}
              <strong>breastfeeding</strong>, <strong>sleep</strong>, diapers, medicine, and milestones — then see patterns
              emerge, calmly.
            </p>

            <p className="!text-[0.8125rem] !text-[#a899c0] !mb-11 !leading-normal">
              Free forever · 7-day Plus trial included · No credit card needed
            </p>

            <div className="flex items-center flex-wrap gap-3 max-sm:flex-col max-sm:items-stretch">
              <a href={playUrl} className={cn(btnPrimary, "max-sm:justify-center")} aria-label="Download MamaNote baby tracker free on Google Play">
                <PlayIcon />
                Download Free on Google Play
              </a>
              <a href="#features" className={cn(btnGhost, "max-sm:justify-center")}>
                See Features ↓
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative flex justify-center max-lg:mx-auto max-lg:w-full max-lg:max-w-[300px]">
            <Image
              src={p1 as StaticImageData}
              className="relative z-[1] w-full max-w-[320px] h-auto block rounded-[16px] shadow-[0_4px_8px_rgb(28_20_40/8%),0_16px_40px_rgb(28_20_40/14%),0_40px_80px_rgb(28_20_40/14%)]"
              priority
              alt="MamaNote baby tracker app home screen — daily activity overview"
              sizes="(max-width: 640px) 80vw, (max-width: 1060px) 42vw, 320px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
