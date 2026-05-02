import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Check } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Samyam Timsina" },
      {
        name: "description",
        content:
          "Selected projects: vaccination tracking system, full-stack expense tracker, and Rust systems experiments.",
      },
      { property: "og:title", content: "Projects — Samyam Timsina" },
      {
        property: "og:description",
        content:
          "Real-world full-stack systems with authentication, RBAC, and automation.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <header className="mb-16 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Projects
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Things I've <span className="text-gradient">built</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          A selection of full-stack systems and engineering experiments — focused
          on backend logic, access control, and production-style thinking.
        </p>
      </header>

      <div className="space-y-20">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="grid gap-8 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-5 lg:col-span-4">
              <p className="font-mono text-xs text-muted-foreground">
                0{i + 1} — {p.tagline}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {p.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Live <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>

              {p.tech && (
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Tech
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] rounded border border-border bg-background/50 px-1.5 py-0.5 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-7 lg:col-span-8 space-y-5">
              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="card-surface rounded-xl p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
                  Key features
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
