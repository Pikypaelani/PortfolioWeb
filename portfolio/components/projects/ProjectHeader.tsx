"use client";

import { motion } from "framer-motion";

export default function ProjectHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
        Projects
      </span>

      <h2 className="mt-4 text-3xl font-extrabold text-slate-600 dark:text-slate-300 md:text-4xl">
        Featured Projects
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Berikut adalah beberapa proyek yang telah saya kembangkan 
        selama perjalanan akademik
      </p>
    </motion.div>
  );
}