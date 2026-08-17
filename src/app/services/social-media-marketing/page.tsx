"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { OurWorkSection } from '@/components/OurWorkSection';
import { OurClientsSection } from '@/components/OurClientsSection';

import Image from 'next/image';

const countries = [
  { code: '+971', flag: '🇦🇪', img: '/flag_img.png', name: 'UAE' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' }
];

export default function SocialMediaMarketingPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const accordionItems = [
    { title: "Facebook Advertising Services", content: "At CoreUnity Solutions, we develop effective Facebook marketing strategies that align with your brand's objectives. Our Social Media Advertising experts in Dubai create engaging content, manage ad campaigns, and monitor analytics to generate maximum ROI while boosting your online visibility." },
    { title: "X (Twitter) Marketing Services", content: "We create targeted Twitter marketing strategies to engage your audience, join trending conversations, and drive meaningful interactions that boost your brand presence." },
    { title: "Instagram Marketing Services", content: "Our team crafts visually compelling Instagram campaigns, leveraging reels, stories, and influencer partnerships to grow your following and drive conversions." },
    { title: "LinkedIn Marketing Services", content: "Maximize your B2B reach with tailored LinkedIn strategies. We optimize your professional presence to generate high-quality leads and establish industry authority." },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
              <h1 className="text-xl md:text-[22px] font-bold tracking-wide text-white">Social Media Marketing</h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
              Leading Social Media<br />Marketing Agency in Dubai
            </h2>
            
            <p className="text-[#cccccc] text-lg leading-relaxed font-light">
              Are you seeking reliable social media marketing services in
              Dubai? Choose CoreUnity Solutions! Being one of the leading
              social marketing companies in Dubai, UAE, and an SMM partner,
              we curate strategies that maximize your ROAS.
            </p>
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
                  <div className="flex bg-white rounded-lg h-[46px] relative" ref={dropdownRef}>
                    <div className="relative flex items-center border-r border-gray-200 bg-white rounded-l-lg">
                      <button 
                        type="button"
                        className="flex items-center gap-1.5 px-3 h-full cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        {selectedCountry.img ? (
                          <div className="relative w-5 h-3.5 flex-shrink-0">
                            <Image src={selectedCountry.img} alt={selectedCountry.name} fill className="object-cover rounded-sm" />
                          </div>
                        ) : (
                          <span className="text-base leading-none flex items-center justify-center">{selectedCountry.flag}</span>
                        )}
                        <span className="text-sm text-[#333] font-medium">{selectedCountry.code}</span>
                        <svg className={`w-3 h-3 text-gray-500 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {showDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 w-max max-h-48 overflow-y-auto py-1">
                          {countries.map(country => (
                            <button
                              key={country.name}
                              type="button"
                              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 text-left transition-colors"
                              onClick={() => {
                                setSelectedCountry(country);
                                setShowDropdown(false);
                              }}
                            >
                              {country.img ? (
                                <div className="relative w-5 h-3.5 flex-shrink-0">
                                  <Image src={country.img} alt={country.name} fill className="object-cover rounded-sm" />
                                </div>
                              ) : (
                                <span className="text-base leading-none flex items-center justify-center w-5">{country.flag}</span>
                              )}
                              <span className="text-sm text-[#333] w-10 font-medium">{country.code}</span>
                              <span className="text-xs text-gray-500">{country.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input type="tel" placeholder="50 000 00" className="bg-transparent text-black px-4 py-3 text-sm w-full outline-none placeholder:text-gray-400 rounded-r-lg" />
                  </div>
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
          className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
          style={{ 
            backgroundImage: 'url("/zebra_bg.svg")', 
            backgroundSize: '50% 100%', 
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat'
          }} 
        />
        
        <div className="max-w-[1300px] mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 mb-24">
          
          {/* Left Side: Heading */}
          <div className="flex flex-col pt-4">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1f1f1f] leading-[1.2] tracking-tight">
              ROI Driven Social<br />Media Advertising &<br />Management
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
                      isActive ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-5">
                      {item.content}
                    </p>
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
        <div className="w-full bg-[#cc2936] py-14 px-6 relative z-10">
          <div className="max-w-[1300px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                Ready to grow your brand?
              </h2>
              <p className="text-red-100 text-[17px] font-light">
                Let's build a strategy that delivers real results.
              </p>
            </div>
            <button className="bg-white hover:bg-gray-100 text-[#cc2936] font-bold text-sm px-8 py-4 rounded-lg transition-colors flex items-center gap-2 shadow-lg">
              Contact with us &rarr;
            </button>
          </div>
        </div>

      </section>

      <OurWorkSection maxRows={2} />

      {/* SMM Stats Section */}
      <section className="h-[428px] w-full bg-black relative flex items-center overflow-hidden shrink-0">
        {/* Red Glow Background on the right */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_50%,_rgba(150,15,25,0.65)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" />

        <div className="max-w-[1300px] w-full mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 text-white pr-0 md:pr-4">
            <h2 className="text-[36px] md:text-[44px] leading-[1.1] font-bold mb-6 tracking-tight">
              Experience Growth<br className="hidden md:block" />
              with Leading SMM
            </h2>
            <p className="text-[16px] md:text-[17px] text-gray-300 font-light leading-relaxed max-w-[480px]">
              At CoreUnity Solutions, squeeze out each platform's
              power and scope and utilize it for your brand success.
              Our team of social media marketing strategists
            </p>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-[500px]">
            {/* Card 1 */}
            <div className="bg-[#171717] border-2 border-white rounded-[14px] py-8 md:py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-white text-[32px] md:text-[38px] font-bold mb-1 tracking-tight">100+</h3>
              <p className="text-gray-200 text-[13px] md:text-[14px]">Brands Transformed</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#171717] border-2 border-white rounded-[14px] py-8 md:py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-white text-[32px] md:text-[38px] font-bold mb-1 tracking-tight">325+</h3>
              <p className="text-gray-200 text-[13px] md:text-[14px]">Wins Delivered</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[14px] py-8 md:py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center shadow-md">
              <h3 className="text-[#c52833] text-[32px] md:text-[38px] font-bold mb-1 tracking-tight">15+</h3>
              <p className="text-[#1f1f1f] text-[13px] md:text-[14px]">Years of Innovation</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-[14px] py-8 md:py-9 px-4 md:px-6 flex flex-col items-center justify-center text-center shadow-md">
              <h3 className="text-[#c52833] text-[32px] md:text-[38px] font-bold mb-1 tracking-tight">98%</h3>
              <p className="text-[#1f1f1f] text-[13px] md:text-[14px]">Satisfaction</p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#c52833] blur-[4px] rounded-full scale-[2] opacity-50" />
                <div className="w-2 h-2 bg-[#c52833] rounded-full relative z-10" />
              </div>
              <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#c52833]">
                Our Process
              </span>
            </div>
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#1f1f1f] leading-[1.2] tracking-tight max-w-3xl">
              At CoreUnity, we aim to provide a<br />streamlined social media service.
            </h2>
          </div>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20">
            
            {[
              { num: "01", title: "Discovery", desc: "Understanding goals, users, and business context." },
              { num: "02", title: "Research", desc: "User interviews, competitor analysis, and insights." },
              { num: "03", title: "Design", desc: "Wireframes, prototypes, and high-fidelity screens." },
              { num: "04", title: "Test & deliver", desc: "Usability testing, iterations, and handoff." }
            ].map((step, i) => (
              <div 
                key={i}
                className="group flex flex-col bg-[#f9f9f9] hover:bg-[#c52833] rounded-[16px] p-8 transition-colors duration-300 shadow-sm border border-gray-100 hover:border-[#c52833]"
              >
                <div className="w-12 h-12 bg-[#2a2a2a] group-hover:bg-white rounded-[12px] flex items-center justify-center mb-6 transition-colors duration-300">
                  <span className="text-white group-hover:text-[#c52833] text-[17px] font-bold transition-colors duration-300">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-[#1f1f1f] group-hover:text-white text-[22px] font-bold mb-3 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/90 text-[14.5px] leading-relaxed transition-colors duration-300 font-light">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

          {/* Bottom Red Banner */}
          <div className="w-full max-w-[1100px] mx-auto bg-[#c52833] rounded-xl flex flex-col md:flex-row items-center justify-between p-10 md:p-12 shadow-lg">
            <div className="text-white mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-[28px] md:text-[32px] font-bold mb-2 tracking-tight">Ready to grow your brand?</h3>
              <p className="text-red-100 text-[16px] font-light">Let's build a strategy that delivers real results.</p>
            </div>
            <button className="bg-white text-[#c52833] font-bold text-[14px] px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2">
              Connect with us &rarr;
            </button>
          </div>

        </div>
      </section>

      <OurClientsSection />

      {/* Testimonial (Light Mode) Section */}
      <section className="relative w-full h-[553px] flex items-center justify-center bg-white text-black px-6 overflow-hidden font-sans border-t border-gray-100">
        
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

      <Footer />
    </div>
  );
}
