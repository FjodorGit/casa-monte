import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const activities = [
  {
    title: "Samstagsmarkt Loulé",
    desc: "Traditionelles Handwerk und frische lokale Produkte in der historischen Markthalle.",
    link: "https://maps.app.goo.gl/uXpX5y3r9GzC9K6r8",
    emoji: "🏪",
  },
  {
    title: "Praia da Falésia",
    desc: "Spektakuläre rote Klippen und goldener Sand — einer der schönsten Strände Europas.",
    link: "https://maps.app.goo.gl/3XpX5y3r9GzC9K6r8",
    emoji: "🏖️",
  },
  {
    title: "Faro Altstadt",
    desc: "Historischer Charme, kopfsteingepflasterte Gassen und ein moderner Yachthafen.",
    link: "https://maps.app.goo.gl/faro",
    emoji: "🏛️",
  },
  {
    title: "Almancil & Golf",
    desc: "Weltklasse-Golfplätze wie Vale do Lobo und Quinta do Lago in 20 Min. Entfernung.",
    link: "https://maps.app.goo.gl/almancil",
    emoji: "⛳",
  },
  {
    title: "Ria Formosa Naturpark",
    desc: "Einzigartige Lagunenlandschaft mit Bootstouren und exotischer Vogelwelt.",
    link: "https://maps.app.goo.gl/riaformosa",
    emoji: "🦩",
  },
];

const SurroundingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="surrounding" className="py-20 md:py-28">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-4">
          Umgebung & Aktivitäten
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Die Algarve bietet weit mehr als Sonne und Strand — entdecke die Highlights rund um Casa Monte.
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
                In Google Maps öffnen <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurroundingSection;
