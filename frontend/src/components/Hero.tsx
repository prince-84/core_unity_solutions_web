export function Hero({ data }: { data?: any }) {
  if (!data || data.message) return null; // Wait for CMS data to exist

  const heroData = {
    title: data.title || '',
    button_text: data.button_text || '',
    button_link: data.button_link || '#',
    button_icon: data.button_icon ? `http://127.0.0.1:8000/storage/${data.button_icon}` : null
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mt-12 max-w-5xl mx-auto px-4 z-20 relative">
      <h1 
        className="text-4xl md:text-[55px] font-bold text-white leading-[1.2] md:leading-[1.1] mb-6"
        dangerouslySetInnerHTML={{ __html: heroData.title }}
      />
      
      <div className="relative flex items-center justify-center w-full max-w-sm mx-auto">
        {/* Dotted horizontal line */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent border-t border-dashed border-blue-500/30"></div>
        
        {/* Button */}
        <a href={heroData.button_link || '#'} className="relative z-10 bg-red-600 hover:bg-red-700 text-white pl-5 pr-2 py-2 rounded-full font-medium text-sm flex items-center gap-3 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          {heroData.button_text}
          <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden border-2 border-red-600">
            {heroData.button_icon ? (
              <img src={heroData.button_icon} alt="icon" className="w-full h-full object-cover" />
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#6B7280"/>
              </svg>
            )}
          </div>
        </a>
      </div>
    </div>
  );
}
