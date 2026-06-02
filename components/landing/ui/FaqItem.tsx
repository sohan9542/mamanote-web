"use client";

import { cn } from "@/lib/cn";

type FaqItemProps = {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
};

export function FaqItem({ q, a, open, onToggle }: FaqItemProps) {
  return (
    <div
      className={cn(
        "bg-white border-[1.5px] border-[#ede5f8] rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-[0_6px_20px_rgb(28_20_40/6%)]",
        open && "border-[#ddd5ff] shadow-[0_6px_24px_rgb(155_122_234/12%)]",
      )}
    >
      <button
        type="button"
        className="w-full py-5 px-6 flex items-center justify-between gap-4 bg-transparent border-0 cursor-pointer text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="text-[0.9375rem] font-semibold text-[#1c1428] leading-snug">{q}</span>
        <span
          className={cn(
            "shrink-0 w-7 h-7 rounded-full bg-[#f0eeff] flex items-center justify-center text-[#9b7aea] text-xs font-bold transition-all duration-200",
            open && "rotate-180 bg-[#ddd5ff]",
          )}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out px-6",
          open ? "max-h-[400px] pb-5" : "max-h-0",
        )}
        aria-hidden={!open}
      >
        <p className="!text-[0.9375rem] !text-[#6a5e86] !leading-[1.72] pt-1 m-0">{a}</p>
      </div>
    </div>
  );
}
