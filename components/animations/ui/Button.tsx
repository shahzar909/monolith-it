"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  href?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  href
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-dark-800 to-dark-900 text-white hover:from-dark-700 hover:to-dark-800 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
    ghost: "text-dark-700 hover:bg-dark-100"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      {icon && <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />}
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </Component>
  );
}