import { motion } from "framer-motion";
import {
  GraduationCap,
  UserCheck,
  Users,
  Search,
  ClipboardCheck,
  PackageSearch,
  Camera,
  ShieldAlert,
} from "lucide-react";

const services = [
  { icon: GraduationCap, title: "Security Training & Consultancy", desc: "Tactical training, executive briefings, and bespoke security consultancy for corporate teams and private clients." },
  { icon: UserCheck, title: "Executive / VIP Protection", desc: "Discreet close protection for principals, dignitaries, and high-net-worth individuals — domestic and international." },
  { icon: Users, title: "Escort Duties", desc: "Armed and unarmed escort for valuables, cash-in-transit, sensitive assets, and convoy movement." },
  { icon: Search, title: "Background Checks", desc: "Forensic vetting, KYC, employment screening, and integrity investigations." },
  { icon: ClipboardCheck, title: "Security Survey & Assessment", desc: "Comprehensive site, residential, and corporate risk assessments with prioritised mitigation plans." },
  { icon: PackageSearch, title: "Equipment Procurement", desc: "Sourcing and supply of certified security hardware, surveillance, and access control systems." },
  { icon: Camera, title: "Installation & Maintenance", desc: "Professional CCTV installation, alarm systems, access control deployment, and ongoing system maintenance." },
  { icon: ShieldAlert, title: "Manned Guarding Operations", desc: "Trained, vetted, and supervised guard forces for residential estates, commercial sites, and industrial facilities." },
];

export function ProtectionSection() {
  return (
    <section id="protection" className="relative py-24 lg:py-32 bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 hero-radial opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Section C</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
              SSV Protection Services <span className="text-accent">Ltd.</span>
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">
              Security · Surveillance · Risk Operations
            </p>
          </div>
          <p className="lg:col-span-5 text-white/70 leading-relaxed">
            A fully licensed protective services company delivering disciplined,
            intelligence-led security solutions to private individuals, corporates,
            and institutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative bg-navy-deep p-7 hover:bg-navy transition-colors"
            >
              <div className="h-11 w-11 border border-accent/40 bg-accent/10 text-accent flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg text-white leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
