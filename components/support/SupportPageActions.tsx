"use client";

import { WaitlistShell } from "@/components/landing/waitlist/WaitlistShell";
import { btnGhost } from "@/components/landing/styles";
import { cn } from "@/lib/cn";
import { SupportDownloadButton } from "./SupportDownloadButton";

export function SupportPageActions() {
  return (
    <WaitlistShell>
      <div className="not-legal-prose mt-10 flex flex-wrap gap-3">
        <SupportDownloadButton />
        <a href="mailto:support@mamanoteapp.com" className={cn(btnGhost, "inline-flex")}>
          Email support
        </a>
      </div>
    </WaitlistShell>
  );
}
