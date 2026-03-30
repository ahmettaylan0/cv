'use client'

import { useState, useEffect, useCallback } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('creative-theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('creative-theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }, [theme])

  const closeMenu = useCallback(() => {
    setMobileOpen(false)
  }, [])

  const navStyle = scrolled
    ? {
        background:
          theme === 'light'
            ? 'rgba(255, 255, 255, 0.7)'
            : 'rgba(5, 5, 5, 0.7)',
        backdropFilter: 'blur(15px)',
      }
    : { background: 'transparent', backdropFilter: 'none' }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''} style={navStyle}>
      <div className="nav-container glass">
        <div className="nav-left-group">
          <a href="#home" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="A.T. Logo" className="logo-img" />
          </a>
          <button
            id="theme-toggle"
            aria-label="Temayı Değiştir"
            onClick={toggleTheme}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
          </button>
        </div>

        <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Ana Sayfa</a></li>
          <li><a href="#about" onClick={closeMenu}>Hakkımda</a></li>
          <li><a href="#about" onClick={closeMenu}>Deneyim</a></li>
          <li><a href="#skills" onClick={closeMenu}>Yetenekler</a></li>
          <li><a href="#contact" className="btn-contact" onClick={closeMenu}>İletişim</a></li>
          <li><a href="/cv.pdf" download="Ahmet_Taylan_CV" onClick={closeMenu}>CV İndir</a></li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>
    </nav>
  )
}
