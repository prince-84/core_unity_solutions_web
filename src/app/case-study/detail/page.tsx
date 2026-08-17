import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function CaseStudyDetailPage() {
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
        <div className="flex items-center justify-center gap-3 mb-8 mt-12">
          <div className="w-2.5 h-2.5 bg-[#c52833] rounded-full shadow-[0_0_12px_2px_rgba(197,40,51,0.6)]" />
          <h1 className="text-[28px] md:text-[32px] font-bold tracking-wide text-white">Case Studies</h1>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-[52px] font-bold leading-[1.2] text-white mb-6 tracking-tight">
          Stories of strategy, <br />
          creativity, and measurable impact.
        </h2>

        {/* Sub-description */}
        <p className="text-center text-gray-300 text-lg md:text-[21px] max-w-[850px] leading-[1.6] font-light">
          Real brands, real challenges, real transformations. Explore how we help <br className="hidden md:block" />
          teams grow with design, data, and intelligent marketing.
        </p>
        
      </main>

      {/* Main Content Section */}
      <section className="bg-white text-black py-20 px-6 sm:px-12 md:px-20 relative z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Case Study Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Featured Image Placeholder */}
            <div className="w-full h-[300px] md:h-[400px] bg-red-900 rounded-2xl overflow-hidden relative shadow-lg flex items-center justify-center">
              <span className="text-white/50 font-medium">Featured Image Placeholder</span>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CoreUnity Solutions is a fast-growing AI-powered strategy platform helping businesses make smarter digital decisions. While the product was highly capable, the existing website failed to communicate its value clearly. The interface felt outdated, messaging lacked focus, and conversions were underperforming despite strong traffic.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our goal was to create a sharp, modern web experience that instantly communicates intelligence, trust, and clarity. The result is a high-performance website designed to guide users smoothly from understanding to action.
              </p>
            </div>

            {/* Project Goal */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Project Goal</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-600 font-medium marker:text-gray-400">
                <li>Clarify Product Value Within The First Scroll</li>
                <li>Improve Conversions Through Structured Storytelling</li>
                <li>Elevate Brand Perception With A Premium Interface</li>
                <li>Build A Scalable UI System For Future Growth</li>
              </ul>
            </div>

            {/* The Challenge */}
            <div>
              <h3 className="text-3xl font-bold mb-4">The Challenge</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-600 font-medium marker:text-gray-400">
                <li>Clarify Product Value Within The First Scroll</li>
                <li>Improve Conversions Through Structured Storytelling</li>
                <li>Elevate Brand Perception With A Premium Interface</li>
                <li>Build A Scalable UI System For Future Growth</li>
              </ul>
            </div>

            {/* Our Approach */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CoreUnity Solutions is a fast-growing AI-powered strategy platform helping businesses make smarter digital decisions. While the product was highly capable, the existing website failed to communicate its value clearly. The interface felt outdated, messaging lacked focus, and conversions were underperforming despite strong traffic.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our goal was to create a sharp, modern web experience that instantly communicates intelligence, trust, and clarity. The result is a high-performance website designed to guide users smoothly from understanding to action.
              </p>
            </div>

            {/* The Outcomes */}
            <div>
              <h3 className="text-3xl font-bold mb-4">The Outcomes</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-600 font-medium marker:text-gray-400">
                <li>Clarify Product Value Within The First Scroll</li>
                <li>Improve Conversions Through Structured Storytelling</li>
                <li>Elevate Brand Perception With A Premium Interface</li>
                <li>Build A Scalable UI System For Future Growth</li>
              </ul>
            </div>

            {/* Share Section Placeholder */}
            <div className="pt-6 border-t border-gray-200 flex items-center gap-4">
              <span className="font-semibold text-gray-700">Share:</span>
              <div className="flex gap-3 items-center">
                <Image src="/fb.png" alt="Facebook" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                <Image src="/insts.png" alt="Instagram" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                <Image src="/yt.png" alt="YouTube" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                <Image src="/link.png" alt="LinkedIn" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                <Image src="/threads.png" alt="Threads" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                <Image src="/file.png" alt="Copy Link" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Card */}
            <div>
              <h4 className="font-bold text-sm mb-3">Contact With Us Now !</h4>
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                    {/* Avatar Placeholder */}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Zeeshan Aashiq</h5>
                    <p className="text-sm text-gray-500">+92 343 1891919</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-black text-white py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    Call
                  </button>
                  <button className="flex-1 bg-[#d32f2f] text-white py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                    <Image src="/whatsapp_logo.png" alt="WhatsApp" width={16} height={16} />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* SMM Promo Card */}
            <div className="bg-black text-white rounded-3xl p-8 shadow-2xl text-center relative overflow-hidden max-w-[340px] mx-auto min-h-[580px] flex flex-col justify-between ml-auto mr-0 lg:mr-auto">
              
              {/* Red glow behind the grid */}
              <div 
                className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle, rgba(211,47,47,0.35) 0%, transparent 65%)',
                  filter: 'blur(40px)'
                }}
              />
              
              <div className="relative z-10 pt-4">
                <h3 className="text-3xl font-bold leading-[1.2] mb-6 tracking-tight">
                  Experience<br/>Growth with<br/>Leading SMM
                </h3>
                <p className="text-[#64748b] text-[15px] mb-8 leading-relaxed font-normal px-2">
                  At CoreUnity Solutions, squeeze out each platform's power and scope and utilize it for your brand success.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 relative z-10 pb-4">
                <div className="bg-[#111111] rounded-2xl p-4 border border-white/5">
                  <div className="font-bold text-2xl mb-1">100+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight mt-2">Brands<br/>Transformed</div>
                </div>
                <div className="bg-[#111111] rounded-2xl p-4 border border-white/5">
                  <div className="font-bold text-2xl mb-1">300+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight mt-2">Wins<br/>Delivered</div>
                </div>
                <div className="bg-white rounded-2xl p-4 text-black">
                  <div className="font-bold text-2xl text-[#d32f2f] mb-1">15+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight mt-2">Years of<br/>Innovation</div>
                </div>
                <div className="bg-white rounded-2xl p-4 text-black">
                  <div className="font-bold text-2xl text-[#d32f2f] mb-1">98%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight mt-2">Satisfaction</div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* CTA Banner (Full Width, 170px Height) */}
      <div className="w-full bg-[#c52833] h-auto md:h-[170px] py-8 md:py-0 px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden z-20">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
        
        <div className="text-white text-center md:text-left relative z-10 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <h2 className="text-3xl md:text-[34px] font-bold tracking-tight">Ready to grow your brand?</h2>
          <p className="text-white/90 text-[18px] font-light mt-1 md:mt-0">Let's build a strategy that delivers real results.</p>
        </div>
        
        <button className="bg-white text-[#c52833] px-10 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 relative z-10 whitespace-nowrap text-[16px]">
          Contact with us <span className="text-2xl leading-none">&rarr;</span>
        </button>
      </div>

      {/* Testimonial (Light Mode) */}
      <section className="relative w-full h-auto min-h-[553px] py-20 flex items-center justify-center bg-white text-black px-6 overflow-hidden font-sans border-t border-gray-100">
        
        {/* Background Zebra Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `url("/zebra_bg.svg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        {/* Content Container */}
        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Top Label */}
          <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-gray-500 mb-6 flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c52833] shadow-[0_0_8px_3px_rgba(220,38,38,0.2)]"></span>
            </span>
            Our Clients
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1f1f1f] tracking-tight leading-tight mb-8">
            Amazing Software Services
          </h2>

          {/* Testimonial Text */}
          <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed mb-12 max-w-[900px] mx-auto font-light">
            They crafted a digital experience tailored to our exact needs. From initial consultation to final deployment, their professionalism, responsiveness, and technical expertise were unmatched. The system they built has streamlined our operations, improved customer engagement, and scaled effortlessly with our growth We couldn't be happier with.
          </p>

          {/* Profile Block */}
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gray-200 shadow-md">
              <img 
                src="/managingpart_image.png" 
                alt="Alex Hales" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-[#1f1f1f] font-bold text-lg leading-tight mb-0.5">Alex Hales</span>
              <span className="text-gray-500 text-[11px] font-medium tracking-wide">Managing Partner</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer is pushed to the bottom of the page */}
      <div className="bg-black relative z-20">
        <Footer />
      </div>
    </div>
  );
}
