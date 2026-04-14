"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Building2, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide if scrolling down past 50px, otherwise show
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHidden(true); 
      } else {
        setIsHidden(false); 
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang-kami" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "FAQ", href: "/faq" },
  ];

  const isDarkNavbar = isScrolled || pathname !== "/";

  return (
    <nav
      style={{ top: isHidden ? "-120px" : "0" }}
      className={`fixed left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isDarkNavbar
          ? "bg-slate-900 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded bg-primary-600 text-white`}>
              <Building2 size={24} />
            </div>
            <div>
              <span className={`font-bold text-xl tracking-tight ${isDarkNavbar ? "text-white" : "text-slate-900"}`}>
                KALSEL <span className="text-primary-500">CIVIL</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (isActive && link.href === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-primary-400" : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/kontak"
              className={`px-5 py-2.5 text-sm font-semibold rounded-md shadow-sm transition-all ${
                isDarkNavbar 
                  ? "bg-primary-600 hover:bg-primary-500 text-white" 
                  : "bg-primary-600 hover:bg-primary-500 text-white"
              }`}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (isActive && link.href === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="block px-3 py-3 text-base font-medium text-slate-700 border-b border-gray-50 hover:bg-slate-50"
                >
                {link.name}
              </Link>
              );
            })}
            <Link
              href="/kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-bold text-primary-600 hover:bg-slate-50"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
