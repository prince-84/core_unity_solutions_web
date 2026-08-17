"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { 
      name: "Case Study", 
      href: "/portfolio",
      dropdown: [
        { name: "Case Study Detail", href: "/case-study/detail" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Core Unity Solutions" width={160} height={40} className="w-auto h-10 object-contain" priority />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          link.dropdown ? (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-4 py-1.5 transition-colors ${
                  pathname.startsWith("/portfolio") || pathname.startsWith("/case-study")
                    ? "bg-[#cc2936] text-white rounded-xl"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full mt-4 w-48 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
                {link.dropdown.map((dropItem) => (
                  <Link
                    key={dropItem.name}
                    href={dropItem.href}
                    className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                  >
                    {dropItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-1.5 transition-colors ${
                pathname === link.href
                  ? "bg-[#cc2936] text-white rounded-xl"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          )
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors hidden sm:block">
          Speak to an expert
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors" title="WhatsApp">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors hidden sm:flex">
          <Phone className="w-4 h-4" />
        </button>
        <button className="md:hidden w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
