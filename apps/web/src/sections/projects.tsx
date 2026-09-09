import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
} from "@portfolio/ui";

const projects = [
  {
    title: "AI CLI",
    description:
      "An intelligent command-line assistant built in Rust, leveraging AI for code generation, file operations, and natural language queries.",
    repo: undefined as string | undefined,
    tags: ["Rust", "CLI", "AI", "LLM"],
  },
  {
    title: "Vault Cat",
    description:
      "A secret key manager built with Rust and Tauri, using ChaCha20-Poly1305 for encryption.",
    repo: "https://github.com/merzen-sh/vault-cat",
    tags: [
      "Rust",
      "Tauri",
      "Vite",
      "React",
      "ChaCha20-Poly1305",
      "Encryption",
    ],
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather visualization with interactive maps, historical data charts, and severe weather alerts.",
    repo: undefined as string | undefined,
    tags: ["TypeScript", "D3.js", "OpenWeather API", "Vite"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12">
        {/* Heading */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Selected Work
            </span>

            <span className="h-px w-8 bg-border" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Some things I've built recently
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative flex flex-col overflow-hidden bg-background/70 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <CardHeader className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground/50">
                    0{index + 1}
                  </span>

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-muted hover:text-foreground"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>

                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </CardTitle>

                <CardDescription className="mt-2 leading-6">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative mt-auto">
                <div className="mb-5 h-px bg-border/70" />

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="transition-all duration-300 hover:scale-105"
                      style={{
                        transitionDelay: `${tagIndex * 20}ms`,
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-all duration-300 hover:gap-2 hover:text-foreground"
                  >
                    View repository
                    <span>→</span>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-center gap-3 pt-2 text-xs text-muted-foreground">
          <span className="h-px w-12 bg-border" />
          <span>More projects coming soon</span>
          <span className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  );
}
