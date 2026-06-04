"use client";

import { cn } from "@/lib/cn";
import { isAppDownloadLive } from "@/lib/is-app-download-live";
import { btnPrimary, navCta } from "../styles";
import { useWaitlist } from "./WaitlistContext";

export type DownloadAppVariant = "primary" | "nav" | "pricing" | "final" | "share" | "plain";

type DownloadAppButtonProps = {
  playUrl: string;
  variant?: DownloadAppVariant;
  className?: string;
  children: React.ReactNode;
  source?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

const variantClass: Record<DownloadAppVariant, string | undefined> = {
  primary: btnPrimary,
  nav: navCta,
  pricing: undefined,
  final: undefined,
  share: undefined,
  plain: undefined,
};

export function DownloadAppButton({
  playUrl,
  variant = "primary",
  className,
  children,
  source,
  "aria-label": ariaLabel,
  onClick,
}: DownloadAppButtonProps) {
  const { openWaitlist } = useWaitlist();
  const live = isAppDownloadLive();

  const mergedClass = cn(variantClass[variant], className);

  const handleClick = () => {
    onClick?.();
    if (!live) openWaitlist(source);
  };

  if (live) {
    return (
      <a
        href={playUrl}
        className={mergedClass}
        aria-label={ariaLabel}
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cn(mergedClass, "cursor-pointer border-0 font-inherit")}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
