import SkillsHeader from "@/components/skills/SkillsHeader";
import SkillsGrid from "@/components/skills/SkillsGrid";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
    >
      <div className="container-custom">

        <SkillsHeader />

        <SkillsGrid />

      </div>
    </section>
  );
}