import { motion } from "framer-motion";
import { Building2, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";

const cards = [
  {
    id: "felix",
    name: "Felix Olorunda & Co",
    tag: "Estate Surveyors & Valuers",
    desc: "Independent professional valuation, asset advisory, and statutory reporting for institutions, banks, and private clients.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    accent: "from-accent/30 to-accent/0",
  },
  {
    id: "concerns",
    name: "SSV Concerns Ventures",
    tag: "Real Estate · Facilities · Developers",
    desc: "Integrated property development, premium real estate, and full-spectrum facilities management.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-accent/30 to-emerald-accent/0",
  },
  {
    id: "protection",
    name: "SSV Protection Services Ltd",
    tag: "Security & Surveillance",
    desc: "Executive protection, security consultancy, surveillance systems, and integrated risk operations.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1200&q=80",
    accent: "from-slate-cool/40 to-slate-cool/0",
  },
];

export function SubsidiaryGrid() {
  return (
    <section id="subsidiaries" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — The Group</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-foreground text-balance max-w-2xl">
              Three specialised firms. One disciplined standard.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each subsidiary operates under unified governance, sharing infrastructure,
            ethics, and an obsession with quality of execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth" })}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative text-left rounded-xl border border-border bg-card p-7 overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] transition-shadow"
            >
              <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${c.accent} blur-2xl opacity-70`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-sm bg-primary text-primary-foreground flex items-center justify-center">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all" />
                </div>
                <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{c.tag}</div>
                <h3 className="mt-2 font-display text-2xl text-foreground leading-snug">{c.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-foreground border-b border-accent/60 pb-0.5">
                  Visit division
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
