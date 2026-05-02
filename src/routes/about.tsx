import { createFileRoute } from "@tanstack/react-router";
import { skills, profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Samyam Timsina" },
      {
        name: "description",
        content:
          "PERN & MERN Stack Developer. Bachelor in Computer Applications from Purbanchal University. Focused on backend systems, authentication, automation, and scalable architecture.",
      },
      { property: "og:title", content: "About — Samyam Timsina" },
      {
        property: "og:description",
        content:
          "PERN & MERN Stack Developer focused on real-world systems and backend architecture.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_280px] md:gap-14 md:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineer first, <span className="text-gradient">systems thinker</span>.
          </h1>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I am a Full-Stack Developer focused on building high-integrity web applications. My
              current work centers on the <strong>PERN/MERN</strong> stacks, specifically where
              backend logic, scalable architecture, and security intersect.
            </p>
            <p>
              I don't build static marketing sites. I build systems where correctness is a
              requirement—like healthcare management platforms and financial engines. I think in
              terms of data flow, failure modes, and access control. Whether I'm using{" "}
              <strong>PostgreSQL with Prisma</strong> for relational integrity or{" "}
              <strong>MongoDB</strong> for flexibility, my goal is the same: building robust
              services that behave predictably under real-world usage.
            </p>
            <p>
              My approach is shaped by a foundation in <strong>C/C++</strong> and a workflow rooted
              in <strong>Linux and Neovim</strong>. I view software as a series of boundaries and
              roles, ensuring every component has a purpose and every data point has a path.
            </p>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="relative mx-auto w-48 sm:w-56 md:w-full">
            <div
              className="absolute -inset-3 rounded-2xl opacity-60 blur-2xl"
              style={{ background: "var(--gradient-glow)" }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-border card-surface">
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                width={928}
                height={1160}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">Stack</h2>
        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">
          Education
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border/50 bg-secondary/20 px-5 py-4">
            <p className="font-medium text-foreground">Bachelor of Computer Applications</p>
            <p className="text-sm text-muted-foreground mt-1">Purbanchal University</p>
            <p className="text-sm text-muted-foreground">Graduated: 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
