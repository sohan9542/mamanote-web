"use client";

import { DownloadAppButton } from "@/components/landing/waitlist/DownloadAppButton";
import { getPlayStoreUrl } from "@/components/landing/lib/play-store-url";

export function SupportDownloadButton() {
  const playUrl = getPlayStoreUrl();

  return (
    <DownloadAppButton
      playUrl={playUrl}
      variant="primary"
      source="support"
      aria-label="Get notified when MamaNote launches"
    >
      Get the app — notify me
    </DownloadAppButton>
  );
}
