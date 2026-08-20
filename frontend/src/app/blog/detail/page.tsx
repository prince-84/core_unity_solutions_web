import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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
              Familiarize Yourself With The Available Modes Of Learning
            </h2>

            {/* Paragraph Text */}
            <p className="text-gray-600 text-[16px] leading-[1.7] font-normal">
              In the past, employers that wanted to offer technical certification education to their employees had limited options. One of the most common styles of preparing employees for certification involved paying an instructor to come in and lead an intensive boot camp. This approach to development costs several thousands of <Link href="#" className="text-[#c52833] underline font-semibold">dollars per learner and takes time away</Link> from learners' daily tasks. On the other side of the spectrum, books were a low-cost and easily accessible option, but they required a lot of heads-down time to study and absorb the information. Today there are plenty of more flexible options. Here are some of the insights the Udemy Business instructors shared about the different learning modes available now.
            </p>

            {/* Spooky IT Banner (Dynamic HTML/CSS render of movie banner) */}
            <div className="w-full rounded-2xl overflow-hidden relative min-h-[350px] bg-black text-white flex flex-col md:flex-row justify-between p-8 md:p-10 shadow-lg border border-red-950">
              {/* Spooky background with red glow */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black via-neutral-950 to-neutral-900 z-0"
              />
              <div 
                className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle, rgba(160,20,30,0.4) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />

              {/* Left Content (Title, Details, Buttons) */}
              <div className="relative z-10 flex-1 flex flex-col justify-between gap-6 max-w-md">
                <div>
                  <h3 className="text-3xl font-bold tracking-[0.1em] uppercase mb-4 font-serif">
                    IT <span className="text-[20px] font-sans font-light tracking-wide text-gray-300">Chapter Two</span>
                  </h3>
                  <p className="text-[12px] text-gray-400 leading-relaxed font-light">
                    TWENTY-SEVEN YEARS AFTER THE EVENTS THAT SHOCKED THE TEENAGERS WHO WERE PART OF THE LOSERS' CLUB, THE FRIENDS HOLD A MEETING. HOWEVER, THE REUNION BECOMES A TRUE AND BLOODY BATTLE WHEN PENNYWISE THE CLOWN RETURNS.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="bg-white text-black px-6 py-2.5 rounded text-xs font-bold tracking-widest hover:bg-gray-200 transition-colors uppercase">
                    Watch
                  </button>
                  <button className="border border-white text-white px-6 py-2.5 rounded text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all uppercase">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Content (Movie Metadata) */}
              <div className="relative z-10 w-full md:w-auto flex flex-row md:flex-col justify-end md:justify-between items-start md:items-end gap-6 text-left md:text-right text-[11px] text-gray-400 mt-6 md:mt-0 border-t border-white/10 md:border-t-0 pt-4 md:pt-0">
                <div className="flex flex-col">
                  <span className="text-gray-500 uppercase tracking-widest text-[9px] mb-1">Genre</span>
                  <span className="text-white font-medium">Horror, Thriller</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 uppercase tracking-widest text-[9px] mb-1">Premiere</span>
                  <span className="text-white font-medium">6 September 2019</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 uppercase tracking-widest text-[9px] mb-1">Director</span>
                  <span className="text-white font-medium">Andy Muschietti</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 uppercase tracking-widest text-[9px] mb-1">Music by</span>
                  <span className="text-white font-medium">Benjamin Wallfisch</span>
                </div>
              </div>
            </div>

            {/* Practice Exams */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Practice Exams</h3>
              <p className="text-gray-600 text-[16px] leading-[1.7]">
                Practice exams give learners the chance to put their knowledge to the test – literally. By going through exercises that are likely to appear on the certification exam, they’ll get a good sense of how prepared they are and identify any knowledge or skill gaps. Jason says practice exams are one of the most important ways to prepare for certification.
              </p>
            </div>

            {/* Virtual Lab Environments */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Virtual Lab Environments</h3>
              <p className="text-gray-600 text-[16px] leading-[1.7]">
                Virtual lab environments or sandboxes are another way learners can gain practical experience. “It’s very easy to practice using a lab product,” says Scott Duffy. Jason adds that virtual lab environments are ideal because you can have your team gain hands-on experience without affecting your production network.
              </p>
            </div>

            {/* Maximize Support */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Maximize The Support Your Company And Managers Provide</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600 text-[16px] leading-[1.7] font-normal">
                <li>Offering training to help prepare for certification is a great first step, but</li>
                <li>there’s more your company and managers can do to maximize employees’</li>
                <li>chances of success.</li>
              </ol>
            </div>

            {/* Create Learning Paths */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Create Learning Paths</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[16px] leading-[1.7] font-normal">
                <li>Technical certification skills often build on each other, so starting with</li>
                <li>foundational knowledge is helpful before moving on to more advanced</li>
                <li>topics. Alan Rodrigues recommends having teams or departments create</li>
              </ul>
            </div>

            {/* Recent Articles by Melissa Suzunot */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Recent Articles By Melissa Suzunot</h3>
              <p className="text-gray-600 text-[16px] leading-[1.7]">
                Technical certification skills often build on each other, so starting with foundational knowledge is helpful before moving on to more advanced topics. Alan Rodrigues recommends having teams or departments create their own learning paths. When you have an online learning platform like EDUMA Business, it’s easy for technical leaders to outline the necessary skills or courses they’d like their team members to take.
              </p>
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
                    Want To Succeed In Real Estate? Focus On These Habits
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
                      Technology
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A fairy tale (alternative names include fairytale, fairy story, magic tale, or wonder tale) is a short story that belongs to the folklore genre..
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
