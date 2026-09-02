import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to Get Your Local Business on Google Maps (Step-by-Step)",
    date: "January 10, 2022",
    category: "Local SEO",
    excerpt: "If you run a local business and you're not showing up on Google Maps, you're handing customers straight to competitors who are...",
    href: "/blog/local-business-on-google-maps"
  },
  {
    title: "Google Ads vs. Meta Ads: Which Is Right for Your Business?",
    date: "January 10, 2022",
    category: "Paid Marketing",
    excerpt: "If you've spent any time in a marketing Slack channel, a Facebook group for small business owners, or even just a late-night Google search...",
    href: "/blog/google-ads-vs-meta-ads"
  },
  {
    title: "Daily Manual Tasks Your Business Should Automate Today",
    date: "January 10, 2022",
    category: "Business Growth",
    excerpt: "If you've been putting off the decision to automate manual tasks in your business, this is your sign to stop waiting...",
    href: "/blog/daily-manual-tasks"
  },
  {
    title: "5 Must-Have Features Every Business Website Needs",
    date: "January 10, 2022",
    category: "Web Design",
    excerpt: "Let's be honest for a second: most business owners don't think about their website until something goes wrong...",
    href: "/blog/business-website-features"
  },
  /*
  {
    title: "How to Get Your Local Business on Google Maps (Step-by-Step)",
    date: "January 10, 2022",
    category: "Local SEO",
    excerpt: "If you run a local business and you're not showing up on Google Maps, you're handing customers straight to competitors who are...",
    href: "/blog/detail"
  },
  {
    title: "How to Get Your Local Business on Google Maps (Step-by-Step)",
    date: "January 10, 2022",
    category: "Local SEO",
    excerpt: "If you run a local business and you're not showing up on Google Maps, you're handing customers straight to competitors who are...",
    href: "/blog/detail"
  }
  */
];

export function BlogSection({ maxPosts }: { maxPosts?: number }) {
  const displayPosts = maxPosts ? blogPosts.slice(0, maxPosts) : blogPosts;

  return (
    <section className="w-full bg-[#f9f9f9] text-black py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col">
        
        {/* Header Area (Left Aligned) */}
        <div className="flex flex-col items-start mb-16 max-w-2xl">
          <p className="text-[13px] font-medium tracking-wide text-gray-600 mb-4 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#cc2936] shadow-[0_0_8px_3px_rgba(220,38,38,0.4)]"></span>
            </span>
            Our Blog
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#111] tracking-tight leading-[1.1]">
            What's going on in the<br />industry?
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <Link 
              href={post.href}
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black">
                <Image 
                  src="/blog_image.png" 
                  alt="Blog Cover" 
                  fill 
                  className="object-contain sm:object-cover transition-transform duration-500" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#8c1c24]/90 flex items-center justify-center text-white text-center text-[13px] sm:text-[15px] font-medium leading-tight transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                    View Full<br />Blog
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg md:text-xl leading-tight mb-4 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                
                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-4 text-xs font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="relative w-[14px] h-[14px] opacity-70">
                      <Image src="/calendar_image.png" alt="Date" fill className="object-contain" />
                    </div>
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative w-[14px] h-[14px] opacity-70">
                      <Image src="/file_image.png" alt="Category" fill className="object-contain" />
                    </div>
                    {post.category}
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
