"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillBarProps {
  name: string;
  icon: IconType;
  color?: string;
}

export default function SkillBar({ name, icon: Icon, color = "text-blue-500" }: SkillBarProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 rounded-full border border-blue-200/60 bg-blue-50/40 px-5 py-2.5 shadow-sm transition-all duration-300 hover:border-blue-400 hover:bg-white hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/60 dark:hover:border-blue-500 dark:hover:bg-slate-800"
    >
      {/* Ikon Teknologi */}
      <Icon className={`text-xl ${color}`} />

      {/* Nama Keahlian */}
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {name}
      </span>
    </motion.div>
  );
}