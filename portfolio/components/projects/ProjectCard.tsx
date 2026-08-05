"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  category: string;
  image: string;
  description: string;
  stack: string[];
  onView?: () => void; // Callback untuk membuka modal saat kartu diklik
}

export default function ProjectCard({
  title,
  category,
  image,
  description,
  stack,
  onView,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onClick={onView}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800/80 dark:bg-slate-900 flex flex-col justify-between h-full select-none"
    >
      <div>
        {/* GAMBAR PRATINJAU DENGAN PROTEKSI ANTI-DOWNLOAD */}
        <div
          onContextMenu={(e) => e.preventDefault()}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800"
        >
          {/* Pelapis Transparan Anti-Download */}
          <div className="absolute inset-0 z-10 bg-transparent" />

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />

          {/* Overlay Efek Hover */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3 pointer-events-none">
            <span className="text-xs font-medium text-white flex items-center gap-1">
              Lihat Detail <ExternalLink size={12} />
            </span>
          </div>
        </div>

        {/* KONTEN KARTU */}
        <div className="pt-3">
          <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
            {category}
          </span>

          <h3 className="mt-1 text-base font-bold text-slate-900 line-clamp-1 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2 dark:text-slate-300">
            {description}
          </p>

          {/* TECH STACK PILLS */}
          <div className="mt-3 flex flex-wrap gap-1">
            {stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {stack.length > 3 && (
              <span className="text-[10px] text-slate-400 self-center">
                +{stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* TOMBOL AKSI SINGKAT */}
      <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/60">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors group-hover:bg-blue-600 group-hover:text-white"
        >
          <span>Detail Project</span>
        </button>
      </div>
    </motion.div>
  );
}