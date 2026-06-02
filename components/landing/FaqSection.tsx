"use client";

import { useState } from "react";
import { FAQS } from "./data/faqs";
import { eyebrowLavender, h2Class, inner } from "./styles";
import { FaqItem } from "./ui/FaqItem";
import { Reveal } from "./ui/Reveal";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-h2" className="py-[88px] bg-[#faf8ff]">
      <div className={inner}>
        <Reveal>
          <span className={eyebrowLavender}>Questions Answered</span>
          <h2 id="faq-h2" className={h2Class}>
            Baby Tracker &amp; Diary — Questions Answered
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-2.5" role="list">
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
