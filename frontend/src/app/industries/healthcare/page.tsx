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

export default function HealthcarePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const accordionItems = [
    { 
      title: "We Build Healthcare Solutions That Stand Out", 
      content: (
        <div className="space-y-4">
          <div>
            <strong className="text-gray-800 block mb-1">Patient-Friendly Websites</strong>
            CoreUnity builds websites designed around ease of navigation and trust.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Healthcare SEO</strong>
            We build SEO strategies that help patients find the right care faster.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">AI Chatbots</strong>
            Our chatbots handle patient queries and appointment requests around the clock.
          </div>
        </div>
      ) 
    },
    { 
      title: "Why Choose Us", 
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>We guide you through every step of your digital strategy</li>
          <li>We give attention to the smallest details that build patient trust</li>
          <li>We help healthcare providers reach the right patients</li>
          <li>Our track record speaks for itself</li>
        </ul>
      ) 
    },
    { 
      title: "What Makes Us the Best Digital Partner for Healthcare in Dubai?", 
      content: (
        <div className="space-y-4">
          <div>
            <strong className="text-gray-800 block mb-1">Healthcare-Specific Expertise</strong>
            We understand what builds trust with patients searching for care.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Proven Track Record</strong>
            We've helped healthcare providers grow patient inquiries and bookings.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Full-Service Support</strong>
            From websites to chatbots, we manage the full patient journey.
          </div>
        </div>
      ) 
    },
    { 
      title: "CoreUnity Solutions Builds Digital Solutions for Better Patient Care", 
      content: (
        <div className="space-y-4">
          <p>
            Patients search online before they book an appointment. Your digital presence needs to build trust fast. As a trusted healthcare marketing partner, we help providers reach the right patients.
          </p>
          <div>
            <strong className="text-gray-800 block mb-1">We Build Healthcare Features That Meet Front-Line Technology</strong>
            Our mission is to help healthcare providers become more accessible — from appointment-ready websites to AI chatbots for patient queries.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Our Healthcare Digital Services Are Built for Patient Trust</strong>
            We work closely with clients to build patient-friendly websites and SEO strategies that attract and convert the right patients.
          </div>
          <div>
            <strong className="text-gray-800 block mb-1">Healthcare Features That Drive Results</strong>
            With patient-friendly design, healthcare SEO, and responsive chatbots, our solutions help providers grow patient engagement and bookings.
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
              <h1 className="text-xl md:text-[22px] font-bold tracking-wide text-white uppercase">Your Healthcare Digital Partner</h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
              Digital Solutions Built to Support Better Patient Care
            </h2>
            
            <p className="text-[#cccccc] text-lg leading-relaxed font-light mb-4">
              We help clinics, hospitals, and healthcare providers build patient-friendly websites, healthcare SEO, and marketing campaigns designed to attract and convert the right patients.
            </p>
            <ul className="text-[#cccccc] text-lg font-light space-y-2 list-none pl-0">
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> Patient-friendly, appointment-ready websites</li>
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> Healthcare-focused SEO strategies</li>
              <li className="flex items-center gap-2"><span className="text-[#c52833]">✓</span> AI chatbots for patient support</li>
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
              Leading Healthcare Digital<br />Agency<br />in Dubai
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
                Ready to reach more patients online?
              </h2>
              <p className="text-red-100 text-[17px] font-light">
                Talk to our healthcare marketing team.
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
              Healthcare Digital Strategies Built for<br className="hidden md:block" />
              Patient Trust
            </h2>
            <p className="text-[16px] md:text-[17px] text-gray-300 font-light leading-relaxed max-w-[480px]">
              At CoreUnity Solutions, we combine compassionate design with smart technology 
              to ensure your clinic or hospital reaches patients searching for reliable care.
            </p>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-[500px]">
            {/* Card 1 */}
            <div className="bg-[#1a1a1a] border border-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <h3 className="text-white text-[32px] md:text-[38px] font-bold tracking-tight">100+</h3>
              <p className="text-gray-300 text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Healthcare Sites Built</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1a1a1a] border border-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <h3 className="text-white text-[32px] md:text-[38px] font-bold tracking-tight">75%</h3>
              <p className="text-gray-300 text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Patient Booking Increase</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-xl">
              <h3 className="text-[#c52833] text-[32px] md:text-[38px] font-bold tracking-tight">15+</h3>
              <p className="text-[#1f1f1f] text-[11px] md:text-[12px] font-bold tracking-widest uppercase">Years of Innovation</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-[14px] py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center gap-1 shadow-xl">
              <h3 className="text-[#c52833] text-[32px] md:text-[38px] font-bold tracking-tight">24/7</h3>
              <p className="text-[#1f1f1f] text-[11px] md:text-[12px] font-bold tracking-widest uppercase">AI Support Handling</p>
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
            Healthcare Digital Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] mx-auto">
            {/* Process 1 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">01</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Discovery & Strategy</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Understanding your clinic's specialties, target patients, and online growth objectives.</p>
            </div>
            {/* Process 2 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">02</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Patient-Centric Design</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Designing accessible, user-friendly websites with clear pathways for patient appointments.</p>
            </div>
            {/* Process 3 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">03</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">SEO & Marketing</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Implementing local SEO strategies to help patients find your specific healthcare services.</p>
            </div>
            {/* Process 4 */}
            <div className="flex flex-col bg-[#f8f9fa] hover:bg-[#c52833] transition-colors duration-300 rounded-[20px] p-8 border border-gray-100 hover:border-transparent group">
              <div className="w-12 h-12 bg-[#3f3f46] rounded-[14px] flex items-center justify-center mb-8">
                <span className="text-white text-lg font-bold">04</span>
              </div>
              <h4 className="text-[22px] font-bold text-[#1f1f1f] group-hover:text-white transition-colors duration-300 mb-3">Appointment Integration</h4>
              <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed">Integrating scheduling systems and AI chatbots to convert visitors into booked patients.</p>
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
