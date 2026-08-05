"use client";

import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[150px]" />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-[1.2fr_0.8fr]">

        <HeroContent />

        <HeroImage />

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-sm text-slate-500">
          Scroll Down ↓
        </span>
      </div>
    </section>
  );
}