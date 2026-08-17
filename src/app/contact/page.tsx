import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="bg-black text-white relative flex flex-col font-sans min-h-screen">
      <Navbar />
      
      {/* Background Red Radial Glow for Hero */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at top center, rgba(153, 17, 17, 0.35) 0%, transparent 65%)',
          filter: 'blur(45px)'
        }}
      />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 min-h-[60vh]">
        <div className="flex flex-col items-center text-center">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#c52833] blur-[4px] rounded-full scale-[2] opacity-70" />
              <div className="w-2.5 h-2.5 bg-[#c52833] rounded-full relative z-10" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Contact Us</h1>
          </div>
          
          <h2 className="text-center text-2xl md:text-[34px] lg:text-[40px] font-normal leading-snug text-gray-200 max-w-2xl mx-auto">
            Lets get in touch and build <br className="hidden md:block" /> something great together
          </h2>
          
        </div>
      </main>

      {/* Contact Form Section */}
      <section className="bg-white text-black py-20 px-6 md:px-12 w-full relative z-20 -mt-10 md:-mt-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Text and Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[40px] md:text-[50px] font-light text-[#1f1f1f] mb-4 tracking-tight leading-tight">
              Get <span className="text-[#c52833] font-bold">with</span> us
            </h2>
            <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-[500px]">
              We'd love to hear from you! Our team is here to provide dedicated support, answer your questions, and help bring your next project to life. Feel free to reach out to us
            </p>

            <div className="flex flex-col gap-5">
              
              {/* Phone & Email Box */}
              <div className="border border-gray-200 rounded-[20px] flex items-center p-6 bg-[#fafafa]">
                {/* Phone */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-8 h-8 mb-3 flex items-center justify-center">
                    <img src="/phone_logo.png" alt="Phone" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-[#1f1f1f] text-[15px] mb-1">Phone Number</h4>
                  <p className="text-gray-400 text-[13px]">+971 50 555 9646</p>
                </div>
                
                {/* Divider */}
                <div className="w-[1px] h-20 bg-gray-200" />
                
                {/* Email */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-8 h-8 mb-3 flex items-center justify-center">
                    <img src="/mail_logo.png" alt="Email" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-[#1f1f1f] text-[15px] mb-1">Email Address</h4>
                  <p className="text-gray-400 text-[13px]">contact@coreUnitysolutions.com</p>
                </div>
              </div>

              {/* Address Box */}
              <div className="border border-gray-200 rounded-[20px] flex items-center p-6 bg-[#fafafa] gap-6">
                <div className="w-10 h-10 shrink-0 ml-4 flex items-center justify-center">
                  <img src="/loc_logo.png" alt="Address" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-[#1f1f1f] text-[15px] mb-1">Address</h4>
                  <p className="text-gray-400 text-[13px]">Churchill Tower, Business Bay, Dubai, UAE</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-[#fafafa] border border-gray-200 rounded-[24px] p-8 lg:p-10 shadow-sm">
            <form className="flex flex-col gap-4">
              
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-1/2 border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-1/2 border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
                />
              </div>

              <input 
                type="text" 
                placeholder="Phone No" 
                className="w-full border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
              />

              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
              />

              <textarea 
                placeholder="Message" 
                rows={5}
                className="w-full border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 resize-none bg-white"
              />

              <button 
                type="button" 
                className="w-full bg-[#c52833] hover:bg-[#a6222b] text-white font-semibold py-4 rounded-lg mt-2 transition-colors text-[15px]"
              >
                Submit Message
              </button>

            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
