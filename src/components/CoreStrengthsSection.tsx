import Image from "next/image";
import { FileText, SlidersHorizontal, Users, MessageSquare, TrendingUp, Target } from "lucide-react";

const strengths = [
  {
    id: "01",
    title: "Results-Driven Approach",
    description: "We focus on strategies that deliver scalable outcomes.",
    icon: <FileText className="w-5 h-5 text-white" />,
  },
  {
    id: "02",
    title: "Transparent Communication",
    description: "We keep everything clear, honest, and updated.",
    icon: <SlidersHorizontal className="w-5 h-5 text-white" />,
  },
  {
    id: "03",
    title: "Customized Solutions",
    description: "We tailor every solution to fit your unique needs.",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    id: "04",
    title: "Affordable & Scalable Services",
    description: "We provide cost-effective solutions that grow with your business.",
    icon: <MessageSquare className="w-5 h-5 text-white" />,
  },
  {
    id: "05",
    title: "Full-Service Team",
    description: "We handle everything from content creation to ads to seo under one roof.",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
  },
  {
    id: "06",
    title: "Client-Centric Mindset",
    description: "Your goals guide everything we do, we treat your brand as our own.",
    icon: <Target className="w-5 h-5 text-white" />,
  }
];

function StrengthCard({ item, index, side }: { item: typeof strengths[0], index: number, side: 'left' | 'right' }) {
  // Zig-zag layout:
  // Left column (images are on the right): even index (0, 2) shift right towards images. odd index (1) shift left.
  // Right column (images are on the left): even index (0, 2) shift left towards images. odd index (1) shift right.
  const isShiftedToImage = index % 2 === 0;
  
  let marginClass = "";
  if (side === "left") {
    marginClass = isShiftedToImage ? "ml-auto mr-0" : "mr-auto ml-0";
  } else {
    marginClass = isShiftedToImage ? "mr-auto ml-0" : "ml-auto mr-0";
  }

  // Numbers face the images
  const numberPositionClass = side === "left" ? "-top-12 -right-4" : "-top-12 -left-6";

  return (
    <div className={`relative w-[90%] mb-12 lg:mb-16 ${marginClass}`}>
      {/* Large background number facing the image */}
      <div className={`absolute text-8xl font-bold text-white/20 select-none pointer-events-none font-sans z-0 ${numberPositionClass}`}>
        {item.id}
      </div>
      
      {/* Card */}
      <div className="relative z-10 bg-[#161616] rounded-2xl p-6 border border-white/5 flex flex-col items-start gap-4 shadow-xl backdrop-blur-sm">
        <div className="flex items-center gap-4 w-full">
          <div className="w-14 h-14 rounded-xl bg-red-600/90 flex items-center justify-center shrink-0 shadow-lg">
            {item.icon}
          </div>
          {/* Constrain width to force exactly 2 lines */}
          <h3 className="text-white font-bold text-lg leading-snug w-[140px]">
            {item.title}
          </h3>
        </div>
        {/* Constrain width to force exactly 2 lines */}
        <p className="text-gray-400 text-[15px] leading-relaxed mt-2 w-full max-w-[260px] pr-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function CoreStrengthsSection() {
  return (
    <section className="relative w-full bg-[#0B0B0B] text-white py-24 px-8 overflow-hidden z-20">
      {/* Optional subtle background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-20 w-full max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            Our Core Strengths
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            What Makes Our Digital Marketing Agency Stand Out?
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-8 w-full items-center">
          
          {/* Left Column (01, 02, 03) */}
          <div className="flex flex-col w-full px-4 lg:px-0 mt-8">
            {strengths.slice(0, 3).map((item, index) => (
              <StrengthCard key={item.id} item={item} index={index} side="left" />
            ))}
          </div>

          {/* Center Column (Collage) */}
          <div className="flex items-start justify-center w-full px-4 lg:px-2 py-8 lg:py-0">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto relative">
              {/* Left Column: 1, 2, 3 */}
              <div className="flex flex-col gap-4">
                <Image src="/clip_1_group.png" alt="Marketing Funnels" width={300} height={400} className="w-full h-auto rounded-2xl shadow-[0_0_15px_rgba(220,38,38,0.1)] border border-white/10 object-cover hover:scale-[1.02] transition-transform" />
                <Image src="/clip_2_group.png" alt="Summer Collection" width={300} height={300} className="w-full h-auto rounded-2xl shadow-[0_0_15px_rgba(220,38,38,0.1)] border border-white/10 object-cover hover:scale-[1.02] transition-transform" />
                <Image src="/clip_3_group.png" alt="Team" width={300} height={150} className="w-full h-auto rounded-2xl shadow-[0_0_15px_rgba(220,38,38,0.1)] border border-white/10 object-cover hover:scale-[1.02] transition-transform" />
              </div>

              {/* Right Column: 4, 5, 6 */}
              <div className="flex flex-col gap-4">
                <Image src="/clip_4_group.png" alt="Business Woman" width={300} height={150} className="w-full h-auto rounded-2xl shadow-[0_0_15px_rgba(220,38,38,0.1)] border border-white/10 object-cover hover:scale-[1.02] transition-transform" />
                <Image src="/clip_5_group.png" alt="Tech Products" width={300} height={400} className="w-full h-auto rounded-2xl shadow-[0_0_15px_rgba(220,38,38,0.1)] border border-white/10 object-cover hover:scale-[1.02] transition-transform" />
                <Image src="/clip_6_group.png" alt="Fitness Marketing" width={300} height={400} className="w-full h-auto rounded-2xl shadow-[0_0_15px_rgba(220,38,38,0.1)] border border-white/10 object-cover hover:scale-[1.02] transition-transform" />
              </div>
            </div>
          </div>

          {/* Right Column (04, 05, 06) */}
          <div className="flex flex-col w-full px-4 lg:px-0 lg:pt-16">
            {strengths.slice(3, 6).map((item, index) => (
              <StrengthCard key={item.id} item={item} index={index} side="right" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
