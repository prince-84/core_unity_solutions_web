export function TestimonialSectionLight() {
  return (
    <section className="relative w-full h-[553px] flex items-center justify-center bg-white text-black px-6 overflow-hidden font-sans border-t border-gray-100">
      
      {/* Background Zebra Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: 'url("/white_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />

      {/* Content Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Top Label */}
        <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-gray-500 mb-6 flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c52833] shadow-[0_0_8px_3px_rgba(220,38,38,0.2)]"></span>
          </span>
          Our Clients
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1f1f1f] tracking-tight leading-tight mb-8">
          Amazing Software Services
        </h2>

        {/* Testimonial Text */}
        <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed mb-12 max-w-[900px] mx-auto font-light">
          They crafted a digital experience tailored to our exact needs. From initial consultation to final deployment, their professionalism, responsiveness, and technical expertise were unmatched. The system they built has streamlined our operations, improved customer engagement, and scaled effortlessly with our growth We couldn't be happier with.
        </p>

        {/* Profile Block */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gray-200 shadow-md">
            <img 
              src="/managingpart_image.png" 
              alt="Alex Hales" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-[#1f1f1f] font-bold text-lg leading-tight mb-0.5">Alex Hales</span>
            <span className="text-gray-500 text-[11px] font-medium tracking-wide">Managing Partner</span>
          </div>
        </div>

      </div>
    </section>
  );
}
