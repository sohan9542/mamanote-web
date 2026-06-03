import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import logo from "@/assets/logo.png";
import { LOGO_ALT } from "@/lib/landing-seo";

export function LandingFooter() {
  return (
    <footer className="bg-[#f5f0fc] border-t border-[#e8e0f4]">
      <div className="max-w-[1160px] mx-auto py-8 px-7 flex flex-wrap items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
        <Link href="/" className="inline-flex items-center gap-2 no-underline" aria-label="MamaNote home">
          <div className="w-[30px] h-[30px] rounded-lg overflow-hidden">
            <Image src={logo as StaticImageData} alt={LOGO_ALT} className="w-full h-full object-cover block" />
          </div>
          <span className="text-base font-bold text-[#1c1428]">MamaNote</span>
        </Link>

        <nav className="flex items-center gap-5 flex-wrap" aria-label="Legal and support">
          <Link href="/privacy-policy" className="text-sm font-medium text-[#7a6a96] no-underline transition-colors hover:text-[#1c1428]">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm font-medium text-[#7a6a96] no-underline transition-colors hover:text-[#1c1428]">
            Terms of Service
          </Link>
          <Link href="/refund-policy" className="text-sm font-medium text-[#7a6a96] no-underline transition-colors hover:text-[#1c1428]">
            Refund Policy
          </Link>
          <Link href="/support" className="text-sm font-medium text-[#7a6a96] no-underline transition-colors hover:text-[#1c1428]">
            Support
          </Link>
        </nav>

        <p className="!text-sm !text-[#a899c0] m-0">© 2024 MamaNote. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
