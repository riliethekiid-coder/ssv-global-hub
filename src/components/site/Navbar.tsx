import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoBlue from "@/assets/ssv-logo-blue.png.asset.json";

const links = [
  { label: "Home / Hub", id: "hub" },
  { label: "Felix Olorunda & Co", id: "felix" },
  { label: "SSV Concerns Ventures", id: "concerns" },
  { label: "SSV Protection Services", id: "protection" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border/60 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
          : "backdrop-blur-md bg-background/40"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => go("hub")} className="group flex items-center gap-2.5">
          <span className="relative h-10 w-10 rounded-md bg-white flex items-center justify-center shadow-sm ring-1 ring-border overflow-hidden">
            <img src={logoBlue.url} alt="SSV Group Global" className="h-8 w-8 object-contain" />
          </span>
          <span className="font-sans text-sm sm:text-[15px] font-bold tracking-[0.22em] text-foreground leading-none flex items-center gap-1.5">
            SSV GROUP <span className="text-accent">GLOBAL</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent ml-0.5" />
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-1 after:h-px after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="ml-3 inline-flex items-center rounded-sm bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Engage Us
          </button>
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm border border-border bg-background/70"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-border/60 bg-background/95 backdrop-blur-md",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 py-4 flex flex-col">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-left py-3 text-sm text-foreground/90 border-b border-border/50 last:border-0"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
