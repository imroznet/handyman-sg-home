import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground shadow-[var(--shadow-soft)]">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Handyman<span className="text-brand">SG</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <a
            href="tel:+6583122991"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
        <button
          className="md:hidden p-2 rounded-md hover:bg-brand-soft"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-4 py-3 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-brand-soft"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+6583122991"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
