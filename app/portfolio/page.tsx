import type { Metadata } from "next";
import Header1 from "@/components/headers/Header1";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import portfolio from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: "Portfolio - Monolith IT Company",
  description:
    "Explore our portfolio of successful software development projects and IT solutions delivered for clients worldwide",
};

export default function Portfolio() {
  return (
    <>
      <Header1 />

      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <h1 className="heading-1 mb-6 animate-fade-in">Our Portfolio</h1>
          <p className="text-xl max-w-3xl animate-slide-up">
            Showcasing successful projects that have transformed businesses across industries
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      

      <CTASection />
      <Footer />
    </>
  );
}
