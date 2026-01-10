"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Brain,
  Shield,
  Smartphone,
  Cog,
  ArrowRight,
} from "lucide-react";
import FadeIn from "./animations/FadeIn";

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string; // ✅ optional
}

const iconMap: { [key: string]: any } = {
  Code,
  Cloud,
  Brain,
  Shield,
  Smartphone,
  Cog,
};

export default function ServiceCard({
  service,
  index = 0, // ✅ default value
}: {
  service: Service;
  index?: number; // ✅ optional
}) {
  const IconComponent = iconMap[service.icon || "Code"] || Code;

  return (
    <FadeIn delay={index * 0.08}>
      <div
        className="
          group relative
          rounded-2xl
          border border-white/10
          bg-red-600 backdrop-blur-xl
          p-8
          transition-all duration-300 ease-out
          hover:-translate-y-2
          hover:border-white/20
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          group-hover/services:opacity-70
          hover:opacity-100
          cursor-pointer
        "
      >
        {/* Icon */}
        <motion.div
          className="
            w-14 h-14
            rounded-xl
            bg-white/10
            flex items-center justify-center
            mb-6
          "
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <IconComponent className="text-white" size={28} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {service.description}
        </p>

        {/* Context line */}
        <p
          className="
            mt-4 text-xs text-gray-300
            opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
          "
        >
          Ideal for modern, scalable products
        </p>

        {/* Learn more */}
        <div
          className="
            mt-6 inline-flex items-center
            text-sm font-medium text-white/80
            transition-all
            group-hover:text-white
          "
        >
          Learn more
          <ArrowRight
            size={16}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </FadeIn>
  );
}
