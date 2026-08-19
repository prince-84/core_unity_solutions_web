import Image from "next/image";

const clients = [
  { name: "SALWA", sub: "REAL ESTATE", type: "text" },
  { name: "Dental ZORG", sub: "DUTCH DENTAL CLINIC", type: "text" },
  { name: "iRMG", sub: "INTERNATIONAL RESOURCE MANAGEMENT GROUP", type: "text" },
  { name: "CAJUN GRILL", sub: "Bold Flavors. Together.", type: "text" },
  { name: "UAE OffPlan", sub: "", type: "text" },
  { name: "AL HILAL", sub: "RESTAURANT", type: "text" },
  { name: "FS", sub: "ADVISORY", type: "text" },
  { name: "The HANDY MAN", sub: "", type: "text" },
  { name: "Soul & Soil", sub: "PROPERTIES LLC", type: "text" },
  { name: "APPELLO", sub: "INTERIORS", type: "text" },
  { name: "Suki Hana", sub: "JAPAN", type: "text" },
  { name: "Globe", sub: "500+ Clients worldwide", type: "globe" }
];

export function OurClientsSection() {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden border-t border-white/[0.05] font-sans">
      
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url("/grid_bg.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Red Center Glow */}
      <div 
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-5xl h-[800px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(160, 10, 15, 0.4) 0%, transparent 60%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_8px_3px_rgba(220,38,38,0.5)]"></span>
            </div>
            <span className="text-xs tracking-widest text-gray-400 ml-1 uppercase">Our Clients</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold max-w-4xl leading-tight text-white">
            5-Star Rated, Works <br className="hidden md:block" /> with CoreUnity Solutions
          </h2>
        </div>

        {/* Logos Grid Container */}
        <div className="relative mt-20">
          
          {/* Grid Lines Layer with fading mask */}
          <div 
            className="absolute inset-0 pointer-events-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 z-0"
            style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)' }}
          >
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className={`
                  border-white/40 border-r border-b
                  ${(i + 1) % 2 === 0 ? 'border-r-0' : ''}
                  ${(i + 1) % 3 === 0 ? 'md:border-r-0' : 'md:border-r'}
                  ${(i + 1) % 6 === 0 ? 'lg:border-r-0' : 'lg:border-r'}
                  ${i >= 10 ? 'border-b-0' : ''}
                  ${i >= 9 ? 'md:border-b-0' : 'md:border-b'}
                  ${i >= 6 ? 'lg:border-b-0' : 'lg:border-b'}
                `}
              />
            ))}
          </div>

          {/* Content Layer (Logos) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 relative z-10">
            
            {/* 11 Client Logos */}
            {[
              "/salwa.png",
              "/dental.png",
              "/SkillBridge Academy.png",
              "/cajun.png",
              "/UAEofplan.png",
              "/alhilal.png",
              "/fs.png",
              "/handyman.png",
              "/soulnsoil.png",
              "/appello.png",
              "/sukihana.png"
            ].map((imgSrc, i) => (
              <div 
                key={i} 
                className="aspect-[3/2] flex flex-col items-center justify-center p-6 transition-colors hover:bg-white/5 cursor-pointer text-center"
              >
                <div className="relative w-full h-full max-h-[80px]">
                  <Image src={imgSrc} alt={`Client logo ${i + 1}`} fill className="object-contain" />
                </div>
              </div>
            ))}
            
            {/* Globe Item (Index 11) */}
            <div className="aspect-[3/2] flex flex-col items-center justify-center p-6 transition-colors hover:bg-white/5 cursor-pointer">
              <div className="relative w-12 h-12 rounded-full mb-3 flex items-center justify-center overflow-hidden">
                <Image src="/World.png" alt="Globe" fill className="object-contain" />
              </div>
              <p className="text-[11px] text-center text-gray-400 leading-snug">
                500+ Clients <br /> worldwide
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
