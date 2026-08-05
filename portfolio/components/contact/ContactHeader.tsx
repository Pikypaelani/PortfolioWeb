"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
        Contact
      </span>

      <h2 className="mt-6 text-4xl font-extrabold text-slate-600 dark:text-slate-300 md:text-5xl">
        Get In Touch
      </h2>

      <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
        Punya rencana proyek, peluang kerja, atau hanya ingin menyapa? 
        Jangan ragu untuk mengirimkan saya pesan atau hubungi saya secara langsung
      </p>
    </motion.div>
  );
}