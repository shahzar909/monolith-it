import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <div
      className="
        group relative
        rounded-2xl overflow-hidden
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transition-transform duration-300
      "
    >
      {/* ===== IMAGE (MAIN FOCUS) ===== */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="420px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {project.category}
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>

        
      </div>
    </div>
  );
}
