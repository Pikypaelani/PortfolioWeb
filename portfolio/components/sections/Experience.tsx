import ExperienceHeader from "@/components/experience/ExperienceHeader";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <div className="container-custom">

        <ExperienceHeader />

        <ExperienceTimeline />

      </div>
    </section>
  );
}