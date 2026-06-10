import aussicht from "@/assets/aussicht.png";
import { useLanguage } from "@/i18n/context";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={aussicht}
        alt={t.hero.imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-up">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Villa Casa Monte
        </h1>
        <p className="font-display text-lg md:text-2xl text-primary-foreground/90 italic mb-4">
          {t.hero.tagline}
        </p>
        <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <a
          href="https://www.traum-ferienwohnungen.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 rounded-full bg-primary text-primary-foreground px-8 py-3.5 font-semibold text-sm hover:shadow-xl hover:shadow-primary/30 transition-all"
        >
          {t.common.book}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
