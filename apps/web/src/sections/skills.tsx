import { Badge } from "@portfolio/ui";

const skillCategories = [
  {
    name: "Frontend",
    description: "Building modern interfaces",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    description: "Designing scalable systems",
    skills: ["Node.js", "Go", "Rust", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    name: "Tools",
    description: "Infrastructure & workflow",
    skills: ["Docker", "Git", "CI/CD", "AWS", "Linux"],
  },
];

const age =
  new Date().getFullYear() -
  2001 -
  (new Date() < new Date(new Date().getFullYear(), 9, 20) ? 1 : 0);

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-muted/30 px-6 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-16">
        {/* Profile */}
        <div className="group relative w-full max-w-2xl">
          {/* Glow */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 blur-sm transition-opacity duration-700 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-3xl border bg-background/70 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-10">
            {/* Decorative line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="relative mb-5">
                <div className="absolute -inset-2 animate-[spin_8s_linear_infinite] rounded-full border border-dashed border-primary/20" />

                <div className="absolute -inset-1 rounded-full bg-primary/10 blur-md transition-all duration-500 group-hover:bg-primary/20" />

                <img
                  src={`${import.meta.env.BASE_URL}avatar.jpeg`}
                  alt="Yuthana Wareesri"
                  className="relative h-20 w-20 rounded-full border-2 border-background object-cover object-[right_-30px_top_0px] shadow-lg transition-transform duration-500 group-hover:scale-105"
                />

                {/* Online indicator */}
                <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-green-500">
                  <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-50" />
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Yuthana Wareesri
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                มาร์ค / นับ
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                เกิด 20 ตุลาคม 2544 · อายุ {age} ปี
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Web Dev &amp; Software Engineer
              </div>

              {/* Interests */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Space</Badge>
                <Badge variant="outline">Software</Badge>
              </div>

              {/* Story */}
              <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
                ได้ PC เครื่องแรกตอนอายุ 7 ปี
                เริ่มเขียนโค้ดตอน 12 ปี
                และไม่เคยหยุดพัฒนาตัวเองเลย
              </p>

              <p className="mt-4 text-sm font-medium italic text-foreground/80">
                “วันนี้ต้องเก่งกว่าเมื่อวาน”
              </p>

              {/* Social links */}
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                <a
                  href="https://github.com/merzen-sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground hover:shadow-sm"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>

                <a
                  href="mailto:nubdev.2001@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground hover:shadow-sm"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>

                <a
                  href="https://x.com/NUBDEV4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground hover:shadow-sm"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills heading */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Tech Stack
            </span>
            <span className="h-px w-8 bg-border" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Technologies I work with
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid w-full gap-5 sm:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl border bg-background/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                animationDelay: `${categoryIndex * 120}ms`,
              }}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Category number */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-muted/50 text-xs font-bold text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary">
                    0{categoryIndex + 1}
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
                    {category.name}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  {category.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="cursor-default transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      style={{
                        transitionDelay: `${skillIndex * 30}ms`,
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="flex items-center gap-3 text-center text-xs text-muted-foreground">
          <span className="h-px w-12 bg-border" />
          <span>Always learning · Always building</span>
          <span className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  );
}
