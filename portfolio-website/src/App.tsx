import './App.css'
import './index.css'
import { useEffect } from 'react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import ImageProfile from './components/ImageProfile'
import image from './assets/image.jpg'
import HeroDetails from './components/HeroDetails'
import  Projects from './pages/Projects'
import Experience from './pages/Experience'
import Tool from './pages/Tool'
import WorkTogether from './components/WorkTogether'
import Certifications from './components/Certifications'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => setIsLoading(false), 900)
    }

    if (document.readyState === 'complete') {
      finishLoading()
      return
    }

    window.addEventListener('load', finishLoading, { once: true })

    return () => window.removeEventListener('load', finishLoading)
  }, [])

  return (
    <>
      {isLoading && (
        <div className="loader-overlay" role="status" aria-live="polite" aria-label="Loading portfolio">
          <div className="loader-panel">
            <div className="loader"></div>
            <p className="loader-name">Mark Agbayani</p>
          </div>
        </div>
      )}

      <div className={isLoading ? 'page-hidden' : 'page-ready'}>
        <NavBar />
        <section id="home" data-reveal className="reveal-section">
          <ImageProfile name="Mark Agbayani" image={image} tag="A Full-Stack Developer who has developed countless innovative solutions."/>
        </section>
        <section id="about" data-reveal className="reveal-section">
          <HeroDetails />
        </section>
        <section id="projects" data-reveal className="reveal-section">
          <Projects />
        </section>
        <section id="experience" data-reveal className="reveal-section">
          <Experience />
        </section>
        <section id="skills" data-reveal className="reveal-section">
          <Tool/>
        </section>
        <section id="certifications" data-reveal className="reveal-section">
          <Certifications />
        </section>
        <section id="contact" data-reveal className="reveal-section">
          <WorkTogether />
        </section>
      </div>
    </>
  )
}

export default App
