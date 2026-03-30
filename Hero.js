'use client'

import { useRef, useEffect } from 'react'

export default function Hero() {

  return (
    <section id="home" className="hero">
      <div className="hero-content filter-reveal active">
        <h3 className="hero-greeting text-accent">MERHABA, BEN</h3>
        <h1 className="name">
          Ahmet Taylan
        </h1>
        <h2 className="title text-accent">
          YAZILIM GELİŞTİRİCİ
        </h2>
        <p className="summary">
          Modern teknolojilerle yenilikçi web ve masaüstü çözümleri tasarlıyorum. 
          Her projede detaylara özen gösteren yaratıcı bir programcıyım.
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn btn-filled">
            Hakkımda
          </a>
          <a href="#contact" className="btn btn-outline">
            İletişime Geç
          </a>
          <a href="/cv.pdf" className="btn btn-text" download="Ahmet_Taylan_CV">
            <i className="fas fa-download"></i> CV İndir
          </a>
        </div>
      </div>
    </section>
  )
}
