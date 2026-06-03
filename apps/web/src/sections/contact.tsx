export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center gap-8 px-6 py-24 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Get in Touch
      </h2>
      <p className="max-w-lg text-muted-foreground">
        I'm always open to new opportunities and collaborations. Feel free to reach out.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:nubdev.2001@gmail.com"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          nubdev.2001@gmail.com
        </a>
        <a
          href="https://github.com/merzen-sh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          GitHub
        </a>
        <a
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
