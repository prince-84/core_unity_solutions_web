export function GlobalPresence() {
  const displayLocations = ["USA", "UAE", "Saudi Arabia", "Pakistan"];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-12 mb-8 z-20 relative w-full px-4 text-center">
      <span className="text-gray-400 text-sm">Our Global Presence</span>
      
      {/* Divider - hidden on mobile, visible on md+ */}
      <div className="hidden md:block w-[1px] h-6 bg-gray-700"></div>
      
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {displayLocations.map((country) => (
          <div key={country} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
            <span className="text-gray-300 text-sm">{country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
