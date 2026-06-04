import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-sm bg-accent text-accent-foreground flex items-center justify-center text-xs font-semibold">SSV</span>
            <span className="font-display tracking-[0.18em] text-lg">SSV GROUP GLOBAL</span>
          </div>
          <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
            A multidisciplinary corporate umbrella delivering valuation, real estate,
            and protection services with institutional discipline.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
            <Globe className="h-4 w-4 text-accent" /> ssvgroupglobal.com
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Subsidiaries</div>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="#felix" className="hover:text-accent transition">Felix Olorunda & Co</a></li>
            <li><a href="#concerns" className="hover:text-accent transition">SSV Concerns Ventures</a></li>
            <li><a href="#protection" className="hover:text-accent transition">SSV Protection Services</a></li>
            <li><a href="#contact" className="hover:text-accent transition">Contact the Group</a></li>
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Headquarters</div>
          <div className="space-y-4 text-sm text-white/80">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>Centage Plaza, 14, Allen Avenue, Ikeja, Lagos, Nigeria.</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>
                <a href="tel:+2348171147744" className="hover:text-accent transition">08171147744</a>
                <span className="text-white/40 mx-2">·</span>
                <a href="tel:+2348033057313" className="hover:text-accent transition">08033057313</a>
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href="mailto:feolorunda@gmail.com" className="hover:text-accent transition">
                feolorunda@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© 2026 SSV Group Global. All Rights Reserved.</div>
          <div>Group CEO · ESV Felix Olorunda, ANIVS, RSV, PhD</div>
        </div>
      </div>
    </footer>
  );
}
