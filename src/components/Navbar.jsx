import { useEffect, useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} style={{ zIndex: 100, position: 'relative' }}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        <a href="#home" className="navbar__logo" onClick={handleNavClick}>
          <span className="navbar__logo-mark" aria-hidden="true" />
          <span>Foyat Getachew</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

      <ul id="nav-menu" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
  {/* Hardcoded Inline Test Link */}
  <li>
    <a 
      href="#tech-capabilities" 
      onClick={handleNavClick}
      style={{
        color: '#ffffff',
        backgroundColor: '#2563eb',
        padding: '8px 16px',
        borderRadius: '6px',
        fontWeight: 'bold',
        display: 'inline-block'
      }}
    >
      About Me
    </a>
  </li>

  <li>
    <a 
      href="#contact" 
      onClick={handleNavClick}
      className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-md inline-block"
    >
      Contact Me
    </a>
  </li>
</ul>
      </nav>
    </header>
  )
}
