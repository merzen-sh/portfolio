const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center gap-8 px-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
