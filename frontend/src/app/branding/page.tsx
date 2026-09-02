import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salwa Real Estate Branding: From Invisible to Market Leader',
  description: 'See how Salwa Real Estate built a cohesive brand identity, website, and social presence to generate 180+ qualified leads monthly. Free digital audit available.',
};

export default function BrandingCaseStudyPage() {
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
          <h1 className="text-[28px] md:text-[32px] font-bold tracking-wide text-white">Case Study : Branding</h1>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-[52px] font-bold leading-[1.2] text-white mb-6 tracking-tight">
          Salwa Real Estate:
        </h2>
        
        {/* Sub-description */}
        <p className="text-center text-gray-300 text-lg md:text-[21px] max-w-[850px] leading-[1.6] font-light">
          From Brand Invisibility to Market Recognition
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
                src="/branding-1.jpg" 
                alt="Salwa Real Estate Branding" 
                width={1200} 
                height={800} 
                className="w-full h-auto object-contain" 
              />
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Client/Project Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                [Salwa Real Estate], is a reputable brokerage and advisory firm specializing in sales, leasing, off-plan, and property management across the UAE. With over eight years of experience in Dubai's dynamic real estate market, the firm had built a loyal client base through word-of-mouth and agent relationships.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                However, in an increasingly digital marketplace, they recognized that their traditional approach was no longer sufficient. Despite having knowledgeable agents and strong service capabilities, the firm had virtually no online presence and no cohesive brand identity, little to minimal social media engagement, and no systematic way to capture and nurture digital leads.
              </p>
            </div>

            {/* Business Challenge */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Business Challenge</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Salwa Real Estate faced several critical challenges:
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">Weak Brand Identity</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                The firm operated without a distinct logo or consistent branding elements, making it difficult to stand out in Dubai's crowded real estate market.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">No Website</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                No website meant no central hub to showcase property listings, capture inquiries, or establish credibility with online-first buyers.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">Limited Social Media Presence</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Low engagement meant they were invisible to the growing segment of buyers who discover properties through Instagram and Facebook.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">No Lead Generation Strategy</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most critically, they had no lead generation strategy, no paid advertising, no retargeting, no systematic approach to converting the significant demand visible in the market.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                An internal assessment revealed that 70% of their competitors had active digital presence while [Salwa] was losing potential clients to more visible agencies before they even had a chance to compete.
              </p>
            </div>

            {/* Strategy/Solution */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Strategy/Solution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We developed a comprehensive digital transformation strategy:
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">Logo Design & Branding</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We designed a sophisticated, modern logo reflecting the agency's professionalism and expertise in the Dubai real estate market. The branding included a color scheme and design elements conveying trust and luxury, which are essential attributes for attracting high-net-worth clients.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">Website Development</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                A sleek, responsive website was developed featuring a comprehensive property listing section with high-resolution images and descriptions, advanced search filters for easy property discovery, inquiry forms with WhatsApp integration for direct communication, and SEO-optimized pages to rank higher in search results.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">Social Media Management</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Social media pages were revamped with consistent branding and engaging content. Strategies included daily property showcases with high-quality visuals and videos, market insights and investment tips, community engagement through polls and Q&A sessions, and strategic content calendar planning.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">Facebook & Instagram Advertising</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Highly targeted ad campaigns were launched to attract potential buyers and investors, with custom audience segmentation based on demographics, interests, and behaviors, carousel and video ads showcasing premium properties, lead generation forms to capture inquiries directly from ads, and retargeting campaigns to re-engage previous visitors.
              </p>
            </div>
            
            {/* Execution */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Execution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The transformation rolled out over twelve weeks:
              </p>
              <ul className="list-none space-y-4 text-gray-600 font-medium">
                <li><span className="font-bold text-gray-800">Weeks 1-3:</span> Brand identity development, logo creation, and brand guidelines</li>
                <li><span className="font-bold text-gray-800">Weeks 4-6:</span> Website development with property listing integration and SEO optimization</li>
                <li><span className="font-bold text-gray-800">Weeks 7-8:</span> Social media page revamp and content calendar creation</li>
                <li><span className="font-bold text-gray-800">Weeks 9-10:</span> Paid advertising campaign setup and audience segmentation</li>
                <li><span className="font-bold text-gray-800">Weeks 11-12:</span> Full launch, agent training on the new systems, and performance baseline measurement</li>
              </ul>
            </div>

            {/* Results/Impact */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Results/Impact</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                After four months of execution, [Salwa Real Estate] achieved remarkable growth:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600 font-medium marker:text-gray-400 mb-6">
                <li>400% increase in website traffic as the SEO-optimized site began ranking for competitive Dubai real estate keywords</li>
                <li>180+ qualified leads per month, up from virtually zero digital inquiries previously</li>
                <li>30% growth in social media engagement and followers, establishing the brand as a trusted voice in Dubai real estate</li>
                <li>25% increase in property inquiry conversion rates from digital ad campaigns</li>
                <li>Enhanced brand recognition in the competitive Dubai real estate market</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The integrated approach created a virtuous cycle: better branding attracted more traffic, more traffic generated more leads, and more leads resulted in more closed deals.
              </p>
            </div>
            
            {/* Conclusion */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Conclusion</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Salwa Real Estate's transformation demonstrates that in Dubai's competitive real estate market, a strong digital presence is not optional, it's essential. By building a cohesive brand, establishing a professional web presence, and implementing systematic lead generation, the firm positioned itself for sustainable growth in an increasingly digital-first industry.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold italic">
                Is your real estate agency invisible online? Schedule a free digital audit with our team and discover how we can build a brand and lead generation system that attracts premium clients.
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
                  <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src="/zeeshan.png.png" alt="Zeeshan Aashiq" fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-bold text-gray-900 text-[18px]">Zeeshan Aashiq</h5>
                    <div className="flex items-center gap-1.5">
                       <Phone className="w-4 h-4 text-black" strokeWidth={2} />
                       <p className="text-[15px] text-gray-800 tracking-wide">+92 343 1891919</p>
                    </div>
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
