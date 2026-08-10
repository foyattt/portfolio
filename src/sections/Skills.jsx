import SectionHeading from '../components/SectionHeading'
import SkillCategory from '../components/SkillCategory'
import { SKILL_CATEGORIES } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Technical capabilities"
          description="Organized by domain — focused on what I work with and continue to develop."
        />

        <div className="skills__grid">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategory key={category.title} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}
