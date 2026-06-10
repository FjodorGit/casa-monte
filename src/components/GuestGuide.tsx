import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/context";

const PLACEHOLDER_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4";

const GuestGuide = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="guide" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-4">
          {t.guide.heading}
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          {t.guide.intro}
        </p>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {t.guide.videos.map((title, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video bg-foreground/5"
              >
                <source src={PLACEHOLDER_VIDEO} type="video/mp4" />
              </video>
              <div className="p-4">
                <h3 className="font-display text-base font-semibold text-primary">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestGuide;
