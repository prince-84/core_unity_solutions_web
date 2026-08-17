import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutAccordion } from '@/components/AboutAccordion';
import { TeamSection } from '@/components/TeamSection';

export default function AboutPage() {
  return (
    <div className="bg-black text-white relative flex flex-col font-sans min-h-screen">
      <Navbar />
      
      {/* Background Red Radial Glow for Hero */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at top center, rgba(160, 20, 25, 0.35) 0%, transparent 65%)',
          filter: 'blur(50px)'
        }}
      />

      {/* Hero Section */}
      <main className="h-[600px] flex flex-col items-center justify-center relative z-10 px-6">
        
        {/* Top Label */}
        <div className="flex items-center justify-center gap-3 mb-4 mt-12">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c52833] shadow-[0_0_8px_3px_rgba(220,38,38,0.5)]"></span>
          </div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-wide text-white">About Us</h1>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-[44px] font-medium leading-[1.3] text-white tracking-wide font-sans">
          From Dubai's best minds to <br className="hidden md:block" />
          a global powerhouse
        </h2>
        
      </main>

      {/* Content Section: We are a Creative Bold Digital Agency */}
      <section className="bg-white text-black py-24 px-6 sm:px-12 md:px-20 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col pr-0 lg:pr-10">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8 text-[#1f1f1f] tracking-tight">
              We are a <span className="text-[#c52833]">Creative Bold</span><br/>
              Digital Agency based In UAE
            </h2>
            
            <p className="text-gray-700 text-[17px] leading-relaxed mb-6 font-medium">
              With <span className="font-bold text-black">8 + years of experience</span>, 500+ prestigious clients, 
              50+ expert developers, and a 200+ strong team, Core Unity Solutions 
              stands out as Dubai's No.1 digital transformation and marketing agency.
            </p>
            
            <p className="text-gray-700 text-[17px] leading-relaxed">
              We deliver efficient web, mobile, and marketing solutions powered 
              by Innovative AI and emerging tech like AR, VR, and Blockchain. 
              After our proven track record in Dubai, we're now expanding 
              globally across the USA and MENA region — empowering global 
              brands to evolve, scale, and lead in this digital age.
            </p>
          </div>

          {/* Right Content (Image & Floating Logo) */}
          <div className="relative w-full h-[500px] md:h-[600px] mt-10 lg:mt-0">
            {/* Image Wrapper to handle rounded corners without clipping the floating box */}
            <div className="absolute inset-0 rounded-[30px] shadow-2xl overflow-hidden">
              <Image 
                src="/image.png" 
                alt="Core Unity Team Meeting" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Floating Logo Box using Rectangle.png */}
            <div className="absolute bottom-8 -left-4 md:left-[-132px] w-[264px] h-[81px] shadow-xl flex items-center justify-center rounded-xl overflow-hidden z-20">
              <Image 
                src="/Rectangle.png" 
                alt="Rectangle Background" 
                fill 
                className="object-cover z-0"
              />
              <Image 
                src="/logo1.png" 
                alt="Core Unity Solutions" 
                width={180} 
                height={50} 
                className="w-auto h-10 md:h-12 object-contain relative z-10 px-4"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Content Section: What Drives Us Forward */}
      <section className="bg-black text-white py-24 md:py-32 px-6 sm:px-12 md:px-20 relative z-10 overflow-hidden font-sans border-t border-white/5">
        
        {/* Background Red Radial Glow - Top Center */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at top center, rgba(160, 20, 25, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Background Image - Left Corner */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-10 md:left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-60 pointer-events-none z-0">
          <Image 
            src="/bg_image.png" 
            alt="Background Pattern" 
            fill 
            className="object-contain object-left"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 relative z-10">
          
          {/* Left Content */}
          <div className="flex flex-col pt-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_8px_3px_rgba(220,38,38,0.5)]"></span>
              </div>
              <h2 className="text-4xl md:text-[55px] font-bold tracking-wide text-white leading-[1.15]">
                What Drives Us<br/>Forward
              </h2>
            </div>
          </div>

          {/* Right Content (Accordion) */}
          <div className="flex flex-col pt-10">
            <AboutAccordion />
          </div>
          
        </div>
      </section>

      {/* Fourth Section: Industries We Serve */}
      <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle white/gray zebra wave background */}
        <div 
          className="absolute inset-0 z-0 opacity-40" 
          style={{
            backgroundImage: `url("/zebra_bg.svg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-[#c52833] blur-[3px] rounded-full scale-[1.8] opacity-70" />
                <div className="w-2 h-2 bg-[#c52833] rounded-full relative z-10" />
              </div>
              <span className="text-[13px] font-medium text-gray-700 ml-1 tracking-wide">
                Serving Diverse Sectors Across the UAE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f1f1f] tracking-tight">
              Industries We Serve
            </h2>
          </div>

          {/* Grid of Industries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            
            {/* Real Estate */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="relative w-12 h-12 shrink-0">
                  <img src="/redbg.png" alt="red bg" className="absolute -left-1.5 -bottom-1.5 w-full h-full object-cover" />
                  <img src="/blackbg.png" alt="black bg" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-2.5">
                    <img src="/state_img.png" alt="Real Estate" className="w-full h-full object-contain filter invert brightness-0" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Real Estate</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                Leading with quality and effectively showcasing property
              </p>
            </div>

            {/* Retail & eCommerce */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="relative w-12 h-12 shrink-0">
                  <img src="/redbg.png" alt="red bg" className="absolute -left-1.5 -bottom-1.5 w-full h-full object-cover" />
                  <img src="/blackbg.png" alt="black bg" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-2.5">
                    <img src="/retail_img.png" alt="Retail & eCommerce" className="w-full h-full object-contain filter invert brightness-0" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Retail & eCommerce</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                Driving sales through optimized digital Experiences.
              </p>
            </div>

            {/* Healthcare & Wellness */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="relative w-12 h-12 shrink-0">
                  <img src="/redbg.png" alt="red bg" className="absolute -left-1.5 -bottom-1.5 w-full h-full object-cover" />
                  <img src="/blackbg.png" alt="black bg" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-2.5">
                    <img src="/health_img.png" alt="Healthcare & Wellness" className="w-full h-full object-contain filter invert brightness-0" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Healthcare & Wellness</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                Building trust with professional online solutions.
              </p>
            </div>

            {/* Food & Beverage */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="relative w-12 h-12 shrink-0">
                  <img src="/redbg.png" alt="red bg" className="absolute -left-1.5 -bottom-1.5 w-full h-full object-cover" />
                  <img src="/blackbg.png" alt="black bg" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-2.5">
                    <img src="/food_img.png" alt="Food & Beverage" className="w-full h-full object-contain filter invert brightness-0" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Food & Beverage</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                Creating engaging brands that attract customers.
              </p>
            </div>

            {/* Tech Startups */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="relative w-12 h-12 shrink-0">
                  <img src="/redbg.png" alt="red bg" className="absolute -left-1.5 -bottom-1.5 w-full h-full object-cover" />
                  <img src="/blackbg.png" alt="black bg" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-2.5">
                    <img src="/tect_img.png" alt="Tech Startups" className="w-full h-full object-contain filter invert brightness-0" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Tech Startups</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                Supporting growth with scalable digital strategies.
              </p>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="relative w-12 h-12 shrink-0">
                  <img src="/redbg.png" alt="red bg" className="absolute -left-1.5 -bottom-1.5 w-full h-full object-cover" />
                  <img src="/blackbg.png" alt="black bg" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-2.5">
                    <img src="/edu_img.png" alt="Education" className="w-full h-full object-contain filter invert brightness-0" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Education</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                optimizing learning through modern digital platforms.
              </p>
            </div>

            {/* Hospitality & Tourism */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="relative w-12 h-12 shrink-0">
                  <img src="/redbg.png" alt="red bg" className="absolute -left-1.5 -bottom-1.5 w-full h-full object-cover" />
                  <img src="/blackbg.png" alt="black bg" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-2.5">
                    <img src="/hospitality_image.png" alt="Hospitality & Tourism" className="w-full h-full object-contain filter invert brightness-0" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Hospitality & Tourism</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                Delivering seamless and engaging guest experiences.
              </p>
            </div>

            {/* Restaurant */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="relative w-12 h-12 shrink-0">
                  <img src="/redbg.png" alt="red bg" className="absolute -left-1.5 -bottom-1.5 w-full h-full object-cover" />
                  <img src="/blackbg.png" alt="black bg" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-2.5 relative">
                    <img src="/res_table_img.png" alt="Table" className="w-4 h-4 absolute top-1 left-1/2 -translate-x-1/2 object-contain filter invert brightness-0" />
                    <img src="/rest_chair_img.png" alt="Chair 1" className="w-3.5 h-3.5 absolute left-1.5 top-3.5 object-contain filter invert brightness-0" />
                    <img src="/rest_chair_img2.png" alt="Chair 2" className="w-3.5 h-3.5 absolute right-1.5 top-3.5 object-contain filter invert brightness-0" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Restaurant</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                Providing strong branding and curating digital Presence.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Clients Section */}
      <section className="relative bg-[#020202] text-white py-24 overflow-hidden border-t border-white/5">
        {/* Grid Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '3rem 3rem',
            backgroundPosition: 'center top'
          }}
        />
        
        {/* Red Center Glow */}
        <div 
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-5xl h-[800px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(160, 10, 15, 0.4) 0%, transparent 60%)',
            filter: 'blur(60px)'
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_8px_3px_rgba(220,38,38,0.5)]"></span>
              </div>
              <span className="text-xs tracking-widest text-gray-400 ml-1 uppercase">Our Clients</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold max-w-4xl leading-tight text-white">
              5-Star Rated, Works <br className="hidden md:block" /> with CoreUnity Solutions
            </h2>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-20 relative">
            
            {/* 11 Logo Placeholders with Text */}
            {[
              { name: "SALWA", sub: "REAL ESTATE" },
              { name: "Dental ZORG", sub: "DUTCH DENTAL CLINIC" },
              { name: "iRMG", sub: "INTERNATIONAL RESOURCE MANAGEMENT GROUP" },
              { name: "CAJUN GRILL", sub: "BOLD FLAVORS. TOGETHER." },
              { name: "UAE OffPlan", sub: "" },
              { name: "AL HILAL", sub: "RESTAURANT" },
              { name: "FS", sub: "ADVISORY" },
              { name: "The HANDY MAN", sub: "" },
              { name: "Soul & Soil", sub: "PROPERTIES LLC" },
              { name: "APPELLO", sub: "INTERIORS" },
              { name: "Suki Hana", sub: "JAPAN" }
            ].map((client, i) => (
              <div 
                key={i} 
                className={`aspect-[3/2] flex flex-col items-center justify-center p-4 transition-colors hover:bg-white/5 cursor-pointer text-center
                  border-b border-white/[0.04]
                  ${(i + 1) % 6 !== 0 ? 'lg:border-r lg:border-white/[0.04]' : ''}
                  ${(i + 1) % 3 !== 0 ? 'md:border-r md:border-white/[0.04]' : ''}
                  ${(i + 1) % 2 !== 0 ? 'border-r border-white/[0.04]' : ''}
                `}
              >
                <span className="text-white font-bold text-lg md:text-xl">{client.name}</span>
                {client.sub && <span className="text-white/40 text-[9px] mt-1 tracking-[0.2em] uppercase max-w-[90%] mx-auto">{client.sub}</span>}
              </div>
            ))}
            
            {/* Globe Item (Index 11) */}
            <div className={`aspect-[3/2] flex flex-col items-center justify-center p-6 transition-colors hover:bg-white/5 cursor-pointer border-b border-white/[0.04] lg:border-b-0`}>
              <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center overflow-hidden">
                <Image src="/earth_globe.png" alt="Globe" width={48} height={48} className="object-contain" />
              </div>
              <p className="text-xs text-center text-gray-300 leading-snug">
                500+ Clients <br /> worldwide
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <TeamSection />

      {/* Footer is pushed to the bottom of the page */}
      <div className="bg-black relative z-20 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
