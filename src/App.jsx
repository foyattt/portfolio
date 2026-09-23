import { useState } from 'react'
import { SITE, PROJECTS } from './data/content'

// Fallback / Enhanced Project Data with graceful descriptions
const ENHANCED_PROJECTS = PROJECTS?.map(p => ({
  ...p,
  description: p.description || "An enterprise-grade solution designed with focus on high availability, robust architecture, and seamless user interaction.",
  tags: p.tags || ["React", "AI Integration", "API Architecture"]
})) || [
  {
    id: 1,
    title: "Sinotruk Spare Parts E-Commerce Platform",
    url: "#",
    description: "A high-performance digital catalog and ordering portal optimized for heavy-duty vehicle components, featuring real-time inventory query and reactive UI filtering.",
    tags: ["React", "Tailwind CSS", "REST API", "Database Admin"]
  },
  {
    id: 2,
    title: "Enterprise Network Topology & Config",
    url: "#",
    description: "Multi-tier network infrastructure architecture simulated in GNS3, incorporating VLAN segmenting, dynamic routing protocols, and hardened security parameters.",
    tags: ["GNS3", "Enterprise Networking", "VLANs", "Routing Protocols"]
  },
  {
    id: 3,
    title: "Digital Dynamic QR Menu System",
    url: "#",
    description: "Scalable SaaS engine enabling hospitality businesses to publish, update, and manage cloud-hosted dynamic QR digital menus with zero latency.",
    tags: ["Next.js", "AI Automation", "Cloud Hosting", "RAG"]
  }
]

const SKILL_CATEGORIES = [
  {
    title: "AI & ML Engineering",
    skills: ["RAG Architecture", "LLM Integration", "Vector Databases", "Prompt Engineering", "PyTorch / ML Pipelines", "Model Fine-Tuning"]
  },
  {
    title: "Backend Frameworks & Systems",
    
    skills: ["Node.js / Express", "Python (FastAPI & Django)", "Database Admin (Oracle, PostgreSQL)", "RESTful & GraphQL APIs", "Microservices Design"]
  },
  {
    title: "Web & Frontend Engineering",
  
    skills: ["React.js & Next.js", "TypeScript", "Tailwind CSS & Modern UI", "State Management (Redux/Zustand)", "Responsive Web Design"]
  }
]

