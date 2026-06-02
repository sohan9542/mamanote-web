import { FEATURES } from "./data/features";
import { eyebrowLavender, h2Class, h3Class, inner } from "./styles";
import { Reveal } from "./ui/Reveal";

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-h2" className="py-[92px] pb-20 bg-[#fffbf8]">
      <div className={inner}>
        <Reveal>
          <span className={eyebrowLavender}>13+ Tracking Activities</span>
          <h2 id="features-h2" className={h2Class}>
            One Baby Tracker &amp; Diary for Breastfeeding, Sleep &amp; Daily Care
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1061px]:grid-cols-3 gap-4 mt-9">
          {FEATURES.map(({ icon, bg, title, desc }, i) => (
            <Reveal key={title} delay={i * 75}>
              <article className={bg}>
                <div
                  className="inline-flex items-center justify-center w-[50px] h-[50px] rounded-[15px] text-[1.4rem] bg-white/75 shadow-[0_2px_8px_rgb(28_20_40/8%)]"
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h3 className={h3Class}>{title}</h3>
                <p className="!text-[0.9rem] !text-[#5c4f7a] !leading-[1.67] m-0">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
