import Image from "next/image";

export function LogoTicker({ logos }: { logos?: string[] | null }) {
  const hasDynamicLogos = logos && logos.length > 0;

  if (!hasDynamicLogos) return null;

  return (
    <div className="w-full max-w-[1525.53px] mx-auto h-[50px] border-t border-gray-800 overflow-hidden py-2 z-20 relative bg-black flex items-center">
      <div className="flex whitespace-nowrap animate-scroll-x items-center w-full">
        {/* Double the logos to create the infinite scroll effect */}
        {[...logos, ...logos, ...logos].map((logoSrc, i) => (
          <div key={i} className="flex items-center justify-center min-w-[200px] mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
            <Image 
              src={`http://127.0.0.1:8000/storage/${logoSrc}`} 
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
