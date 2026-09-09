import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5 Must-Have Business Website Features Every Company Needs',
  description: 'Discover the 5 must-have business website features that build trust, boost rankings, and turn visitors into customers. A practical checklist for 2026.',
};
export default function BusinessWebsiteFeaturesPage() {
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
          <h1 className="text-[28px] md:text-[32px] font-bold tracking-wide text-white">Our Blogs</h1>
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

      {/* Main Content Container (White Background) */}
      <div className="bg-white text-black relative z-20 -mt-10">
        <section className="py-20 px-6 sm:px-12 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Blog Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Heading */}
            <h2 className="text-3xl md:text-[38px] font-bold text-[#1f1f1f] leading-[1.25] tracking-tight">
              5 Must-Have Features Every Business Website Needs
            </h2>

            {/* Content */}
            <div className="space-y-6 text-gray-600 text-[16px] leading-[1.7] font-normal">
              <p>
                Let's be honest for a second: most business owners don't think about their website until something goes wrong. A customer calls to say they couldn't find the contact page. A lead complains the site took forever to load on their phone. Or worse, nobody complains at all, because they just left and bought from a competitor instead.
              </p>
              <p>
                That silent bounce is the real danger. You never get a support ticket for a website that quietly failed to convert someone.
              </p>
              <p>
                This guide walks through the five business website features that matter most right now, why they matter, and how to actually implement them without overhauling your entire site from scratch.
              </p>

            {/* Image/Banner Area */}
            <div className="w-full rounded-2xl overflow-hidden relative my-10 shadow-lg border border-gray-800">
              <Image 
                src="/blog4.png" 
                alt="5 Must-Have Features Every Business Website Needs" 
                width={1200}
                height={630}
                className="w-full h-auto object-cover" 
              />
            </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5 Essential Features for Small Business Website Checklist</h3>
              <p>
                If you're building an essential website features for small business checklist, or trying to figure out what makes a good business website before a redesign, the five categories below are where to start. The essential website features for small business owners are rarely about spending more; they're about spending correctly on the things that actually move the needle.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Responsive, Mobile-First Design</h3>
              <p>
                This is the one nobody argues about anymore, and yet it's still the most commonly botched of all business website features.
              </p>
              <p>
                More than half of all web traffic today comes from smartphones and tablets, not desktops. If your site doesn't perform well on a small screen, you're likely losing potential customers before they even learn what your business does. Think about your own habits. When was the last time you researched a local plumber, dentist, or accountant from a laptop instead of your phone?
              </p>
              <p>Responsive website design for business isn't just about squeezing your desktop layout onto a smaller screen. It means:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Navigation menus that collapse cleanly into a thumb-friendly format</li>
                <li>Text that's readable without pinch-zooming</li>
                <li>Buttons and forms that are easy to tap, not just click</li>
                <li>Images that resize without breaking the layout or slowing the page down</li>
              </ul>
              <p>
                A responsive site doesn't just feel better to use, it tends to rank better too, since search engines primarily evaluate the mobile version of a page when deciding where it belongs in results. Skip this, and you're fighting an uphill battle in search results before you've even published a blog post.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Site Speed and Core Web Vitals</h3>
              <p>
                Of all the business website features on this list, speed is the one with the most brutal, well-documented data behind it.
              </p>
              <p>
                Google's own studies on mobile behavior found that more than half of mobile visitors will abandon a site if it hasn't loaded within three seconds. That's over half your mobile traffic gone before your homepage even finishes rendering. And it compounds: conversion rates tend to fall by roughly 4% for every extra second of load time in that critical zero-to-five-second window.
              </p>
              <p>Practical fixes that move the needle without an engineering degree:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Compress and properly format images (a JPEG instead of a PNG can cut file size dramatically)</li>
                <li>Use a reputable hosting provider instead of the cheapest shared plan you can find</li>
                <li>Minimize third-party scripts, plugins, and heavy sliders</li>
                <li>Run your site through Google's PageSpeed Insights and fix what it flags first</li>
              </ul>
              <p>
                These load-time and Core Web Vitals metrics are now baked directly into how Google evaluates and ranks sites, which makes this one of the important elements of a business website that quietly determines whether people ever find you at all.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Clear Navigation and Intuitive User Experience</h3>
              <p>
                Good navigation is one of those business website features that's invisible when done right and glaringly obvious when done wrong. If a visitor has to think about where to click next, you've already lost some of their attention. The goal is a structure so logical that people barely notice it's there.
              </p>
              <p>A few non-negotiables for navigation:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A menu with no more than 5–7 top-level items, using plain language instead of internal jargon</li>
                <li>A visible, working search bar for content-heavy sites</li>
                <li>Breadcrumbs on deeper pages so users always know where they are</li>
                <li>A logo that links back to the homepage from every page</li>
                <li>Consistent placement of menus and footers across the entire site</li>
              </ul>
              <p>
                This is also where trust gets built or lost. Confusing navigation reads as amateur, even if the actual products or services behind it are excellent. When people ask what makes a good business website, intuitive UX is almost always the first thing experienced designers mention, way before color schemes, before fonts, before anything visual. It's also one of the important elements of a business website that's cheapest to fix; a menu restructure costs a fraction of what a full redesign does, yet it can meaningfully change how long visitors stick around.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Strong Security and Visible Trust Signals</h3>
              <p>
                Security used to be an afterthought for small business sites. It isn't anymore, and it's now firmly one of the core business website features that both visitors and search engines check for.
              </p>
              <p>
                Any site that handles payments or stores customer data needs secure payment processing and compliance with recognized data protection standards. If your site still doesn't have a valid SSL certificate (the little padlock next to your URL), browsers now actively warn visitors that your site is "not secure", which is about as fast a way to lose a lead as any.
              </p>
              <p>Beyond SSL, a truly secure and trustworthy site includes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Encrypted checkout and contact forms</li>
                <li>A clear, easy-to-read privacy policy</li>
                <li>Visible trust badges, certifications, or industry association logos</li>
                <li>Real customer testimonials, reviews, and case studies with names or photos attached</li>
                <li>Regular software and plugin updates, especially on WordPress-based sites</li>
              </ul>
              <p>
                These business website essentials aren't just defensive measures against hackers. They're persuasion tools. A visitor deciding whether to hand over their email address or credit card is silently scanning for reasons to trust you, or reasons to leave. Skip them, and no amount of clever copywriting or design polish will make up the gap; trust and security sit at the very bottom of the list of business website essentials for a reason, as everything else depends on them.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Conversion-Focused Calls-to-Action and Lead Capture</h3>
              <p>
                This is the feature that actually turns your website from a digital pamphlet into a business asset and it's the one most often missing from otherwise solid sites, so it's one of the very important feature that every business website should have.
              </p>
              <p>
                You can nail speed, security, and navigation and still generate zero leads if you never actually ask visitors to do anything. Among all website features that drive conversions, a clear and repeated call-to-action is the single highest-leverage addition you can make. Of every category of must-have website features that drive conversions, this one has the fastest turnaround. You can test a new headline or button today and see the impact within days.
              </p>
              <p>What this looks like in practice:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A benefit-driven headline above the fold that immediately answers "what's in it for me?"</li>
                <li>Buttons with specific action language ("Get a Free Quote" beats a generic "Submit")</li>
                <li>Lead capture forms placed at natural decision points, not shoved into every corner</li>
                <li>One-click contact options like click-to-call or WhatsApp for mobile visitors</li>
                <li>Social proof like testimonials, reviews, or client logos positioned near your CTAs, not buried on a separate page</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Thoughts</h3>
              <p>
                None of these five business website features are flashy. There's no AI chatbot, no 3D animation, no trendy scroll effect in this list, and that's deliberate. Flashy features get attention in a portfolio; fundamentals get attention (and conversions) from actual customers.
              </p>
              <p>
                Start with responsiveness, speed, navigation, security, and conversion-focused CTAs. Get those five right, and you'll have a site that works quietly in the background, turning visitors into leads and leads into customers, long after you've stopped thinking about it day to day.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong>What are the most important business website features for a small business?</strong><br />
                  The core essentials are responsive mobile design, fast load speed, clear navigation, strong security (SSL and privacy policy), and visible calls-to-action. These five cover the majority of what separates a converting site from one that just sits there.
                </li>
                <li>
                  <strong>What makes a good business website?</strong><br />
                  A good business website solves a visitor's problem quickly with clear messaging, easy navigation, fast loading, and a straightforward next step, whether that's calling, booking, or buying. Looks matter, but usability and trust matter more.
                </li>
                <li>
                  <strong>Why is responsive website design for business so important?</strong><br />
                  Because the majority of web traffic now happens on phones. If a site isn't optimized for mobile screens, visitors leave almost immediately, and search engines rank the mobile experience specifically when determining where a site appears in results.
                </li>
                <li>
                  <strong>How much does website speed really affect conversions?</strong><br />
                  Significantly. Research shows conversion rates can drop several percentage points for every additional second of load time, and a large share of mobile users abandon sites that take longer than three seconds to load.
                </li>
                <li>
                  <strong>What security features should every business website have?</strong><br />
                  At minimum: a valid SSL certificate, an encrypted checkout or contact form, a clear privacy policy, and visible trust signals like reviews or industry certifications. These are baseline expectations, not extras.
                </li>
                <li>
                  <strong>What website features actually drive conversions?</strong><br />
                  Clear, benefit-driven headlines, specific call-to-action button copy, well-placed lead capture forms, and social proof near decision points. Traffic without conversion-focused design just means more people leaving without acting.
                </li>
                <li>
                  <strong>Do I need a live chat feature on my business website?</strong><br />
                  It depends on your audience and resources. A well-placed contact form, click-to-call button, or WhatsApp link often performs just as well, especially if live chat isn't staffed consistently, an unanswered chat window can hurt trust more than help it.
                </li>
                <li>
                  <strong>How often should a business website be reviewed or updated?</strong><br />
                  Most businesses should review their website at least once a year to keep content current, verify links and forms still work, and check performance against updated speed and security standards.
                </li>
                <li>
                  <strong>What's the difference between essential website features and nice-to-have extras?</strong><br />
                  Essentials are the features that affect whether a visitor can find information, trust your business, and take action, including speed, security, navigation, and CTAs. Extras like animations or advanced personalization only add value once the essentials are solid.
                </li>
                <li>
                  <strong>Can I add these must-have website features to an existing site, or do I need a full redesign?</strong><br />
                  In most cases, you can improve speed, security, navigation, and CTAs incrementally without a full rebuild. A complete redesign is usually only necessary if the underlying site structure or platform is outdated or can't support these updates.
                </li>
              </ol>
            </div>

            {/* Share Section */}
            <div className="pt-8 flex items-center gap-4">
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
              <h4 className="font-bold text-[17px] mb-3 text-gray-900">Contact With Us Now !</h4>
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

            {/* Airtel Case Study Card */}
            <div className="bg-[#f0f1f2] rounded-[32px] p-8 shadow-sm border border-gray-200/50 flex flex-col gap-6 text-center relative overflow-hidden">
              
              {/* Airtel Logo Area */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-[28px] font-extrabold text-[#d32f2f] tracking-tighter uppercase font-sans">airtel</span>
                <span className="text-[10px] font-bold text-[#c52833] uppercase border border-[#c52833]/30 px-2.5 py-0.5 rounded-full tracking-wider">
                  Case Study
                </span>
                <h4 className="text-xl font-bold text-gray-900 mt-2">My Airtel App</h4>
                <p className="text-xs text-gray-500 font-light">App Recharge and Easy Plan Renewal</p>
              </div>

              {/* App store icons */}
              <div className="flex justify-center gap-2">
                <div className="bg-black text-white px-3 py-1.5 rounded flex items-center gap-1.5 cursor-pointer hover:bg-gray-900 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C16 1.04 14.9 1.6 14.24 2.38C13.68 3.04 13.19 4.14 13.34 5.39C14.39 5.47 15.4 4.88 15.97 4.17Z"/></svg>
                  <div className="text-left leading-none">
                    <p className="text-[7px] text-gray-400">Download on the</p>
                    <p className="text-[10px] font-bold">App Store</p>
                  </div>
                </div>
                <div className="bg-black text-white px-3 py-1.5 rounded flex items-center gap-1.5 cursor-pointer hover:bg-gray-900 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M5,3L13.78,11.78L16.22,9.33L5,3M19.33,12L21,13.67L5,3V3.5L19.33,12M5,21V20.5L19.33,12L5,21M5,21L13.78,12.22L16.22,14.67L5,21Z"/></svg>
                  <div className="text-left leading-none">
                    <p className="text-[7px] text-gray-400">GET IT ON</p>
                    <p className="text-[10px] font-bold">Google Play</p>
                  </div>
                </div>
              </div>

              {/* Mockup phone with avatars */}
              <div className="relative w-full h-[260px] flex items-center justify-center mt-4">
                {/* Red Wave background in container */}
                <div className="absolute inset-0 bg-red-600/10 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-[200px] h-[200px] bg-red-600 rounded-full blur-[80px] opacity-40" />
                </div>
                
                {/* Phone Frame */}
                <div className="relative w-[130px] h-[250px] bg-black rounded-[24px] border-4 border-gray-800 shadow-2xl overflow-hidden z-10">
                  <div className="w-full h-full bg-[#f8f9fa] p-2 flex flex-col justify-between text-left">
                    <div className="flex justify-between items-center text-[8px] font-bold text-gray-800 border-b pb-1">
                      <span>airtel</span>
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <div className="my-2">
                      <p className="text-[8px] text-gray-500">Welcome</p>
                      <p className="text-[10px] font-extrabold text-gray-900 leading-tight">Abdullah Memon</p>
                    </div>
                    <div className="bg-red-50 p-1.5 rounded-lg border border-red-100 flex flex-col gap-0.5">
                      <span className="text-[6px] text-gray-500">Balance</span>
                      <span className="text-[11px] font-black text-[#d32f2f]">32.38 Tk</span>
                    </div>
                    <div className="bg-red-600 text-white rounded-md text-[8px] py-1 text-center font-bold shadow cursor-pointer mt-2">
                      Recharge Plan
                    </div>
                    <div className="w-12 h-1 bg-gray-400 rounded mx-auto mt-2" />
                  </div>
                </div>

                {/* Floating Avatars */}
                <div className="absolute top-[20%] left-[10%] w-9 h-9 rounded-full border border-red-600/30 p-0.5 z-20 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image src="/Zeeshan_image.png" alt="Avatar" fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute top-[10%] right-[10%] w-9 h-9 rounded-full border border-red-600/30 p-0.5 z-20 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image src="/farazbhai_image.png" alt="Avatar" fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute bottom-[20%] left-[8%] w-9 h-9 rounded-full border border-red-600/30 p-0.5 z-20 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image src="/babar_image.png" alt="Avatar" fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute bottom-[15%] right-[8%] w-9 h-9 rounded-full border border-red-600/30 p-0.5 z-20 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image src="/osama_image.png" alt="Avatar" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto border-t border-gray-200" />

        {/* Related Articles Section */}
        <section className="pb-24 pt-12 px-6 sm:px-12 md:px-20">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Link 
                href="/blog/detail"
                key={index} 
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black">
                  <Image 
                    src="/blog_image.png" 
                    alt="Blog Cover" 
                    fill 
                    className="object-cover transition-transform duration-500" 
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#8c1c24]/90 flex items-center justify-center text-white text-center text-[13px] sm:text-[15px] font-medium leading-tight transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      View Full<br />Blog
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl leading-tight mb-4 group-hover:text-red-600 transition-colors">
                    How to Get Your Local Business on Google Maps (Step-by-Step)
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-4 text-xs font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="relative w-[14px] h-[14px] opacity-70">
                        <Image src="/calendar_image.png" alt="Date" fill className="object-contain" />
                      </div>
                      January 10, 2022
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative w-[14px] h-[14px] opacity-70">
                        <Image src="/file_image.png" alt="Category" fill className="object-contain" />
                      </div>
                      Local SEO
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    If you run a local business and you're not showing up on Google Maps, you're handing customers straight to competitors who are...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
