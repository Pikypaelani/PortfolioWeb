"use client";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ["All", "Web", "Mobile"];

export default function ProjectFilter({
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2.5">
      {filters.map((item) => {
        const isActive = activeFilter === item;

        return (
          <button
            key={item}
            onClick={() => onFilterChange(item)}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                : "border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}