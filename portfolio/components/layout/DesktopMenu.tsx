"use client";

// Array daftar menu navigasi komputer/desktop (Urutan disesuaikan)
const menus = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function DesktopMenu() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {menus.map((menu) => (
        <a
          key={menu.name}
          href={menu.href}
          className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400"
        >
          {menu.name}
        </a>
      ))}
    </nav>
  );
}