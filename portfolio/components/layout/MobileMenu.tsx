"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Array daftar menu navigasi HP/mobile (Urutan disesuaikan)
const menus = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  // State untuk mengontrol apakah menu ponsel sedang terbuka (true) atau tertutup (false)
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk membuka/menutup menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Fungsi untuk menutup menu saat salah satu tautan diklik
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Tombol Ikon Hamburger / Silang */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="rounded-xl border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Panel Menu Meluncur untuk Ponsel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-20 w-full border-b border-slate-200 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95"
          >
            <nav className="flex flex-col gap-4">
              {menus.map((menu) => (
                <a
                  key={menu.name}
                  href={menu.href}
                  onClick={closeMenu}
                  className="text-base font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-cyan-400"
                >
                  {menu.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}