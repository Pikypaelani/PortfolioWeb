"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-blue-500/30 blur-3xl" />

        {/* Main Card */}
        <div className="relative h-[520px] w-[390px] overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 shadow-2xl backdrop-blur-xl">

          {/* FOTO PROFIL */}
          <Image
            src="/images/profile.png"
            alt="Piky Paelani"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 390px"
            className="object-cover"
          />

        </div>

        {/* Floating Card 1 */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute -left-12 top-10 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur dark:bg-slate-900/90"
        >
          <h3 className="text-2xl font-bold text-blue-600">
            2+
          </h3>

          <p className="text-sm text-slate-500">
            Internship
          </p>
        </motion.div>

        {/* Floating Card 2 */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute -right-10 bottom-20 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur dark:bg-slate-900/90"
        >
          <h3 className="text-2xl font-bold text-blue-600">
           3+
          </h3>

          <p className="text-sm text-slate-500">
            Projects
          </p>
        </motion.div>

        {/* Floating Card 3 */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-20 -bottom-8 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur dark:bg-slate-900/90"
        >
          <h3 className="text-2xl font-bold text-blue-600">
            10+
          </h3>

          <p className="text-sm text-slate-500">
            Certificates
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}