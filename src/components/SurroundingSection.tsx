import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/context";

// Links and emojis are language-independent; title/desc come from translations
// by index (same order as `t.surrounding.activities`).
const activityMeta = [
  { link: "https://maps.app.goo.gl/uXpX5y3r9GzC9K6r8", emoji: "🏪" },
  { link: "https://maps.app.goo.gl/3XpX5y3r9GzC9K6r8", emoji: "🏖️" },
  { link: "https://maps.app.goo.gl/faro", emoji: "🏛️" },
  { link: "https://maps.app.goo.gl/almancil", emoji: "⛳" },
  { link: "https://maps.app.goo.gl/riaformosa", emoji: "🦩" },
];

const SurroundingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const activities = t.surrounding.activities.map((a, i) => ({
    ...a,
    ...activityMeta[i],
  }));

  return (
    <section id="surrounding" className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-4">
          {t.surrounding.heading}
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          {t.surrounding.intro}
        </p>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {activities.map((a) => (
            <div key={a.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
              <span className="text-3xl mb-4 block">{a.emoji}</span>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.desc}</p>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground hover:underline"
              >
                {t.common.openMaps} <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurroundingSection;
