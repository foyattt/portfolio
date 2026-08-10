import SectionHeading from '../components/SectionHeading'
import { EXPERIENCE, PROJECT_EXPERIENCE } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <SectionHeading
          label="Experience"
          title="Professional & technical experience"
          description="Real-world exposure combined with hands-on project work."
        />

        <div className="experience__block">
          <h3 className="experience__subtitle">Professional Experience</h3>
          <div className="experience__list">
            {EXPERIENCE.map((item) => (
              <article key={item.organization} className="experience-card">
                <div className="experience-card__header">
                  <h4 className="experience-card__role">{item.role}</h4>
                  <span className="experience-card__org">{item.organization}</span>
                </div>
                <p className="experience-card__description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__block">
          <h3 className="experience__subtitle">Selected Technical Experience</h3>
          <div className="experience__list">
            {PROJECT_EXPERIENCE.map((item) => (
              <article key={item.title} className="experience-card">
                <div className="experience-card__header">
                  <h4 className="experience-card__role">{item.title}</h4>
                </div>
                <p className="experience-card__description">{item.description}</p>
                <p className="experience-card__focus">
                  <span>Focus:</span> {item.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
