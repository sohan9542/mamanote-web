"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type WaitlistContextValue = {
  isOpen: boolean;
  source: string | undefined;
  openWaitlist: (source?: string) => void;
  closeWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();

  const openWaitlist = useCallback((nextSource?: string) => {
    setSource(nextSource);
    setIsOpen(true);
  }, []);

  const closeWaitlist = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, source, openWaitlist, closeWaitlist }),
    [isOpen, source, openWaitlist, closeWaitlist],
  );

  return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}

export function useWaitlist(): WaitlistContextValue {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }
  return ctx;
}
