import { cn } from "@/lib/cn";
import { PRICING } from "./data/pricing";
import { eyebrowPink, h2Class, inner } from "./styles";
import { Reveal } from "./ui/Reveal";

type PricingSectionProps = {
  playUrl: string;
};

export function PricingSection({ playUrl }: PricingSectionProps) {
  return (
    <section id="pricing" aria-labelledby="pricing-h2" className="py-[92px] pb-[88px] bg-[#fffbf8]">
      <div className={inner}>
        <Reveal>
          {/* <span className={`${eyebrowPink} text-center`}>Simple Pricing</span> */}
          <h2 id="pricing-h2" className={cn(h2Class, "text-center")}>
            Baby Tracker &amp; Diary Pricing — Start Free
          </h2>
          <p className="!text-[0.875rem] !text-[#a899c0] text-center !mt-3">
            All Plus plans include a 7-day free trial · No credit card required
          </p>
        </Reveal>

        <div className="grid grid-cols-1 min-[1061px]:grid-cols-3 gap-5 mt-11 max-lg:max-w-[420px] max-lg:mx-auto items-start">
          {PRICING.map((plan, i) => (
            <Reveal key={plan.tier} delay={i * 100}>
              <div className={plan.cardClass}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#ff6b9d] to-[#d94f82] text-white text-[0.72rem] font-bold tracking-wide rounded-full px-3.5 py-1 whitespace-nowrap shadow-[0_4px_14px_rgb(255_107_157/40%)]">
                    {plan.badge}
                  </div>
                )}

                <div className={cn("text-[0.8rem] font-bold uppercase tracking-widest mb-2", plan.tierClass)}>{plan.tier}</div>

                <div className="flex items-end gap-1 mb-1">
                  <span className="text-xl font-bold text-[#1c1428] pb-1.5">$</span>
                  <span className="text-5xl font-extrabold tracking-tighter text-[#1c1428] leading-none">{plan.price}</span>
                  <span className="text-[0.875rem] text-[#a899c0] pb-2">{plan.period}</span>
                </div>

                {plan.monthlyEquiv && <div className="text-[0.8125rem] text-[#8a82a0] mb-1.5">{plan.monthlyEquiv}</div>}
                {plan.save && (
                  <span className="inline-block bg-[#e8fff4] text-[#1a7840] text-xs font-bold rounded-full px-2.5 py-0.5 mb-5">
                    {plan.save}
                  </span>
                )}
                {!plan.save && !plan.monthlyEquiv && <div className="h-6" />}

                <div className="h-px bg-[#f0e8f8] my-5" />

                <ul className="list-none m-0 mb-7 p-0 flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.9rem] text-[#5c4f7a] leading-snug">
                      <span className="shrink-0 text-[#2a7a50] text-sm font-bold w-[18px] text-center mt-px" aria-hidden="true">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={playUrl}
                  className={cn(
                    "inline-flex items-center justify-center w-full py-3.5 text-[0.9375rem] font-bold rounded-[14px] no-underline mt-auto transition-all duration-200 hover:-translate-y-px",
                    plan.ctaClass,
                  )}
                  aria-label={`${plan.cta} — MamaNote ${plan.tier}`}
                >
                  {plan.cta}
                </a>
                <p className="text-[0.775rem] text-[#a899c0] text-center mt-2.5">{plan.trialNote}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
