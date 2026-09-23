import SectionHeading from '../components/SectionHeading'
import SystemFlowDiagram from '../components/SystemFlowDiagram'

export default function Architecture() {
  return (
    <section id="architecture" className="architecture section">
      <div className="container">
        <SectionHeading
          label="Engineering"
          title="How I think about systems"
          description="Software is more than individual components — it is how those components connect, communicate, and hold up over time."
        />

        <div className="architecture__content">
          <SystemFlowDiagram />

          <div className="architecture__text">
            <p>
              When I design software, I start by mapping the flow of data and responsibility across
              the system. Each layer has a clear purpose: the frontend handles interaction, the API
              defines boundaries, business logic enforces rules, and the data layer persists state.
            </p>
            <p>
              Good architecture means considering scalability before it becomes urgent, building in
              security from the start, keeping concerns separated so systems stay maintainable, and
              designing for reliability so software continues to work when conditions change.
            </p>
            <p className="architecture__note">
              This is how I approach both personal projects and professional work thinking about
              the whole system, not just the part in front of me.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
