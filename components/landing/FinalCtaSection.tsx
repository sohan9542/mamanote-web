import { DownloadAppButton } from "./waitlist/DownloadAppButton";
import { PlayIcon } from "./ui/PlayIcon";
import { Reveal } from "./ui/Reveal";

type FinalCtaSectionProps = {
  playUrl: string;
};

export function FinalCtaSection({ playUrl }: FinalCtaSectionProps) {
  return (
    <section
      aria-labelledby="final-h2"
      className="relative py-24 text-center overflow-hidden bg-gradient-to-br from-[#ff6b9d] via-[#d94f82] to-[#9b7aea]"
    >
      <div
        className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-4/5 h-4/5 rounded-full bg-[radial-gradient(circle,rgb(255_255_255/12%)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-[680px] mx-auto px-7 relative z-[1]">
        <Reveal>
          <h2 id="final-h2" className="!text-white !text-[clamp(1.75rem,4vw,2.75rem)] font-bold mb-4">
            Download the Baby Tracker &amp; Diary for Breastfeeding &amp; Sleep
          </h2>
          <p className="!text-white/80 !text-[1.05rem] !mb-3">
            Free baby tracker &amp; diary app — your first 7 days include full Plus access.
          </p>
          <p className="!text-white/65 !text-sm !mb-8">No credit card. No commitments. Cancel any time.</p>
          <DownloadAppButton
            playUrl={playUrl}
            variant="final"
            source="final-cta"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-[#d94f82] bg-white rounded-full no-underline shadow-[0_12px_36px_rgb(28_20_40/20%)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgb(28_20_40/26%)]"
            aria-label="Get notified when MamaNote launches"
          >
            <PlayIcon />
            Get the app — notify me
          </DownloadAppButton>
        </Reveal>
      </div>
    </section>
  );
}
