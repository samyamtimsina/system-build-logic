import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samyam Timsina — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Self-taught full-stack developer building real-world systems with authentication, automation, and scalable architecture.",
      },
      { property: "og:title", content: "Samyam Timsina — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Building real-world systems with authentication, automation, and scalable architecture.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-[500px] pointer-events-none"
          style={{ background: "var(--gradient-glow)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mr-2 align-middle animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 font-mono text-sm text-muted-foreground sm:text-base">
            {profile.title}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:glow-primary"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
                Featured
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Latest work
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/projects"
              className="card-surface group block overflow-hidden rounded-xl"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="p-8 sm:p-10">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    {p.tagline}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.features.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {f.split("(")[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden border-t border-border md:border-l md:border-t-0">
                  <img
                    src={p.image}
                    alt={`${p.title} dashboard`}
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}
    </>
  );
}
