'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Footer() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('active')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={ref} className="site-footer filter-reveal">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="A.T. Logo" className="logo-img" />
          </div>
          <p className="footer-desc">
            Yaratıcı çözümlerle dijital dünyada iz bırakın.
          </p>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-nav-title">Hızlı Bağlantılar</h4>
          <ul className="footer-nav">
            <li><a href="#home">Ana Sayfa</a></li>
            <li><a href="#about">Hakkımda</a></li>
            <li><a href="#experience">Deneyim</a></li>
            <li><a href="#skills">Yetenekler</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4 className="footer-nav-title">Beni Takip Edin</h4>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/ahmet-taylan-78725a3b0/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/ahmettaylan0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://x.com/ahmet_taylan1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a
              href="https://instagram.com/ahmet_taylannnn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © 2026 Ahmet Taylan. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
