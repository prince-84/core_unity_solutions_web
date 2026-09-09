import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3 Daily Manual Tasks Your Business Should Automate Today',
  description: 'Still doing these by hand? Discover the 3 daily manual tasks every business should automate today, why it matters, and how to start, even with zero tech skills.',
};
export default function DailyManualTasksPage() {
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
              Daily Manual Tasks Your Business Should Automate Today
            </h2>

            {/* Content */}
            <div className="space-y-6 text-gray-600 text-[16px] leading-[1.7] font-normal">
              <p>
                If you've been putting off the decision to automate manual tasks in your business, this is your sign to stop waiting. If you added up every minute you spent this week typing the same email twice, chasing an unpaid invoice, or manually moving a meeting on your calendar, you'd probably be a little annoyed at yourself. Not because you're bad at your job, but because none of that busywork actually grew your business. It just ate your day.
              </p>
              <p>
                This is the exact trap a lot of small business owners fall into. You start out doing everything yourself because, well, there's no one else to do it. But the tasks that felt manageable at five clients start to feel impossible at fifty. And here's the thing nobody tells you early enough: you don't need a bigger team to fix this. You need to automate business processes that are eating your time without adding any real value.
              </p>
              <p>
                In this blog, we're going to zoom in on three specific daily manual tasks that quietly drain the most hours — and walk through exactly how to hand them off to automation, without needing a computer science degree to do it. Think of this as your practical, no-fluff shortlist of business tasks to automate before another week disappears into your inbox.
              </p>

            {/* Image/Banner Area */}
            <div className="w-full rounded-2xl overflow-hidden relative my-10 shadow-lg border border-gray-800">
              <Image 
                src="/blog3_resized_584x348.png" 
                alt="Daily Manual Tasks Your Business Should Automate Today" 
                width={1200}
                height={630}
                className="w-full h-auto object-cover" 
              />
            </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why "Busy" Isn't the Same as "Productive"</h3>
              <p>
                If you've ever felt like your to-do list grows faster than you can clear it, you're not imagining things. You're dealing with repetitive tasks to automate for small business owners that were never designed to be done by hand forever.
              </p>
              <p>
                Before we get into the list, it's worth pausing on why this matters so much right now. Every hour you spend on repetitive admin is an hour you're not spending on the things that actually move the needle, including talking to customers, refining your offer, or just, you know, having a life outside of work.
              </p>
              <p>
                There's also a real financial cost hiding here. Slow replies lose leads. Missed follow-ups lose sales. Manual data entry causes errors that cost you more time to fix later than they would have taken to prevent. When you automate business tasks that don't need a human touch, you're not just saving time, you're protecting revenue.
              </p>
              <p>
                And this isn't just a "nice to have" anymore. If you're looking for small business automation ideas, 2026 has made the tools cheaper, smarter, and dramatically easier to set up than they were even a couple of years ago. You really don't need a developer on staff to automate business operations that used to require an entire admin team.
              </p>
              <p>
                So let's get into the three biggest offenders: the tasks you should automate today if you want your calendar to look noticeably different a month from now.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Invoicing and Payment Follow-Ups</h3>
              <p>
                If there's one task that seems to eat far more time than it should, it's this one. You finish a project or deliver a service, and then you have to remember to create the invoice, send it, track whether it's been paid, and if it hasn't, send a polite (but firm) reminder. Multiply that across ten or twenty clients a month, and you're looking at hours of admin that adds zero value to your business.
              </p>
              <p>
                This is exactly the kind of task built for automation. When you automate invoicing and scheduling together, here's what typically happens instead: an invoice generates automatically the moment a job is marked complete, it gets emailed to the client without you lifting a finger, and if the due date passes, a reminder goes out on its own. No awkward "just following up" messages. No spreadsheets. No forgetting who owes you money.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Tools To Use</h4>
              <p>
                Tools like QuickBooks, FreshBooks, and HoneyBook all offer this kind of automated invoicing and payment reminder workflow, and most of them take less than 30 minutes to set up. If cash flow has ever felt unpredictable in your business, this single change is one of the fastest ways to save time with automation small business owners consistently point to as a turning point, and one of the easiest ways to save time with automation small business teams can implement without any outside help. It's proof that when you automate business finances, you're protecting your bottom line, not just tidying up admin.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Appointment Scheduling and Calendar Management</h3>
              <p>
                The second task on this list is the classic email back-and-forth: "Does Tuesday at 2pm work?" "Actually, I have a conflict, how about Thursday?" "Thursday's tight, can we do Friday morning?" Sound familiar? This kind of manual scheduling doesn't just cost you time. It makes your business look less professional, even if you're incredible at what you do.
              </p>
              <p>
                If you're trying to figure out how to automate daily business tasks that pile up fastest, scheduling should be near the top of your list.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Tools To Use</h4>
              <p>
                Tools like Calendly, Acuity, or the built-in schedulers inside platforms like HoneyBook let clients see your real-time availability and book themselves in. You get automatic confirmations, reminder emails or texts before the appointment, and a calendar that updates itself. No more double-bookings. No more "did I already reply to this?" moments at 11pm.
              </p>
              <p>
                For service-based businesses especially, this single tool tends to cut down no-shows significantly, simply because clients get automatic reminders instead of relying on their own memory. If you've been putting off tackling repetitive tasks to automate for small business growth, this is one of the easiest wins you'll find — and one of the fastest to implement. And once your calendar runs on autopilot, you'll wonder how to automate daily business tasks like this any sooner.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Lead Follow-Ups and Client Communication</h3>
              <p>
                The third task is the one that quietly costs businesses the most money: following up with leads and answering the same client questions over and over. Someone fills out your contact form, and if you don't respond fast, they've already messaged your competitor. Someone asks the fifth "how does pricing work?" email of the week, and you're typing out the same paragraph you've typed a hundred times before.
              </p>
              <p>
                This is one of the clearest examples of business process automation for small business owners who want to protect every lead that comes in. Instead of manually replying to every inquiry, you can set up an automated sequence that sends an instant thank-you message the second someone reaches out, followed by a helpful next step a day or two later if they haven't responded.
              </p>

              <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Tools To Use</h4>
              <p>
                Saved templates or simple AI-assisted replies can also handle your most common questions instantly, so leads aren't left waiting. This is the kind of business process automation for small business teams that pays for itself within the first month.
              </p>
              <p>
                This is also where the case for using automation to nurture relationships, and not just replace them, really shows up. You're not removing the personal touch. You're making sure no one falls through the cracks while you're focused on actual client work.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Ads vs. Meta Ads Isn't the Only Decision, Automation Is Too</h3>
              <p>
                Okay, that's a bit of a tangent, but stick with us. Business owners spend a lot of time debating which marketing channel to invest in, yet the tasks you should automate today rarely get the same attention, even though they usually deliver a faster, more measurable return. You could double your ad spend and still lose leads to slow follow-ups. Fixing the operational side of your business often pays off faster than any campaign tweak, which is exactly why it's worth learning to automate business workflows before you pour more money into acquisition.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Start Without Getting Overwhelmed</h3>
              <p>
                If you're reading this thinking "great, but I don't have time to set any of this up," you're not alone and that's exactly the mindset that keeps business owners stuck doing everything manually for years longer than they need to. The good news is you don't have to overhaul everything at once.
              </p>
              <p>Here's a simple approach:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Pick one task first.</strong> Don't try to automate manual tasks across your entire business in a single weekend, that's how most people give up before they see results. Start with whichever of the three above costs you the most hours right now.</li>
                <li><strong>Choose one tool, not five.</strong> Platforms like HoneyBook, QuickBooks, or Calendly are built to be simple. You don't need a complex tech stack to automate business tasks and get real results.</li>
                <li><strong>Set it up once, test it, then let it run.</strong> Most of these automations take under an hour to configure and then run quietly in the background from that point on.</li>
                <li><strong>Add the next automation once the first feels normal.</strong> Workflow automation for small business owners works best as a gradual build, not an overnight transformation, and workflow automation for small business teams that stack wins slowly tends to stick far longer than a rushed, all-at-once overhaul.</li>
              </ul>
              <p>
                Small business automation ideas don't need to be complicated to be effective. The simplest automations like invoicing, scheduling, and follow-ups are usually the ones with the biggest, fastest payoff. If you only remember one thing from this list of business tasks to automate, let it be this: start with the task that annoys you most.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Bottom Line</h3>
              <p>
                You didn't start your business so you could spend your evenings chasing invoices or playing calendar tag over email. When you automate business tasks like invoicing, scheduling, and lead follow-ups, you're not just clearing your to-do list, you're building a business that can actually grow without you working twice as many hours to make it happen.
              </p>
              <p>
                Start small. Pick one task. Automate it this week. Once you feel that first bit of time come back into your day, it becomes a lot easier to see why so many business owners treat learning to automate business operations as one of the smartest moves they've made all year.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong>What does it mean to automate business tasks?</strong><br />
                  It means using software to handle repetitive, predictable work like sending invoices, confirming appointments, or replying to common questions — without you doing it manually each time.
                </li>
                <li>
                  <strong>What are the easiest business tasks to automate first?</strong><br />
                  Invoicing, appointment scheduling, and lead follow-up emails are usually the easiest and fastest wins, since most tools let you set them up in under an hour.
                </li>
                <li>
                  <strong>How do I automate daily business tasks without hiring a developer?</strong><br />
                  Most modern automation tools, like Calendly, HoneyBook, or QuickBooks, are built with no-code, drag-and-drop setups designed specifically for non-technical business owners.
                </li>
                <li>
                  <strong>Is automation only useful for large companies?</strong><br />
                  No. In fact, small business automation ideas tend to have an even bigger impact on smaller teams, since one person is often handling multiple roles at once.
                </li>
                <li>
                  <strong>How much time can automating manual tasks actually save?</strong><br />
                  It varies by business, but owners who automate invoicing, scheduling, and follow-ups commonly report saving several hours a week that were previously lost to admin work.
                </li>
                <li>
                  <strong>What's the difference between automation and AI tools?</strong><br />
                  Traditional automation follows a fixed set of rules (like "send this email after that action"), while AI tools can interpret context and generate more personalized responses on their own.
                </li>
                <li>
                  <strong>Should I automate everything in my business?</strong><br />
                  No. High-stakes conversations like handling complaints, contract negotiations, or sensitive client issues — still need a human touch. Automation works best for repetitive, low-emotion tasks.
                </li>
                <li>
                  <strong>What's a good starting point for business process automation for small business owners?</strong><br />
                  Start with whichever manual task currently takes up the most time each week. For most businesses, that's invoicing, scheduling, or replying to repeat client questions.
                </li>
                <li>
                  <strong>Can I automate invoicing and scheduling with the same platform?</strong><br />
                  Yes. Many all-in-one tools, like HoneyBook, let you automate invoicing and scheduling together, along with contracts and client communication, in a single dashboard.
                </li>
                <li>
                  <strong>How do I know if a task is a good candidate for automation?</strong><br />
                  If you do it often, follow the same steps every time, and it doesn't require emotional judgment or a personal touch, it's very likely a task you should automate today.
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
