import Image from "next/image";

export function LogoTicker() {
  const logos = [
    { name: "Aljazeera", src: "Aljazeera" },
    { name: "Zawya", src: "Zawya" },
    { name: "Gulf News", src: "Gulf News" },
    { name: "Khaleej Times", src: "Khaleej Times" },
    { name: "Arabianpost", src: "Arabianpost" },
  ];

  return (
    <div className="w-full max-w-[1525.53px] mx-auto h-[50px] border-t border-gray-800 overflow-hidden py-2 z-20 relative bg-black flex items-center">
      <div className="flex whitespace-nowrap animate-scroll-x items-center w-full">
        {/* Double the logos to create the infinite scroll effect */}
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center min-w-[200px] mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer text-white font-serif text-xl tracking-wider">
            {/* Since we don't have images, use stylized text to mimic logos */}
            {logo.src === "Gulf News" ? (
              <span className="font-bold flex items-center gap-2">GULF NEWS <span className="text-sm">⚚</span></span>
            ) : logo.src === "Aljazeera" ? (
              <span className="flex items-center gap-2"><span className="text-3xl">🙭</span> ALJAZEERA</span>
            ) : logo.src === "Zawya" ? (
              <span className="font-black italic text-2xl tracking-tight">ZAWYA</span>
            ) : logo.src === "Khaleej Times" ? (
              <span className="font-[cursive] text-2xl">Khaleej Times</span>
            ) : (
              <span className="font-bold lowercase tracking-normal">arabianpost</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
