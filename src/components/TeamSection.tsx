import Image from "next/image";

const team = [
  { name: "Faraz Shafi", role: "CEO", image: "/faraz_image.png" },
  { name: "Osama Rasheed", role: "Managing Partner", image: "/osama_image.png" },
  { name: "Babar Ali Khan", role: "Sr. Developer", image: "/babar_image.png" },
  { name: "Zeeshan Ashiq", role: "Marketing Manager", image: "/Zeeshan_image.png" }
];

export function TeamSection() {
  return (
    <section className="w-full bg-white text-black py-24 px-4 sm:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col">
        
        {/* Header Area (Left Aligned) */}
        <div className="flex flex-col items-start mb-16 max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#cc2936] mb-4 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_8px_3px_rgba(220,38,38,0.4)]"></span>
            </span>
            Our Passionate Team
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-black tracking-tight leading-[1.1]">
            The Brilliant Minds Behind<br />Our Success
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-4 flex flex-col group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Image Container with overlapping logo */}
              <div className="relative w-full mb-8">
                {/* Portrait Image */}
                <div className="w-full rounded-xl overflow-hidden relative bg-[#1a1a1a]">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={350}
                    height={450}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                {/* Overlapping Red Logo */}
                <div className="absolute -bottom-5 left-4 w-10 h-10 bg-white rounded-full p-[2px] shadow-md z-10 flex items-center justify-center">
                  <div className="relative w-full h-full bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/red_logoimage.png" 
                      alt="CoreUnity Logo" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="px-2 pb-2 flex flex-col">
                <h4 className="font-bold text-gray-900 text-[17px] mb-1 leading-tight">
                  {member.name}
                </h4>
                <p className="text-gray-500 text-[13px] font-medium">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
