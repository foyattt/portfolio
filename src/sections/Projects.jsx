import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="Applications and concepts that reflect how I think about software design and implementation."
        />

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
