"use client";

import type { ReactNode } from "react";
import { WaitlistModal } from "./WaitlistModal";
import { WaitlistProvider } from "./WaitlistContext";

export function WaitlistShell({ children }: { children: ReactNode }) {
  return (
    <WaitlistProvider>
      {children}
      <WaitlistModal />
    </WaitlistProvider>
  );
}
