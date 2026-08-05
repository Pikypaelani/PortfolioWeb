"use client";

import { IconType } from "react-icons";
import SkillBar from "./SkillBar";

interface SkillItem {
  name: string;
  icon: IconType;
  color?: string;
}

interface Props {
  title: string;
  skills: SkillItem[];
}

export default function SkillCategory({ title, skills }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/50 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
      {/* Judul Kategori */}
      <h3 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
        {title}
      </h3>

      {/* Kontainer Kapsul Menyamping (Flex Wrap) */}
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
}