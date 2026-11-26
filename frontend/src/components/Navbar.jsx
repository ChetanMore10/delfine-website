import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Brand from './Brand.jsx'
import Icon from './Icon.jsx'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Delfine India Technology home" onClick={closeMenu}>
          <Brand />
        </Link>
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
              <NavLink end={href === '/'} to={href} key={label} onClick={closeMenu}>{label}</NavLink>
            ))}
          </div>
          <Link className="button button-primary nav-cta" to="/contact" onClick={closeMenu}>
            Get in Touch <Icon name="arrowUpRight" size={16} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar