"use client";
import { PhoneInputComponent } from '@/components/PhoneInputComponent';

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { OurWorkSection } from '@/components/OurWorkSection';
import { OurClientsSection } from '@/components/OurClientsSection';
import { TestimonialSectionLight } from '@/components/TestimonialSectionLight';
import Link from 'next/link';
import Image from 'next/image';

export default function SEOPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const accordionItems = [
    { 
      title: "We Build SEO Strategies That Stand Out", 
      content: (
        <div className="space-y-4">
          <div>
            <strong className="text-gray-800 block mb-1">Technical SEO</strong>
            CoreUnity fixes the technical issues holding your site back from ranking well.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Content Strategy</strong>
            We build SEO-driven content around the keywords your customers actually search for.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Link Building</strong>
            Our team builds quality backlinks that strengthen your site's authority.
          </div>
        </div>
      ) 
    },
    { 
      title: "Why Choose Us", 
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>We guide you through every step of the SEO process</li>
          <li>We give attention to the smallest technical details</li>
          <li>We help websites grow their organic visibility long-term</li>
          <li>Our track record speaks for itself</li>
        </ul>
      ) 
    },
    { 
      title: "What Makes Us the Best SEO Agency in Dubai?", 
      content: (
        <div className="space-y-4">
          <div>
            <strong className="text-gray-800 block mb-1">Technical-First Approach</strong>
            We fix the foundation before building content and links on top of it.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Proven Track Record</strong>
            We've helped brands climb to page one for competitive keywords.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Ongoing Optimization</strong>
            We track and refine SEO strategy monthly to sustain rankings.
          </div>
        </div>
      ) 
    },
    { 
      title: "CoreUnity Solutions Builds SEO for Better Organic Visibility", 
      content: (
        <div className="space-y-4">
          <p>
            Showing up on page one isn't luck, it's strategy. As a leading SEO agency in Dubai, we build search engine optimization strategies with strong technical foundations and real content value.
          </p>
          <div>
            <strong className="text-gray-800 block mb-1">We Build SEO Features That Meet Front-Line Technology</strong>
            Our mission is to help businesses rank higher and grow organically — from technical audits to content and link building, all working together.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Our SEO Services Are Built for Long-Term Growth</strong>
            We work closely with clients to fix technical issues, optimize key pages, and build authority through quality content and outreach.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">SEO Features That Drive Results</strong>
            With keyword-targeted content, technical fixes, and consistent tracking, our SEO strategies help drive sustainable organic traffic growth.
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
              <h1 className="text-xl md:text-[22px] font-bold tracking-wide text-white uppercase">Your Search Visibility Partner</h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
              SEO Services That Get You Found, and Chosen
            </h2>
            
            <p className="text-[#cccccc] text-lg leading-relaxed font-light mb-4">
              We combine technical optimization, keyword-driven content, and quality link building to help your website rank higher, attract the right visitors, and convert them into customers.
            </p>
            <ul className="text-[#cccccc] text-lg font-light space-y-2 list-none pl-0">
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> Full technical SEO audits and fixes</li>
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> Keyword-targeted content strategy</li>
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> Ongoing tracking and reporting</li>
            </ul>
          </div>

          {/* Right Content: Form */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="bg-[#1f1f1f] border-2 border-white rounded-3xl p-8 md:p-10 w-full max-w-[480px]">
              <h3 className="text-2xl font-bold text-white mb-2">Have any questions?</h3>
              <p className="text-sm text-gray-400 mb-8 font-light">or tell us about your upcoming project.</p>

              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-gray-300 ml-1 font-medium">Name*</label>
                  <input type="text" placeholder="John Doe" className="bg-white text-black px-4 py-3 rounded-lg text-sm w-full outline-none placeholder:text-gray-400" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-gray-300 ml-1 font-medium">Email*</label>
                  <input type="email" placeholder="hello@gmail.com" className="bg-white text-black px-4 py-3 rounded-lg text-sm w-full outline-none placeholder:text-gray-400" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-gray-300 ml-1 font-medium">Phone No*</label>
                  <PhoneInputComponent />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-gray-300 ml-1 font-medium">Tell us about your project</label>
                  <textarea placeholder="Describe your goals, timeline, or requirements..." rows={3} className="bg-white text-black px-4 py-3 rounded-lg text-sm w-full outline-none resize-none placeholder:text-gray-400" />
                </div>

                <button type="button" className="w-full bg-[#cc2936] hover:bg-red-700 text-white font-bold tracking-[0.2em] text-sm py-4 rounded-lg mt-3 transition-colors shadow-lg">
                  SUBMIT
                </button>
              </form>
            </div>
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
              Leading SEO<br />Agency<br />in Dubai
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
                Ready to rank higher?
              </h2>
              <p className="text-red-100 text-[17px] font-light">
                Let's build an SEO strategy that drives real business growth.
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
              SEO Strategies Built for<br className="hidden md:block" />
              Real Impact
            </h2>
            <p className="text-[16px] md:text-[17px] text-gray-300 font-light leading-relaxed max-w-[480px]">
              At CoreUnity Solutions, we blend technical expertise, content strategy, 
              and data-driven analysis to build SEO campaigns that deliver measurable ROI.
            </p>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-[500px]">
            {/* Card 1 */}
            <div className="bg-[#1a1a1a] border border-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <h3 className="text-white text-[32px] md:text-[38px] font-bold tracking-tight">500+</h3>
              <p className="text-gray-300 text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Keywords Ranked Page 1</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1a1a1a] border border-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <h3 className="text-white text-[32px] md:text-[38px] font-bold tracking-tight">60%</h3>
              <p className="text-gray-300 text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Avg Traffic Boost</p>
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
            SEO Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] mx-auto">
            {/* Process 1 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">01</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Discovery & Audit</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Analyzing your site's health, competitors, and discovering high-impact keyword opportunities.</p>
            </div>
            {/* Process 2 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">02</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Technical Optimization</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Fixing site speed, crawlability, and resolving foundational technical SEO issues.</p>
            </div>
            {/* Process 3 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">03</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Content Strategy</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Building targeted, high-quality content around the keywords your customers are actually searching for.</p>
            </div>
            {/* Process 4 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">04</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Off-Page & Authority</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Building quality backlinks and consistently tracking your organic growth and rankings over time.</p>
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
