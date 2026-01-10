import type { Metadata } from "next";
import Header2 from "@/components/headers/Header2";
import Hero2 from "@/components/heroes/Hero2";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Monolith IT - Modern Technology Solutions",
  description: "Innovative IT services and software development for the digital age",
};

export default function Home2() {
  return (
    <>
      <Header2 />
      <Hero2 />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="heading-2 mb-6">Why Choose Monolith?</h2>
              <p className="text-lg text-dark-600 mb-6">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value. Our agile methodology ensures rapid delivery without compromising quality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-dark-700">15+ years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-dark-700">500+ successful projects delivered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-dark-700">24/7 dedicated support team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-dark-700">ISO certified quality standards</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-12 text-white">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="text-primary-100">Client Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">250+</div>
                  <div className="text-primary-100">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="text-primary-100">Countries Served</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Comprehensive IT Services</h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              End-to-end technology solutions designed for scalability and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}