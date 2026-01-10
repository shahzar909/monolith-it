"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Palette, Code2, Cloud, LifeBuoy } from "lucide-react";

const steps = [
  {
    title: "Discover",
    icon: Search,
    description:
      "We begin by deeply understanding your business objectives, target users, and technical landscape to ensure we solve the right problems from day one.",
    points: [
      "Business goals and product vision alignment",
      "User and market research",
      "Competitor and industry analysis",
      "Technical feasibility and risk assessment",
      "Clear project scope and roadmap definition",
    ],
  },
  {
    title: "Design",
    icon: Palette,
    description:
      "We translate insights into intuitive user experiences and a scalable system blueprint that balances usability, performance, and long-term growth.",
    points: [
      "User experience (UX) and interface (UI) design",
      "User journeys and interaction flows",
      "Design systems and reusable components",
      "System architecture and data modeling",
      "Security, scalability, and performance planning",
    ],
  },
  {
    title: "Build",
    icon: Code2,
    description:
      "Our engineering team brings the product to life using modern technologies, clean architecture, and proven development practices.",
    points: [
      "Frontend and backend application development",
      "API development and system integrations",
      "AI, automation, and advanced features",
      "Testing, quality assurance, and code reviews",
      "Performance optimization and security hardening",
    ],
  },
  {
    title: "Scale",
    icon: Cloud,
    description:
      "We ensure your product is ready to scale globally with reliable infrastructure, automated deployments, and continuous monitoring.",
    points: [
      "Cloud-native infrastructure and deployment",
      "CI/CD pipelines and DevOps automation",
      "Load balancing and performance tuning",
      "Monitoring, logging, and observability",
      "Infrastructure cost optimization",
    ],
  },
  {
    title: "Support",
    icon: LifeBuoy,
    description:
      "We provide ongoing support and continuous improvements to keep your product stable, secure, and aligned with evolving business needs.",
    points: [
      "Ongoing maintenance and regular updates",
      "Monitoring and incident response",
      "Feature enhancements and iteration",
      "Security updates and technical audits",
      "Long-term technical support and consultation",
    ],
  },
];

const AUTO_INTERVAL = 3500;

export default function WorkflowUI() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(interval);
  }, [paused]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setTilt({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      className="relative bg-black pt-2 pb-24 px-6 overflow-hidden"
    >
      {/* Ambient background */}
      <motion.div
        className="absolute inset-0 opacity-30 blur-[140px]"
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-3">
            How We Build
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            A transparent, proven workflow that turns ideas into scalable digital
            products.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex justify-between items-center mb-20">
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/10" />
          <motion.div
            className="absolute left-0 top-1/2 h-[1px] bg-white"
            animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.4 }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === active;

            return (
              <motion.button
                key={step.title}
                onMouseEnter={() => {
                  setActive(i);
                  setPaused(true);
                }}
                onClick={() => setActive(i)}
                className="relative z-10 flex flex-col items-center gap-3"
                style={{
                  transform: isActive
                    ? `rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`
                    : "none",
                }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 ${
                    isActive ? "bg-white/10" : "bg-white/5"
                  }`}
                  animate={{ scale: isActive ? 1.12 : 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className="text-white" size={22} />
                </motion.div>

                <span
                  className={`text-sm font-medium ${
                    isActive ? "text-white" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {steps[active].title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {steps[active].description}
              </p>
              <ul className="space-y-3">
                {steps[active].points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
