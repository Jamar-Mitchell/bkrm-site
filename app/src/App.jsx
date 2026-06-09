import { useEffect } from 'react'
import Lenis from 'lenis'
import { ThemeProvider } from './context/ThemeContext'
import { HeroProvider, useHero } from './context/HeroContext'
import ThemeSwitcher from './components/ThemeSwitcher'
import HeroSwitcher from './components/HeroSwitcher'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import HeroSplit from './sections/HeroSplit'
import HeroMinimal from './sections/HeroMinimal'
import HeroTypewriter from './sections/HeroTypewriter'
import HeroPhoto from './sections/HeroPhoto'
import Gallery from './components/Gallery'
import Welcome from './sections/Welcome'
import SectionBreak from './components/SectionBreak'
import ParallaxImage from './components/ParallaxImage'
import Experience from './sections/Experience'
import WhoIsInTheRoom from './sections/WhoIsInTheRoom'
import Partnership from './sections/Partnership'
import WhyThisAudience from './sections/WhyThisAudience'
import Founder from './sections/Founder'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const heroComponents = {
  default: Hero,
  split: HeroSplit,
  minimal: HeroMinimal,
  typewriter: HeroTypewriter,
  photo: HeroPhoto,
}

function HeroRenderer() {
  const { heroVariant } = useHero()
  const Component = heroComponents[heroVariant]
  return <Component key={heroVariant} />
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <ThemeProvider>
      <HeroProvider>
      <ScrollProgress />
      <Navbar />
      <HeroRenderer />
      <Gallery />
      <div id="about"><Welcome /></div>
      <SectionBreak />
      <ParallaxImage
        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1920&q=80"
        quote="Proximity determines outcomes."
      />
      <div id="experience"><Experience /></div>
      <SectionBreak />
      <div id="members"><WhoIsInTheRoom /></div>
      <SectionBreak />
      <ParallaxImage
        src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&q=80"
        quote="The right room accelerates everything."
      />
      <div id="partnership"><Partnership /></div>
      <WhyThisAudience />
      <SectionBreak />
      {/* <div id="founder"><Founder /></div> */}
      <div id="contact"><Contact /></div>
      <Footer />
      {/* <ThemeSwitcher /> */}
      {/* <HeroSwitcher /> */}
      </HeroProvider>
    </ThemeProvider>
  )
}

export default App
