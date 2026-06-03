export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background">
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: [
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px)",
            "linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "60px 60px",
          animation: "grid-scroll 2s linear infinite",
          maskImage: "radial-gradient(ellipse 75% 50% at 50% 50%, black 25%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 50% at 50% 50%, black 25%, transparent 70%)",
        }}
      />
    </div>
  );
}
