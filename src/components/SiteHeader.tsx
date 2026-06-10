import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import LanguageToggle from "@/components/LanguageToggle";

const BOOKING_URL = "https://www.traum-ferienwohnungen.de/";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.villa, href: "#villa" },
    { label: t.nav.surrounding, href: "#surrounding" },
    { label: t.nav.guide, href: "#guide" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-display text-xl md:text-2xl font-bold text-primary tracking-wide">
          Casa Monte
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            {t.common.book}
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button onClick={() => setOpen(!open)} className="text-foreground" aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-6 pt-2 space-y-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-foreground/80 hover:text-primary py-2">
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold"
          >
            {t.common.book}
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
