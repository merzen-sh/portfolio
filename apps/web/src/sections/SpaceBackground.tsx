const stars = [
  [4, 10, 1, 0.45, 4],
  [8, 32, 2, 0.65, 5],
  [12, 72, 1, 0.35, 3],
  [17, 22, 1, 0.75, 6],
  [21, 48, 2, 0.5, 4],
  [25, 86, 1, 0.4, 5],
  [29, 14, 1, 0.6, 3],
  [33, 64, 2, 0.7, 6],
  [37, 38, 1, 0.35, 4],
  [41, 80, 1, 0.55, 5],
  [45, 18, 2, 0.45, 6],
  [49, 56, 1, 0.75, 4],
  [53, 8, 1, 0.4, 5],
  [57, 72, 2, 0.55, 3],
  [61, 28, 1, 0.7, 6],
  [65, 92, 1, 0.35, 4],
  [69, 44, 2, 0.6, 5],
  [73, 12, 1, 0.45, 3],
  [77, 67, 1, 0.65, 6],
  [81, 34, 2, 0.5, 4],
  [85, 82, 1, 0.4, 5],
  [89, 20, 1, 0.7, 3],
  [93, 58, 2, 0.55, 6],
  [97, 88, 1, 0.45, 4],

  [2, 55, 1, 0.4, 5],
  [6, 91, 2, 0.55, 4],
  [14, 43, 1, 0.35, 6],
  [19, 76, 1, 0.6, 3],
  [24, 30, 2, 0.5, 5],
  [31, 94, 1, 0.45, 4],
  [38, 6, 1, 0.65, 6],
  [44, 42, 2, 0.4, 3],
  [51, 90, 1, 0.7, 5],
  [58, 52, 1, 0.35, 4],
  [64, 16, 2, 0.55, 6],
  [71, 96, 1, 0.45, 5],
  [78, 52, 1, 0.65, 3],
  [84, 4, 2, 0.5, 6],
  [91, 74, 1, 0.4, 4],
  [96, 40, 1, 0.6, 5],
] as const;

export function SpaceBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.08),transparent_38%),linear-gradient(to_bottom,#020617,#030712_45%,#020617)]" />

      {/* Nebula 1 */}
      <div className="space-nebula space-nebula-blue absolute -left-40 top-[-10%] h-[420px] w-[420px] rounded-full" />

      {/* Nebula 2 */}
      <div className="space-nebula space-nebula-violet absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full" />

      {/* Nebula 3 */}
      <div className="space-nebula space-nebula-cyan absolute left-[25%] top-[65%] h-[320px] w-[320px] rounded-full" />

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map(([left, top, size, opacity, duration], index) => (
          <span
            key={index}
            className="space-star absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${index * -0.19}s`,
            }}
          />
        ))}
      </div>

      {/* Bright stars */}
      <div className="absolute inset-0">
        <span className="space-bright-star absolute left-[12%] top-[18%]" />
        <span className="space-bright-star absolute left-[74%] top-[25%]" />
        <span className="space-bright-star absolute left-[88%] top-[70%]" />
        <span className="space-bright-star absolute left-[34%] top-[82%]" />
      </div>

      {/* Shooting stars */}
      <span className="space-meteor space-meteor-1" />
      <span className="space-meteor space-meteor-2" />
      <span className="space-meteor space-meteor-3" />

      {/* Rocket */}
      <div className="space-rocket absolute left-[-100px] top-[28%]">
        <div className="rotate-[-35deg]">
          <div className="relative h-6 w-11 rounded-[55%_45%_45%_55%] border border-white/20 bg-gradient-to-r from-slate-400 via-white to-slate-200 shadow-[0_0_18px_rgba(255,255,255,0.12)]">
            {/* Window */}
            <span className="absolute left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-blue-300/50 bg-blue-500/30" />

            {/* Fin */}
            <span className="absolute -bottom-1.5 left-5 h-2.5 w-3 rounded-sm bg-slate-500/70" />

            {/* Flame */}
            <span className="absolute -left-4 top-1/2 h-1.5 w-6 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-orange-300 to-yellow-200 opacity-80 blur-[2px]" />
          </div>
        </div>
      </div>

      {/* Planet */}
      <div className="space-planet absolute -bottom-28 -left-28 h-64 w-64 rounded-full" />

      {/* Very subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.28)_100%)]" />
    </div>
  );
}
