import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  // Detect active section
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Move active indicator
  useEffect(() => {
    const activeItem = itemRefs.current[activeSection];
    const nav = navRef.current;

    if (!activeItem || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    setIndicator({
      left: itemRect.left - navRect.left,
      width: itemRect.width,
    });
  }, [activeSection]);

  // Recalculate on resize
  useEffect(() => {
    const updateIndicator = () => {
      const activeItem = itemRefs.current[activeSection];
      const nav = navRef.current;

      if (!activeItem || !nav) return;

      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setIndicator({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    };

    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeSection]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        ref={navRef}
        className="relative flex h-12 items-center gap-1 rounded-full border border-border/50 bg-background/75 px-2 shadow-sm backdrop-blur-xl"
      >
        {/* Sliding active indicator */}
        <span
          className="pointer-events-none absolute top-1/2 h-9 -translate-y-1/2 rounded-full bg-foreground shadow-sm transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />

        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.label}
              ref={(element) => {
                itemRefs.current[sectionId] = element;
              }}
              href={item.href}
              className={`relative z-10 rounded-full px-4 py-2 text-xs font-medium transition-colors duration-300 ${
                isActive
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
