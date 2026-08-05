"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
        About Me
      </span>

      {/* Title - Warna disamakan dengan paragraf deskripsi */}
      <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-600 dark:text-slate-300 md:text-5xl">
        Passionate About
        <br />
        Creating Modern Digital
        <br />
        Solutions 
      </h2>

      {/* Paragraph */}
      <p className="mt-8 max-w-xl leading-8 text-slate-600 dark:text-slate-300">
        Saya{" "}
        Piky Paelani
        ,Fresh Graduate in Informatics Engineering dari Universitas Nusa Putra. 
        memiliki keahlian praktis dalam pengembangan web full-stack, 
        dan antarmuka pengguna yang responsif menggunakan teknologi 
        modern seperti Next.js, React, Laravel, PHP, dan MySQL
      </p>

      <p className="mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-300">
        Sepanjang perjalanan akademik, saya aktif dalam organisasi 
        kampus dan dipercaya mengelola berbagai proyek teknis. 
        Saya juga memiliki pengalaman magang yang solid di dua sektor 
        strategis: sebagai IT Support di lembaga pemerintah daerah dan 
        sebagai Staf Magang SDM di Badan Usaha Milik Negara (BUMN) skala nasional
      </p>

      <p className="mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-300">
        Dari seluruh pengalaman ini, saya selalu didorong oleh semangat untuk terus belajar
         dan berkomitmen mengubah ide-ide kompleks menjadi solusi 
         digital praktis yang memberikan pengalaman terbaik
      </p>
    </motion.div>
  );
}