export function GlobalPresence() {
  return (
    <div className="flex items-center justify-center gap-8 mt-12 mb-8 z-20 relative w-full px-4">
      <span className="text-gray-400 text-sm">Our Global Presence</span>
      
      {/* Vertical divider */}
      <div className="w-[1px] h-6 bg-gray-700"></div>
      
      <div className="flex items-center gap-6">
        {["USA", "UAE", "Saudi Arabia", "Pakistan"].map((country) => (
          <div key={country} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
            <span className="text-gray-300 text-sm">{country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
