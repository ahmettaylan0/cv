'use client'

import { useState, useEffect } from 'react'

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show "scroll to top" after 300px
      setShowTop(window.scrollY > 300)

      // Show "scroll to bottom" unless near the bottom
      const scrollHeight = document.documentElement.scrollHeight
      const currentScroll = window.scrollY + window.innerHeight
      setShowBottom(currentScroll < scrollHeight - 300)
    }

    // Initial check
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div className="floating-scroll-buttons">
      <button
        className={`scroll-btn ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Yukarı Çık"
      >
        <i className="fas fa-arrow-up" />
      </button>
      <button
        className={`scroll-btn ${showBottom ? 'visible' : ''}`}
        onClick={scrollToBottom}
        aria-label="Aşağı İn"
      >
        <i className="fas fa-arrow-down" />
      </button>
    </div>
  )
}
