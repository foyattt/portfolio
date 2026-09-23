import Button from '../components/Button'
import HeroVisual from '../components/HeroVisual'
import { SITE } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{SITE.title}</p>
          <h1 className="hero__title">{SITE.tagline}</h1>
          <p className="hero__headline">{SITE.headline}</p>
          <p className="hero__description">
            I work across backend development, system design, software architecture and
            intelligent software solutions and building software that is structured to solve real problems.
          </p>
         <div className="hero__actions">
  <Button href="#contact" variant="primary">
    Get In Touch
  </Button>
 
</div>
</div>
<HeroVisual />
</div>
    </section>
  )
}
