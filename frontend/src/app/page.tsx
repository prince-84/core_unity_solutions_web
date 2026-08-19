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
        {/* Subtle Starry background for the entire hero section */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 z-0"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 25% 10%, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 50% 25%, white, transparent),
              radial-gradient(1.5px 1.5px at 75% 15%, rgba(255,255,255,0.6), transparent),
              radial-gradient(1.5px 1.5px at 10% 60%, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 85% 55%, white, transparent),
              radial-gradient(2px 2px at 30% 85%, rgba(255,255,255,0.5), transparent),
              radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.9), transparent)
            `,
            backgroundSize: '180px 180px'
          }}
        ></div>

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
