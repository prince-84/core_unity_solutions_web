import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kelly's Cajun Grill SEO: From Invisible to #1 in Local Search",
  description: "See how SEO drove 250% more Google Maps searches and 40% more delivery orders for Kelly's Cajun Grill in Dubai. Free SEO audit available.",
};

export default function SEOCaseStudyPage() {
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
          <h1 className="text-[28px] md:text-[32px] font-bold tracking-wide text-white">Case Study (SEO Strategy)</h1>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-[52px] font-bold leading-[1.2] text-white mb-6 tracking-tight">
          Kelly's Cajun Grill (UAE):
        </h2>
        
        {/* Sub-description */}
        <p className="text-center text-gray-300 text-lg md:text-[21px] max-w-[850px] leading-[1.6] font-light">
          From Mall Footfall to Digital Dominance via SEO
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
                src="/seo.jpg" 
                alt="Kelly's Cajun Grill SEO Case Study" 
                width={1200} 
                height={800} 
                className="w-full h-auto object-contain" 
              />
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kelly's Cajun Grill is an established international brand bringing authentic Louisiana-style Cajun cuisine to the UAE. With flagship locations in Dubai Mall and Mall of the Emirates, which are two of the world's busiest shopping destinations, the restaurant serves signature dishes like spicy jambalaya, crispy po'boys, Cajun chicken, succulent shrimp, and flavorful salmon. Its warm, inviting atmosphere and bold spices capture the essence of bayou cooking.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                However, despite premium mall locations and a strong culinary offering, the brand suffered from a critical digital blind spot. Online search visibility was nearly nonexistent, and the restaurant failed to convert the vast digital audience searching for dining options into actual foot traffic or delivery orders. This case study details how a targeted SEO-first strategy reversed that trend.
              </p>
            </div>

            {/* Business Challenge */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Business Challenge</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kelly's Cajun Grill faced four interconnected SEO and discoverability challenges:
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">Over-Reliance on Walk-In Traffic</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                The brand depended almost entirely on mall footfall. While Dubai Mall and Mall of the Emirates draw millions, this passive model left Kelly's vulnerable during off-peak hours, mall maintenance, or changing visitor patterns. There was no organic search funnel to bring in customers independently.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">Poor Local Search Visibility</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Despite prime real estate, the restaurant was virtually invisible on Google Maps and search engines. Queries like "Cajun food Dubai," "best shrimp near Dubai Mall," or "Louisiana restaurant Mall of the Emirates" returned competitors and not Kelly's. The brand had no structured SEO strategy, no optimized Google Business Profiles, and minimal presence on review platforms.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">Underutilized Delivery Channels</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kelly's was listed on Talabat and Deliveroo, but orders were sporadic. Without SEO-driven traffic to these listings or internal menu optimization, delivery remained an afterthought rather than a revenue pillar.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">No Customer Retention or Data Capture</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Walk-in customers came, ate, and left. There was no system to capture emails, phone numbers, or preferences, meaning no remarketing, no loyalty incentives, and no way to convert one-time visitors into repeat diners.
              </p>
            </div>

            {/* Strategy */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Strategy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implemented a comprehensive SEO-centric digital growth strategy designed to dominate local search, drive organic traffic to both physical and delivery channels, and build a data-driven retention loop:
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">1. Google Business Profile & Hyperlocal SEO</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We fully optimized Google Business Profiles for both Dubai Mall and Mall of the Emirates locations. This included:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Accurate NAP (Name, Address, Phone) data with location-specific descriptors</li>
                <li>High-resolution, keyword-tagged photos of menu items, interior, and staff</li>
                <li>Rich descriptions incorporating primary keywords: *Cajun restaurant Dubai Mall*, *best seafood Mall of the Emirates*, *Louisiana chicken near me*</li>
                <li>Regular posting of updates, offers, and events directly on GBP</li>
                <li>Active review management with response templates to encourage 5-star ratings</li>
              </ul>

              <h4 className="font-bold text-xl mb-2 text-gray-800">2. Location-Specific Landing Pages & Content Marketing</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We developed two dedicated landing pages, one per mall location and each optimized for distinct search intents:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>"Dubai-mall-cajun-restaurant" targeting "Cajun food near Dubai Mall" and "restaurants in Dubai Mall"</li>
                <li>"Mall-of-emirates-seafood" targeting "best shrimp Mall of the Emirates" and "Cajun grill MOE"</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each page included embedded Google Maps, menu highlights, opening hours, delivery partner links, and internal blog content about Cajun cuisine history and spice guides to build topical authority.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">3. Review Generation & Reputation SEO</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implemented a post-meal SMS/email review funnel, gently asking diners to leave feedback on Google and Zomato. Staff were trained to verbally request reviews during checkout. Positive reviews were leveraged as local SEO ranking signals, while negative ones were addressed promptly to maintain a healthy average rating.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">4. Delivery Channel SEO & Menu Optimization</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We restructured Talabat and Deliveroo menus using keyword-rich item titles (e.g., "Spicy Cajun Chicken Box – Dubai Mall Favorite") and high-quality images. "Signature Box" bundles were created to increase average order value, and platform-specific promotions were scheduled during peak search hours (weekend evenings, mall closing times). We also added internal links from the website to delivery listings to pass SEO equity.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">5. WhatsApp Customer Engagement via QR Codes</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                To capture first-party data, we placed QR codes on tabletops and receipts linking to a WhatsApp Business number. Diners who scanned received an exclusive discount and were added to an opt-in list for weekly promotions and new-menu alerts. This created a closed-loop retention system, with the WhatsApp chat history serving as a lightweight CRM.
              </p>
            </div>
            
            {/* Execution */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Execution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The project was rolled out over ten weeks, with SEO as the central thread:
              </p>
              <ul className="list-none space-y-4 text-gray-600 mb-6">
                <li><span className="font-bold text-gray-800">Weeks 1-2:</span> Google Business Profile creation and full optimization for both locations; Keyword research and competitor gap analysis for Dubai and Mall of the Emirates; Initial review generation campaign launch</li>
                <li><span className="font-bold text-gray-800">Weeks 3-4:</span> Development and publishing of location-specific landing pages with on-page SEO (meta titles, H1/H2 tags, schema markup for restaurants); Internal linking strategy across the main website</li>
                <li><span className="font-bold text-gray-800">Weeks 5-6:</span> Delivery platform menu restructuring with SEO-friendly item names and descriptions; Backlink outreach to Dubai food bloggers and local directories (Zomato, Time Out Dubai)</li>
                <li><span className="font-bold text-gray-800">Weeks 7-8:</span> WhatsApp Business setup with QR code printing and placement; Automated messaging workflows for reservations, order confirmations, and promotional blasts</li>
                <li><span className="font-bold text-gray-800">Weeks 9-10:</span> Full integration of all channels; staff training on review requests and QR code promotion; Performance baseline measurement and weekly SEO reporting</li>
              </ul>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">Technology Stack:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Google Business Profile & Google Search Console</li>
                <li>SEMrush for keyword tracking and competitor analysis</li>
                <li>Meta Business Suite (for social signals, though SEO was primary)</li>
                <li>WhatsApp Business API with automated rules</li>
                <li>Talabat/Deliveroo merchant dashboards</li>
                <li>Schema.org markup for local business structured data</li>
              </ul>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Results</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                After four months of execution, Kelly's Cajun Grill achieved significant SEO-driven growth:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                <li>250% increase in Google Maps searches for both locations, with the Dubai Mall profile appearing in the Local Pack for "Cajun restaurant Dubai" and "best shrimp near Dubai Mall" within 6 weeks</li>
                <li>60% increase in organic website traffic to location landing pages, with average session duration of 2+ minutes (indicating strong content engagement)</li>
                <li>40% increase in delivery orders through Talabat and Deliveroo, directly attributed to improved visibility on platform search results and cross-linking from the website</li>
                <li>35% increase in repeat customers at both locations, driven by WhatsApp promotions and loyalty incentives captured through QR scans</li>
                <li>Average rating improved from 3.7 to 4.3 across Google and Zomato, with review volume increasing by 80%, a key local SEO ranking factor</li>
                <li>WhatsApp opt-ins reached 180+ within the first two months, generating 50+ reservation inquiries per week and reducing no-shows by 60% via automated reminders</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The combined SEO efforts resulted in a 45% reduction in dependency on pure walk-in traffic, with a measurable share of new customers coming directly from organic search and map listings.
              </p>
            </div>
            
            {/* Conclusion */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Conclusion</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For mall-based restaurants like Kelly's Cajun Grill, premium footfall is a blessing, but it's not a sustainable growth engine. By shifting from passive reliance on location to an active, SEO-led digital strategy, the brand transformed its online invisibility into a dominant local search presence. The integration of Google optimization, content marketing, review management, and WhatsApp retention created a self-reinforcing cycle: better search visibility drove more diners, more reviews boosted rankings, and captured customer data fueled repeat business.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The result? Kelly's Cajun Grill no longer waits for mall visitors to find them. They actively attract diners who search, discover, and choose them first.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold italic">
                Is your restaurant invisible online, despite a great location? Book a free SEO restaurant audit today and learn how to dominate local search in your market.
              </p>
            </div>

            {/* Share Section Placeholder */}
            <div className="pt-6 border-t border-gray-200 flex items-center gap-4">
              <span className="font-semibold text-gray-700">Share:</span>
              <div className="flex gap-3 items-center">
                <a href="https://www.facebook.com/coreunitysolutions" target="_blank" rel="noopener noreferrer">
                  <Image src="/fb.png" alt="Facebook" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                </a>
                <a href="https://www.instagram.com/coreunitysolutions/" target="_blank" rel="noopener noreferrer">
                  <Image src="/insts.png" alt="Instagram" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                </a>
                <a href="https://www.youtube.com/@coreunitysolutions" target="_blank" rel="noopener noreferrer">
                  <Image src="/yt.png" alt="YouTube" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                </a>
                <a href="https://www.linkedin.com/company/coreunitysolutions" target="_blank" rel="noopener noreferrer">
                  <Image src="/link.png" alt="LinkedIn" width={36} height={36} className="cursor-pointer hover:scale-105 transition-transform object-contain" />
                </a>
                <a href="https://www.tiktok.com/@coreunitysolutions?lang=en" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] bg-black rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.3a6.33 6.33 0 0 0-1-.08A6.26 6.26 0 0 0 3 15.48a6.26 6.26 0 0 0 10.7 4.41c.23-.23.44-.48.62-.75V12a8.28 8.28 0 0 0 5.27 1.85v-3.72a4.83 4.83 0 0 1-3.77-1.48v-2h3.77v.03z"/></svg>
                </a>
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
                    <h5 className="font-bold text-gray-900 text-[18px]">Customer Support</h5>
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
