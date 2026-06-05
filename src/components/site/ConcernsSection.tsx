import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Check, MapPin, Bed, Square, Layers } from "lucide-react";
import logoBlue from "@/assets/ssv-logo-blue.png.asset.json";

const properties = [
  { name: "Allen Heights Residences", loc: "Ikeja, Lagos", beds: 4, sqft: "320 sqm", tag: "Luxury Residential", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80" },
  { name: "Centage Corporate Tower", loc: "Allen Avenue, Lagos", beds: 0, sqft: "2,400 sqm", tag: "Grade-A Office", img: "https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&w=900&q=80" },
  { name: "The Sapphire Villas", loc: "Lekki Phase 1", beds: 5, sqft: "480 sqm", tag: "Smart Homes", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80" },
  { name: "Aurelia Mixed-Use", loc: "Victoria Island", beds: 3, sqft: "180 sqm", tag: "Live · Work · Play", img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=900&q=80" },
];

const facilities = [
  "Hard & Soft Facilities Management",
  "Mechanical, Electrical & Plumbing Maintenance",
  "Janitorial & Environmental Services",
  "Energy & Utility Management",
  "Service Charge Administration",
  "Vendor & Contractor Oversight",
  "Health, Safety & Environment Compliance",
  "Tenant Relationship Management",
];

const timeline = [
  ["01", "Land Acquisition & Due Diligence", "Site identification, title verification, feasibility, and capital structuring."],
  ["02", "Design & Approvals", "Architectural design, planning permits, and stakeholder alignment."],
  ["03", "Construction & Delivery", "Programme management, quality assurance, and milestone execution."],
  ["04", "Handover & Aftercare", "Snagging, commissioning, and ongoing facilities management."],
];

export function ConcernsSection() {
  return (
    <section id="concerns" className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-emerald-accent to-primary text-primary-foreground flex items-center justify-center shadow-lg ring-2 ring-emerald-accent/30">
                <Layers className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Section B</div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-accent mt-0.5">Subsidiary 02</p>
              </div>
            </div>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground text-balance">
              SSV Concerns <span className="text-accent">Ventures</span>
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Real Estate · Facilities Management · Developers
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              A full-service real estate enterprise — developing, managing, and curating
              premium environments across residential, commercial, and mixed-use sectors.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80"
                alt="Modern luxury residential development"
                className="w-full h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="real-estate" className="mt-12">
          <TabsList className="bg-secondary/60 p-1 rounded-sm h-auto flex-wrap gap-1">
            <TabsTrigger value="real-estate" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-sm px-5 py-2.5">
              Real Estate
            </TabsTrigger>
            <TabsTrigger value="facilities" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-sm px-5 py-2.5">
              Facilities Management
            </TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-sm px-5 py-2.5">
              Property Development
            </TabsTrigger>
          </TabsList>

          <TabsContent value="real-estate" className="mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {properties.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider bg-accent text-accent-foreground px-2 py-1 rounded-sm shadow">
                      {p.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-lg text-foreground">{p.name}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3.5 w-3.5" /> {p.loc}
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      {p.beds > 0 && (
                        <span className="inline-flex items-center gap-1"><Bed className="h-3.5 w-3.5" /> {p.beds} Bed</span>
                      )}
                      <span className="inline-flex items-center gap-1"><Square className="h-3.5 w-3.5" /> {p.sqft}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="facilities" className="mt-8">
            <div className="rounded-xl border border-border bg-card p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {facilities.map((f) => (
                  <div key={f} className="flex items-start gap-3 border-b border-border/60 pb-4">
                    <div className="mt-0.5 h-6 w-6 rounded-sm bg-emerald-accent/15 text-emerald-accent flex items-center justify-center">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-foreground/90 text-[15px]">{f}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-8">
            <div className="relative">
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {timeline.map(([num, title, body], i) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex lg:items-center gap-6 lg:gap-12 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    <div className="hidden lg:block flex-1" />
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                    <div className="flex-1 ml-12 lg:ml-0 rounded-xl border border-border bg-card p-6">
                      <div className="text-xs font-mono tracking-widest text-accent">PHASE {num}</div>
                      <h4 className="mt-2 font-display text-xl text-foreground">{title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
