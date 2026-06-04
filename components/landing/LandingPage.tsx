"use client";

import { FaqSection } from "./FaqSection";
import { FeaturesSection } from "./FeaturesSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { HeroSection } from "./HeroSection";
import { IntroSplash } from "./IntroSplash";
import { LandingFooter } from "./LandingFooter";
import { LandingHeader } from "./LandingHeader";
import { PricingSection } from "./PricingSection";
import { ShowcaseSection } from "./ShowcaseSection";
import { SHOWCASES } from "./data/showcases";
import { getPlayStoreUrl } from "./lib/play-store-url";
import { WaitlistShell } from "./waitlist/WaitlistShell";

export default function LandingPage() {
  const playUrl = getPlayStoreUrl();

  return (
    <WaitlistShell>
    <div className="min-h-screen overflow-x-hidden bg-[#fffbf8] text-[#1c1428] font-[family-name:var(--font-jakarta),system-ui,sans-serif] antialiased">
      <IntroSplash />
      <LandingHeader playUrl={playUrl} />

      <div className="block" role="main">
        <HeroSection playUrl={playUrl} />
        <FeaturesSection />
        {SHOWCASES.map((showcase, i) => (
          <ShowcaseSection key={showcase.headingId} showcase={showcase} imageOnLeft={i % 2 === 1} />
        ))}
        <PricingSection playUrl={playUrl} />
        <FaqSection />
        <FinalCtaSection playUrl={playUrl} />
      </div>

      <LandingFooter />
    </div>
    </WaitlistShell>
  );
}
