"use client";

import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      {/* Label Badge */}
      <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
        Career Journey
      </span>

      {/* Judul Utama - Warna kata "Work" disamakan dengan deskripsi */}
      <h2 className="mt-4 text-3xl font-extrabold text-slate-600 dark:text-slate-300 md:text-4xl">
        Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
      </h2>

      {/* Deskripsi Subtitle */}
      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Sepanjang perjalanan akademik saya, 
        memperoleh pengalaman praktis melalui magang 
        di lembaga pemerintah dan perusahaan bumn skala nasional.
      </p>
    </motion.div>
  );
}