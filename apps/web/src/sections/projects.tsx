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
    title: "E-Commerce Platform",
    description:
      "🥇 1st Place — Regional Academic E-Commerce Competition (95.5/100). A full-featured online store with real-time inventory, payment processing, and admin dashboard.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS", "1st Place", "95.5/100"],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop boards, real-time sync, and team workflows.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather visualization with interactive maps, historical data charts, and severe weather alerts.",
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
            <CardContent className="mt-auto flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
