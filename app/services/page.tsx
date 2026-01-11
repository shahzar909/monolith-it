import Header1 from "@/components/headers/Header1";
import Footer from "@/components/Footer";
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Brain,
  Cog,
  TrendingUp,
  Search,
} from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    description:
      "High-performance, scalable web applications built with modern technologies and clean architecture.",
    icon: Code,
  },
  {
    title: "UI / UX Design",
    description:
      "Intuitive, accessible interfaces designed for clarity, usability, and long-term product growth.",
    icon: Smartphone,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications optimized for performance, reliability, and seamless user experience.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Secure, scalable cloud infrastructure with CI/CD pipelines and production-grade monitoring.",
    icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Practical AI solutions that integrate directly into real products to deliver measurable value.",
    icon: Brain,
  },
  {
    title: "Cybersecurity",
    description:
      "Security-first engineering practices to protect systems, users, and sensitive business data.",
    icon: Shield,
  },
  {
    title: "Product Engineering",
    description:
      "End-to-end ownership from idea to production-ready platforms built for scale.",
    icon: Cog,
  },
  {
    title: "SEO & Growth",
    description:
      "Performance-driven SEO and growth strategies built on strong technical foundations.",
    icon: TrendingUp,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header1 />

      <section className="bg-black py-24">
        <div className="container-custom">

          {/* PAGE HEADER */}
          <div className="mb-16">
            
         
            <h1  className="text-5xl md:text-7xl font-light leading-tight" >
            What We Do
            </h1>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/10
                    rounded-2xl
                    p-6
                    transition-all duration-300
                    hover:border-white/30
                    hover:bg-white/8
                  "
                >
                  {/* ICON */}
                  <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                    <Icon className="text-white" size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
