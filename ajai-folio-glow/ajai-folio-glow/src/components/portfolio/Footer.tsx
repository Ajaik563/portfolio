export function Footer() {
  return (
    <footer className="relative py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ajai K. Crafted with <span className="text-primary">React</span> & <span className="text-accent">Framer Motion</span>.</div>
        <div className="font-mono text-xs">designed_with(❤️) — built_for(impact)</div>
      </div>
    </footer>
  );
}
