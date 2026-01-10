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
      "We build fast, scalable web applications designed for long-term growth. Our work focuses on clean architecture, performance, and maintainability, ensuring long-term reliability.",
    image: "/images/service-1.png",
    icon: Code2,
  },
  {
    title: "UI / UX Design",
    content:
      "We design intuitive interfaces that balance aesthetics with usability and accessibility across all platforms.",
    image: "/images/service-2.png",
    icon: Palette,
  },
  {
    title: "Mobile App Development",
    content:
      "High-performance mobile apps engineered for speed, responsiveness, and long-term scalability.",
    image: "/images/service-3.png",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    content:
      "Secure, scalable cloud infrastructure supported by CI/CD pipelines and modern DevOps practices.",
    image: "/images/service-4.png",
    icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    content:
      "Practical AI systems delivering real business value through automation and data intelligence.",
    image: "/images/service-5.png",
    icon: Brain,
  },
  {
    title: "Cybersecurity",
    content:
      "Security-first engineering protecting systems, users, and critical data at every layer.",
    image: "/images/service-6.png",
    icon: Shield,
  },
  {
    title: "Product Engineering",
    content:
      "End-to-end product ownership from concept to scalable production systems.",
    image: "/images/service-7.png",
    icon: Boxes,
  },
  {
    title: "SEO & Growth",
    content:
      "Technical SEO and growth optimization built on strong performance foundations.",
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
        <div className="hidden lg:block sticky top-24 h-[820px] relative">
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
