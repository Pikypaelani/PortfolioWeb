"use client";

import { motion } from "framer-motion";

export default function CertificateHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
        Certificates
      </span>

      <h2 className="mt-6 text-4xl font-extrabold text-slate-600 dark:text-slate-300 md:text-5xl">
        Professional Certifications
      </h2>

      <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
        Berikut adalah beberapa sertifikasi yang menunjukkan proses
         belajar saya yang berkelanjutan, kompetensi teknis, 
         serta komitmen terhadap pengembangan profesional di bidang 
         rekayasa perangkat lunak (software engineering), 
         jaringan (networking), basis data (database), 
         dan keterampilan komunikasi (communication skills)
      </p>
    </motion.div>
  );
}