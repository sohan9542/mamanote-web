import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";
import { glowMap, type GlowKey } from "../styles";
import { Reveal } from "./Reveal";

type PhoneProps = {
  src: StaticImageData;
  alt: string;
  glow?: GlowKey;
  delay?: number;
  reverseOffset?: boolean;
};

export function Phone({ src, alt, glow = "glowPink", delay = 0, reverseOffset = false }: PhoneProps) {
  return (
    <Reveal delay={delay} className="relative flex justify-center max-lg:mx-auto max-lg:w-full max-lg:max-w-[300px]">
      <div
        className={cn("absolute inset-[-15%] rounded-full pointer-events-none z-0", glowMap[glow])}
        aria-hidden="true"
      />
      <Image
        src={src}
        alt={alt}
        className={cn(
          "relative z-[1] w-full max-w-[280px] h-auto block rounded-[16px]",
          "shadow-[0_4px_8px_rgb(28_20_40/6%),0_12px_32px_rgb(28_20_40/12%),0_32px_64px_rgb(28_20_40/14%)]",
          reverseOffset && "max-lg:translate-y-0 lg:-translate-y-7",
        )}
        sizes="(max-width: 640px) 80vw, (max-width: 1060px) 44vw, 300px"
      />
    </Reveal>
  );
}
