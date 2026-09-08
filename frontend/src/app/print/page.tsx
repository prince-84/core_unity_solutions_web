import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Al Hilal Restaurant Print Strategy: From Local to Citywide',
  description: 'See how print media & design drove 200% more foot traffic and 60% more delivery orders for Al Hilal Restaurant in Deira. Free consultation available.',
};

export default function PrintCaseStudyPage() {
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
          <h1 className="text-[28px] md:text-[32px] font-bold tracking-wide text-white">Case Study (Print Media & Design Strategy)</h1>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-[52px] font-bold leading-[1.2] text-white mb-6 tracking-tight">
          Al Hilal Restaurant (Frij Murar):
        </h2>
        
        {/* Sub-description */}
        <p className="text-center text-gray-300 text-lg md:text-[21px] max-w-[850px] leading-[1.6] font-light">
          From Local Gem to Deira's Go-To Dining Destination
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
                src="/print.jpg" 
                alt="Al Hilal Restaurant Print Strategy Case Study" 
                width={1200} 
                height={800} 
                className="w-full h-auto object-contain" 
              />
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al Hilal Restaurant is a cherished dining landmark in Deira's Frij Murar area, renowned for authentic Desi (Pakistani) and Chinese cuisine. Its menu features biryani, karahi, handi, chow mein, fried rice, soups, and sizzling Chinese specials. It is crafted with premium ingredients and traditional spices. Known for its family-friendly ambiance, excellent service, and 100% halal certification, Al Hilal has long been a favorite among local residents.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Yet, despite its strong neighborhood reputation, the restaurant remained virtually unknown beyond Frij Murar. In a district bustling with African-run cafes and eateries, Al Hilal struggled to differentiate itself without a cohesive print and design strategy to communicate its identity and reach new audiences.
              </p>
            </div>

            {/* Business Challenge */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Business Challenge</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al Hilal Restaurant faced critical hurdles:
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">Local Fame, Citywide Obscurity</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                The restaurant was a beloved secret among Frij Murar locals but had zero visibility among tourists, office workers from other Deira sub-districts, or Dubai residents from farther areas. No printed materials existed to introduce the brand outside its immediate zone.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">No Brand Collateral</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                The restaurant operated without professional menus, flyers, posters, or any branded takeaway materials. Potential customers walking through Deira had no tactile, visual reminder of Al Hilal's existence or offerings.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">Underperforming Delivery Channels</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                While listed on Talabat, delivery orders were erratic. There were no printed inserts in delivery bags to encourage reordering, no loyalty cards, and no visual promotions to boost average order value.
              </p>
              
              <h4 className="font-bold text-xl mb-2 text-gray-800">No Customer Retention Tools</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Without a physical loyalty system, comment cards, or branded giveaways, diners came and went. There was no printed medium to capture contact details, share promotional offers, or build a recurring customer base.
              </p>
            </div>

            {/* Strategy */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Strategy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implemented a print-media and design-led growth strategy, focusing on tangible brand assets that would travel beyond the restaurant's walls:
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">1. Brand Identity & Menu Redesign</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We overhauled Al Hilal's visual identity. We incorporated a logo refresh, color palette, and typography to convey warmth, authenticity, and quality. We designed new dine-in menus with appetizing food photography, clear categorization, and highlighted best-sellers. A separate takeaway/delivery menu was created for insertion into every order.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">2. Location-Based Print Distribution</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We produced high-quality flyers and posters tailored for Deira, Naif, and adjacent neighborhoods. These were distributed to office buildings, hotels, and community bulletin boards, featuring a scannable QR code that led to a simple landing page with menu, contact, and WhatsApp ordering details.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">3. Delivery Insert Campaign</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every delivery order from Talabat received a branded loyalty card ("Buy 5 meals, get the 6th free") and a double-sided flyer: one side showcasing daily specials, the other inviting customers to join the WhatsApp loyalty program via QR code. This turned every delivery into a promotional touchpoint.
              </p>

              <h4 className="font-bold text-xl mb-2 text-gray-800">4. In-Restaurant Print Collateral</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We installed table tents, wall posters, and counter cards promoting combo deals, family bundles, and weekly specials. A "Chef's Recommendation" board was placed near the entrance to drive impulse orders. Comment cards were introduced to collect feedback and opt-ins for future promotions.
              </p>
            </div>
            
            {/* Execution */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Execution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The project unfolded over eight weeks:
              </p>
              <ul className="list-none space-y-4 text-gray-600 mb-6">
                <li><span className="font-bold text-gray-800">Weeks 1-2:</span> Brand identity refresh, menu redesign, and photography session for all dishes.</li>
                <li><span className="font-bold text-gray-800">Weeks 3-4:</span> Production of flyers, posters, loyalty cards, and table tents; initial distribution in Deira and Naif.</li>
                <li><span className="font-bold text-gray-800">Weeks 5-6:</span> Rollout of delivery inserts and in-restaurant collateral; staff training on upselling using print materials.</li>
                <li><span className="font-bold text-gray-800">Weeks 7-8:</span> Launch of QR-code-driven WhatsApp loyalty program via all printed pieces; installation of exterior signage and window decals to boost foot traffic.</li>
              </ul>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                The technology stack was minimal: a QR code generator, WhatsApp Business API for loyalty tracking, and a basic landing page. The focus was entirely on high-quality print design and strategic placement.
              </p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Results</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                After three months, Al Hilal Restaurant achieved:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                <li>200% increase in foot traffic from outside Frij Murar, attributed to flyers and posters in nearby office and hotel zones.</li>
                <li>60% increase in delivery orders, driven by loyalty cards and promotional inserts in every bag.</li>
                <li>40% increase in average order value from in-restaurant diners, thanks to table tent upsells and combo posters.</li>
                <li>120+ new WhatsApp loyalty sign-ups via QR codes on menus, flyers, and delivery inserts within the first six weeks.</li>
                <li>4.6 average Google rating, boosted by comment cards that gently reminded diners to leave reviews.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The delivery insert campaign alone generated 25+ direct WhatsApp orders per week (bypassing platform commissions), increasing profit margins on those orders by 18%. The physical loyalty card saw a 35% redemption rate, far exceeding typical digital loyalty programs.
              </p>
            </div>
            
            {/* Conclusion */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Conclusion</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For neighborhood restaurants like Al Hilal, the path to citywide recognition doesn't always require complex digital tools. Sometimes, it starts with a well-designed menu, a compelling flyer, and a loyalty card that fits in a pocket. By investing in print media and strategic design, Al Hilal transformed from a hidden local treasure into Deira's go-to destination for Desi and Chinese cuisine with tangible materials that brought the brand to life beyond its four walls.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold italic">
                Is your restaurant a hidden gem waiting to be discovered? Schedule a free print-media and design consultation, and let us show you how to put your brand into people's hands, literally.
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
