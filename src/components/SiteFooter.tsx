import { useLanguage } from "@/i18n/context";

const SiteFooter = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.villa, href: "#villa" },
    { label: t.nav.surrounding, href: "#surrounding" },
    { label: t.nav.guide, href: "#guide" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container text-center">
        <p className="font-display text-xl font-semibold mb-2">Villa Casa Monte</p>
        <p className="text-primary-foreground/70 text-sm">{t.footer.location}</p>
        <div className="mt-6 flex justify-center gap-6 text-sm text-primary-foreground/60">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-primary-foreground/40">© {new Date().getFullYear()} Casa Monte. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
