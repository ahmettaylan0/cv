'use client'

import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState('idle') // idle | sending | success
  const wrapperRef = useRef(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    
    const revealElements = el.querySelectorAll('.filter-reveal')
    revealElements.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')

    setTimeout(() => {
      e.target.reset()
      setFormState('success')

      setTimeout(() => {
        setFormState('idle')
      }, 5000)
    }, 2000)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-header">
          <h2 className="section-title contact-title">
            İletişim<span className="text-accent">.</span>
          </h2>
          <p className="contact-subtitle">
            Bir projen mi var? Birlikte çalışmak ister misin? Bana ulaş!
          </p>
        </div>

        <div ref={wrapperRef} className="contact-grid">
          {/* Left Side: Info */}
          <div className="contact-info filter-reveal">
            <p className="contact-desc">
              Yeni projeler, yaratıcı fikirler veya fırsatlar hakkında konuşmak
              isterseniz benimle iletişime geçin. Her mesajı okuyorum ve en kısa
              sürede dönüş yapıyorum.
            </p>

            <div className="contact-info-blocks">
              <div className="info-block">
                <div className="info-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="info-text">
                  <span className="info-label">EMAİL</span>
                  <span className="info-val">at3214885@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-side glass-card filter-reveal delay-1">
            <form className="modern-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">ADINIZ</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Adınızı girin"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-POSTA</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-posta adresiniz"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESAJ</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Mesajınız..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-submit-yellow"
                disabled={formState === 'sending'}
              >
                {formState === 'sending' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>

            {formState === 'success' && (
              <div className="form-message success" style={{ marginTop: '1rem' }}>
                Mesajınız başarıyla gönderildi!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
