'use client'

import { useRef, useEffect } from 'react'

const education = [
  {
    date: '2025 - Günümüz',
    title: 'Bilgisayar Programcısı',
    subtitle: 'Kütahya Dumlupınar Üni.',
  },
  {
    date: '2020 - 2024',
    title: 'Lise Eğitimi',
    subtitle: 'Salihli Merkez Anadolu Lisesi',
  },
]

const experience = [
  {
    date: '2024 - 2025',
    title: 'Müşteri İlişkileri & Servis',
    subtitle: 'Park Vallis Restaurant',
  },
]

const skills = [
  { icon: 'fab fa-python', name: 'Python' },
  { icon: 'fab fa-html5', name: 'HTML5' },
  { icon: 'fas fa-cube', name: 'C#' },
  { icon: 'fas fa-database', name: 'SQL' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fas fa-network-wired', name: '.NET' },
]

export default function BentoGrid() {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.bento-item')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <h2 className="section-title">
          Benim <span className="text-accent">Dünyam</span>
        </h2>

        <div className="bento-grid" ref={gridRef}>
          {/* 1. About Me Card (Large) */}
          <div className="bento-item bento-about glass-card filter-reveal">
            <h3 className="bento-title">Ben Kimim?</h3>
            <p className="bento-text">
              Merhaba Ben Ahmet, <br></br>
              Sadece kod yazmakla kalmıyor, <strong>deneyimler inşa ediyorum.</strong>
              <br /><br />
              Bilgisayar programcılığı eğitimim boyunca öğrendiklerimi estetik ve performans ile harmanlıyorum. Hem görsel hem de işlevsel olarak fark yaratan uygulamalar geliştirmek benim tutkum.
            </p>
            <div className="bento-actions">
              <a href="/cv.pdf" className="btn btn-filled" download="Ahmet_Taylan_CV">
                <i className="fas fa-file-download" /> CV İndir
              </a>
            </div>
          </div>

          {/* 2. Experience & Education Card */}
          <div id="experience" className="bento-item bento-exp glass-card filter-reveal delay-1">
            <h3 className="bento-title">Eğitim & Deneyim</h3>
            <div className="bento-timeline">
              {[...education, ...experience].map((item, i) => (
                <div key={i} className="bento-timeline-item">
                  <div className="bento-dot" />
                  <div className="date">{item.date}</div>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Skills Grid */}
          <div id="skills" className="bento-item bento-skills glass-card filter-reveal" style={{ scrollMarginTop: '130px' }}>
            <h3 className="bento-title">Yeteneklerim</h3>
            <div className="bento-skill-icons">
              {skills.map((skill, i) => (
                <div key={i} className="bento-skill-bubble">
                  <i className={skill.icon} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Languages */}
          <div className="bento-item bento-lang glass-card filter-reveal delay-1">
            <h3 className="bento-title">Yabancı Dil</h3>
            <div className="bento-lang-content">
              <i className="fas fa-globe-americas lang-icon" />
              <div className="lang-text">
                <span className="lang-name">İngilizce</span>
                <span className="lang-level text-accent">B1 Seviye</span>
              </div>
            </div>
          </div>

          {/* 5. Contact CTA */}
          <div className="bento-item bento-contact glass-card filter-reveal">
            <div className="contact-cta-content">
              <h3>Bir Fikriniz mi Var?</h3>
              <p>Harika projeler inşa etmek için iletişime geçin.</p>
              <div className="contact-chips" style={{ marginTop: '1.5rem', justifyContent: 'flex-start' }}>
                <a href="mailto:at3214885@gmail.com" className="chip">
                  <i className="fas fa-paper-plane" /> Email Gönder
                </a>
                <a href="tel:05457406886" className="chip">
                  <i className="fas fa-phone-alt" /> Ara
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
