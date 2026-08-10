export default function SectionHeading({ label, title, description }) {
  return (
    <header className="section-heading">
      {label && <span className="section-heading__label">{label}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  )
}
