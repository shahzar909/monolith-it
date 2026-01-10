import type { Metadata } from "next";
import Header1 from "@/components/headers/Header1";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { Mail, Phone, MapPin } from "lucide-react";

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
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
            <b>Contact Us</b>
          </p>

          <h1 className="text-4xl md:text-5xl font-light max-w-3xl leading-tight">
            Let’s discuss how we can help transform your business with
            innovative technology solutions
          </h1>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="bg-black pb-24">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+91  8700256931</p>
            <p className="text-gray-400 text-sm">+91  7301190333</p>
            <p className="text-gray-400 text-sm">+91  9661195767</p>

          </div>

          {/* Email */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <p className="text-gray-400 text-sm">daniyal27092003@gmail.com</p>
            <p className="text-gray-400 text-sm">shahzarkhan909@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2">Address</h3>
            <p className="text-gray-400 text-sm">Okhla, South East Delhi</p>
            <p className="text-gray-400 text-sm">New Delhi,  110025</p>
          </div>

        </div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="bg-black pb-32">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="text-2xl font-light text-white mb-8">
              Send us a message
            </h2>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-light text-white mb-8">
              Our location
            </h2>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <GoogleMap />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
