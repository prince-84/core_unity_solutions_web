import Image from "next/image";

export function EarthGlobe({ image }: { image?: string | null }) {
  // If no image is provided from the CMS, do not render the globe section at all
  if (!image) return null;

  const globeSrc = `http://127.0.0.1:8000/storage/${image}`;

  return (
    <div className="relative flex justify-center mt-4 overflow-hidden w-full h-[220px]">
      {/* Gradient glow underneath earth */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-600/30 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Earth container with rotation animation */}
      <div className="absolute -top-12 flex justify-center animate-spin-slow">
        {/* The earth image sits partially below the viewport bottom, so we clip it with height in the parent container. */}
        <Image 
          src={globeSrc} 
          alt="Earth Globe" 
          width={600} 
          height={600}
          className="rounded-full max-w-none opacity-90 [clip-path:circle(36%_at_50%_50%)] mask-image-gradient"
          priority
        />
      </div>
      
      {/* Dark overlay gradient to fade bottom out like the screenshot */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
}
