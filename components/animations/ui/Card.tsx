"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  gradient?: boolean;
}

export default function Card({ 
  children, 
  className = "",
  hoverable = true,
  gradient = false 
}: CardProps) {
  return (
    <motion.div
      className={`
        ${gradient 
          ? "bg-gradient-to-br from-white to-primary-50/30" 
          : "bg-white"
        }
        rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100
        ${hoverable ? "hover:shadow-2xl" : ""}
        ${className}
      `}
      whileHover={hoverable ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}