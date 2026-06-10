import { useLanguage } from "@/i18n/context";
import type { Language } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const options: { code: Language; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

const LanguageToggle = ({ className }: { className?: string }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Sprache / Language"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/60 p-0.5",
        className,
      )}
    >
      {options.map((option) => {
        const active = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-foreground/60 hover:text-primary",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
