"use client";
import { ServiceInquiryForm } from '@/components/ServiceInquiryForm';

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { OurWorkSection } from '@/components/OurWorkSection';
import { OurClientsSection } from '@/components/OurClientsSection';
import { TestimonialSectionLight } from '@/components/TestimonialSectionLight';
import Link from 'next/link';
import Image from 'next/image';

export default function AugmentedRealityDevelopmentPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const accordionItems = [
    { 
      title: "We Build AR Experiences That Stand Out", 
      content: (
        <div className="space-y-4">
          <div>
            <strong className="text-gray-800 block mb-1">Interactive AR Design</strong>
            CoreUnity builds AR experiences that respond naturally to real-world environments.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Platform Integration</strong>
            We build AR features compatible with mobile and web platforms.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Engagement-Focused Features</strong>
            Our AR builds include interactive elements designed to hold attention.
          </div>
        </div>
      ) 
    },
    { 
      title: "Why Choose Us", 
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>We guide you through every step of AR development</li>
          <li>We give attention to the smallest interaction details</li>
          <li>We help brands stand out through interactive technology</li>
          <li>Our track record speaks for itself</li>
        </ul>
      ) 
    },
    { 
      title: "What Makes Us the Best AR Developers in Dubai?", 
      content: (
        <div className="space-y-4">
          <div>
            <strong className="text-gray-800 block mb-1">Interactive Technology Expertise</strong>
            We combine creative design and development to build memorable AR experiences.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Proven Track Record</strong>
            We've delivered AR projects across retail, marketing, and product demos.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Ongoing Support</strong>
            We remain available for updates and refinements post-launch.
          </div>
        </div>
      ) 
    },
    { 
      title: "CoreUnity Solutions Builds AR Experiences for a Better Customer Journey", 
      content: (
        <div className="space-y-4">
          <p>
            Augmented reality lets customers interact with your brand in ways traditional media can't. As a leading AR development company in Dubai, we design experiences with strong technical performance and creative impact.
          </p>
          <div>
            <strong className="text-gray-800 block mb-1">We Build AR Features That Meet Front-Line Technology</strong>
            Our mission is to help businesses create memorable interactions — from virtual try-ons to AR-enhanced campaigns, built on modern AR platforms.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Our AR Development Services Are Built for Real Engagement</strong>
            We work closely with clients to design AR experiences tailored to their goals, testing thoroughly across mobile and web platforms.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">AR Features That Drive Results</strong>
            With interactive overlays, smooth performance, and creative execution, our AR experiences help brands capture attention and drive engagement.
          </div>
        </div>
      ) 
    },
  ];

  return (
    <div className="bg-[#050505] text-white relative flex flex-col font-sans min-h-screen">
      <Navbar />

      {/* Hero Section Container */}
      <main className="flex-1 flex flex-col relative z-10 pt-32 pb-24 px-6 lg:px-24">
        {/* Deep red radial glow in center top */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at top center, rgba(160, 20, 25, 0.35) 0%, transparent 65%)',
            filter: 'blur(50px)'
          }}
        />

        <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 mt-10">
          
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-[600px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 bg-[#c52833] rounded-full shadow-[0_0_12px_2px_rgba(197,40,51,0.6)]" />
              <h1 className="text-xl md:text-[22px] font-bold tracking-wide text-white uppercase">Your AR Development Partner</h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
              Augmented Reality Solutions That Bring Your Brand to Life
            </h2>
            
            <p className="text-[#cccccc] text-lg leading-relaxed font-light mb-4">
              We build custom AR experiences that blend the digital and physical world — from virtual try-ons to interactive product demos. Every AR build is designed to capture attention and drive engagement.
            </p>
            <ul className="text-[#cccccc] text-lg font-light space-y-2 list-none pl-0">
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> Interactive, real-world overlays</li>
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> Mobile and web AR compatibility</li>
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> Built for marketing, retail, and product experiences</li>
            </ul>
          </div>

          {/* Right Content: Form */}
          <div className="flex justify-center lg:justify-end w-full">
            <ServiceInquiryForm pageName="Augmented Reality Development" />
          </div>

        </div>
      </main>

      {/* ROI Driven Section */}
      <section className="w-full bg-white text-black relative flex flex-col pt-24">
        {/* Wavy Background (Left half) */}
        <div 
          className="absolute inset-0 z-0 opacity-100 pointer-events-none" 
          style={{ 
            backgroundImage: 'url("/white_bg.png")', 
            backgroundSize: '50% 100%', 
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat'
          }} 
        />
        
        <div className="max-w-[1300px] mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 mb-24">
          
          {/* Left Side: Heading */}
          <div className="flex flex-col pt-4">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1f1f1f] leading-[1.2] tracking-tight">
              Leading Augmented Reality<br />Development Agency<br />in Dubai
            </h2>
          </div>

          {/* Right Side: Accordions */}
          <div className="flex flex-col gap-3">
            {accordionItems.map((item, index) => {
              const isActive = activeAccordion === index;
              return (
                <div 
                  key={index}
                  className="bg-[#f9f9f9] rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 md:px-8 py-5 text-left"
                    onClick={() => setActiveAccordion(isActive ? null : index)}
                  >
                    <span className="text-lg md:text-[19px] text-gray-800 font-medium">
                      {item.title}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 text-gray-500 font-light text-xl bg-white">
                      {isActive ? '−' : '+'}
                    </div>
                  </button>
                  
                  {/* Expandable Content */}
                  <div 
                    className={`transition-all duration-300 ease-in-out px-6 md:px-8 overflow-hidden ${
                      isActive ? 'max-h-[1000px] opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    <div className="text-gray-500 text-[14px] leading-relaxed mb-5">
                      {item.content}
                    </div>
                    <button className="bg-[#c52833] hover:bg-red-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Red Banner Bottom */}
        <div className="w-full bg-[#cc2936] py-14 px-6 relative z-10 transition-all duration-300 hover:opacity-95 hover:shadow-inner cursor-pointer group">
          <div className="max-w-[1300px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-transform duration-300 group-hover:scale-[1.01]">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                Ready to build an AR experience?
              </h2>
              <p className="text-red-100 text-[17px] font-light">
                Let's build interactive solutions that engage your audience.
              </p>
            </div>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-[#cc2936] font-bold text-sm px-8 py-4 rounded-lg transition-colors flex items-center gap-2 shadow-lg">
              Contact with us &rarr;
            </Link>
          </div>
        </div>

      </section>

      <OurWorkSection maxRows={2} />

      {/* Stats Section */}
      <section className="h-[428px] w-full bg-black relative flex items-center overflow-hidden shrink-0">
        {/* Red Glow Background on the right */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_50%,_rgba(220,20,30,0.85)_0%,_rgba(0,0,0,0)_65%)] pointer-events-none" />

        <div className="max-w-[1300px] w-full mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 text-white pr-0 md:pr-4">
            <h2 className="text-[36px] md:text-[44px] leading-[1.1] font-bold mb-6 tracking-tight">
              AR Experiences Built for<br className="hidden md:block" />
              Real Impact
            </h2>
            <p className="text-[16px] md:text-[17px] text-gray-300 font-light leading-relaxed max-w-[480px]">
              At CoreUnity Solutions, we blend creative design, robust architecture, 
              and business strategy to build AR experiences that deliver measurable ROI.
            </p>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-[500px]">
            {/* Card 1 */}
            <div className="bg-[#1a1a1a] border border-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <h3 className="text-white text-[32px] md:text-[38px] font-bold tracking-tight">50+</h3>
              <p className="text-gray-300 text-[11px] md:text-[12px] font-bold tracking-widest uppercase">AR Projects Delivered</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1a1a1a] border border-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <h3 className="text-white text-[32px] md:text-[38px] font-bold tracking-tight">60%</h3>
              <p className="text-gray-300 text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Avg Engagement Boost</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-xl">
              <h3 className="text-[#c52833] text-[32px] md:text-[38px] font-bold tracking-tight">15+</h3>
              <p className="text-[#1f1f1f] text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Years of Innovation</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-xl">
              <h3 className="text-[#c52833] text-[32px] md:text-[38px] font-bold tracking-tight">24/7</h3>
              <p className="text-[#1f1f1f] text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Monitoring & Support</p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-2.5 bg-[#c52833] rounded-full shadow-[0_0_12px_2px_rgba(197,40,51,0.6)]" />
            <h3 className="text-sm md:text-[15px] font-bold tracking-[0.1em] text-gray-500 uppercase">Our Process</h3>
          </div>
          
          <h2 className="text-[32px] md:text-[44px] font-bold text-center mb-16 tracking-tight text-[#1f1f1f]">
            AR Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] mx-auto">
            {/* Process 1 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">01</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Discovery & Assessment</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Analyzing your audience, goals, and identifying high-impact AR use cases for your brand.</p>
            </div>
            {/* Process 2 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">02</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">AR Experience Design</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Designing interactive overlays and elements tailored for marketing, retail, or product experiences.</p>
            </div>
            {/* Process 3 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">03</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Development & Integration</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Building the AR experience and seamlessly connecting capabilities into your platforms.</p>
            </div>
            {/* Process 4 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">04</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Deployment & Refinement</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Launching experiences, monitoring engagement, and refining interactions as needed.</p>
            </div>
          </div>
        </div>
      </section>

      <OurClientsSection />

      <TestimonialSectionLight />

      <Footer />
    </div>
  );
}
