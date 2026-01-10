"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Hero1Props = {
  onGetStarted?: () => void;
};

export default function Hero1({ onGetStarted }: Hero1Props) {
  const [scrollY, setScrollY] = useState(0);

  /* ========= SCROLL LISTENER ========= */
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ========= TRANSFORMS ========= */
  const zoom = 1 + Math.min(scrollY / 900, 0.15);
  const fade = Math.max(1 - scrollY / 600, 0.4);

  /* ========= SCROLL TO SERVICES ========= */
  const scrollToServices = () => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `scale(${zoom})`, opacity: fade }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Monolith Background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 65%)",
          }}
        />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-[4rem] font-semibold leading-tight tracking-tight text-white">
          Transform Your Business Today
        </h1>

        <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
          Monolith empowers developers to create, ship, and scale applications
          using global infrastructure optimized for performance.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          {/* GET STARTED → GLOBAL MODAL */}
          <button
            onClick={onGetStarted}
            className="
              px-10 py-3 rounded-full
              bg-white text-black font-medium text-lg
              hover:bg-gray-200 transition
            "
          >
            Get Started
          </button>

          {/* EXPLORE SERVICES */}
          <button
            onClick={scrollToServices}
            className="
              px-10 py-3 rounded-full
              bg-white/10 backdrop-blur-xl
              border border-white/30
              text-white font-medium text-lg
              hover:bg-white/20 transition
            "
          >
            Explore Services
          </button>
        </div>

      </div>
    </section>
  );
}
