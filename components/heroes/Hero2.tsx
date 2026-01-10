import Link from "next/link";
import { Play } from "lucide-react";

export default function Hero2() {
  return (
    <section className="relative bg-dark-900 text-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            Leading IT Solutions Provider
          </div>
          <h1 className="heading-1 mb-6 animate-slide-up">
            Building Digital Excellence for Modern Enterprises
          </h1>
          <p className="text-xl mb-10 text-dark-300 max-w-3xl mx-auto animate-slide-up">
            Partner with Monolith to leverage next-generation technologies including AI, cloud computing, and intelligent automation for unparalleled business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Link href="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all">
              Schedule Consultation
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-900 transition-all flex items-center justify-center">
              <Play className="mr-2" size={20} /> Watch Demo
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">250+</div>
              <div className="text-dark-400">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-dark-400">Countries Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-dark-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}