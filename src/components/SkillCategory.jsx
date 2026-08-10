export default function SkillCategory({ title, skills }) {
  return (
    <article className="skill-category">
      <h3 className="skill-category__title">{title}</h3>
      <ul className="skill-category__list">
        {skills.map((skill) => (
          <li key={skill}>
            <span className="skill-tag">{skill}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