export default function App() {
  const [copiedField, setCopiedField] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  const phoneNum = SITE?.phone || "+251962207869"
  const emailAddr = SITE?.email || "foyatgetachewdendir@gmail.com"

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#090a0f',
      color: '#e4e4e7',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      padding: '48px 24px',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      {/* Background Ambient Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '-5%',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(234, 179, 8, 0.07) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        borderRadius: '50%'
      }} />

      {/* Top Left Frame Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '80px',
        height: '80px',
        borderTop: '2px solid #eab308',
        borderLeft: '2px solid #eab308',
        pointerEvents: 'none'
      }} />

      {/* Container */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        
        {/* Navigation / Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: '800',
              letterSpacing: '2px',
              color: '#ffffff',
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
              padding: '6px 14px',
              borderRadius: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}>
              FG
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              color: '#a1a1aa',
              backgroundColor: 'rgba(24, 24, 27, 0.7)',
              border: '1px solid rgba(39, 39, 42, 0.8)',
              padding: '5px 12px',
              borderRadius: '20px',
              backdropFilter: 'blur(8px)'
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 10px #22c55e'
              }} />
              Available for Hire & Projects
            </div>
          </div>

          <a href="#contact" style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#090a0f',
            backgroundColor: '#eab308',
            padding: '8px 18px',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0 0 15px rgba(234, 179, 8, 0.3)'
          }}>
            Contact Me
          </a>
        </header>

        {/* Hero Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', color: '#eab308', fontWeight: '700' }}>
            Full-Stack & AI Systems Architect
          </span>
          <h1 style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: '300',
            letterSpacing: '-1.5px',
            color: '#ffffff',
            margin: 0,
            lineHeight: '1.08'
          }}>
            Engineering <span style={{ fontWeight: '700', color: '#eab308' }}>intelligent</span> solutions & robust backends.
          </h1>

          <div style={{
            position: 'relative',
            paddingLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#a1a1aa',
            maxWidth: '720px'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #eab308, rgba(234, 179, 8, 0.1))'
            }} />
            <p style={{ margin: 0 }}>{SITE?.bio1 || "Specializing in enterprise systems design, cloud database administration, and end-to-end web applications."}</p>
            <p style={{ margin: 0 }}>{SITE?.bio2 || "Focused on integrating Retrieval-Augmented Generation (RAG), automated workflows, and high-performance server architectures."}</p>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#eab308', fontWeight: 'bold' }}>///</span>
            <h2 style={{ fontSize: '22px', fontWeight: '500', color: '#ffffff', margin: 0 }}>Technical Capabilities</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(18, 18, 22, 0.6)',
                border: '1px solid rgba(39, 39, 42, 0.8)',
                borderRadius: '12px',
                padding: '24px',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '20px' }}>{cat.icon}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#f4f4f5', margin: 0 }}>{cat.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((skill, i) => (
                    <span key={i} style={{
                      fontSize: '12px',
                      color: '#d4d4d8',
                      backgroundColor: 'rgba(39, 39, 42, 0.6)',
                      border: '1px solid rgba(63, 63, 70, 0.5)',
                      padding: '5px 12px',
                      borderRadius: '6px'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#eab308', fontWeight: 'bold' }}>///</span>
              <h2 style={{ fontSize: '22px', fontWeight: '500', color: '#ffffff', margin: 0 }}>Selected Work & Systems</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {ENHANCED_PROJECTS.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  backgroundColor: hoveredProject === project.id ? 'rgba(24, 24, 30, 0.9)' : 'rgba(18, 18, 22, 0.6)',
                  border: '1px solid',
                  borderColor: hoveredProject === project.id ? 'rgba(234, 179, 8, 0.5)' : 'rgba(39, 39, 42, 0.8)',
                  borderRadius: '12px',
                  padding: '28px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredProject === project.id ? 'translateY(-2px)' : 'none',
                  boxShadow: hoveredProject === project.id ? '0 12px 30px rgba(0, 0, 0, 0.5)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyBetween: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', margin: 0, flex: 1 }}>
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: hoveredProject === project.id ? '#eab308' : '#a1a1aa',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    View Project
                    <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: '1.6', margin: 0 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      fontSize: '11px',
                      color: '#eab308',
                      backgroundColor: 'rgba(234, 179, 8, 0.08)',
                      border: '1px solid rgba(234, 179, 8, 0.2)',
                      padding: '3px 10px',
                      borderRadius: '4px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" style={{
          backgroundColor: 'rgba(24, 24, 28, 0.8)',
          border: '1px solid rgba(234, 179, 8, 0.4)',
          borderRadius: '16px',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#eab308', fontWeight: '700' }}>
                Get In Touch
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#ffffff', margin: '6px 0 0 0' }}>
                Let's Build Something Powerful.
              </h2>
            </div>

            <p style={{ fontSize: '15px', color: '#a1a1aa', margin: 0, maxWidth: '600px', lineHeight: '1.6' }}>
              Whether you need backend API design, custom AI integration, database architecture, or full-stack web solutions, feel free to reach out directly.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
              paddingTop: '8px'
            }}>
              {/* Phone Card */}
              <div style={{
                backgroundColor: 'rgba(12, 12, 15, 0.7)',
                border: '1px solid rgba(39, 39, 42, 0.8)',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Direct Phone Call
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a href={`tel:${phoneNum}`} style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', textDecoration: 'none' }}>
                    {phoneNum}
                  </a>
                  <button
                    onClick={() => copyToClipboard(phoneNum, 'phone')}
                    style={{
                      backgroundColor: 'rgba(39, 39, 42, 0.8)',
                      border: 'none',
                      color: copiedField === 'phone' ? '#22c55e' : '#a1a1aa',
                      fontSize: '11px',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {copiedField === 'phone' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div style={{
                backgroundColor: 'rgba(12, 12, 15, 0.7)',
                border: '1px solid rgba(39, 39, 42, 0.8)',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Email Address
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a href={`mailto:${emailAddr}`} style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff', textDecoration: 'none' }}>
                    {emailAddr}
                  </a>
                  <button
                    onClick={() => copyToClipboard(emailAddr, 'email')}
                    style={{
                      backgroundColor: 'rgba(39, 39, 42, 0.8)',
                      border: 'none',
                      color: copiedField === 'email' ? '#22c55e' : '#a1a1aa',
                      fontSize: '11px',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {copiedField === 'email' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#52525b',
          paddingTop: '20px',
          borderTop: '1px solid rgba(39, 39, 42, 0.5)'
        }}>
          <p style={{ margin: 0 }}>©{new Date().getFullYear()} {SITE?.name || "Portfolio"}. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href={SITE?.github || "#"} target="_blank" rel="noopener noreferrer" style={{ color: '#71717a', textDecoration: 'none' }}>GitHub</a>
            <a href={SITE?.linkedin || "#"} target="_blank" rel="noopener noreferrer" style={{ color: '#71717a', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </footer>

      </div>

      {/* Bottom Right Frame Accent */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '80px',
        height: '80px',
        borderBottom: '2px solid #eab308',
        borderRight: '2px solid #eab308',
        pointerEvents: 'none'
      }} />
    </div>
  )
}