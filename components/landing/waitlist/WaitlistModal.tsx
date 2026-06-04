"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/cn";
import { LOGO_ALT } from "@/lib/landing-seo";
import { useWaitlist } from "./WaitlistContext";

type FormState = "idle" | "submitting" | "success" | "error";

export function WaitlistModal() {
  const { isOpen, source, closeWaitlist } = useWaitlist();
  const titleId = useId();
  const descId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resetForm = useCallback(() => {
    setEmail("");
    setFormState("idle");
    setErrorMessage(null);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => inputRef.current?.focus(), 80);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWaitlist();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeWaitlist, resetForm]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (formState === "submitting" || formState === "success") return;

    setFormState("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website: "" }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean };

      if (!res.ok) {
        setFormState("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setFormState("success");
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-5"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#1c1428]/45 backdrop-blur-[6px] cursor-default"
        aria-label="Close dialog"
        onClick={closeWaitlist}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={cn(
          "relative z-[1] w-full max-w-[440px] max-h-[min(92dvh,640px)] overflow-y-auto",
          "rounded-t-[28px] sm:rounded-[28px]",
          "bg-[#fffbf8] shadow-[0_24px_80px_rgb(28_20_40/22%)]",
          "border border-[rgb(255_107_157/18%)]",
          "animate-[waitlistSlideUp_0.35s_ease-out]",
        )}
      >
        <div
          className="h-1.5 rounded-t-[28px] sm:rounded-t-[28px] bg-gradient-to-r from-[#ff6b9d] via-[#d94f82] to-[#9b7aea]"
          aria-hidden
        />

        <div className="px-6 pt-6 pb-7 sm:px-8 sm:pt-7 sm:pb-8">
          <button
            type="button"
            onClick={closeWaitlist}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 flex items-center justify-center rounded-full border border-[#e8e0f4] bg-white text-[#5c4f7a] text-xl leading-none cursor-pointer transition-colors hover:bg-[#f5f0ff] hover:text-[#1c1428]"
            aria-label="Close"
          >
            ×
          </button>

          <div className="flex items-center gap-3 mb-5 pr-10">
            <div className="w-12 h-12 rounded-[14px] overflow-hidden shadow-[0_4px_14px_rgb(255_107_157/28%)] shrink-0">
              <Image
                src={logo as StaticImageData}
                alt={LOGO_ALT}
                className="w-full h-full object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[#cc3d7a] m-0">
                Coming soon
              </p>
              <h2
                id={titleId}
                className="font-[family-name:var(--font-jakarta),system-ui,sans-serif] text-[1.35rem] font-bold text-[#1c1428] m-0 leading-tight"
              >
                Get early access
              </h2>
            </div>
          </div>

          {formState === "success" ? (
            <div className="text-center py-2">
              <div
                className="mx-auto mb-4 w-14 h-14 rounded-full bg-[#e8fff4] flex items-center justify-center text-2xl text-[#1a7840]"
                aria-hidden
              >
                ✓
              </div>
              <p className="text-[1.05rem] font-semibold text-[#1c1428] mb-2 m-0">You&apos;re on the list!</p>
              <p id={descId} className="text-[0.9375rem] leading-[1.65] text-[#5c4f7a] m-0 mb-6">
                We&apos;ll email you as soon as MamaNote is live on the app stores. Thank you for your interest.
              </p>
              <button
                type="button"
                onClick={closeWaitlist}
                className="w-full py-3.5 text-[0.9375rem] font-bold text-white rounded-full border-0 cursor-pointer bg-gradient-to-br from-[#ff6b9d] to-[#d94f82] shadow-[0_10px_28px_rgb(255_107_157/35%)] transition-transform hover:-translate-y-px"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <p id={descId} className="text-[0.9375rem] leading-[1.7] text-[#5c4f7a] m-0 mb-5">
                MamaNote isn&apos;t on the app stores yet. Leave your email and we&apos;ll notify you the moment you
                can download.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  ref={inputRef}
                  id="waitlist-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={formState === "submitting"}
                  className={cn(
                    "w-full px-4 py-3.5 text-[1rem] text-[#1c1428] rounded-[14px]",
                    "border-[1.5px] border-[#e8e0f4] bg-white",
                    "outline-none transition-[border-color,box-shadow]",
                    "placeholder:text-[#b8adc8]",
                    "focus:border-[#ff6b9d] focus:shadow-[0_0_0_3px_rgb(255_107_157/18%)]",
                    "disabled:opacity-60",
                  )}
                />

                {errorMessage ? (
                  <p className="text-[0.8125rem] text-[#be1d5a] m-0" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className={cn(
                    "w-full py-3.5 text-[0.9375rem] font-bold text-white rounded-full border-0 cursor-pointer",
                    "bg-gradient-to-br from-[#ff6b9d] to-[#d94f82]",
                    "shadow-[0_10px_28px_rgb(255_107_157/35%)]",
                    "transition-all duration-200 hover:-translate-y-px",
                    "disabled:opacity-70 disabled:cursor-wait disabled:hover:translate-y-0",
                  )}
                >
                  {formState === "submitting" ? "Saving…" : "Notify me at launch"}
                </button>
              </form>

              <p className="text-[0.75rem] leading-[1.5] text-[#a899c0] text-center m-0 mt-4">
                No spam — one email when we launch. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
