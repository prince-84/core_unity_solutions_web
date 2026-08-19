import Image from "next/image";

export function LogoTicker() {
  const logos = [
    "/al-jazeera.png",
    "/zaaya.png",
    "/gulf_logo.png",
    "/khaleej_logo.png",
    "/arabian_logo.png"
  ];

  return (
    <div className="w-full max-w-[1525.53px] mx-auto h-[50px] border-t border-gray-800 overflow-hidden py-2 z-20 relative bg-black flex items-center">
      <div className="flex whitespace-nowrap animate-scroll-x items-center w-full">
        {/* Double the logos to create the infinite scroll effect */}
        {[...logos, ...logos, ...logos].map((logoSrc, i) => (
          <div key={i} className="flex items-center justify-center min-w-[200px] mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
            <Image 
              src={logoSrc} 
              alt={`Logo ${i}`} 
              width={120} 
              height={40} 
              className="object-contain max-h-[40px]" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
