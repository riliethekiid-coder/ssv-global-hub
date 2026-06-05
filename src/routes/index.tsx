import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SubsidiaryGrid } from "@/components/site/SubsidiaryGrid";
import { FelixSection } from "@/components/site/FelixSection";
import { ConcernsSection } from "@/components/site/ConcernsSection";
import { ProtectionSection } from "@/components/site/ProtectionSection";
import { LeadershipSection } from "@/components/site/LeadershipSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SSV Group Global — Valuation, Real Estate & Protection Services" },
      {
        name: "description",
        content:
          "SSV Group Global is the corporate umbrella for Felix Olorunda & Co, SSV Concerns Ventures, and SSV Protection Services — delivering valuation, real estate, and elite security operations.",
      },
      { property: "og:title", content: "SSV Group Global — Corporate Hub" },
      {
        property: "og:description",
        content:
          "Strategic solutions in real estate, valuation, and security operations. Led by ESV Felix Olorunda, ANIVS, RSV, PhD.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SubsidiaryGrid />
        <FelixSection />
        <ConcernsSection />
        <ProtectionSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
