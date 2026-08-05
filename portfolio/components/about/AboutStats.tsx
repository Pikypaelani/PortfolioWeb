"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "2+",
    title: "Experience",
  },
  {
    number: "3+",
    title: "Projects",
  },
  {
    number: "10+",
    title: "Certificates",
  },
  {
    number: "2026",
    title: "Graduate",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          className="glass hover-up rounded-3xl p-7"
        >
          <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
            {item.number}
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}