"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

type Header1Props = {
  onGetStarted?: () => void;
};

export default function Header1({ onGetStarted }: Header1Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 flex items-center justify-between h-20">

        {/* LEFT: LOGO + NAV */}
        <div className="flex items-center space-x-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Monolith Logo"
              width={130}
              height={40}
              className="object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT: BUTTONS */}
        <div className="hidden lg:flex items-center space-x-4">

          {/* GET STARTED (ONLY IF PROVIDED) */}
          {onGetStarted && (
            <button
              type="button"
              onClick={onGetStarted}
              className="
                bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition
                flex items-center justify-center
              "
              style={{
                height: "25px",
                padding: "0 18px",
                fontSize: "14px",
              }}
            >
              Get Started
            </button>
          )}

          {/* EXPLORE SERVICES */}
          <Link
            href="/services"
            className="
              border border-white/20 text-white rounded-lg font-medium hover:bg-white hover:text-black transition
              flex items-center justify-center
            "
            style={{
              height: "32px",
              padding: "0 18px",
              fontSize: "14px",
            }}
          >
            Explore Services
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-lg border-t border-gray-700 mt-2">
          <nav className="px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* MOBILE GET STARTED (ONLY IF PROVIDED) */}
            {onGetStarted && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onGetStarted();
                }}
                className="px-5 py-3 bg-white text-black text-center rounded-lg font-medium"
              >
                Get Started
              </button>
            )}

            <Link
              href="/services"
              className="px-5 py-3 border border-white/20 text-white text-center rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
