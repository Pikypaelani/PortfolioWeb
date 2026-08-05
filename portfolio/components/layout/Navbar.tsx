"use client";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-slate-950/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <DesktopMenu />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}