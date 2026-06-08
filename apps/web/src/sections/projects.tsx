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
    tags: ["Rust", "Tauri", "Vite", "React", "ChaCha20-Poly1305", "Encryption"],
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
      className="flex flex-col items-center gap-12 px-6 py-24"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 text-muted-foreground">
          Some things I've built recently
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs text-muted-foreground hover:text-foreground"
                >
                  GitHub →
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
