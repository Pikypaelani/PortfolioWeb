"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
}

export default function CertificateModal({
  isOpen,
  imageSrc,
  title,
  onClose,
}: CertificateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          {/* Kontainer Modal (Kembali Bersih Seperti Awal) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat area gambar diklik
            className="relative max-w-4xl overflow-hidden rounded-2xl bg-white p-2 dark:bg-slate-900"
          >
            {/* Tombol Tutup */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-slate-900/50 p-2 text-white hover:bg-slate-900 transition"
            >
              <X size={20} />
            </button>

            {/* Pratinjau Gambar (Polos Tanpa Pembatas/Latar Hitam) */}
            <div
              onContextMenu={(e) => e.preventDefault()}
              className="relative h-[70vh] w-[80vw] max-w-3xl select-none"
            >
              {/* Lapisan Transparan Anti-Download (Kasat Mata) */}
              <div className="absolute inset-0 z-10 bg-transparent" />

              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-contain select-none"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}