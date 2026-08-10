import { ARCHITECTURE_LAYERS, ARCHITECTURE_PRINCIPLES } from '../data/content'

const layerIcons = {
  user: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  frontend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
    </svg>
  ),
  api: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 6h16M4 12h10M4 18h16" />
      <circle cx="19" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  logic: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="9" y="14" width="6" height="6" rx="1" />
      <path d="M7 10v2a2 2 0 002 2h6M17 10v2a2 2 0 01-2 2h-2" />
    </svg>
  ),
  database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
}

export default function SystemFlowDiagram() {
  return (
    <div className="system-flow">
      <div className="system-flow__diagram" aria-label="Software system architecture flow">
        {ARCHITECTURE_LAYERS.map((layer, index) => (
          <div key={layer.label} className="system-flow__layer">
            <div className="system-flow__node">
              <span className="system-flow__icon">{layerIcons[layer.icon]}</span>
              <span className="system-flow__label">{layer.label}</span>
            </div>
            {index < ARCHITECTURE_LAYERS.length - 1 && (
              <div className="system-flow__connector" aria-hidden="true">
                <span className="system-flow__arrow" />
              </div>
            )}
          </div>
        ))}
      </div>

      <ul className="system-flow__principles">
        {ARCHITECTURE_PRINCIPLES.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ul>
    </div>
  )
}
