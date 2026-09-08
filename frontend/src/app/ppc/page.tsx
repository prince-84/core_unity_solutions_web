import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dubai Real Estate PPC: 50% Lower Cost-Per-Lead',
  description: 'See how PPC optimization cut cost-per-lead from AED 350 to AED 175 and generated 220% more qualified inquiries. Connect with our experts.',
};

export default function PPCCaseStudyPage() {
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
          <h1 className="text-[28px] md:text-[32px] font-bold tracking-wide text-white">Case Study (Pay-Per-Click Advertising)</h1>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-[52px] font-bold leading-[1.2] text-white mb-6 tracking-tight">
          Dubai Prime Real Estate:
        </h2>
        
        {/* Sub-description */}
        <p className="text-center text-gray-300 text-lg md:text-[21px] max-w-[850px] leading-[1.6] font-light">
          Driving Qualified Leads for Dubai Prime Real Estate, a Dubai Real Estate Firm
        </p>

      </main>

      {/* Main Content Section */}
      <section className="bg-white text-black py-20 px-6 sm:px-12 md:px-20 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Case Study Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Featured Image */}
            <div className="w-full rounded-2xl overflow-hidden relative shadow-lg bg-[#f8f9fa] flex items-center justify-center">
              <Image 
                src="/ppc.jpg" 
                alt="Dubai Prime Real Estate PPC Case Study" 
                width={1200} 
                height={800} 
                className="w-full h-auto object-contain" 
              />
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dubai Prime Real Estate, a well-established brokerage in Dubai with a portfolio spanning luxury villas, off-plan properties, and commercial spaces, needed a reliable stream of qualified leads for its property listings without wasting budget on unqualified clicks.
              </p>
            </div>

            {/* Business Challenge */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Business Challenge</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The client's previous ad campaigns were generating traffic but few actual inquiries, with a high cost-per-lead of AED 350+ and little visibility into what was actually converting. The team was spending over AED 40,000 monthly on Google and Meta ads, but only converting 2-3% of leads into viewings. There was no conversion tracking, no A/B testing framework, and no understanding of which keywords or audiences delivered the best ROI.
              </p>
            </div>

            {/* Strategy */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Strategy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our PPC experts in Dubai employed their PPC management services and rebuilt the campaign structure from the ground up. We refined:
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">Audience Targeting</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                With custom and lookalike audiences based on high-net-worth profiles.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">High-intent Keyword Research</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Focusing on transactional terms like "buy villa Dubai" and "off-plan investment 2026".
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">Compelling Ad Copy</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Highlighting unique selling propositions, payment plans, and developer credentials.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">Optimized Landing Pages</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Designed specifically for lead capture with minimal friction.
              </p>
            </div>
            
            {/* Execution */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Execution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Being one of the most competent Google Ads agencies in Dubai, we launched a phased Google Ads and Meta Ads strategy, continuously A/B testing ad creatives and landing pages, adjusting bids based on real-time performance data, and setting up conversion tracking to measure true ROI. We implemented a lead scoring system to differentiate between hot, warm, and cold leads, ensuring the budget was allocated to the highest-converting segments.
              </p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Results</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                <li>Within 3 months, cost-per-lead dropped by 50% from AED 350+ to AED 175.</li>
                <li>Qualified inquiries increased by 220%, jumping from 45 to 145 per month.</li>
                <li>Overall ad spend efficiency (ROAS) improved by 400%, giving the client a predictable, scalable lead pipeline.</li>
                <li>The number of property viewings increased from 12 to 38 per month, directly attributed to the new PPC campaigns.</li>
                <li>The client reported closing 6 deals worth over AED 25 million within the first quarter of the new strategy.</li>
              </ul>
            </div>
            
            {/* Conclusion */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Conclusion</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                By focusing on quality over clicks, Dubai Prime Real Estate transformed its PPC spend from a cost center into a consistent source of high-value leads and measurable business growth.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold italic">
                Looking for ad campaigns that turn clicks into real customers? Connect with our PPC experts in Dubai.
              </p>
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
              <h4 className="font-bold text-[17px] mb-3">Contact With Us Now !</h4>
              <div className="bg-[#f2f2f2] rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white rounded-full overflow-hidden flex-shrink-0 relative p-1 shadow-sm border border-gray-200">
                    <Image src="/Core Unity Logo-05.svg" alt="CoreUnity Logo" fill className="object-contain p-1 scale-110" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-bold text-gray-900 text-[18px]">Zeeshan Aashiq</h5>
                     <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <a href="tel:+971505559646" className="text-[15px] text-gray-800 tracking-wide hover:text-black transition-colors">+971 50 555 9646</a>
                     </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="tel:+971505559646" className="flex-1 bg-black text-white py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors text-center">
                    Call
                  </a>
                  <a href="https://wa.me/971505559646" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#d32f2f] text-white py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                    <Image src="/whatsapp_logo.png" alt="WhatsApp" width={16} height={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* SMM Promo Card */}
            <div className="bg-black text-white rounded-[32px] px-5 py-10 shadow-2xl text-center relative overflow-hidden max-w-[340px] mx-auto flex flex-col justify-between h-[611px] ml-auto mr-0 lg:mr-auto border border-white/[0.03]">
              
              {/* Red glow behind the grid at the bottom */}
              <div 
                className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle, rgba(160,20,30,0.55) 0%, transparent 70%)',
                  filter: 'blur(30px)'
                }}
              />
              
              <div className="relative z-10 pt-2 flex flex-col gap-4">
                <h3 className="text-[36px] font-extrabold leading-[1.08] tracking-tight text-white">
                  Experience<br/>
                  Growth with<br/>
                  Leading SMM
                </h3>
                <p className="text-gray-300 text-[14px] leading-[1.45] font-light max-w-[270px] mx-auto">
                  At CoreUnity Solutions, squeeze out each platform's power and scope and utilize it for your brand success.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5 relative z-10 mt-2">
                {/* 100+ Card */}
                <div className="bg-[#180e0f] rounded-[14px] py-4 px-3 border border-white/[0.08] flex flex-row items-center justify-center gap-2">
                  <div className="font-bold text-[27px] text-white tracking-tighter leading-none">100+</div>
                  <div className="text-[10.5px] text-gray-300 text-left font-normal leading-[1.25] tracking-tight">Brands<br/>Transformed</div>
                </div>
                {/* 300+ Card */}
                <div className="bg-[#180e0f] rounded-[14px] py-4 px-3 border border-white/[0.08] flex flex-row items-center justify-center gap-2">
                  <div className="font-bold text-[27px] text-white tracking-tighter leading-none">300+</div>
                  <div className="text-[10.5px] text-gray-300 text-left font-normal leading-[1.25] tracking-tight">Wins<br/>Delivered</div>
                </div>
                {/* 15+ Card */}
                <div className="bg-white rounded-[14px] py-4 px-3 flex flex-row items-center justify-center gap-2">
                  <div className="font-bold text-[27px] text-[#c52833] tracking-tighter leading-none">15+</div>
                  <div className="text-[10.5px] text-gray-800 text-left font-normal leading-[1.25] tracking-tight">Years of<br/>Innovation</div>
                </div>
                {/* 98% Card */}
                <div className="bg-white rounded-[14px] py-4 px-3 flex flex-row items-center justify-center gap-2">
                  <div className="font-bold text-[27px] text-[#c52833] tracking-tighter leading-none">98%</div>
                  <div className="text-[10.5px] text-gray-800 text-left font-normal leading-[1.25] tracking-tight">Satisfaction</div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* CTA Banner (Full Width, 170px Height) */}
      <div className="w-full bg-[#c52833] h-auto md:h-[170px] py-8 md:py-0 px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden z-20 transition-transform duration-300 hover:scale-[1.01] cursor-pointer">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
        
        <div className="text-white text-center md:text-left relative z-10 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <h2 className="text-3xl md:text-[34px] font-bold tracking-tight">Ready to grow your brand?</h2>
          <p className="text-white/90 text-[18px] font-light mt-1 md:mt-0">Let's build a strategy that delivers real results.</p>
        </div>
        
        <Link href="/contact" className="bg-white text-[#c52833] px-10 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 relative z-10 whitespace-nowrap text-[16px]">
          Contact with us <span className="text-2xl leading-none">&rarr;</span>
        </Link>
      </div>

      {/* Testimonial (Light Mode) */}
      <section className="relative w-full h-auto min-h-[553px] py-20 flex items-center justify-center bg-white text-black px-6 overflow-hidden font-sans border-t border-gray-100">
        
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

      {/* Footer is pushed to the bottom of the page */}
      <div className="bg-black relative z-20">
        <Footer />
      </div>
    </div>
  );
}
