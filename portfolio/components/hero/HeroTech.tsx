"use client";

// Mengimpor ikon-ikon resmi dari react-icons/si
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

// Array data teknologi
const techStack = [
  // Web Foundations
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },

  // Frontend & Frameworks
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },

  // Backend
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },

  // Databases
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
];

export default function HeroTech() {
  return (
    <div className="mt-12 flex flex-wrap gap-3">
      {techStack.map((tech) => {
        // Menyimpan komponen ikon ke variabel dengan huruf kapital agar dapat dirender oleh React
        const IconComponent = tech.icon;

        return (
          <span
            key={tech.name}
            className="group inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200 dark:hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white"
          >
            {/* Logo / Ikon Teknologi (Memberikan sentuhan warna biru menarik) */}
            <IconComponent className="text-base text-blue-600 transition-colors duration-300 group-hover:text-white dark:text-blue-400 dark:group-hover:text-white" />

            {/* Nama Teknologi */}
            <span>{tech.name}</span>
          </span>
        );
      })}
    </div>
  );
}