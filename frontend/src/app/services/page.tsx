"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ArrowUpRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { OurClientsSection } from '@/components/OurClientsSection';

export default function ServicesPage() {
  const servicesList = [
    {
      num: "01",
      title: "Branding",
      desc: "Our agency combines creativity and strategy to build powerful brand identities that communicate your vision, and grow meaningful customer connections.",
    },
    {
      num: "02",
      title: "Digital Marketing",
      desc: "Our digital marketing solutions help you connect with your customers through SEO, social content marketing, and paid advertising.",
    },
    {
      num: "03",
      title: "Design & Creatives",
      desc: "We create compelling visuals that capture attention, strengthen your brand identity, and communicate your message effectively across platforms.",
    },
    {
      num: "04",
      title: "Design",
      desc: "Our design solutions help to create memorable experiences that leave a lasting impression.",
    }
  ];

  const [hoveredService, setHoveredService] = useState("01");

  return (
    <div className="bg-black text-white relative flex flex-col font-sans">
      <Navbar />
      
      {/* Background Red Radial Glow for Hero */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at top center, rgba(153, 17, 17, 0.3) 0%, transparent 60%)',
          filter: 'blur(40px)'
        }}
      />

      <main className="h-[550px] flex flex-col items-center justify-center relative z-10 px-4">
        
        <div className="flex items-center justify-center gap-3 mb-6 mt-16">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_8px_3px_rgba(220,38,38,0.7)]" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Services We Offer</h1>
        </div>
        
        <h2 className="text-center text-3xl md:text-5xl lg:text-5xl font-normal leading-snug text-gray-200">
          From Dubai's best minds to <br /> a global powerhouse
        </h2>
        
      </main>

      {/* Second Section: What We Offer */}
      <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#c52833] blur-[3px] rounded-full scale-[1.8] opacity-70" />
                <div className="w-2.5 h-2.5 bg-[#c52833] rounded-full relative z-10" />
              </div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-900 ml-1">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl leading-snug text-[#1f1f1f]">
              Save time and grow your business <br className="hidden md:block" /> with our expert solutions
            </h2>
          </div>

          {/* Services List */}
          <div className="w-full flex flex-col">
            {servicesList.map((service) => {
              const isActive = hoveredService === service.num;
              return (
              <div 
                key={service.num} 
                onMouseEnter={() => setHoveredService(service.num)}
                className={`flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#c52833] text-white rounded-xl shadow-lg mt-0 md:mt-2 relative z-10 scale-[1.02]' 
                    : 'bg-transparent text-gray-900 border-b border-gray-200 hover:bg-gray-50/50'
                }`}
              >
                {/* Left side: Num & Title */}
                <div className="flex items-center gap-6 md:gap-16 md:w-[45%] mb-6 md:mb-0">
                  <span className={`text-2xl font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {service.num}
                  </span>
                  <h3 className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                </div>
                
                {/* Right side: Desc & Icon */}
                <div className="md:w-[55%] flex items-center justify-between gap-6 md:gap-10">
                  <p className={`text-[15px] md:text-[15.5px] leading-relaxed flex-1 transition-colors duration-300 ${isActive ? 'text-red-50' : 'text-gray-500'}`}>
                    {service.desc}
                  </p>
                  <button className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                    isActive ? 'bg-white text-[#c52833]' : 'bg-[#404040] text-white'
                  }`}>
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={isActive ? 2.5 : 2} />
                  </button>
                </div>
              </div>
            )})}
          </div>

          {/* View All Button */}
          <div className="mt-16 flex justify-center">
            <Link href="/services/social-media-marketing" className="bg-[#c52833] hover:bg-[#a6222b] text-white font-medium px-8 py-3.5 rounded-full transition-colors flex items-center gap-2">
              View all services &rarr;
            </Link>
          </div>
          
        </div>
      </section>

      {/* Third Section: Our Clients */}
      <OurClientsSection />

      {/* Fourth Section: Industries We Serve */}
      <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle white/gray zebra wave background */}
        <div 
          className="absolute inset-0 z-0 opacity-100" 
          style={{
            backgroundImage: `url("/white_bg.png")`,
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
                  <div className="absolute inset-0 flex items-center justify-center gap-[2px]">
                    <img src="/rest_chair_img2.png" alt="Chair left" className="w-3.5 h-3.5 object-contain filter invert brightness-0 mt-1" />
                    <img src="/res_table_img.png" alt="Table" className="w-4 h-4 object-contain filter invert brightness-0 mb-1" />
                    <img src="/rest_chair_img.png" alt="Chair right" className="w-3.5 h-3.5 object-contain filter invert brightness-0 mt-1" />
                  </div>
                </div>
                <h3 className="font-bold text-[#1f1f1f] text-[17px]">Restaurant</h3>
              </div>
              <p className="text-[12.5px] text-gray-500 leading-relaxed px-1">
                Providing strong branding and curating digital Presence.
              </p>
            </div>

          </div>

          {/* CTA Banner */}
          <div className="mt-24 w-full bg-[#c52833] rounded-2xl flex flex-col md:flex-row items-center justify-between p-10 md:p-14 shadow-lg overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="text-white mb-8 md:mb-0 relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-[34px] font-bold mb-3 tracking-tight">Ready to grow your brand?</h3>
              <p className="text-red-100 text-[15px] font-light">Let's build a strategy that delivers real results.</p>
            </div>
            <Link href="/contact" className="relative z-10 bg-white text-[#c52833] font-bold px-8 py-4 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
              Connect with us <span className="font-normal">&rarr;</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Fifth Section: SMM Stats */}
      <section className="h-[428px] w-full bg-black relative flex items-center overflow-hidden shrink-0">
        {/* Red Glow Background on the right */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_50%,_rgba(150,15,25,0.65)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex items-center justify-between gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 text-white pr-4">
            <h2 className="text-[44px] leading-[1.1] font-bold mb-6 tracking-tight">
              Experience Growth<br />
              with Leading SMM
            </h2>
            <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-[480px]">
              At CoreUnity Solutions, squeeze out each platform's<br/>
              power and scope and utilize it for your brand success.<br/>
              Our team of social media marketing strategists
            </p>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-[500px]">
            {/* Card 1 */}
            <div className="bg-[#171717] border-2 border-white rounded-[14px] py-9 px-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-white text-[38px] font-bold mb-1 tracking-tight">100+</h3>
              <p className="text-gray-200 text-[14px]">Brands Transformed</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#171717] border-2 border-white rounded-[14px] py-9 px-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-white text-[38px] font-bold mb-1 tracking-tight">325+</h3>
              <p className="text-gray-200 text-[14px]">Wins Delivered</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[14px] py-9 px-6 flex flex-col items-center justify-center text-center shadow-md">
              <h3 className="text-[#c52833] text-[38px] font-bold mb-1 tracking-tight">15+</h3>
              <p className="text-[#1f1f1f] text-[14px]">Years of Innovation</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-[14px] py-9 px-6 flex flex-col items-center justify-center text-center shadow-md">
              <h3 className="text-[#c52833] text-[38px] font-bold mb-1 tracking-tight">98%</h3>
              <p className="text-[#1f1f1f] text-[14px]">Satisfaction</p>
            </div>
          </div>

        </div>
      </section>

      {/* Sixth Section: Testimonial (Light Mode) */}
      <section className="relative w-full h-[553px] flex items-center justify-center bg-white text-black px-6 overflow-hidden font-sans border-t border-gray-100">
        
        {/* Background Zebra Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url("/white_bg.png")`,
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

      <Footer />
    </div>
  );
}
