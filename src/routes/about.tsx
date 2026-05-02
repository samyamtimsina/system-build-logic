import { createFileRoute } from "@tanstack/react-router";
import { skills, profile } from "@/data/portfolio";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Samyam Timsina" },
      {
        name: "description",
        content:
          "Self-taught full-stack developer focused on backend systems, authentication, automation, and scalable architecture.",
      },
      { property: "og:title", content: "About — Samyam Timsina" },
      {
        property: "og:description",
        content:
          "Self-taught full-stack developer focused on real-world systems and backend architecture.",
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
          I'm a self-taught full-stack developer. I started experimenting with
          basic HTML and CSS around 2016, and over time transitioned into
          modern full-stack development with a focus on real-world systems.
        </p>
        <p>
          My work centers on{" "}
          <span className="text-foreground">backend logic, authentication systems,
          automation, and scalable architecture</span>{" "}
          — not static marketing sites. I enjoy building practical applications
          like healthcare management platforms, financial tracking tools, and
          backend-driven services where correctness, access control, and
          reliability actually matter.
        </p>
        <p>
          I think about software the way an engineer thinks about a system:
          roles, boundaries, data flow, failure modes, and how things behave
          under real usage.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
