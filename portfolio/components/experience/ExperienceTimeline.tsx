"use client";

import ExperienceCard from "./ExperienceCard";
import { Briefcase } from "lucide-react";

// Array data pengalaman magang resmi (Hanya 2 magang)
const experiences = [
  {
    year: "Februari - Mei 2025",
    company: "PT PLN Indonesia Power UBP Jabar 2",
    position: "Staf SDM Intern",
    description:
      "Digitized employee records, managed HR documentation, and supported administrative information systems.",
  },
  {
    year: "Juli - September 2024",
    company: "Bappelitbangda Kabupaten Sukabumi",
    position: "IT Support Intern",
    description:
      "Provided technical support, managed data processing, and assisted in maintaining internal information systems.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Garis Vertikal Linimasa Bergradien */}
      <div className="absolute left-4 top-3 h-[calc(100%-24px)] w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-blue-400/40 to-transparent dark:from-blue-400 dark:via-blue-500/20" />

      {/* Daftar Kartu Pengalaman */}
      <div className="space-y-8">
        {experiences.map((item) => (
          <div key={item.company} className="relative pl-12 md:pl-14">
            {/* Titik Indikator Lingkaran dengan Ikon */}
            <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-600 shadow-md shadow-blue-500/20 dark:border-blue-400 dark:bg-slate-900 dark:text-blue-400">
              <Briefcase size={14} />
            </div>

            <ExperienceCard
              year={item.year}
              company={item.company}
              position={item.position}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}