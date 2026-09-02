"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const accordionData = [
  {
    title: 'Our Mission',
    content: 'To help ambitious brands grow into market leaders through digital strategies that actually deliver. As a trusted digital marketing agency in Dubai, we blend creativity, data, and technology into every campaign.',
  },
  {
    title: 'Our Vision',
    content: 'To build a future where every brand we work with has the digital edge to lead, not just compete. Our vision is to be the go-to digital marketing partner in Dubai, known for innovation, results, and setting new standards in how businesses connect with their audiences online.',
  },
  {
    title: 'Our Values',
    content: 'To make Innovation, integrity, and excellence guide everything we do at CoreUnity Solutions. We work as an extension of your team, combining fresh thinking with honest execution to deliver real impact, because your growth is how we measure our own success.',
  }
];

export function AboutAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first one by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-gray-400/30">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
            >
              <h3 className="text-3xl md:text-[50px] font-medium text-white tracking-wide">
                {item.title}
              </h3>
              
              <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <Image 
                  src="/arrow.png" 
                  alt="Toggle" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-300 text-[18px] md:text-[22px] font-light leading-relaxed pr-8">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
