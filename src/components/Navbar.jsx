import Button from "./Button.jsx"
import { siteContent } from "../data/boot2bootContent.js"

export default function Navbar() {
  return (
    <header className="nav" data-nav>
      <a className="nav-logo" href="#top" aria-label="Boot 2 Boot home">
        <span className="nav-mark" aria-hidden="true">2</span>
        <span className="nav-wordmark">BOOT 2 BOOT</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {siteContent.nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <Button className="nav-cta" href="#contact" variant="primary">
        {siteContent.navCta}
      </Button>

      <button className="nav-menu" type="button" aria-label="Open menu" data-nav-menu aria-expanded="false">
        <span />
        <span />
      </button>
    </header>
  )
}
