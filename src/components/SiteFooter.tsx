const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container text-center">
      <p className="font-display text-xl font-semibold mb-2">Villa Casa Monte</p>
      <p className="text-primary-foreground/70 text-sm">Alfeição, Loulé — Algarve, Portugal</p>
      <div className="mt-6 flex justify-center gap-6 text-sm text-primary-foreground/60">
        <a href="#home" className="hover:text-primary-foreground transition-colors">Home</a>
        <a href="#villa" className="hover:text-primary-foreground transition-colors">Die Villa</a>
        <a href="#surrounding" className="hover:text-primary-foreground transition-colors">Umgebung</a>
        <a href="#guide" className="hover:text-primary-foreground transition-colors">Guest Guide</a>
      </div>
      <p className="mt-8 text-xs text-primary-foreground/40">© {new Date().getFullYear()} Casa Monte. Alle Rechte vorbehalten.</p>
    </div>
  </footer>
);

export default SiteFooter;
