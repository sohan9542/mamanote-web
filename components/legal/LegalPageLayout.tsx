import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import logo from "@/assets/logo.png";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LOGO_ALT } from "@/lib/landing-seo";

const proseLink =
  "[&_p_a]:text-[#cc3d7a] [&_li_a]:text-[#cc3d7a] [&_p_a]:font-medium [&_li_a]:font-medium [&_p_a]:underline [&_li_a]:underline [&_p_a]:underline-offset-2 [&_li_a]:underline-offset-2 hover:[&_p_a]:text-[#9b7aea] hover:[&_li_a]:text-[#9b7aea]";
const prose =
  `legal-prose [&_h2]:font-[family-name:var(--font-jakarta),system-ui,sans-serif] [&_h2]:text-[1.35rem] [&_h2]:font-bold [&_h2]:text-[#1c1428] [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-[family-name:var(--font-jakarta),system-ui,sans-serif] [&_h3]:text-[1.1rem] [&_h3]:font-bold [&_h3]:text-[#2a1e40] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:text-[1rem] [&_p]:leading-[1.75] [&_p]:text-[#5c4f7a] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-[#5c4f7a] [&_li]:mb-2 [&_li]:leading-[1.7] [&_strong]:text-[#2a1e40] [&_strong]:font-semibold ${proseLink}`;

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fffbf8] text-[#1c1428] font-[family-name:var(--font-jakarta),system-ui,sans-serif] antialiased">
      <header className="sticky top-0 z-50 bg-[rgb(255_251_248/82%)] backdrop-blur-xl border-b border-[rgb(255_107_157/12%)]">
        <nav
          className="max-w-[1160px] mx-auto px-7 h-[70px] flex items-center justify-between"
          aria-label="Site navigation"
        >
          <Link href="/" className="inline-flex items-center gap-2.5 no-underline" aria-label="MamaNote home">
            <div className="w-10 h-10 rounded-[13px] overflow-hidden shadow-[0_4px_12px_rgb(255_107_157/25%)] shrink-0">
              <Image src={logo as StaticImageData} alt={LOGO_ALT} className="w-full h-full object-cover block" priority />
            </div>
            <span className="text-[1.05rem] font-bold text-[#1c1428] tracking-tight">MamaNote</span>
          </Link>
          <Link
            href="/"
            className="text-[0.9375rem] font-medium text-[#5c4f7a] no-underline px-[13px] py-2 rounded-[10px] transition-colors hover:text-[#1c1428] hover:bg-[#f5f0ff]"
          >
            ← Back to home
          </Link>
        </nav>
      </header>

      <div role="main" className="max-w-[760px] mx-auto px-7 py-12 pb-16">
        <h1 className="font-[family-name:var(--font-jakarta),system-ui,sans-serif] text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#1c1428] mb-2">
          {title}
        </h1>
        <p className="text-[0.875rem] text-[#a899c0] m-0">Last updated: {lastUpdated}</p>
        <article className={`mt-8 ${prose}`}>{children}</article>
      </div>

      <LandingFooter />
    </div>
  );
}
