import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Scale, Factory, FileText, Briefcase, Building, LineChart } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Asset Valuation",
    body: "Comprehensive valuation of real estate, financial, and tangible corporate assets for acquisitions, mergers, audits, and reporting standards (IFRS / IVS compliant).",
  },
  {
    icon: Factory,
    title: "Plant & Machinery Valuation",
    body: "Specialist valuation of industrial plant, machinery, equipment, and capital assets for insurance, financing, leasing, and disposal purposes.",
  },
  {
    icon: FileText,
    title: "Statutory Valuations",
    body: "Court-admissible, regulator-compliant valuations including rating, compensation, probate, capital gains, and stamp duty assessments.",
  },
  {
    icon: Briefcase,
    title: "Property Management & Agency",
    body: "Full lifecycle landlord representation, tenant sourcing, lease administration, and yield optimisation across commercial and residential portfolios.",
  },
  {
    icon: Building,
    title: "Feasibility & Investment Appraisal",
    body: "Highest-and-best-use studies, investment modelling, and development appraisals to de-risk capital allocation decisions.",
  },
  {
    icon: LineChart,
    title: "Market Research & Advisory",
    body: "Submarket analytics, comparables intelligence, and strategic advisory for investors, developers, and lenders.",
  },
];

export function FelixSection() {
  return (
    <section id="felix" className="py-24 lg:py-32 bg-gradient-to-b from-secondary/40 to-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-navy text-primary-foreground flex items-center justify-center shadow-lg ring-2 ring-accent/30">
              <Building className="h-6 w-6" strokeWidth={2.25} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Section A</div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent mt-0.5">Subsidiary 01</p>
            </div>
          </div>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground text-balance">
            Felix Olorunda <span className="italic text-accent">& Co.</span>
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Estate Surveyors & Valuers
          </p>

          <div className="mt-6 rounded-xl overflow-hidden border border-border shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Architectural blueprints and surveyor's plans"
              className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            A professional valuation practice built on independence, technical rigour,
            and institutional trust. We deliver fair, defensible opinions of value across
            asset classes for Nigeria's most discerning clients.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-px bg-border rounded-md overflow-hidden border border-border">
            {[
              ["ANIVS", "Chartered Practice"],
              ["IVS", "Compliant Methodology"],
              ["20+", "Years of Practice"],
              ["100%", "Independent"],
            ].map(([k, v]) => (
              <div key={v} className="bg-card p-5">
                <div className="font-display text-2xl text-foreground">{k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="rounded-xl border border-border bg-card p-2">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {services.map((s, i) => (
                <AccordionItem
                  key={s.title}
                  value={`item-${i}`}
                  className="border-b border-border/70 last:border-0 px-4"
                >
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-sm bg-secondary text-foreground flex items-center justify-center">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-lg text-foreground">{s.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pl-14 pr-4">
                    {s.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
