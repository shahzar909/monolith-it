import type { Metadata } from "next";
import Header3 from "@/components/headers/Header3";
import Hero3 from "@/components/heroes/Hero3";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import portfolio from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: "Monolith IT - Digital Transformation Experts",
  description: "Accelerate your digital transformation journey with our proven expertise",
};

export default function Home3() {
  return (
    <>
      <Header3 />
      <Hero3 />
      
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Process
            </span>
            <h2 className="heading-2 mb-4">How We Work</h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results every time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business needs and objectives" },
              { step: "02", title: "Strategy", desc: "Crafting a tailored solution roadmap" },
              { step: "03", title: "Development", desc: "Building with agile methodologies" },
              { step: "04", title: "Delivery", desc: "Deploying and optimizing your solution" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-dark-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Success Stories</h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Transformative projects that made a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">What Our Clients Say</h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}