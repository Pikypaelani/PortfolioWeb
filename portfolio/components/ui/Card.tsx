import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl 
        border border-slate-200/80 
        bg-white 
        p-6 
        shadow-sm 
        transition-all 
        duration-300
        dark:border-slate-800 
        dark:bg-slate-900 
        ${hoverEffect ? "hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}