import { Link } from "@tanstack/react-router";
import { Github, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

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

        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px]">
              <nav className="flex flex-col gap-2 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50"
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-foreground bg-secondary/50" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

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
        <a
          href={`mailto:${profile.email}`}
          className="font-mono hover:text-primary transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
