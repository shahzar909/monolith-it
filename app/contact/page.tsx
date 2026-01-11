import type { Metadata } from "next";
import Header1 from "@/components/headers/Header1";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Monolith IT Company",
  description:
    "Get in touch with Monolith IT Company for enterprise software, cloud solutions, and digital transformation.",
};

export default function Contact() {
  return (
    <>
      <Header1 />

      {/* ================= HERO ================= */}
      <section className="bg-black text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-10">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6" />

          <h1 className="text-4xl md:text-5xl font-Sans text-white mb-4">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-black pb-32">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left text */}
          <div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Whether you have a question, an idea, or a project in mind, feel free to reach out. Share a few details about what you’re looking for, and someone from our team will get back to you. 
            </p>
          </div>

          {/* Form (higher on desktop, unchanged on mobile) */}
          <div className="mt-0 lg:-mt-56">
            <h2 className="text-2xl font-light text-white mb-8">
              Send us a message
            </h2>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
