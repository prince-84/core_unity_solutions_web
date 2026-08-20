"use client";

import { useState, useEffect } from "react";
import { ScheduleCallModal } from "./ScheduleCallModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener("open-schedule-modal", handleOpen);
    return () => window.removeEventListener("open-schedule-modal", handleOpen);
  }, []);

  const heroData = {
    title: 'We are a bold and innovative digital<br />agency based in the UAE.',
    button_text: 'Schedule a call',
    button_icon: '/zeeshan.png.png'
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mt-12 max-w-5xl mx-auto px-4 z-20 relative">
      {/* Red shading behind text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[250px] bg-red-600/20 blur-[120px] pointer-events-none rounded-[100%]"></div>
      
      <h1 
        className="text-3xl md:text-[42px] font-bold text-white leading-[1.3] md:leading-[1.2] mb-8 z-10 relative"
        dangerouslySetInnerHTML={{ __html: heroData.title }}
      />
      
      <div className="relative flex items-center justify-center w-full max-w-sm mx-auto mt-2">
        {/* Dotted horizontal line */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent border-t border-dashed border-gray-500/30"></div>
        
        {/* Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="relative z-10 bg-[#b71c1c] hover:bg-red-700 text-white pl-4 pr-1.5 py-1.5 rounded-full font-medium text-xs md:text-sm flex items-center gap-3 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-pointer"
        >
          {heroData.button_text}
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden shadow-inner">
            {heroData.button_icon ? (
              <img src={heroData.button_icon} alt="icon" className="w-full h-full object-cover" />
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#6B7280"/>
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Booking Modal */}
      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

