"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectModal, { ProjectData } from "./ProjectModal";

const projects: ProjectData[] = [
  {
    title: "Web Attendance System",
    category: "Web",
    image: "/projects/Absensi.png",
    description:
      "QR Code-based employee attendance system built using TypeScript, CSS, JavaScript, and MongoDB",
    fullDescription:
      "Sistem absensi berbasis web dengan pemindaian QR Code secara real-time. Memudahkan pencatatan kehadiran karyawan secara cepat dan terintegrasi langsung dengan database MongoDB.",
    stack: ["TypeScript", "CSS", "JavaScript" , "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Pikypaelani/AbsensiQR_Intern/tree/main/absensiQR",
  },
  {
    title: "Expert System Asthma",
    category: "Web",
    image: "/projects/Asma.png",
    description:
      "Web-based expert system for asthma diagnosis using the Certainty Factor method.",
    fullDescription:
      "Aplikasi sistem pakar untuk membantu mendiagnosis tingkat keparahan penyakit asma berdasarkan gejala yang dirasakan pengguna dengan mengimplementasikan metode Certainty Factor (CF)",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/Pikypaelani/SistemPakarAsma",
  },
  {
    title: "Book Collection App",
    category: "Mobile",
    image: "/projects/Buku.jpg",
    description: "CRUD mobile application built using TypeScript, Kotlin, and Objective-C.",
    fullDescription: "Aplikasi katalog buku mobile yang memungkinkan pengguna mencatat, memperbarui, dan mengorganisasi koleksi buku pribadi dengan antarmuka yang ramah pengguna.",
    stack: ["TypeScript", "Kotlin", "Objective-C", "Ruby", "JavaScript", "Objective-C++"],
    githubUrl: "https://github.com/Pikypaelani/UAS_PPM_BukuKoleksi",
  },
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleOpenModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      {/* Tombol Filter Kategori */}
      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Grid 4 Kolom di Desktop (lg:grid-cols-4) */}
      <motion.div
        layout
        className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                {...project}
                onView={() => handleOpenModal(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Jendela Mengambang (Modal Project Detail) */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}