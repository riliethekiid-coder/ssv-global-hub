import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ChevronDown } from "lucide-react";
import felixHeadshot from "@/assets/felix-olorunda.png.asset.json";

export function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hub" className="relative hero-radial text-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Modern corporate skyscraper"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/70" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs tracking-[0.18em] uppercase text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> The SSV Group · Est. Excellence
          </div>
          <h1 className="mt-6 font-display text-[2.6rem] sm:text-5xl lg:text-[4.2rem] leading-[1.02] text-balance">
            Strategic Solutions in <span className="text-accent">Real Estate</span>,
            <br className="hidden sm:block" /> Valuation, and <span className="italic">Security Operations.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
            A multidisciplinary corporate umbrella delivering professional valuation,
            premium real estate development, facilities management, and elite protection
            services to private, corporate, and institutional clients.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => go("subsidiaries")}
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-sm font-medium hover:bg-accent/90 transition"
            >
              Explore Our Subsidiaries
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3.5 rounded-sm font-medium hover:bg-white/5 transition"
            >
              Contact the Group <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 max-w-md gap-6 text-white/70">
            {[
              ["3", "Subsidiaries"],
              ["20+", "Years Experience"],
              ["Nationwide", "Footprint"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-2xl text-white">{k}</div>
                <div className="text-xs uppercase tracking-wider mt-1">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Executive profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="flex items-start gap-5">
              <div className="relative shrink-0">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-accent/80 to-emerald-accent flex items-center justify-center text-2xl font-display text-navy-deep">
                  FO
                </div>
                <BadgeCheck className="absolute -bottom-1 -right-1 h-6 w-6 text-accent bg-navy-deep rounded-full p-0.5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-accent">Group Chief Executive</div>
                <h3 className="mt-1 font-display text-2xl text-white leading-tight">
                  ESV Felix Olorunda
                </h3>
                <p className="text-sm text-white/60 mt-1">ANIVS · RSV · PhD</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              "We build trusted infrastructure across valuation, real estate, and
              protection — uniting professional rigour with operational excellence
              for clients who demand both."
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["Valuation", "Real Estate", "Protection"].map((t) => (
                <div key={t} className="rounded-sm border border-white/10 bg-white/[0.03] py-2 text-[11px] uppercase tracking-wider text-white/70">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
