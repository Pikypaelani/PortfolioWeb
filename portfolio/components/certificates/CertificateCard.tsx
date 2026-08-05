"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
  category: string;
  credential?: string;
  onView: () => void;
}

export default function CertificateCard({
  title,
  issuer,
  year,
  image,
  description,
  category,
  onView,
}: CertificateCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800/80 dark:bg-slate-900/80"
    >
      <div>
        {/* GAMBAR SERTIFIKAT KARTU */}
        <div
          onContextMenu={(e) => e.preventDefault()}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 select-none"
        >
          {/* Lapisan Transparan Anti-Download */}
          <div className="absolute inset-0 z-10 bg-transparent" />

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 select-none"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
          {/* Overlay gradasi tipis saat kursor di atas kartu */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        </div>

        {/* ISIAN SERTIFIKAT */}
        <div className="pt-4">
          <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            {category}
          </span>

          <h3 className="mt-2.5 text-base font-bold tracking-tight text-slate-900 line-clamp-1 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            {issuer} • {year}
          </p>

          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>

      {/* TOMBOL BUKA MODAL */}
      <div className="pt-4 mt-2">
        <button
          onClick={onView}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white active:scale-95"
        >
          <span>View Certificate</span>
          <ExternalLink size={14} />
        </button>
      </div>
    </motion.div>
  );
}