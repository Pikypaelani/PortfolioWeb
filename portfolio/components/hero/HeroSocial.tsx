"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";

export default function HeroSocial() {
  return (
    <div className="mt-8 flex items-center gap-4">

      {/* TAUTAN GITHUB */}
      <a
        href="https://github.com/Pikypaelani"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:border-slate-700"
      >
        <FaGithub size={20} />
      </a>

      {/* TAUTAN LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/piky-paelani/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:border-slate-700"
      >
        <FaLinkedin size={20} />
      </a>

      {/* TAUTAN TIKTOK (BARU) */}
      <a
        href="https://www.tiktok.com/@piky_paelani" // ⚠️ GANTI dengan URL profil TikTok milikmu
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:border-slate-700"
      >
        <FaTiktok size={20} />
      </a>

      {/* TAUTAN EMAIL */}
      <a
        href="mailto:pikypaelani.dev@gmail.com"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:border-slate-700"
      >
        <FaEnvelope size={20} />
      </a>

    </div>
  );
}