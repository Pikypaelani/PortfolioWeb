"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react"; // 👈 Dihapus import Github-nya

export interface ProjectData {
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription?: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  project: ProjectData | null;
  onClose: () => void;
}

// 🛡️ Komponen Ikon GitHub (Pengganti ikon lucide-react yang hilang)
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProjectModal({
  isOpen,
  project,
  onClose,
}: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      >
        {/* Kontainer Jendela Mengambang */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 select-none"
        >
          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition"
          >
            <X size={18} />
          </button>

          {/* Gambar Pratinjau Modal (Dengan Proteksi Anti-Download) */}
          <div
            onContextMenu={(e) => e.preventDefault()}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
          >
            {/* Pelapis Transparan Anti-Download */}
            <div className="absolute inset-0 z-10 bg-transparent" />

            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              priority
            />
          </div>

          {/* Informasi Detail Project */}
          <div className="mt-5">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              {project.category}
            </span>

            <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
              {project.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.fullDescription || project.description}
            </p>

            {/* List Tech Stack */}
            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Tech Stack
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Tautan Live Demo / GitHub */}
            <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-blue-500 transition active:scale-95"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition active:scale-95"
                >
                  {/* 👈 Menggunakan Ikon GitHub Custom */}
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}