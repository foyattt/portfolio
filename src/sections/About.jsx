import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeading
          label="About"
          title="Engineering with purpose"
          description="Building software that works — not just software that looks good."
        />

        <div className="about__content">
          <div className="about__text">
            <p>
              My background is in Software Engineering, with a focus that extends well beyond
              frontend development. I am drawn to the parts of software that determine how systems
              behave under load, how data moves between components, and how applications remain
              secure and maintainable over time.
            </p>
            <p>
              I approach problems with a systems mindset — understanding requirements, designing
              structure, implementing solutions, and thinking about how software will evolve. Whether
              working on backend services, API design, database architecture, or AI/ML workflows, I
              aim to build practical software that solves real problems.
            </p>
          </div>

          <ul className="about__interests" aria-label="Areas of interest">
            <li>Backend systems</li>
            <li>Software architecture</li>
            <li>System design</li>
            <li>Databases</li>
            <li>APIs</li>
            <li>Cybersecurity</li>
            <li>AI / ML</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
