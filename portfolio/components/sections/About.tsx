import AboutContent from "@/components/about/AboutContent";
import AboutStats from "@/components/about/AboutStats";
import AboutInfo from "@/components/about/AboutInfo";
import AboutCards from "@/components/about/AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background Blur */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="container-custom relative">

        {/* Top */}
        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div>
            <AboutContent />
            <AboutStats />
          </div>

          <AboutInfo />

        </div>

        {/* Bottom */}
        <div className="mt-24">

          <AboutCards />

        </div>

      </div>
    </section>
  );
}