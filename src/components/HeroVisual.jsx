export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__grid" />
      <div className="hero-visual__panel">
        <div className="hero-visual__panel-header">
          <span className="hero-visual__dot hero-visual__dot--red" />
          <span className="hero-visual__dot hero-visual__dot--yellow" />
          <span className="hero-visual__dot hero-visual__dot--green" />
          <span className="hero-visual__panel-title">system.config</span>
        </div>
        <pre className="hero-visual__code">
          <code>
            <span className="code-keyword">const</span> stack = {'{'}
            {'\n'}  frontend: <span className="code-string">'React'</span>,
            {'\n'}  backend: <span className="code-string">'API Layer'</span>,
            {'\n'}  data: <span className="code-string">'Database'</span>,
            {'\n'}  focus: [
            {'\n'}    <span className="code-string">'scalability'</span>,
            {'\n'}    <span className="code-string">'security'</span>,
            {'\n'}    <span className="code-string">'reliability'</span>
            {'\n'}  ]
            {'\n'}{'}'};
          </code>
        </pre>
      </div>
      <div className="hero-visual__nodes">
        <div className="hero-visual__node">
          <span className="hero-visual__node-label">API</span>
        </div>
        <div className="hero-visual__node hero-visual__node--accent">
          <span className="hero-visual__node-label">Logic</span>
        </div>
        <div className="hero-visual__node">
          <span className="hero-visual__node-label">Data</span>
        </div>
      </div>
    </div>
  )
}
