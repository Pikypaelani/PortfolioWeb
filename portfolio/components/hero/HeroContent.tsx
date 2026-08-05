"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaChevronDown } from "react-icons/fa";

import Button from "@/components/ui/Button";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";
import HeroTech from "./HeroTech";

export default function HeroContent() {
  // State untuk menyimpan status terbuka/tertutupnya menu dropdown CV
  const [isCvOpen, setIsCvOpen] = useState(false);
  
  // Ref untuk mendeteksi area klik di luar menu dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Efek untuk menutup dropdown secara otomatis saat pengguna mengklik area luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCvOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge Status */}
      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100/70 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
        👋 Available for Internship & Full-Time
      </span>

      {/* Judul Utama (Diperbaiki agar judul utama berwarna putih bersih di dark mode) */}
      <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
          Piky Paelani
        </span>
      </h1>

      {/* Animasi Ketik (Diperbaiki agar warna biru lebih cerah di dark mode) */}
      <div className="mt-6 text-2xl font-semibold text-blue-600 dark:text-blue-400">
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "Digital Marketing",
            2000,
            "AI Enthusiast",
            2000,
            "IT Support",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Deskripsi Singkat (Ditingkatkan kontras kodenya agar sangat jelas di Dark Mode) */}
      <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-100">
        Fresh GraduateTeknik Informatika 
        dengan pengalaman praktis dalam pengembangan aplikasi, jaringan dan web. 
        Saya senang membangun solusi digital yang responsif, scalable, 
        dan ramah pengguna, sembari terus mempelajari teknologi modern 
      </p>

      {/* Area Tombol (Download CV Dropdown & View Projects) */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        
        {/* CONTAINER DROPDOWN CV */}
        <div className="relative" ref={dropdownRef}>
          {/* Tombol Utama Download CV */}
          <div onClick={() => setIsCvOpen(!isCvOpen)} className="inline-block cursor-pointer">
            <Button className="flex items-center gap-2">
              <FaDownload size={14} />
              <span>Download CV</span>
              <FaChevronDown
                size={12}
                className={`transition-transform duration-300 ${
                  isCvOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>

          {/* MENU POPUP PILIHAN CV */}
          {isCvOpen && (
            <div className="absolute left-0 mt-2 w-56 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/95 z-50">
              
              {/* Opsi 1: Versi Bahasa Indonesia */}
              <a
                href="/cv/Cv-Indo-Fiky.pdf"
                download="CV-Piky-Paelani-ID.pdf"
                onClick={() => setIsCvOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                <span className="text-lg">🇮🇩</span>
                <div className="flex flex-col">
                  <span className="font-semibold">Versi Indonesia</span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-400">PDF Format</span>
                </div>
              </a>

              {/* Opsi 2: English Version */}
              <a
                href="/cv/Cv-English-Fiky.pdf"
                download="CV-Piky-Paelani-EN.pdf"
                onClick={() => setIsCvOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                <span className="text-lg">🇬🇧</span>
                <div className="flex flex-col">
                  <span className="font-semibold">English Version</span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-400">PDF Format</span>
                </div>
              </a>

            </div>
          )}
        </div>

        {/* Tombol View Projects */}
        <a href="#projects">
          <Button variant="secondary">
            View Projects
          </Button>
        </a>
      </div>

      {/* Komponen Sosial Media */}
      <HeroSocial />

      {/* Komponen Tech Stack */}
      <HeroTech />

      {/* Komponen Statistik */}
      <HeroStats />
    </motion.div>
  );
}