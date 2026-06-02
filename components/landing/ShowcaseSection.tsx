import { cn } from "@/lib/cn";
import type { ShowcaseItem } from "./data/showcases";
import { bodyP, h2Class, showcaseGrid } from "./styles";
import { CheckItem, CheckList } from "./ui/CheckList";
import { Phone } from "./ui/Phone";
import { Reveal } from "./ui/Reveal";

type ShowcaseSectionProps = {
  showcase: ShowcaseItem;
  /** Even index: text left / image right. Odd index: image left / text right. */
  imageOnLeft?: boolean;
};

export function ShowcaseSection({ showcase, imageOnLeft = false }: ShowcaseSectionProps) {
  const {
    headingId,
    sectionClass,
    eyebrow,
    eyebrowClass,
    title,
    description,
    checkLabel,
    checks,
    checkClass,
    image,
    alt,
    glow,
  } = showcase;

  return (
    <section aria-labelledby={headingId} className={sectionClass}>
      <div className={showcaseGrid}>
        <Reveal className={cn(imageOnLeft && "min-[1061px]:order-2")}>
          <div className="flex flex-col min-w-0">
            <span className={eyebrowClass}>{eyebrow}</span>
            <h2 id={headingId} className={h2Class}>
              {title}
            </h2>
            <p className={cn(bodyP, "!mb-6")}>{description}</p>
            <CheckList label={checkLabel}>
              {checks.map((item, i) => (
                <CheckItem key={i} checkClass={checkClass}>
                  {item}
                </CheckItem>
              ))}
            </CheckList>
          </div>
        </Reveal>

        <div className={cn(imageOnLeft && "min-[1061px]:order-1")}>
          <Phone src={image} alt={alt} glow={glow} delay={120} />
        </div>
      </div>
    </section>
  );
}
