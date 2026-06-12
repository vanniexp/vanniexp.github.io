import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',        label: 'Home' },
  { to: '/sobre',   label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <NavLink to="/" className="navbar__logo">
        Vânia<span className="navbar__logo-dot">.</span>
      </NavLink>

      <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <button
        className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </header>
  )
}
