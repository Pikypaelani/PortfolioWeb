import { ButtonHTMLAttributes, ReactNode } from "react";

// Menggabungkan props buatan sendiri dengan atribut standar tombol HTML
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props // Menangkap props lain seperti onClick, type, disabled, dll.
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-95"
      : "border border-slate-300 hover:bg-slate-100 text-slate-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 active:scale-95";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}