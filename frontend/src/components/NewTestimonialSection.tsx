import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    service: "Digital Marketing",
    name: "Ahmed Al Mansouri",
    role: "Managing Director, Dubai-based Business",
    review: "Working with the team completely changed the way we approached digital marketing. Their strategy was tailored to our Dubai market, and we saw a noticeable improvement in our online visibility, engagement, and lead generation. They were professional, responsive, and genuinely focused on our business goals."
  },
  {
    service: "Social Media Marketing",
    name: "Sara Khan",
    role: "Founder, Dubai-based Lifestyle Brand",
    review: "Our social media presence has grown significantly since partnering with the team. They understood our brand, created engaging content, and developed a strategy that connected with our target audience in Dubai. The consistency and quality of their work have made a real difference."
  },
  {
    service: "SEO",
    name: "Omar Rahman",
    role: "Marketing Manager, Dubai-based Company",
    review: "We were looking for a long-term SEO partner who understood the competitive Dubai market, and we found exactly that. Their approach was structured, transparent, and focused on sustainable growth. We’ve seen stronger search visibility and a steady increase in relevant organic traffic."
  },
  {
    service: "Branding",
    name: "Fatima Al Nuaimi",
    role: "Founder, Dubai-based Startup",
    review: "The branding process was seamless from start to finish. The team took the time to understand our vision and transformed it into a professional identity that truly represents our business. Our new brand has given us much more confidence when presenting ourselves to customers and partners in Dubai."
  },
  {
    service: "PPC",
    name: "Daniel Thomas",
    role: "Business Owner, Dubai",
    review: "Our previous PPC campaigns were generating clicks but not enough quality leads. The team completely reworked our approach, refined the targeting, and continuously optimized our campaigns. We now have a much clearer understanding of our paid marketing performance and are seeing better-quality enquiries."
  },
  {
    service: "Mobile App Development",
    name: "Khalid Al Hashimi",
    role: "CEO, Dubai-based Technology Company",
    review: "From the initial concept to the final launch, the development team handled our mobile app project with great professionalism. They understood our requirements, communicated clearly throughout the process, and delivered a solution that was both functional and user-friendly. We’re extremely pleased with the result."
  },
  {
    service: "Branding & Digital Marketing",
    name: "Aisha Malik",
    role: "Co-Founder, UAE Business",
    review: "We needed a partner who could bring our branding and digital marketing together under one clear strategy. The team delivered exactly that. From our visual identity to our online campaigns, everything now feels consistent, professional, and aligned with our business objectives."
  },
  {
    service: "Digital Growth",
    name: "Faisal Ahmed",
    role: "Director, Dubai-based Enterprise",
    review: "What stood out most was their understanding of the local market. They didn’t simply apply a generic digital strategy—they took the time to understand our audience, competition, and goals in Dubai. The results have been impressive, and we’re excited to continue growing with them."
  }
];

export function NewTestimonialSection() {
  // To create the continuous effect, we double the array
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white text-black py-16 relative overflow-hidden font-sans border-t border-gray-100">
      
      {/* Background stays pure white as requested */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `url("/white_bg.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />

      <div className="max-w-[1300px] mx-auto relative z-10 flex flex-col px-6 md:px-12 lg:px-24">
        
        {/* Top Content: Title & Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="max-w-2xl">
            <h4 className="text-[#c52833] font-bold tracking-[0.15em] uppercase text-xs mb-3 flex items-center gap-3">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c52833] shadow-[0_0_8px_rgba(197,40,51,0.6)]"></span>
               </span>
               Client Testimonials
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-extrabold leading-[1.1] tracking-tight mb-4 text-[#1f1f1f]">
              Loved by your best customers
            </h2>
            <p className="text-gray-500 text-[17px] leading-relaxed max-w-xl font-light">
              We're obsessed with delivering outstanding customer experiences that are a reflection of your brand.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-10"></div>
      </div>

      {/* Marquee Container (Full Width) */}
      <div className="relative flex overflow-x-hidden group w-full">
        {/* Inline style for marquee animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: slide 60s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="flex animate-marquee gap-8 w-max px-6">
          {duplicatedTestimonials.map((t, idx) => {
            // Alternate gradients
            const isMiddleStyle = idx % 2 !== 0;

            const gradientClass = isMiddleStyle 
              ? "bg-gradient-to-b from-[#c52833] via-[#8a1c24] to-black border-[#c52833]/30 mt-6"
              : "bg-gradient-to-br from-black via-black to-[#c52833] border-white/10 mb-6";

            return (
              <div 
                key={idx} 
                className={`flex flex-col gap-5 p-7 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(197,40,51,0.3)] text-white border relative overflow-hidden group/card w-[420px] shrink-0 ${gradientClass}`}
              >
                {!isMiddleStyle ? (
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 blur-[80px] group-hover/card:opacity-10 transition-opacity duration-500 rounded-full" />
                ) : (
                   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover/card:opacity-10 transition-opacity duration-500" />
                )}

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-7 h-7 flex items-center justify-center rounded-[6px] backdrop-blur-md ${isMiddleStyle ? 'bg-black/20' : 'bg-white/10'}`}>
                        <Star className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 bg-white/10 px-3 py-1.5 rounded-full">{t.service}</span>
                </div>
                
                <p className="text-gray-200 text-[15px] leading-[1.7] font-light flex-1 relative z-10">
                  "{t.review}"
                </p>

                <div className="relative z-10 pt-5 border-t border-white/10 mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[16px]">{t.name}</h4>
                    <p className="text-[12.5px] text-white/60 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
