"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, Briefcase } from "lucide-react";

interface Props {
  year: string;
  company: string;
  position: string;
  description: string;
}

export default function ExperienceCard({
  year,
  company,
  position,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800/80 dark:bg-slate-900/80 select-none"
    >
      {/* 1. JABATAN & DURASI (BARIS ATAS) */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
          <Briefcase size={13} />
          {position}
        </span>

        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Calendar size={13} className="text-blue-500 dark:text-blue-400" />
          {year}
        </span>
      </div>

      {/* 2. NAMA PERUSAHAAN */}
      <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        <Building2 size={18} className="text-slate-400 dark:text-slate-500 shrink-0" />
        <span>{company}</span>
      </h3>

      {/* 3. DESKRIPSI */}
      <p className="mt-3 text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
}