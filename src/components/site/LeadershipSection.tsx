import { motion } from "framer-motion";
import { Award, Shield, Building2, Briefcase, Quote } from "lucide-react";
import felixHeadshot from "@/assets/felix-olorunda.png.asset.json";

const credentials = [
  { icon: Award, label: "ANIVS", desc: "Chartered Valuer" },
  { icon: Shield, label: "RSV", desc: "Registered Surveyor" },
  { icon: Building2, label: "PhD", desc: "Strategic Leadership" },
  { icon: Briefcase, label: "10+", desc: "Years Institutional" },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/30 to-secondary/40 relative overflow-hidden">
      {/* Subtle decorative radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-accent/5 to-transparent opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs tracking-[0.18em] uppercase text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Group Governance
          </div>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl text-foreground text-balance">
            Leadership & <span className="italic text-accent">Governance</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Executive stewardship, academic rigour, and operational command united under one vision.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column — Executive Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Premium framing container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-deep/20 ring-1 ring-border/50">
                <img
                  src={felixHeadshot.url}
                  alt="ESV Felix Olorunda — Group Chief Executive Officer"
                  className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Subtle gradient overlay at bottom for depth */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-deep/40 to-transparent" />
              </div>

              {/* Floating name plate */}
              <div className="absolute -bottom-6 left-6 right-6 lg:left-8 lg:right-8">
                <div className="rounded-xl border border-white/10 bg-navy-deep/90 backdrop-blur-md px-6 py-5 shadow-xl">
                  <div className="text-xs uppercase tracking-[0.2em] text-accent">Group Chief Executive Officer</div>
                  <h3 className="mt-1 font-display text-xl lg:text-2xl text-white leading-tight">
                    ESV Felix Olorunda
                  </h3>
                  <p className="text-sm text-white/60 mt-0.5">ANIVS · RSV · PhD</p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-3 -left-3 h-16 w-16 border-l-2 border-t-2 border-accent/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 h-16 w-16 border-r-2 border-b-2 border-accent/40 rounded-br-2xl pointer-events-none" />
            </div>

            {/* Credential badges */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="rounded-lg border border-border bg-card px-3 py-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mx-auto h-9 w-9 rounded-md bg-secondary text-foreground flex items-center justify-center mb-2">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div className="font-display text-lg text-foreground">{c.label}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{c.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Biography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="lg:pt-6">
              {/* Name plate — desktop visibility */}
              <div className="hidden lg:block mb-8">
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Group Chief Executive Officer</div>
                <h3 className="mt-2 font-display text-3xl xl:text-4xl text-foreground leading-tight">
                  ESV Felix Olorunda, <span className="text-accent">ANIVS, RSV, PhD</span>
                </h3>
                <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
              </div>

              {/* Quote block */}
              <div className="relative rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 lg:p-8 mb-8">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-accent/20" />
                <blockquote className="relative pl-8 text-lg lg:text-xl font-display text-foreground leading-relaxed italic">
                  "We build trusted infrastructure across valuation, real estate, and protection — uniting professional rigour with operational excellence for clients who demand both."
                </blockquote>
              </div>

              {/* Biography paragraphs */}
              <div className="space-y-6 text-muted-foreground leading-[1.8]">
                <p>
                  Dr. Felix Olorunda is a highly distinguished asset valuation expert, real estate developer, and recognized security analyst with over a decade of proven institutional experience in Nigeria. Under his unified strategic vision, SSV Group Global has grown into a premium multidisciplinary enterprise — pioneering standards in professional estate surveying, corporate facility management, and elite tactical protection services.
                </p>
                <p>
                  As a respected voice in national risk management and security consulting, Dr. Olorunda combines academic rigor with high-stakes operational expertise, ensuring that all three corporate subsidiaries operate with an obsession for quality execution, strict confidentiality, and absolute reliability.
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-border via-accent/30 to-transparent" />

              {/* Leadership pillars */}
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { title: "Strategic Vision", desc: "Unified direction across all subsidiaries." },
                  { title: "Quality Obsession", desc: "Zero-compromise on execution standards." },
                  { title: "Confidentiality", desc: "Absolute discretion in every engagement." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border/60 bg-card/40 p-5 hover:bg-card/80 transition-colors"
                  >
                    <div className="text-xs uppercase tracking-[0.15em] text-accent font-medium">{item.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
