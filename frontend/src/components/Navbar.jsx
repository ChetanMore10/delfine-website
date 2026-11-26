import { useState } from 'react'
import Brand from './Brand.jsx'
import Icon from './Icon.jsx'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Industries', '#industries'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Delfine India Technology home" onClick={closeMenu}>
          <Brand />
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <Icon name={menuOpen ? 'arrow' : 'menu'} size={23} />
        </button>
        <div className={`nav-content${menuOpen ? ' is-open' : ''}`}>
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a href={href} key={label} onClick={closeMenu}>{label}</a>
            ))}
          </div>
          <a className="button button-primary nav-cta" href="#contact" onClick={closeMenu}>
            Get in Touch <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar