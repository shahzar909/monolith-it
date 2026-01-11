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

      {/* Hero Section */}
      <section className="bg-black text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-10">
          

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* Portfolio Grid */}
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
