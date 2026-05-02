import { createFileRoute } from "@tanstack/react-router";
import { Github, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Samyam Timsina" },
      {
        name: "description",
        content:
          "Get in touch with Samyam Timsina. Open to full-time developer roles building real-world systems. Email: timsinasamyam3@gmail.com",
      },
      { property: "og:title", content: "Contact — Samyam Timsina" },
      {
        property: "og:description",
        content: "Open to full-time roles and internships building real-world systems.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const links = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: "GitHub", value: "samyamtimsina", href: profile.github },
    profile.linkedin
      ? { icon: Linkedin, label: "LinkedIn", value: "samyam timsina", href: profile.linkedin }
      : null,
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href: string }[];

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Let's <span className="text-gradient">build something real</span>.
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        I'm open to{" "}
        <span className="text-foreground">full-time developer roles and internships</span> focused
        on building real-world systems. If you're working on something that actually matters —
        backend, infrastructure, healthtech, fintech — I'd love to hear from you.
      </p>

      <div className="mt-12 space-y-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="card-surface group flex items-center justify-between rounded-xl px-6 py-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <p className="text-foreground">{value}</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </section>
  );
}
