import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Members', href: '#members' },
  { label: 'Partnership', href: '#partnership' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>
          <span className={styles.logoText}>BKRM</span>

          <ul className={styles.links}>
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className={styles.link} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className={styles.right}>
            <a href="https://form.typeform.com/to/VsSeEVzN" target="_blank" rel="noopener noreferrer" className={styles.btn}>Request Access</a>
            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => { handleNavClick(e, link.href); setMenuOpen(false) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://form.typeform.com/to/VsSeEVzN" target="_blank" rel="noopener noreferrer" className={styles.mobileBtn} onClick={() => setMenuOpen(false)}>
          Request Access
        </a>
      </div>
    </>
  )
}
