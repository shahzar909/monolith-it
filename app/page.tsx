"use client";

import { useState } from "react";

import Header1 from "../components/headers/Header1";
import Hero1 from "../components/heroes/Hero1";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import portfolio from "../data/portfolio.json";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import WorkflowUI from "@/components/WorkflowUI";
import ServicesSticky from "@/components/ServicesSticky";
import GetStartedModal from "@/components/GetStartedModal";

export default function Home() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <Header1 onGetStarted={() => setIsGetStartedOpen(true)} />

      {/* ================= HERO ================= */}
      <Hero1 onGetStarted={() => setIsGetStartedOpen(true)} />

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto">
              <i>Explore some of the impactful products and platforms we’ve built.</i>
            </p>
          </div>

          <ProjectsCarousel projects={portfolio.slice(0, 6)} />
        </div>
      </section>
      {/* ================= END FEATURED PROJECTS ================= */}

      {/* ================= WORKFLOW UI ================= */}
      <WorkflowUI />
      {/* ================= END WORKFLOW UI ================= */}

      {/* ================= SERVICES ================= */}
      <ServicesSticky />
      {/* ================= END SERVICES ================= */}

      {/* ================= TESTIMONIALS ================= */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-3">
              What Our Clients Say
            </h2>
            
          </div>

          <TestimonialSlider />
        </div>
      </section>
      {/* ================= END TESTIMONIALS ================= */}

      {/* ================= CTA ================= */}
      <CTASection />
      {/* ================= END CTA ================= */}

      {/* ================= GET STARTED MODAL ================= */}
      {isGetStartedOpen && (
        <GetStartedModal onClose={() => setIsGetStartedOpen(false)} />
      )}

      <Footer />
    </>
  );
}
