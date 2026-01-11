"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Code2,
  Palette,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  Boxes,
  TrendingUp,
} from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    content:
      "Supercharged web applications that are fast, secure and capable of scaling over time. The design is based on clean architecture and modern, AI-driven development practices so that it would perform strongly, be maintainable, and reliable. The systems are meant to cope with the demands of the real world, to perform efficiently when under load and to develop in the same manner as the features, traffic, and requirements become bigger as time progresses.",
    image: "/images/service-1.png",
    icon: Code2,
  },
  {
    title: "UI / UX Design",
    content:
      "Intuitive user interfaces that are platform-balanced to achieve visual clarity, usability, and accessibility. It is focused on regular design systems, concise interaction patterns and reactive layouts. Interfaces are designed to be simple to manipulate, inclusive, and flexible enough to provide a flexible experience across the gadgets, screen size, and changing user requirements in the long run.",
    image: "/images/service-2.png",
    icon: Palette,
  },
  {
    title: "Mobile App Development",
    content:
      "Mobile applications that are high-performance, fast, responsive, and long-term scalable. The focus of development is on safe foundations, effective use of resources, and the use of AI-assisted processes. Applications are built to behave in the same way on devices, stand stable across various conditions, and change without difficulties as features, platform, and usage change over time.",
    image: "/images/service-3.png",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    content:
      "High availability, scalable cloud platform with CI/CD pipelines and the latest DevOps. It is focused on reliability, automation and performance optimization. Systems are developed to manage the dynamic workloads, provide high-security, and allow effortless deployments as infrastructure is maintained to be stable, efficient, and flexible as the environment, traffic, and needs of a system evolve over time.",
    image: "/images/service-4.png",
    icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    content:
      "Real-value practical AI systems with automation and data intelligence. It is focused on reliability, transparency and measurable outcomes. The models and workflows are built to work harmoniously with the current systems and can be highly scalable and changing as the quality of the data used, its usage patterns, and operational needs change.",
    image: "/images/service-5.png",
    icon: Brain,
  },
  {
    title: "Cybersecurity",
    content:
      "Security-first engineering which defends systems, users, and data which are important across all layers. It pays focus to proactive risk reduction, secure architecture, and constant monitoring. The systems are also created to resist real-life attacks, preserve data integrity, and adjust to changing security issues and be dependable, compliant, and strong over time.",
    image: "/images/service-6.png",
    icon: Shield,
  },
  {
    title: "Product Engineering",
    content:
      "Complete ownership of end product, concept to scalable production systems. Emphasis is made on concrete requirements, considerate architecture and dependable delivery. Every phase is structured in a way that is consistent, high-quality, and long-lasting maintainable in order to enable products to move seamlessly between initial concepts and stable and scalable systems that can confidently develop over time.",
    image: "/images/service-7.png",
    icon: Boxes,
  },
  {
    title: "SEO & Growth",
    content:
      "Growth optimization and technical SEO based on performance foundations. They are focused on site structure, speed and crawl efficiency. These systems are supposed to accommodate discoverability, sustain technical health and respond to the changing search algorithms without allowing performance to decline and long-term stability to be jeopardized with growth in content and traffic.",
    image: "/images/service-8.png",
    icon: TrendingUp,
  },
];

export default function ServicesSticky() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-black py-24">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT — SERVICES */}
        <div className="space-y-16 lg:space-y-28">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`
                  max-w-xl rounded-2xl p-8
                  bg-white/5 border border-white/10
                  transition-colors duration-500
                  ${activeIndex === index ? "bg-white/10" : ""}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                  {service.content}
                </p>

                {/* 📱 MOBILE IMAGE — ONE PER SERVICE */}
                <div className="mt-6 lg:hidden rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={600}
                    className="w-full object-contain bg-black"
                  />
                </div>

                <div
                  className={`mt-7 h-[2px] w-16 transition-colors ${
                    activeIndex === index ? "bg-white" : "bg-white/20"
                  }`}
                />
              </article>
            );
          })}
        </div>

        {/* 🖥️ DESKTOP — STICKY IMAGE (UNCHANGED) */}
        <div className="hidden lg:block sticky top-12 h-[820px] relative">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className={`
                  rounded-3xl p-[2px]
                  transition-opacity duration-500
                  ${activeIndex === index ? "opacity-100" : "opacity-0"}
                `}
                style={
                  activeIndex === index
                    ? {
                        background:
                          "linear-gradient(120deg, #ffffff40, #ffffff, #ffffff40)",
                        backgroundSize: "200% 200%",
                        animation: "gradientShift 4s ease infinite",
                      }
                    : {}
                }
              >
                <div className="rounded-3xl bg-black p-3">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={880}
                    height={880}
                    className="object-contain rounded-2xl"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
