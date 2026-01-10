"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  full: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Monolith transformed our legacy systems with clarity and precision.",
    full:
      "Monolith transformed our legacy systems with clarity and precision. Their process was structured, thoughtful, and aligned with our long-term goals. Every technical decision was communicated clearly, and the final architecture positioned us for scale and reliability.",
    name: "Robert Anderson",
    role: "CTO",
    company: "TechVentures Inc.",
  },
  {
    quote: "Communication was clear, delivery predictable, and execution strong.",
    full:
      "Communication was clear, delivery was predictable, and execution was consistently strong. We always understood where the project stood, and the team demonstrated deep ownership of outcomes.",
    name: "Emily Carter",
    role: "Product Lead",
    company: "Nova Labs",
  },
  {
    quote: "A mature engineering partner we trusted with critical systems.",
    full:
      "A mature engineering partner we trusted with critical systems. Monolith brought discipline, foresight, and calm execution to high-stakes infrastructure decisions.",
    name: "Daniel Wright",
    role: "VP Engineering",
    company: "CloudCore",
  },
  {
    quote: "They helped us scale without compromising reliability.",
    full:
      "They helped us scale without compromising reliability. Performance, security, and maintainability were treated as first-class concerns throughout the engagement.",
    name: "Sophia Miller",
    role: "Head of Product",
    company: "ScaleOps",
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (active !== null) {
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [active]);

  return (
<section className="bg-black pt-20 pb-28 relative">
<div className="container-custom">

        {/* Heading */}
        <div className="max-w-2xl mb-20">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
</p>

<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
  Trusted by teams building serious products
</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="
                text-left
                rounded-2xl
                border border-white/10
                bg-white/5
                p-8
                hover:border-white/20
                transition
              "
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-6">
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-sm text-gray-400">
                  {t.role}, {t.company}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* FULL PAGE UNFOLD WITH SLIDE */}
      {active !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="container-custom min-h-screen flex items-center justify-center py-24">

            {/* Glass Panel */}
            <div
              className={`
                relative
                w-full max-w-4xl
                rounded-3xl
                border border-white/15
                bg-white/5
                backdrop-blur-xl
                p-16
                transition-all duration-500 ease-out
                ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              {/* Top bar */}
              <div className="flex justify-between items-center mb-12">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Client Testimonial
                </p>
                <button
                  onClick={() => setActive(null)}
                  className="text-gray-400 hover:text-white transition"
                >
                  ✕ Close
                </button>
              </div>

              {/* Content */}
              <p className="text-2xl text-gray-200 leading-relaxed">
                “{testimonials[active].full}”
              </p>

              <div className="mt-12">
                <p className="text-white font-medium text-lg">
                  {testimonials[active].name}
                </p>
                <p className="text-gray-400">
                  {testimonials[active].role}, {testimonials[active].company}
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-20 flex justify-between text-sm text-gray-400">
                <button
                  onClick={() =>
                    setActive(
                      active === 0 ? testimonials.length - 1 : active - 1
                    )
                  }
                  className="hover:text-white transition"
                >
                  ← Previous
                </button>

                <button
                  onClick={() =>
                    setActive((active + 1) % testimonials.length)
                  }
                  className="hover:text-white transition"
                >
                  Next →
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
