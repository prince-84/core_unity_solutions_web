import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="relative w-full max-w-[1956px] mx-auto h-[553px] flex items-center justify-center bg-black text-white px-4 overflow-hidden font-sans border-t border-white/10">
      
      {/* Background Zebra Pattern (Simulated with repeating gradient) */}
      <div 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          background: `repeating-radial-gradient(
            ellipse at -10% 50%, 
            #000000 0%, 
            #000000 30px, 
            #2a2a2a 30px, 
            #2a2a2a 60px
          )`
        }}
      />
      
      {/* Fade to black on the right and top/bottom edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-black/90 to-black pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-80" />

      {/* Content Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Top Label */}
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-6 flex items-center justify-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600 shadow-[0_0_8px_3px_rgba(220,38,38,0.5)]"></span>
          </span>
          Our Clients
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
          Amazing Software Services
        </h2>

        {/* Testimonial Text */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto font-light">
          They crafted a digital experience tailored to our exact needs. From initial consultation to final deployment, their professionalism, responsiveness, and technical expertise were unmatched. The system they built has streamlined our operations, improved customer engagement, and scaled effortlessly with our growth We couldn't be happier with.
        </p>

        {/* Profile Block */}
        <div className="flex items-center gap-4 mt-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
            <Image 
              src="/managingpart_image.png" 
              alt="Alex Hales" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-white font-bold text-lg leading-tight mb-0.5">Alex Hales</span>
            <span className="text-gray-500 text-xs font-medium">Managing Partner</span>
          </div>
        </div>

      </div>
    </section>
  );
}
