import Image from "next/image";

export type ContentCard = {
  icon: string;
  title: string;
  description: string;
  mockup_image: string;
};

export type LinksCard = {
  background_image: string;
  title_highlight: string;
  title_main: string;
  links: { label: string }[];
};

export function ServicesSection() {
  const miniTitle = "Digital Marketing Services";
  const mainTitle = "How Our Agency Helps You Scale";
  
  const cards = [
    {
      type: "content_card",
      data: {
        icon: "/webnbrand_logo.png",
        title: "Websites & Branding",
        description: "From branding to websites, every design is built to attract, engage, and convert.",
        mockup_image: "/digital_image.png",
      }
    },
    {
      type: "links_card",
      data: {
        background_image: "/growth_bg.png",
        title_highlight: "Growth",
        title_main: "Strategy",
        links: [
          { label: "Signature Growth System" },
          { label: "Venture Marketing" },
          { label: "Marketing Strategy" },
          { label: "Marketing Advisory" },
          { label: "SEO Consulting" },
        ]
      }
    },
    {
      type: "content_card",
      data: {
        icon: "/digi_logo.png",
        title: "Digital Marketing",
        description: "Intent-driven marketing across SEO, CRO, social media, and PR that attracts attention and drives results.",
        mockup_image: "/marketing_image.png",
      }
    }
  ];

  const getImageUrl = (path: string) => {
    return path;
  };

  return (
    <section className="relative w-full bg-white text-black py-16 md:py-24 px-4 sm:px-8 overflow-hidden z-20">
      {/* Background Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[100px] bg-red-100/50 blur-[80px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[150px] bg-red-200/50 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto flex flex-col items-center z-10 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_10px_3px_rgba(220,38,38,0.5)]"></span>
            </span>
            {miniTitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 tracking-tight">
            {mainTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {cards.map((card, index) => {
            if (card.type === "content_card") {
              const c = card.data as ContentCard;
              return (
                <div key={index} className="flex flex-col items-center bg-white rounded-xl border border-gray-200 pt-10 pb-8 px-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden text-center h-full">
                  <div className="flex flex-col items-center flex-grow w-full">
                    <div className="w-24 h-24 mb-6 relative">
                      <Image src={getImageUrl(c.icon)} alt={c.title || 'icon'} fill className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 uppercase leading-tight" dangerouslySetInnerHTML={{ __html: (c.title || '').replace(' & ', ' &<br />') }}></h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {c.description}
                    </p>
                  </div>
                  <div className="w-full relative px-2 mt-auto">
                    <Image src={getImageUrl(c.mockup_image)} alt="Mockup" width={400} height={300} className="w-full h-auto object-contain drop-shadow-2xl" />
                  </div>
                </div>
              );
            }

            if (card.type === "links_card") {
              const c = card.data as LinksCard;
              return (
                <div key={index} className="relative flex flex-col items-center justify-center rounded-xl overflow-hidden pt-12 pb-12 px-8 shadow-xl text-center min-h-[500px] border border-gray-800 h-full">
                  <div className="absolute inset-0 z-0">
                    <Image src={getImageUrl(c.background_image)} alt="Growth Background" fill className="object-cover opacity-40 grayscale" />
                    <div className="absolute inset-0 bg-black/80" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center w-full h-full justify-start mt-6">
                    <div className="mb-10 text-2xl font-black uppercase tracking-widest text-white leading-tight">
                      <span className="text-red-600 block">{c.title_highlight}</span>
                      <span>{c.title_main}</span>
                    </div>
                    
                    <div className="flex flex-col gap-3 w-full max-w-[280px]">
                      {c.links?.map((link, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-red-950/60 via-red-800/80 to-red-950/60 border border-red-500/30 text-white rounded-full py-3 px-6 text-sm font-semibold transition-transform hover:scale-105 cursor-pointer">
                          {link.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}
