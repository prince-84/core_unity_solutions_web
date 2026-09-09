import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads vs. Meta Ads: Which Is Better?(2026 Guide)',
  description: 'Confused about Google Ads vs. Meta Ads? Compare cost, ROI, targeting, and results for small businesses and ecommerce brands to find the right fit in 2026.',
};
export default function GoogleAdsVsMetaAdsPage() {
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
              Google Ads vs. Meta Ads: Which Is Right for Your Business?
            </h2>

            {/* Content */}
            <div className="space-y-6 text-gray-600 text-[16px] leading-[1.7] font-normal">
              <p>
                If you've spent any time in a marketing Slack channel, a Facebook group for small business owners, or even just a late-night Google search, you've probably run into the same debate over and over: Google Ads vs. Meta Ads, and which one should actually get your budget?
              </p>
              <p>
                The honest answer is a little unsatisfying at first: it depends on what you're selling, who you're selling to, and how ready your audience is to buy. But "it depends" isn't much help when you've got a finite ad budget sitting in your account, so let's actually dig into the details.
              </p>
              <p>
                By the end of this guide, you'll understand exactly how these two platforms differ, what they cost, how they perform, and maybe most importantly, why so many of the smartest advertisers stop asking "which one" and start asking "how do I use both."
              </p>

            {/* Image/Banner Area */}
            <div className="w-full rounded-2xl overflow-hidden relative my-10 shadow-lg border border-gray-800">
              <Image 
                src="/blog2_resized_584x348.png" 
                alt="Google Ads vs Meta Ads" 
                width={1200}
                height={630}
                className="w-full h-auto object-cover" 
              />
            </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Ads vs. Meta Ads: The Core Difference</h3>
              <p>
                Every conversation about Google Ads vs. Meta Ads eventually comes down to one idea: intent versus attention.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Google Ads</h4>
              <p>
                Google Ads shows up when someone is actively searching for something. They've typed "emergency plumber near me" or "best running shoes for flat feet" into the search bar, which means they already have a need in mind. You're not creating demand. You're capturing it at the exact moment it exists.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Meta Ads</h4>
              <p>
                Meta Ads (which covers Facebook and Instagram) work the opposite way. Nobody is searching for your brand by name. Instead, Meta uses behavioral data, interests, past interactions, and demographic signals to put your ad in front of someone who's simply scrolling their feed. You're not catching demand. You're creating it, or at least reminding someone that a need exists.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Ads vs. Meta Ads – Quick Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-200 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-2 font-bold">Key Difference</th>
                      <th className="border border-gray-200 p-2 font-bold">Google Ads</th>
                      <th className="border border-gray-200 p-2 font-bold">Meta Ads</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Core</td><td className="border border-gray-200 p-2">Intent</td><td className="border border-gray-200 p-2">Attention</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Audience</td><td className="border border-gray-200 p-2">Actively searching</td><td className="border border-gray-200 p-2">Browsing/scrolling</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Goal</td><td className="border border-gray-200 p-2">Capture demand</td><td className="border border-gray-200 p-2">Create demand</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Google Ads Actually Works</h3>
              <p>
                Google Ads runs on an auction system tied to keywords. You bid on search terms relevant to your business, and your ad shows up based on a mix of your bid, your ad's relevance, and your landing page quality (Google calls this Quality Score). The higher your Quality Score, the less you often pay for the same position.
              </p>
              <p>Google Ads tends to shine when:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Someone already knows what they want and is close to a purchase decision</li>
                <li>The product or service has a clear, searchable name or category</li>
                <li>You need leads or sales quickly rather than building awareness over months</li>
              </ul>
              <p>
                The tradeoff is that you're limited to people who are actively typing something into a search bar. If your product needs to be discovered rather than searched for, Google Ads alone won't get you very far.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Meta Ads Actually Works</h3>
              <p>
                Meta Ads live inside Facebook and Instagram feeds, Stories, and Reels. Instead of keywords, you're targeting audiences, including things like age, location, interests, behaviors, or custom audiences built from your website visitors and customer lists.
              </p>
              <p>
                Meta's ad delivery system is built to learn. The more data it collects on who clicks, converts, and engages, the smarter its targeting becomes. This is why Meta Ads often need more runway to optimize compared to Google, which can produce results faster simply because intent is already built in.
              </p>
              <p>Meta Ads tend to perform best when:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You're building brand awareness or introducing a new product</li>
                <li>Visual storytelling (photos, video, short-form content) is part of your pitch</li>
                <li>You're retargeting people who've already visited your site or interacted with your brand</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Ads vs. Meta Ads Cost: What You'll Actually Pay</h3>
              <p>Let's talk numbers, because this is usually where the real decision gets made.</p>
              
              <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Cost-Per-Click (CPC)</h4>
              <p>
                When people compare google ads vs meta ads cost, they're usually comparing cost-per-click (CPC), but that's only part of the picture.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Google Ads CPCs</h4>
              <p>
                Google Ads CPCs vary wildly by industry. A competitive keyword in legal services or insurance can run you $50 or more per click, while a niche product term might cost under a dollar. If you're specifically looking at average CPC google ads vs facebook ads, the general industry pattern (though it shifts constantly) is that Google Ads CPCs tend to run higher across most sectors because you're paying for people who are already close to converting.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Meta Ads CPCs</h4>
              <p>
                Meta Ads CPCs are generally lower on average, but you're often paying for a colder audience that needs more nurturing before it converts. Facebook and Instagram CPCs are frequently lower, but conversion rates on a cold click can also be lower, which changes your actual cost per lead or sale.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mt-6 mb-4">Google Ads vs. Meta Ads Cost – Quick Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-200 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-2 font-bold">Key Difference</th>
                      <th className="border border-gray-200 p-2 font-bold">Google Ads</th>
                      <th className="border border-gray-200 p-2 font-bold">Meta Ads</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-200 p-2 font-semibold">CPC</td><td className="border border-gray-200 p-2">Generally higher</td><td className="border border-gray-200 p-2">Generally lower</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Audience</td><td className="border border-gray-200 p-2">High intent</td><td className="border border-gray-200 p-2">Colder audience</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Conversion</td><td className="border border-gray-200 p-2">Often faster</td><td className="border border-gray-200 p-2">Usually needs nurturing</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Focus</td><td className="border border-gray-200 p-2">Cost per conversion</td><td className="border border-gray-200 p-2">Cost per conversion</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Ads vs. Meta Ads for Small Business</h3>
              <p>Small business owners have a unique problem:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Limited budget</li>
                <li>Limited time</li>
                <li>Zero patience for wasted spend</li>
              </ul>
              <p>
                So when it comes to google ads vs meta ads for small business, the calculation looks a little different than it does for an enterprise brand with a seven-figure ad budget.
              </p>
              <p>
                If you run a local service business, like a dentist, a landscaper, an HVAC company, Google Ads (particularly Local Services Ads and Search campaigns) usually gets you faster, more predictable leads because people are actively searching with intent to hire someone now.
              </p>
              <p>
                If you're a newer brand, a product-based business, or something people don't typically search for by name yet, Meta Ads can be the better starting point because it builds visibility and trust before someone ever thinks to search for you.
              </p>
              <p>
                Facebook ads vs google ads for small business cant be a flat "pick one" question, Most small businesses get their best results by starting with whichever platform matches their sales cycle, proving out a small budget, and then layering in the second platform once they have the tracking and creative in place to support it.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mt-6 mb-4">Google Ads vs. Meta Ads for Small Business – Quick Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-200 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-2 font-bold">Small Business</th>
                      <th className="border border-gray-200 p-2 font-bold">Google Ads</th>
                      <th className="border border-gray-200 p-2 font-bold">Meta Ads</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Best for</td><td className="border border-gray-200 p-2">Local/service businesses</td><td className="border border-gray-200 p-2">New/product-based brands</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Customer intent</td><td className="border border-gray-200 p-2">High</td><td className="border border-gray-200 p-2">Lower</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Lead speed</td><td className="border border-gray-200 p-2">Faster</td><td className="border border-gray-200 p-2">Slower</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Main goal</td><td className="border border-gray-200 p-2">Capture demand</td><td className="border border-gray-200 p-2">Build awareness</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Best approach</td><td className="border border-gray-200 p-2">Start here if people are searching</td><td className="border border-gray-200 p-2">Start here if you need to create demand</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Ads vs. Meta Ads for Ecommerce</h3>
              <p>
                Ecommerce brands tend to have a slightly different equation. When it comes to google ads vs meta ads for ecommerce, both platforms typically play a role rather than one replacing the other entirely.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Google Shopping and Search campaigns capture people who already know they want a product and are comparing prices or retailers.</li>
                <li>Meta Ads, on the other hand, are exceptionally good at product discovery, like showing someone a product they didn't know they wanted, using strong visuals, video, and social proof like reviews and user-generated content.</li>
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mt-6 mb-4">Google Ads vs. Meta Ads for Ecommerce – Quick Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-200 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-2 font-bold">Ecommerce</th>
                      <th className="border border-gray-200 p-2 font-bold">Google Ads</th>
                      <th className="border border-gray-200 p-2 font-bold">Meta Ads</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Best for</td><td className="border border-gray-200 p-2">Product search & comparison</td><td className="border border-gray-200 p-2">Product discovery</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Customer intent</td><td className="border border-gray-200 p-2">High</td><td className="border border-gray-200 p-2">Lower</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Strength</td><td className="border border-gray-200 p-2">Shopping & Search</td><td className="border border-gray-200 p-2">Visuals & UGC</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Role</td><td className="border border-gray-200 p-2">Capture buyers</td><td className="border border-gray-200 p-2">Create interest</td></tr>
                    <tr><td className="border border-gray-200 p-2 font-semibold">Best approach</td><td className="border border-gray-200 p-2">Convert existing demand</td><td className="border border-gray-200 p-2">Generate new demand</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Which Is Better, Google Ads or Facebook Ads? A More Useful Way to Ask</h3>
              <p>
                At this point you can probably guess where to land on “which is better: google ads or facebook ads?” there isn't a universal winner, only a better fit for a specific business at a specific stage.
              </p>
              <p>Ask yourself these questions instead:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Do people already search for what I sell? Lean toward Google.</li>
                <li>Am I introducing something new or underexplored? Lean toward Meta.</li>
                <li>Is my sales cycle short and transactional, or long and consideration-heavy?</li>
                <li>Can my landing pages and tracking support both platforms well, or should I master one first?</li>
              </ul>
              <p>
                Answering those honestly will get you further than any generic "Google Ads is better" or "Meta Ads is better" headline you'll find online.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Ads and Meta Ads ROI: What Actually Matters</h3>
              <p>
                When evaluating google ads vs meta ads ROI, don't just look at return on ad spend (ROAS) in isolation. Factor in:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Customer lifetime value, not just first purchase value</li>
                <li>Cost per qualified lead, not just cost per click</li>
                <li>Attribution, because Meta often gets under-credited because a user might see an ad, browse elsewhere, then convert later through a Google search</li>
              </ul>
              <p>
                A campaign with a lower ROAS on paper can still be the more valuable channel if it's feeding conversions that show up elsewhere in your funnel. This is one of the biggest blind spots seen in google ads vs meta ads ROI conversations. Teams optimize for whichever platform's dashboard looks best instead of looking at revenue holistically.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Ads vs. Meta Ads in 2026: What's Changed</h3>
              <p>
                The landscape shifts every year, and google ads vs meta ads 2026 comparisons look noticeably different than they did even three or four years ago. AI-driven automation now plays a much bigger role on both platforms. Google's Performance Max campaigns and Meta's Advantage+ campaigns both lean heavily on machine learning to find and bid on the right audiences with far less manual input than before.
              </p>
              <p>
                The practical takeaway for 2026 is that manual micromanagement matters less than it used to, while quality inputs like strong creative, accurate conversion data, and clear business goals matter more. Whichever platform you choose, feeding it clean data and compelling assets will outperform obsessively tweaking bids and audiences by hand.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using Google Ads and Meta Ads Together</h3>
              <p>
                Here's the part most comparison articles skip entirely: the businesses getting the best long-term results usually aren't choosing one platform. They're using google ads and meta ads together in a deliberate way.
              </p>
              <p>A simple, effective structure looks like this:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Run Meta Ads to build awareness and retarget website visitors who didn't convert</li>
                <li>Run Google Search Ads to capture people actively searching, including branded searches from people who first saw you on Meta</li>
                <li>Use Google Analytics or your CRM to track how leads move between the two, rather than judging each platform in a silo</li>
              </ul>
              <p>
                When businesses commit to using google ads and meta ads together instead of treating it as an either/or decision, they typically see lower blended acquisition costs over time, because each platform is doing the job it's actually good at rather than trying to do everything.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              <p>
                The google ads vs meta ads debate isn't really about picking a winner. It's about understanding two very different tools and knowing when to reach for each one. Google Ads captures demand that already exists. Meta Ads creates and nurtures demand before it becomes a search. Small businesses, ecommerce brands, and service providers all benefit from understanding this distinction rather than chasing whichever platform a competitor happens to be using.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong>What is the main difference between Google Ads and Meta Ads?</strong><br />
                  Google Ads targets people actively searching for something using keywords, while Meta Ads targets people based on interests, behavior, and demographics across Facebook and Instagram, regardless of whether they're actively searching.
                </li>
                <li>
                  <strong>Which is cheaper, Google Ads or Meta Ads?</strong><br />
                  It depends on your industry, but Meta Ads generally have a lower average cost-per-click than Google Ads. However, google ads vs meta ads cost should always be measured by cost-per-conversion, not just cost-per-click, since a cheaper click that doesn't convert can end up costing more overall.
                </li>
                <li>
                  <strong>Is Google Ads or Facebook Ads better for a small business?</strong><br />
                  For local, service-based small businesses with high buying intent, Google Ads often produces faster results. For small businesses introducing a new product or building brand awareness, Meta Ads can be more cost-effective in the early stages.
                </li>
                <li>
                  <strong>What's the average CPC for Google Ads vs. Facebook Ads?</strong><br />
                  Average CPC google ads vs facebook ads varies significantly by industry, but Google Ads CPCs are typically higher because you're paying for users closer to a purchase decision, while Facebook and Instagram CPCs tend to run lower on average.
                </li>
                <li>
                  <strong>Which platform has better ROI, Google Ads or Meta Ads?</strong><br />
                  Neither platform universally wins on google ads vs meta ads roi. Google Ads often shows stronger short-term ROI on high-intent searches, while Meta Ads can produce strong long-term ROI once retargeting and lookalike audiences are optimized.
                </li>
                <li>
                  <strong>Can I use Google Ads and Meta Ads at the same time?</strong><br />
                  Yes, and many of the best-performing accounts do. Using google ads and meta ads together lets you build awareness on Meta while capturing that same demand later through Google Search.
                </li>
                <li>
                  <strong>Which is better for ecommerce, Google Ads or Meta Ads?</strong><br />
                  For google ads vs meta ads for ecommerce, most brands benefit from both — Meta Ads for product discovery and visual storytelling, and Google Shopping or Search Ads for capturing shoppers who are ready to compare and buy.
                </li>
                <li>
                  <strong>Do Google Ads or Meta Ads work faster?</strong><br />
                  Google Ads typically shows results faster because it targets existing intent. Meta Ads usually needs more time and data for the algorithm to optimize targeting and delivery.
                </li>
                <li>
                  <strong>How is Google Ads vs. Meta Ads changing in 2026?</strong><br />
                  Google ads vs meta ads 2026 trends show both platforms leaning more heavily on AI-driven automation (Performance Max and Advantage+), which shifts the advertiser's focus from manual bid management toward providing quality creative and clean conversion data.
                </li>
                <li>
                  <strong>Which is better, Google Ads or Facebook Ads, for lead generation?</strong><br />
                  For high-intent lead generation, such as local services, Google Ads often converts faster. For nurturing cold leads or retargeting past visitors before they become sales-ready, Facebook Ads (Meta Ads) tend to perform better. The which is better google ads or facebook ads question ultimately comes down to how ready your target audience already is to buy.
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
