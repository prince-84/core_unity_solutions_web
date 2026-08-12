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
    <section className="relative w-full bg-black text-white py-24 overflow-hidden border-t border-white/5 font-sans">
      
      {/* Graph Paper Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />

      {/* Crosshairs at grid intersections for extra detail */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, white 1px, transparent 1.5px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }}
      />

      {/* Center Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/20 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-10 px-4">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 w-full">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            5-Star Rated, Works<br />with CoreUnity Solutions
          </h2>
        </div>

        {/* 12-Column Grid Area */}
        <div className="w-full relative mt-8">
          {/* Faint border wrap around the whole grid to match internal borders */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-l border-t border-white/10 w-full backdrop-blur-sm">
            
            {clients.map((client, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center p-6 border-r border-b border-white/10 h-[160px] text-center hover:bg-white/[0.02] transition-colors"
              >
                {client.type === "globe" ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image src="/client_globe.png" alt="Globe" fill className="object-contain" />
                    </div>
                    <span className="text-gray-400 text-xs max-w-[100px] leading-snug">
                      {client.sub}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                    <h4 className="font-bold text-lg md:text-xl tracking-tight text-white mb-1">
                      {client.name}
                    </h4>
                    {client.sub && (
                      <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-400">
                        {client.sub}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
