import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import Resume from '../../assets/Bansi S Sinojia - Resume.pdf'

export function Header() {
  const [isActive, setActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container scrolled={scrolled} className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          {'<Bansi Sinojia />'}
        </HashLink>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>About</NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>Projects</NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact</NavHashLink>
          <a href={Resume} download className="button">Resume</a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => setActive(!isActive)}
        />
      </Router>
    </Container>
  )
}
