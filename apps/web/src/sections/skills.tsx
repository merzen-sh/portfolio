import { Badge } from "@portfolio/ui";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Go", "Rust", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    name: "Tools",
    skills: ["Docker", "Git", "CI/CD", "AWS", "Linux"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-12 bg-muted/30 px-6 py-24"
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={`${import.meta.env.BASE_URL}avatar.jpeg`}
          alt="Yuthana Wareesri"
          className="h-16 w-16 rounded-full object-cover object-[right_-30px_top_0px] border-2"
        />
        <div className="text-center">
          <p className="font-semibold text-foreground">Yuthana Wareesri</p>
          <p className="text-xs text-muted-foreground">(มาร์ค / นับ)</p>
          <p className="text-sm text-muted-foreground">
            เกิด 20 ตุลาคม 2544 (อายุ {new Date().getFullYear() - 2001 - (new Date() < new Date(new Date().getFullYear(), 9, 20) ? 1 : 0)} ปี)
          </p>
          <p className="text-sm text-muted-foreground">
            Web Dev &amp; Software Engineer
          </p>
        </div>
        <p className="max-w-md text-center text-xs text-muted-foreground leading-relaxed">
          ได้ PC เครื่องแรกตอนอายุ 7 ปี เริ่มเขียนโค้ดตอน 12 ปี และไม่เคยหยุดพัฒนาตัวเองเลย
        </p>
        <p className="text-xs font-medium text-muted-foreground italic">
          "วันนี้ต้องเก่งกว่าเมื่อวาน"
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="https://github.com/merzen-sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            merzen-sh
          </a>
          <a
            href="mailto:nubdev.2001@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            nubdev.2001@gmail.com
          </a>
          <a
            href="https://x.com/NUBDEV4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X / Twitter
          </a>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>
        <p className="mt-3 text-muted-foreground">Technologies I work with</p>
      </div>
      <div className="mx-auto grid w-full max-w-4xl gap-8 sm:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.name} className="flex flex-col items-center gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {category.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
