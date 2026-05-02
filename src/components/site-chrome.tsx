import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-primary">~/</span>
          {profile.name.split(" ")[0].toLowerCase()}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
        >
          <Github className="h-4 w-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Built with React, TanStack & Tailwind.</p>
      </div>
    </footer>
  );
}
