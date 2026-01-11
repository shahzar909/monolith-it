"use client";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Monolith helped us scale our online clothing store without disrupting daily operations.",
    name: "Rohit Singh",
    role: "Owner",
    company: "Denim Store",
  },
  {
    quote: "Monolith helped us streamline our digital operations and improve system reliability.",
    name: "Ashish Khanna",
    role: "Operations",
    company: "Vision Imaging",
  },
  {
    quote: "Monolith helped us simplify our online ordering and internal systems.",
    name: "Hozaifa Khan",
    role: "Marketing",
    company: "Kolkata Rolls",
  },
  {
    quote: "Our workflows became more organized and dependable after working with Monolith",
    name: "Neha Kapoor",
    role: "Founder",
    company: "Elevate Events",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-black pt-0 pb-26 relative">
      <div className="container-custom">


        {/* STATIC GRID — NO INTERACTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                aspect-square
                rounded-2xl
                border border-white/10
                bg-white/5
                p-8
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
