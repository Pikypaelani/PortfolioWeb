"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* 1. Efek Cahaya Belakang (Glow) */}
        <div className="absolute inset-0 rounded-[40px] bg-blue-500/30 blur-3xl" />

        {/* 2. Kartu Utama & Foto Profil */}
        <div className="relative h-[420px] w-[310px] overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 shadow-2xl backdrop-blur-xl sm:h-[520px] sm:w-[390px]">
          <Image
            src="/images/about.png"
            alt="Piky Paelani"
            fill
            priority
            sizes="(max-width: 640px) 310px, 390px"
            className="object-cover"
          />
        </div>

      </div>
    </motion.div>
  );
}