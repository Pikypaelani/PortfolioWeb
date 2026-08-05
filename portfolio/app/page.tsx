import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden pt-20">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Experience */}
        <Experience />

        {/* 4. Certificates (Sudah dipindah ke sini) */}
        <Certificates />

        {/* 5. Skills */}
        <Skills />

        {/* 6. Projects */}
        <Projects />

        {/* 7. Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}