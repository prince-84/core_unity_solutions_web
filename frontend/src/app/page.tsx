import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EarthGlobe } from "@/components/EarthGlobe";
import { GlobalPresence } from "@/components/GlobalPresence";
import { LogoTicker } from "@/components/LogoTicker";
import { ServicesSection } from "@/components/ServicesSection";
import { CoreStrengthsSection } from "@/components/CoreStrengthsSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { OurClientsSection } from "@/components/OurClientsSection";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative flex flex-col font-sans">
      <Navbar />
      
      <div className="flex-1 flex flex-col relative z-10 w-full pt-16">
        <Hero />
        <EarthGlobe />
        <GlobalPresence />
        <LogoTicker />
      </div>

      <ServicesSection />
      <CoreStrengthsSection />
      <OurWorkSection title="10+ yrs of expertise in providing innovative solutions" />
      <OurClientsSection />
      <TeamSection />
      <TestimonialSection />
      <BlogSection maxPosts={3} />
      <Footer />
    </main>
  );
}
