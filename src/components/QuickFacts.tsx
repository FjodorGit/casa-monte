import { Bed, Users, Waves, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/context";

const QuickFacts = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const facts = [
    { icon: Bed, label: t.quickFacts.bedrooms },
    { icon: Users, label: t.quickFacts.guests },
    { icon: Waves, label: t.quickFacts.pool },
    { icon: Zap, label: t.quickFacts.charger },
  ];

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
