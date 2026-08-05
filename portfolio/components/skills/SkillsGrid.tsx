"use client";

import SkillCategory from "./SkillCategory";

// 1. IMPORT IKON UTAMA (Simple Icons)
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiPython,
  SiFigma,
  SiVercel, // 👈 Import ikon Vercel dari Simple Icons
} from "react-icons/si";

// 2. IMPORT IKON PELENGKAP (Canva, VS Code, Excel, Digital Marketing, Ads, & SEO)
import { TbPalette } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { FaFileExcel, FaBullhorn, FaChartLine, FaSearchengin } from "react-icons/fa6";

// 3. DATA KEAHLIAN TERBARU (6 KATEGORI)
const data = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
    ],
  },
  {
    title: "UI / UX Design",
    skills: [
      { name: "Figma", icon: SiFigma, color: "text-purple-500" },
      { name: "Canva", icon: TbPalette, color: "text-cyan-500" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
      { name: "Microsoft Excel", icon: FaFileExcel, color: "text-green-600" },
      { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" }, // 👈 Item Vercel ditambahkan di sini
    ],
  },
  {
    title: "Digital Marketing",
    skills: [
      { name: "Digital Marketing", icon: FaBullhorn, color: "text-pink-500" },
      { name: "Meta & Google Ads", icon: FaChartLine, color: "text-amber-500" },
      { name: "SEO", icon: FaSearchengin, color: "text-emerald-500" },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {data.map((category) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
}