

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-card__actions">
        
      </div>
    </article>
  )
}
