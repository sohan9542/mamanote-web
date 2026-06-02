"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { StaticImageData } from "next/image";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/cn";
import { LOGO_ALT } from "@/lib/landing-seo";
import { navCta } from "./styles";

type LandingHeaderProps = {
  playUrl: string;
};

export function LandingHeader({ playUrl }: LandingHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgb(255_251_248/82%)] backdrop-blur-xl border-b border-[rgb(255_107_157/12%)]">
      <nav className="max-w-[1160px] mx-auto px-7 h-[70px] flex items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="inline-flex items-center gap-2.5 no-underline" aria-label="MamaNote home">
          <div className="w-10 h-10 rounded-[13px] overflow-hidden shadow-[0_4px_12px_rgb(255_107_157/25%)] shrink-0">
            <Image src={logo as StaticImageData} alt={LOGO_ALT} className="w-full h-full object-cover block" sizes="40px" />
          </div>
          <span className="text-[1.05rem] font-bold text-[#1c1428] tracking-tight">MamaNote</span>
        </Link>

        <div className="hidden min-[1061px]:flex items-center gap-1">
          <a href="#features" className="text-[0.9375rem] font-medium text-[#5c4f7a] no-underline px-[13px] py-2 rounded-[10px] transition-colors hover:text-[#1c1428] hover:bg-[#f5f0ff]">
            Features
          </a>
          <a href="#pricing" className="text-[0.9375rem] font-medium text-[#5c4f7a] no-underline px-[13px] py-2 rounded-[10px] transition-colors hover:text-[#1c1428] hover:bg-[#f5f0ff]">
            Pricing
          </a>
          <a href="#faq" className="text-[0.9375rem] font-medium text-[#5c4f7a] no-underline px-[13px] py-2 rounded-[10px] transition-colors hover:text-[#1c1428] hover:bg-[#f5f0ff]">
            FAQ
          </a>
          <a href={playUrl} className={navCta}>
            Try Free
          </a>
        </div>

        <button
          type="button"
          className="min-[1061px]:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 border-[1.5px] border-[#e8e0f4] rounded-xl bg-white cursor-pointer p-0"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={cn("block w-[18px] h-0.5 bg-[#5c4f7a] rounded-sm transition-all duration-200", menuOpen && "translate-y-[7px] rotate-45")} />
          <span className={cn("block w-[18px] h-0.5 bg-[#5c4f7a] rounded-sm transition-all duration-200", menuOpen && "opacity-0")} />
          <span className={cn("block w-[18px] h-0.5 bg-[#5c4f7a] rounded-sm transition-all duration-200", menuOpen && "-translate-y-[7px] -rotate-45")} />
        </button>
      </nav>

      <nav
        id="mobile-nav"
        className={cn(
          "min-[1061px]:hidden overflow-hidden flex flex-col gap-0.5 px-7 transition-all duration-300 ease-in-out border-t",
          menuOpen ? "max-h-80 opacity-100 py-3 pb-4 border-[rgb(255_107_157/12%)]" : "max-h-0 opacity-0 border-transparent",
        )}
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <a href="#features" onClick={close} className="text-base font-medium text-[#5c4f7a] no-underline py-2.5 border-b border-[#f5f0ff]">
          Features
        </a>
        <a href="#pricing" onClick={close} className="text-base font-medium text-[#5c4f7a] no-underline py-2.5 border-b border-[#f5f0ff]">
          Pricing
        </a>
        <a href="#faq" onClick={close} className="text-base font-medium text-[#5c4f7a] no-underline py-2.5 border-b border-[#f5f0ff]">
          FAQ
        </a>
        <a href={playUrl} className={cn(navCta, "text-center mt-1.5 ml-0")} onClick={close}>
          Try Free
        </a>
      </nav>
    </header>
  );
}
