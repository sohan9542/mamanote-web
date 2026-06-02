"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { LOGO_ALT } from "@/lib/landing-seo";

export function IntroSplash() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#ff6077] pointer-events-none [animation:introOverlayFade_1.5s_ease_forwards]"
      aria-hidden="true"
    >
      <Image
        src={logo as StaticImageData}
        alt={LOGO_ALT}
        className="w-[clamp(96px,18vw,160px)] h-auto [animation:introLogoZoom_1.5s_ease_forwards]"
        sizes="160px"
      />
    </div>
  );
}
