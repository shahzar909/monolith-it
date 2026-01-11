"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import PortfolioCard from "./PortfolioCard";

const AUTO_PLAY_INTERVAL = 3000;
const CARD_SPACING = 260;

export default function ProjectsCarousel({ projects }: { projects: any[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);

  /* ================= PRIORITIZE AI PROJECT ================= */
  const orderedProjects = useMemo(() => {
    const aiIndex = projects.findIndex(
      (p) =>
        p.title?.toLowerCase().includes("ai") ||
        p.category?.toLowerCase().includes("ai")
    );

    if (aiIndex === -1) return projects;

    const aiProject = projects[aiIndex];
    const rest = projects.filter((_, i) => i !== aiIndex);

    return [aiProject, ...rest];
  }, [projects]);

  const total = orderedProjects.length;

  /* ================= AUTO PLAY ================= */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [paused, total]);

  /* ================= KEYBOARD NAV ================= */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActive((prev) => (prev + 1) % total);
      }
      if (e.key === "ArrowLeft") {
        setActive((prev) => (prev - 1 + total) % total);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [total]);

  /* ================= MOBILE SWIPE ================= */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 60) setActive((prev) => (prev - 1 + total) % total);
    if (diff < -60) setActive((prev) => (prev + 1) % total);

    startX.current = null;
  };

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative w-full overflow-hidden pt-12 pb-2 bg-black"
    >
      {/* EDGE FADE — DESKTOP ONLY */}
      <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-black to-transparent z-40" />
      <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-black to-transparent z-40" />

      {/* PERSPECTIVE STAGE */}
      <div className="relative mx-auto h-[520px] w-full flex items-center justify-center perspective-[2000px]">
        {orderedProjects.map((project, index) => {
          let offset = index - active;

          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          if (Math.abs(offset) > 2) return null;

          const isActive = offset === 0;

          return (
            <div
              key={project.id}
              onClick={() => setActive(index)}
              className="absolute cursor-pointer transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
              style={{
                transform: `
                  translateX(${offset * CARD_SPACING}px)
                  translateZ(${isActive ? 240 : -Math.abs(offset) * 140}px)
                  rotateY(${offset * -12}deg)
                  scale(${isActive ? 1.08 : 0.94})
                `,
                opacity: isActive ? 1 : 0.7, // mobile-friendly
                zIndex: 30 - Math.abs(offset),
              }}
            >
              <div className="w-[320px] md:w-[360px]">
                <PortfolioCard project={project} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
