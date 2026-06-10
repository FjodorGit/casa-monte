import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/context";

const IntroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-8">
          {t.intro.heading}
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
          {t.intro.p1}
        </p>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {t.intro.p2}
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
