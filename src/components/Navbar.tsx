"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Menu, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg border-b border-white/5' : 'bg-transparent'
    }`}>
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
          <Image src="/whatsapp_logo.png" alt="WhatsApp" width={18} height={18} className="object-contain" />
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors hidden sm:flex" title="Phone">
          <Image src="/phone_logo.png" alt="Phone" width={18} height={18} className="object-contain brightness-0 invert" />
        </button>
        <button className="md:hidden w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
