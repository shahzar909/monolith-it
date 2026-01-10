"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-black pt-10 pb-24">
      <div className="container-custom text-center">

        {/* Small eyebrow text */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Ready to Transform Your Business?
        </p>

        {/* Main CTA heading */}
        <h2 className="text-3xl md:text-4xl font-light text-white max-w-3xl mx-auto leading-snug">
          Let us discuss how our innovative IT solutions can help you achieve your
          business goals and stay ahead of the competition.
        </h2>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-6">

          {/* Primary CTA → CONTACT PAGE */}
          <Link
            href="/contact"
            className="
              px-10 py-3 rounded-full
              bg-white text-black
              font-medium text-lg
              transition-all duration-300 ease-out
              hover:bg-gray-100
              hover:scale-[1.02]
              hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
              active:scale-[0.98]
            "
          >
            Contact Us
          </Link>

          {/* Secondary CTA → SERVICES PAGE */}
          <Link
            href="/services"
            className="
              px-10 py-3 rounded-full
              bg-white/10 backdrop-blur-xl
              border border-white/30
              text-white font-medium text-lg
              transition-all duration-300 ease-out
              hover:bg-white/20
              hover:border-white/50
              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
              active:scale-[0.98]
            "
          >
            View Our Services
          </Link>

        </div>
      </div>
    </section>
  );
}
