import Hero from "./components/Hero.jsx"
import CubeSection from "./components/cube/CubeSection.jsx"
import SoundFamiliar from "./components/sound-familiar/SoundFamiliar.jsx"
import AboutSection from "./components/about/AboutSection.jsx"
import NextPlaceholder from "./components/NextPlaceholder.jsx"
import Footer from "./components/footer/Footer.jsx"

export default function App() {
  return (
    <main>

      <Hero />

      <SoundFamiliar />

      <CubeSection />

      <NextPlaceholder />
      
      <AboutSection />

      <Footer />

    </main>
  )
}