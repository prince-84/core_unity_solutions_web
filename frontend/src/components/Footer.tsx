import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
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
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-white px-5 py-2.5 rounded-full text-black focus:outline-none w-full sm:w-[200px] text-sm"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white px-5 py-2.5 rounded-full text-black focus:outline-none w-full sm:w-[240px] text-sm"
            />
            <button className="bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-full border border-white/20 text-sm font-bold flex items-center gap-2 transition-colors w-full sm:w-auto justify-center shadow-md">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>

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
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/fb_image.png" alt="Facebook" fill className="object-contain" />
              </Link>
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/insta_logo.png" alt="Instagram" fill className="object-contain" />
              </Link>
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/youtube_logo.png" alt="YouTube" fill className="object-contain" />
              </Link>
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/linkdin_image.png" alt="LinkedIn" fill className="object-contain" />
              </Link>
              <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity relative w-5 h-5">
                <Image src="/be_image.png" alt="Behance" fill className="object-contain" />
              </Link>
            </div>
          </div>

          {/* Column 2: Smart Technology Solutions */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[#cc2936] flex items-center gap-2 mb-2">
              <span className="w-0.5 h-4 bg-[#cc2936]"></span>
              Smart Technology Solutions
            </h4>
            <ul className="flex flex-col gap-2 text-[12px] text-gray-400 font-light">
              <li><Link href="#" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Ecommerce Web Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Chatbot Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Virtual Reality Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Augmented Reality Development</Link></li>
            </ul>
          </div>

          {/* Column 3: Digital Growth & Marketing */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[#cc2936] flex items-center gap-2 mb-2">
              <span className="w-0.5 h-4 bg-[#cc2936]"></span>
              Digital Growth & Marketing
            </h4>
            <ul className="flex flex-col gap-2 text-[12px] text-gray-400 font-light">
              <li><Link href="#" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Search Engine Optimization (SEO)</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Generative Engine Optimization (GEO)</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pay-Per-Click Advertising (PPC)</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Influencer Marketing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Branding & Creative Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Development Company</Link></li>
            </ul>
          </div>

          {/* Column 4: Industry */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-[#cc2936] flex items-center gap-2 mb-2">
              <span className="w-0.5 h-4 bg-[#cc2936]"></span>
              Industry
            </h4>
            <ul className="flex flex-col gap-3 text-[13px] text-gray-400 font-light">
              <li><Link href="#" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Government</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Education</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">legal & law</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FinTech</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1400px] mx-auto mt-10 relative z-10 border-t border-white/10 pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© 2026. CoreUnity Solutions</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>

    </footer>
  );
}
