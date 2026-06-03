export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <span className="rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
        Web Dev &amp; Software Engineer
      </span>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        Hi, I'm <span className="text-primary">Mark</span>
      </h1>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
