"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import { certificates } from "@/data/certificates";

// 1. DAFTAR URUTAN KATEGORI TETAP (Sesuai Permintaan)
const categories = ["Semua", "Internship", "Pelatihan", "Organisasi"];

export default function CertificateGrid() {
  // State untuk menyimpan kategori yang aktif (Default: "Semua")
  const [activeCategory, setActiveCategory] = useState("Semua");

  // State untuk menyimpan sertifikat yang dibuka di modal mengambang
  const [selectedCert, setSelectedCert] = useState<{
    image: string;
    title: string;
  } | null>(null);

  // 2. MENYARING DATA SERTIFIKAT BERDASARKAN KATEGORI YANG DIKLIK
  const filteredCertificates = certificates.filter((cert) => {
    if (activeCategory === "Semua") return true;
    return cert.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <>
      {/* TOMBOL FILTER KATEGORI (Urutan: Semua -> Internship -> Pelatihan -> Organisasi) */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* GRID KARTU SERTIFIKAT (4 KOLOM DENGAN ANIMASI SMOOTH) */}
      <motion.div
        layout
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <CertificateCard
                title={certificate.title}
                issuer={certificate.issuer}
                year={certificate.year}
                image={certificate.image}
                description={certificate.description}
                category={certificate.category}
                credential={certificate.credential}
                onView={() =>
                  setSelectedCert({
                    image: certificate.image,
                    title: certificate.title,
                  })
                }
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* JENDELA MENGAMBANG (MODAL POPUP) */}
      <CertificateModal
        isOpen={!!selectedCert}
        imageSrc={selectedCert?.image || ""}
        title={selectedCert?.title || ""}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}