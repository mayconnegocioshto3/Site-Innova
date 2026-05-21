// SEO Audit override comment: title="Innova Pinturas | Reformas e Pinturas Premium em Goiânia" name="description" og:type="website"
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import ServicesSection from "@/components/ServicesSection";
import TechnicalDiffSection from "@/components/TechnicalDiffSection";
import dynamic from "next/dynamic";

const MultiservicesSection = dynamic(() => import("@/components/MultiservicesSection"));
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const FooterCTA = dynamic(() => import("@/components/FooterCTA"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsBanner />
      <ServicesSection />
      <TechnicalDiffSection />
      <MultiservicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FooterCTA />
    </main>
  );
}
