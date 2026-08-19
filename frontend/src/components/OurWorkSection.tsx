import React from 'react';
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Website", active: false },
  { name: "Mobile App", active: false },
  { name: "SMM", active: false },
  { name: "PPC", active: false },
  { name: "PRINT", active: false },
  { name: "SEO", active: false },
  { name: "BRANDING", active: false },
];

export function OurWorkSection({ maxRows = 1, title }: { maxRows?: number, title?: string }) {
  const rows = Array.from({ length: maxRows });

  return (
    <section className="w-full bg-white text-black py-24 border-b-2 border-blue-400">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-12 w-full max-w-5xl px-4">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-gray-600 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c52833] shadow-[0_0_8px_3px_rgba(220,38,38,0.7)]"></span>
            OUR WORK
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#1f1f1f] tracking-tight leading-tight">
            {title || "10+ Years Exp but Countless Innovations"}
          </h2>
        </div>
      </div>

      {/* Categories Banner */}
      <div className="w-full bg-[#f4f5f6] border-y border-gray-100 py-6 mb-16 overflow-x-auto">
        <div className="max-w-[1300px] mx-auto flex items-center justify-center gap-8 md:gap-12 min-w-max px-8">
          {categories.map((cat) => (
            <button 
              key={cat.name} 
              className={`text-sm md:text-base font-medium transition-colors ${cat.active ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {rows.map((_, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* DP World Card */}
              <div className="bg-[#f8f9fa] rounded-[24px] p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100 shadow-sm relative overflow-hidden group">
                {/* Background decorative zebra pattern */}
                <div className="absolute inset-0 z-0 opacity-100 pointer-events-none" style={{ backgroundImage: 'url("/white_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center center' }} />
                
                <div className="flex flex-col items-start z-10 w-full sm:w-1/2">
                  <h3 className="text-xl lg:text-[26px] font-bold text-gray-900 leading-tight mb-4">
                    Engineered DP<br />
                    World for Global<br />
                    Reach
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-3xl lg:text-4xl font-bold text-[#c52833] block mb-1">120 %</span>
                    <p className="text-gray-500 text-xs md:text-sm max-w-[180px]">
                      A surge in website visitors during key events.
                    </p>
                  </div>

                  <Link href="/case-study/detail" className="bg-[#cc2936] hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-colors shadow-md">
                    View Case Study
                  </Link>
                </div>

                <div className="w-full sm:w-1/2 flex justify-end z-10">
                  <div className="relative w-full max-w-[160px] aspect-[3/4]">
                    <Image src="/dpworld_image.png" alt="DP World Burj Khalifa" fill className="object-contain drop-shadow-2xl rounded-xl transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>

              {/* Sharjah University Card */}
              <div className="bg-[#f8f9fa] rounded-[24px] p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100 shadow-sm relative overflow-hidden group">
                {/* Background decorative zebra pattern */}
                <div className="absolute inset-0 z-0 opacity-100 pointer-events-none" style={{ backgroundImage: 'url("/white_bg.png")', backgroundSize: 'cover', backgroundPosition: 'center center' }} />
                
                <div className="flex flex-col items-start z-10 w-full sm:w-1/2">
                  <h3 className="text-xl lg:text-[26px] font-bold text-gray-900 leading-tight mb-4">
                    Seamless User<br />
                    Experience for<br />
                    University of Sharjah
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-3xl lg:text-4xl font-bold text-[#c52833] block mb-1">103 %</span>
                    <p className="text-gray-500 text-xs md:text-sm max-w-[200px]">
                      boost in customer engagement and user journey.
                    </p>
                  </div>

                  <Link href="/case-study/detail" className="bg-[#cc2936] hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-colors shadow-md">
                    View Case Study
                  </Link>
                </div>

                <div className="w-full sm:w-1/2 flex justify-end z-10">
                  <div className="relative w-full max-w-[180px] aspect-[4/3]">
                    <Image src="/sharjahuni_image.png" alt="University of Sharjah" fill className="object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
}
