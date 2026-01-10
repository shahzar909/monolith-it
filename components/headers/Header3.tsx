"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header3() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/home3", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone size={14} className="mr-2" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center">
              <Mail size={14} className="mr-2" /> info@monolith-it.com
            </span>
          </div>
          <div className="hidden md:block">
            <span>24/7 Support Available</span>
          </div>
        </div>
      </div>
      
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link href="/home3" className="text-2xl font-bold">
              <span className="text-primary-600">MONOLITH</span>
              <span className="text-dark-800">.IT</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>
            </nav>

            <button
              className="lg:hidden text-dark-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container-custom py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark-700 hover:text-primary-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-center">
                Request Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}