import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Die Villa", href: "#villa" },
  { label: "Umgebung", href: "#surrounding" },
  { label: "Guest Guide", href: "#guide" },
];

const BOOKING_URL = "https://www.traum-ferienwohnungen.de/";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

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
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Jetzt Buchen
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            Jetzt Buchen
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
