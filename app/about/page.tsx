"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">

        {/* BACKGROUND IMAGES */}
        <div className="absolute inset-0">

          {/* DESKTOP IMAGE */}
          <img
            src="/images/logo-desktop.png"
            alt="Monolith"
            className="hidden md:block w-full h-full object-cover opacity-30"
          />

          {/* MOBILE IMAGE */}
          <img
            src="/images/logo-mobile.png"
            alt="Monolith"
            className="block md:hidden w-full h-full object-cover opacity-40"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-10">
          <div className="max-w-3xl">

            <p className="text-xs tracking-[0.35em] text-gray-400 uppercase mb-6">
              Who We Are
            </p>

            <div className="w-20 h-px bg-gray-500 mb-10" />

            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              About Us
            </h1>

          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="bg-white text-black py-24">
        <div className="max-w-4xl mx-auto px-8">

          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Building reliable digital foundations
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Monolith is a technology company focused on building scalable,
            secure, and performance-driven digital products. We partner with
            businesses to design, engineer, and evolve software systems that
            stand the test of time.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Our approach is rooted in clarity, precision, and long-term thinking.
            We believe that great technology is not just about innovation, but
            about making deliberate decisions that support growth, reliability,
            and maintainability.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            From modern web platforms and mobile applications to cloud-native
            infrastructure and intelligent systems, we help organizations
            transform ideas into production-ready solutions.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            At Monolith, we don’t chase trends — we build strong foundations.
            Foundations that enable businesses to scale with confidence, adapt
            to change, and deliver meaningful impact.
          </p>

        </div>
      </section>

      {/* ================= FACTS & FIGURES ================= */}
      <section className="bg-black py-32">
        <div className="max-w-6xl mx-auto px-8">

          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-4">
            By the Numbers
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-20">
            Trusted by teams building serious products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            <StatItem value={120} suffix="+" label="Projects Delivered" />
            <StatItem value={98} suffix="%" label="Client Satisfaction" />
            <StatItem value={15} suffix="+" label="Industries Served" />
            <StatItem value={6} suffix="+" label="Years of Experience" />
          </div>

        </div>
      </section>

    </main>
  );
}

/* ================= STAT ITEM ================= */
function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-light text-white mb-3">
        {count}
        {suffix}
      </div>

      <div className="text-xs uppercase tracking-[0.25em] text-gray-400">
        {label}
      </div>
    </div>
  );
}
