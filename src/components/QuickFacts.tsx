import { Bed, Users, Waves, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const facts = [
  { icon: Bed, label: "2 Schlafzimmer" },
  { icon: Users, label: "Max. 4 Gäste" },
  { icon: Waves, label: "Beheizter Pool" },
  { icon: Zap, label: "E-Ladestation" },
];

const QuickFacts = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`bg-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-2 text-primary-foreground">
            <f.icon size={28} strokeWidth={1.5} />
            <span className="text-sm font-medium tracking-wide">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickFacts;
