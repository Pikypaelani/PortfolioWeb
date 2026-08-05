"use client";

import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function Projects() {
  return (
    // Tag section sebagai pembungkus utama dengan ID 'projects' untuk navigasi navbar
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Kontainer tengah agar tampilan sejajar dan responsif di semua ukuran layar */}
      <div className="container-custom">
        {/* 1. Komponen Judul dan Subdeskripsi Bagian Proyek */}
        <ProjectHeader />

        {/* 2. Komponen Filter Kategori, Grid 4 Kolom, Card, dan Modal Detail */}
        <ProjectGrid />
      </div>
    </section>
  );
}