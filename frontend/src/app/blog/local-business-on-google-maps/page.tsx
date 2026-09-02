import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Get Your Local Business on Google Maps (Step-by-Step Guide)',
  description: 'Learn how to create a Google Business Profile, verify it, and optimize it for local search: A complete step-by-step guide to getting found on Google Maps',
};
export default function BlogDetailPage() {
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
              How to Get Your Local Business on Google Maps (Step-by-Step)
            </h2>

            {/* Content */}
            <div className="space-y-6 text-gray-600 text-[16px] leading-[1.7] font-normal">
              <p>
                If you run a local business and you're not showing up on Google Maps, you're handing customers straight to competitors who are. Most people don't flip through a phone book anymore, they type "plumber near me" or "coffee shop open now" into Google and pick from whatever pops up on the map. If your business isn't there, you're invisible at the exact moment someone is ready to buy.
              </p>
              <p>
                The good news is that getting listed doesn't cost anything, and it isn't complicated once you know the order of operations. This guide walks through how to create a Google Business Profile from scratch, get it verified, and set it up so it actually helps you win local customers instead of sitting there half-finished and ignored.
              </p>

            {/* Image/Banner Area */}
            <div className="w-full rounded-2xl overflow-hidden relative my-10 shadow-lg border border-gray-800">
              <Image 
                src="/blog1_img_584x348.png" 
                alt="How to Get Your Local Business on Google Maps" 
                width={1200}
                height={630}
                className="w-full h-auto object-cover" 
              />
            </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Matters More Than People Think</h3>
              <p>
                Local search isn't a "nice to have" anymore. It's often the first impression a customer gets of your business. A well-built profile does more than drop a pin on a map. It’s a key component for local SEO, as it affects your local search visibility and is a factor in whether you make it into the coveted “local 3-pack” at the top of search results. Companies with complete, accurate, and active profiles consistently outperform those with thin or neglected ones. This isn’t about Google playing favourites, but a full profile provides Google (and customers) with more reasons to trust you. You will need to take the following steps to increase visibility:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 1: Check If a Listing Already Exists</h3>
              <p>
                Before you rush into building something new, search your business name on Google. Sometimes Google auto-generates a basic listing from public data even if nobody at your company ever touched it. If you go straight to trying to build one from scratch, you risk creating a duplicate, which can hurt rather than help your rankings.
              </p>
              <p>
                This step is really about the Google Maps add business process starting on the right foot. If a listing pops up that isn't managed by anyone at your company, you'll need to claim it. If nothing shows up, you're free to build a brand-new one.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 2: How to Create a Google Business Profile</h3>
              <p>
                This is the core of the whole process, so let's slow down here. Here's how to create a Google Business Profile the right way:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Go to google.com/business and sign in with a Google account (ideally one tied to your business email).</li>
                <li>Type in your exact business name. Use the same one that appears on your storefront, invoices, and website. Don't stuff in extra keywords like "best" or "affordable"; Google's guidelines prohibit it and it can get your listing suspended.</li>
                <li>Choose the most accurate business category. This single field carries a lot of weight in how Google decides which searches to match you with.</li>
                <li>Add your address, or if you're a service-area business without a public storefront, list the areas you serve instead.</li>
                <li>Add a phone number and website URL.</li>
              </ul>
              <p>
                Once these basics are filled in, you'll land inside the Google Business Profile Manager, which is the dashboard you'll return to again and again to make edits, check insights, and respond to activity. Learning how to create a Google Business Profile is really just learning your way around this one dashboard, and everything else builds from there.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 3: Claim Google Business Profile Listings That Already Exist</h3>
              <p>
                If your search in Step 1 turned up an existing listing, you don't get to build a new one. You need to claim Google Business Profile ownership instead. Click "Claim this business" and follow the prompts. If the listing shows it's already being managed by someone else (a former employee, an old agency, a previous owner), you'll need to request access instead of a straight claim.
              </p>
              <p>
                To claim Google Business Profile access from another manager, click "Request access," explain your relationship to the business, and wait. The current manager typically has a few days to respond before Google may allow the claim to go through automatically.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 4: Verify Google Business Profile Ownership</h3>
              <p>
                You can fill out every field perfectly, but none of it goes live until you complete verification. This is Google's way of confirming a real business is behind the listing, not a bot or a competitor trying to hijack your name.
              </p>
              <p>
                To verify Google Business Profile ownership, Google will offer you one or more of the following depending on your business type and location:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Phone:</strong> A text or automated call with a code</li>
                <li><strong>Email:</strong> A code sent to your business email</li>
                <li><strong>Postcard by Mail:</strong> A physical card with a code, usually arriving within one to two weeks</li>
                <li><strong>Video Verification:</strong> A short recorded walkthrough of your premises, signage, and proof of operation</li>
              </ul>
              <p>
                This range of Google Business verification (phone/email/postcard/video) options means most businesses can get verified within days, though postcard verification takes the longest. Don't skip this step or put it off, because an unverified profile won't show up in Maps or the local pack no matter how well you've filled it out.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 5: Get Your NAP (Name, Address, Phone) Accuracy Right</h3>
              <p>
                Once verified, double-check every detail against your other listings: your website footer, Yelp, Facebook, industry directories, everywhere. NAP (name, address, phone) accuracy across the web is one of the most overlooked ranking signals in local search. If your phone number on Google doesn't match the phone number on your website, or your address is formatted a bit differently across platforms, it creates confusion that can very quietly drag down your rankings.
              </p>
              <p>
                You need to set a recurring reminder to audit your NAP (name, address, phone) accuracy and you need to do this every few months, especially if you've moved locations, changed phone providers, or rebranded.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 6: Write a Business Description That Actually Sells</h3>
              <p>
                Your business description Google profile field is prime real estate. You need up to 750 characters to explain what you do, who you serve, and what makes you different. Just skip the generic filler, things like ("We are a family-owned business dedicated to excellence") and instead be very specific about services, specialties, and neighborhoods you cover. This will greatly help both customers and Google's algorithm understand exactly what you offer.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 7: Add Photos That Do the Talking</h3>
              <p>
                Listings with photos get dramatically more clicks and direction requests than listings without them. Add Google Business Profile photos of your storefront, interior, team, and products or completed work. Upload a fresh batch every month or two. You will need recent, real photos (not stock images) to signal to both Google and customers that your business is active and legitimate.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 8: Optimize Google Business Profile for Rankings</h3>
              <p>
                This is where most businesses stop too early. To optimize Google Business Profile performance long-term, fill out every attribute Google offers: services, products, business hours (including holiday hours), accessibility features, and payment options. Each completed field is another signal that helps determine your local business ranking when someone searches nearby.
              </p>
              <p>
                Google weighs three main factors for ranking: <strong>Relevance</strong>, <strong>Distance</strong>, <strong>Prominence</strong>.
              </p>
              <p>
                You can't move your address, but you can absolutely improve relevance (through category and description accuracy) and prominence (through reviews, photos, and activity), which is exactly what it means to optimize Google Business Profile completeness over time.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 9: Post Regularly With Google Posts</h3>
              <p>
                Google Posts function like mini social media updates that appear directly on your profile. Things like Promotions, events, new products, seasonal updates. Regularly posting Google Posts helps keep your business looking more active and engaged, which affects how fresh and trustworthy your listing appears to Google and searchers.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 10: Build a Steady Stream of Google Reviews</h3>
              <p>
                Google reviews for business listings are one of the strongest trust signals you can build. A handful of five-star reviews from three years ago won't cut it because Google and customers both favor recent, ongoing feedback.
              </p>
              <p>
                If you're wondering how to get Google reviews flowing consistently, the simplest method is also the most effective: ask. Send a direct link when a job or purchase is completed, add a QR code at checkout, or include a request in follow up emails. Timing is everything so ask right after a positive interaction while it is still fresh.
              </p>
              <p>
                Just as important is how you respond to Google reviews, both good and bad. A short, genuine reply to a five-star review shows you're paying attention. A calm, solution-focused reply to a negative one shows future customers how you handle problems, often more persuasively than the glowing reviews do.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Summary Table: How to Get Your Local Business on Google Maps</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-2 font-bold">Step</th>
                      <th className="border border-gray-200 p-2 font-bold">Action</th>
                      <th className="border border-gray-200 p-2 font-bold">Key Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-200 p-2">1</td><td className="border border-gray-200 p-2">Check if a listing already exists</td><td className="border border-gray-200 p-2">Avoid duplicates</td></tr>
                    <tr><td className="border border-gray-200 p-2">2</td><td className="border border-gray-200 p-2">Create the profile via google.com/business</td><td className="border border-gray-200 p-2">Business name, category, address</td></tr>
                    <tr><td className="border border-gray-200 p-2">3</td><td className="border border-gray-200 p-2">Claim or request access if one exists</td><td className="border border-gray-200 p-2">Ownership control</td></tr>
                    <tr><td className="border border-gray-200 p-2">4</td><td className="border border-gray-200 p-2">Verify ownership</td><td className="border border-gray-200 p-2">Phone, email, postcard, or video</td></tr>
                    <tr><td className="border border-gray-200 p-2">5</td><td className="border border-gray-200 p-2">Confirm NAP accuracy</td><td className="border border-gray-200 p-2">Match name/address/phone everywhere</td></tr>
                    <tr><td className="border border-gray-200 p-2">6</td><td className="border border-gray-200 p-2">Write the business description</td><td className="border border-gray-200 p-2">Clear, specific, keyword-relevant</td></tr>
                    <tr><td className="border border-gray-200 p-2">7</td><td className="border border-gray-200 p-2">Upload photos</td><td className="border border-gray-200 p-2">Storefront, team, products/work</td></tr>
                    <tr><td className="border border-gray-200 p-2">8</td><td className="border border-gray-200 p-2">Fill out all attributes</td><td className="border border-gray-200 p-2">Hours, services, payment options</td></tr>
                    <tr><td className="border border-gray-200 p-2">9</td><td className="border border-gray-200 p-2">Post regular updates</td><td className="border border-gray-200 p-2">Promotions, events, news</td></tr>
                    <tr><td className="border border-gray-200 p-2">10</td><td className="border border-gray-200 p-2">Collect and respond to reviews</td><td className="border border-gray-200 p-2">Build trust, ongoing engagement</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Treat It Like Ongoing Business Listing Management</h3>
              <p>
                A profile isn't "set it and forget it." Real business listing management means checking in monthly: updating hours around holidays, refreshing photos, replying to new reviews, posting updates, and correcting any information that's changed. Businesses that treat business listing management as an ongoing habit and not a one-time task, are the ones that consistently outrank competitors who built their profile once and walked away.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              <p>
                At this point, you've gone from a blank search result to a fully built, verified, and active presence on Maps. Knowing how to create a Google Business Profile is only the starting line, because the businesses that win the local search game are the ones that keep showing up, keep collecting reviews, and keep their information accurate month after month.
              </p>
              <p>
                If you take one thing away from this guide, let it be this: how to create a Google Business Profile correctly matters less than what you do with it afterward. Build it right, verify it, and then treat it like the living, breathing storefront it actually is.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong>Is it free to create a Google Business Profile?</strong><br />
                  Yes. There's no cost to set up, verify, or manage your listing. Google does offer paid ads that can appear alongside your listing, but the profile itself is completely free.
                </li>
                <li>
                  <strong>How long does verification take?</strong><br />
                  It depends on the method. Phone and email verification can be instant. Postcard verification typically takes one to two weeks. Video verification is usually reviewed within a few business days.
                </li>
                <li>
                  <strong>Can I have a Google Business Profile without a physical storefront?</strong><br />
                  Yes. Service-area businesses, like plumbers or mobile groomers, can hide their exact address and instead list the regions they serve.
                </li>
                <li>
                  <strong>What happens if I skip verification?</strong><br />
                  Your listing won't appear on Google Maps or in local search results. Verification is mandatory, not optional, for visibility.
                </li>
                <li>
                  <strong>How often should I post updates to my profile?</strong><br />
                  Aim for at least once or twice a month. Regular activity signals to Google that your business is active and engaged with customers.
                </li>
                <li>
                  <strong>Can I edit my business information after the profile goes live?</strong><br />
                  Yes, at any time through the Business Profile Manager. Just note that major changes, like a new address, may trigger a re-verification request.
                </li>
                <li>
                  <strong>Do reviews really affect my ranking?</strong><br />
                  Yes. The number, recency, and quality of reviews are among the strongest local ranking signals Google uses, alongside how well you respond to them.
                </li>
                <li>
                  <strong>What if someone else is already managing my business listing?</strong><br />
                  You'll need to request access through Google, explaining your relationship to the business. The current manager has a limited window to approve or deny the request.
                </li>
                <li>
                  <strong>How many photos should I upload?</strong><br />
                  There's no strict limit, but a healthy starting point is 10–15 photos covering your storefront, interior, team, and products or services, refreshed periodically.
                </li>
                <li>
                  <strong>Does my website need to match my Google profile exactly?</strong><br />
                  Your business name, address, and phone number should be identical across your website and profile. Small inconsistencies can quietly hurt your local search visibility.
                </li>
              </ol>
            </div>

            {/* Share Section */}
            <div className="pt-8 flex items-center gap-4">
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
              <h4 className="font-bold text-[17px] mb-3 text-gray-900">Contact With Us Now !</h4>
              <div className="bg-[#f2f2f2] rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src="/zeeshan.png.png" alt="Zeeshan Aashiq" fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-bold text-gray-900 text-[18px]">Zeeshan Aashiq</h5>
                    <div className="flex items-center gap-1.5">
                       <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
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
