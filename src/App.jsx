import Hero from "./components/Hero.jsx"
import NextPlaceholder from "./components/NextPlaceholder.jsx"

export default function App() {
  return (
    <>
      <a className="skip-link" href="#hero-content">
        Skip to content
      </a>
      <Hero />
      <NextPlaceholder />
    </>
  )
}
