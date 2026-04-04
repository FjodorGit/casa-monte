import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IntroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-8">
          Willkommen im Casa Monte
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
          Auf dem Berg Alfeição thront die Villa Casa Monte mit einem atemberaubenden 180°-Panorama — von Loulé bis zum Atlantik. Die 214m² große Luxusvilla bietet High-End-Komfort in einer Umgebung absoluter Privatsphäre.
        </p>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Ein mediterraner Garten auf mehreren Ebenen, ein beheizter Infinity-Pool und sonnenverwöhnte Terrassen laden zum Verweilen ein. Hier findet man die perfekte Balance zwischen Ruhe und Erlebnis.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
