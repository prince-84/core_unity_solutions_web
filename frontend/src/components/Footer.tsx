"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/leadService";

export function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    await submitLead({
      formType: "Newsletter Subscription",
      name,
      email,
    });

    setStatus("success");
    setTimeout(() => {
      setName("");
      setEmail("");
      setStatus("idle");
    }, 4000);
  };

  return (
    <footer className="w-full flex flex-col font-sans">
      
      {/* Newsletter Bar */}
      <div className="w-full bg-[#cc2936] text-white py-6 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Left Text */}
          <div className="flex flex-col items-start">
            <p className="text-sm font-medium tracking-wide mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-90"></span>
              Subscribe now to stay updated on the latest market trends
            </p>
            <h2 className="text-4xl md:text-[42px] font-extrabold tracking-tight">
              Join Our Newsletter
            </h2>
          </div>

          {/* Right Inputs */}
          {status === "success" ? (
            <div className="flex items-center gap-2 bg-black/30 border border-white/30 px-6 py-3 rounded-full text-white text-sm font-medium animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white px-5 py-2.5 rounded-full text-black focus:outline-none w-full sm:w-[200px] text-sm"
              />
              <input 
                type="email" 
                required
                placeholder="Email*" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white px-5 py-2.5 rounded-full text-black focus:outline-none w-full sm:w-[240px] text-sm"
              />
              <button 
                type="submit"
                disabled={status === "loading"}
                className="bg-black hover:bg-gray-900 disabled:opacity-75 text-white px-6 py-2.5 rounded-full border border-white/20 text-sm font-bold flex items-center gap-2 transition-colors w-full sm:w-auto justify-center shadow-md cursor-pointer"
              >
                {status === "loading" ? (
                  <>Subscribing <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Subscribe <ArrowRight size={16} /></>
                )}
              </button>
            </form>
          )}

        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="w-full bg-black text-white pt-10 pb-4 px-4 sm:px-8 relative overflow-hidden">
        
        {/* Glow at the bottom line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-900/40 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col gap-4">
            <div className="relative w-40 h-14 mb-1">
              <Image src="/logo.png" alt="CoreUnity Solutions" fill className="object-contain object-left" />
            </div>
            
            <div className="flex flex-col gap-1.5 text-[13px] text-gray-300 font-light leading-relaxed">
              <p>Churchill Tower, Business Bay, Dubai, UAE</p>
              <a href="mailto:contact@coreunitysolutions.com" className="hover:text-white transition-colors">
                contact@coreunitysolutions.com
              </a>
              <a href="tel:+971505559646" className="hover:text-white transition-colors">
                +971 50 555 9646
              </a>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.facebook.com/coreunitysolutions" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/fb_image.png" alt="Facebook" fill className="object-contain" />
              </a>
              <a href="https://www.instagram.com/coreunitysolutions/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/insta_logo.png" alt="Instagram" fill className="object-contain" />
              </a>
              <a href="https://www.youtube.com/@coreunitysolutions" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/youtube_logo.png" alt="YouTube" fill className="object-contain" />
              </a>
              <a href="https://www.linkedin.com/company/coreunitysolutions" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/linkdin_image.png" alt="LinkedIn" fill className="object-contain" />
              </a>
              <a href="https://www.tiktok.com/@coreunitysolutions?lang=en" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5 flex items-center justify-center text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.3a6.33 6.33 0 0 0-1-.08A6.26 6.26 0 0 0 3 15.48a6.26 6.26 0 0 0 10.7 4.41c.23-.23.44-.48.62-.75V12a8.28 8.28 0 0 0 5.27 1.85v-3.72a4.83 4.83 0 0 1-3.77-1.48v-2h3.77v.03z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Smart Technology Solutions */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[#cc2936] flex items-center gap-2 mb-2">
              <span className="w-0.5 h-4 bg-[#cc2936]"></span>
              Smart Technology Solutions
            </h4>
            <ul className="flex flex-col gap-2 text-[12px] text-gray-400 font-light">
              <li><Link href="/services/web-development" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/ui-ux-design" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/ecommerce-web-development" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ecommerce Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
              <li><Link href="/services/chatbot-development" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chatbot Development</Link></li>
              <li><Link href="/services/virtual-reality-development" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Virtual Reality Development</Link></li>
              <li><Link href="/services/augmented-reality-development" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Augmented Reality Development</Link></li>
            </ul>
          </div>

          {/* Column 3: Digital Growth & Marketing */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[#cc2936] flex items-center gap-2 mb-2">
              <span className="w-0.5 h-4 bg-[#cc2936]"></span>
              Digital Growth & Marketing
            </h4>
            <ul className="flex flex-col gap-2 text-[12px] text-gray-400 font-light">
              <li><Link href="/services/digital-marketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/search-engine-optimization" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Search Engine Optimization (SEO)</Link></li>
              <li><Link href="/services/generative-engine-optimization" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Generative Engine Optimization (GEO)</Link></li>
              <li><Link href="/services/pay-per-click-advertising" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pay-Per-Click Advertising (PPC)</Link></li>
              <li><Link href="/services/social-media-marketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/services/influencer-marketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Influencer Marketing</Link></li>
              <li><Link href="/services/branding-and-creative-design" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Branding & Creative Design</Link></li>
              <li><Link href="/services/ai-development-company" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AI Development Company</Link></li>
            </ul>
          </div>

          {/* Column 4: Industry */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[#cc2936] flex items-center gap-2 mb-2">
              <span className="w-0.5 h-4 bg-[#cc2936]"></span>
              Industry
            </h4>
            <ul className="flex flex-col gap-3 text-[13px] text-gray-400 font-light">
              <li><Link href="/industries/real-estate" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="/industries/government" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Government</Link></li>
              <li><Link href="/industries/healthcare" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/education" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Education</Link></li>
              <li><Link href="/industries/hospitality" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link href="/industries/legal-and-law" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">legal & law</Link></li>
              <li><Link href="/industries/fintech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FinTech</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1400px] mx-auto mt-10 relative z-10 border-t border-white/10 pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© 2026. CoreUnity Solutions</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>

    </footer>
  );
}
