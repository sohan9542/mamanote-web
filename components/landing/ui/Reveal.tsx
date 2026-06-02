"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const margin = 48;
  return rect.top < window.innerHeight - margin && rect.bottom > margin;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setOn(true);

    // Already on screen (e.g. back navigation, fast scroll, strict-mode remount)
    if (isInViewport(el)) {
      show();
      return;
    }

    // If JS chunks fail to load in dev, never leave content invisible
    const fallback = window.setTimeout(show, 800);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          io.disconnect();
          window.clearTimeout(fallback);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
    );

    io.observe(el);

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted && isInViewport(el)) show();
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-[opacity,transform] transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
