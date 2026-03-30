import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollTopButton from '@/components/ScrollTopButton'

import PremiumBackground from '@/components/PremiumBackground'

export default function Home() {
  return (
    <>
      <PremiumBackground />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <BentoGrid />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Scroll-to-top */}
      <ScrollTopButton />
    </>
  )
}
