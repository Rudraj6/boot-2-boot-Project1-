import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "./Navbar.jsx"
import HeroBackground from "./HeroBackground.jsx"
import HeroVisual from "./HeroVisual.jsx"
import Button from "./Button.jsx"
import { siteContent, campaignCards } from "../data/boot2bootContent.js"

gsap.registerPlugin(ScrollTrigger)

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
const desktop = () => window.matchMedia("(pointer: fine) and (min-width: 901px)").matches

export default function Hero() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = reducedMotion()
    const listeners = []
    const ctx = gsap.context(() => {
      const nav = root.querySelector("[data-nav]")
      const shape = root.querySelector("[data-hero-shape]")
      const shapeWrap = root.querySelector("[data-hero-shape-wrap]")
      const bg = root.querySelector("[data-hero-bg]")
      const copy = root.querySelector("[data-hero-copy]")
      const eyebrow = root.querySelector("[data-eyebrow]")
      const headline = root.querySelector("[data-headline]")
      const text = root.querySelector("[data-copy]")
      const ctas = root.querySelector("[data-ctas]")
      const wraps = gsap.utils.toArray("[data-card-wrap]")
      const cards = gsap.utils.toArray("[data-campaign-card]")
      const primary = root.querySelector("[data-magnetic]")
      const menu = root.querySelector("[data-nav-menu]")
      const links = root.querySelector(".nav-links")

      gsap.set([nav, eyebrow, headline, text, ctas], { opacity: reduce ? 1 : 0 })
      if (!reduce) {
        gsap.set(nav, { y: -14 })
        gsap.set(eyebrow, { y: 12 })
        gsap.set(headline, { y: 24, scale: .97 })
        gsap.set(text, { y: 14 })
        gsap.set(ctas, { y: 12 })
        wraps.forEach((wrap) => {
          const item = campaignCards.find((x) => x.id === wrap.dataset.id)
          gsap.set(wrap, { opacity: 0, x: item?.enter.x || 0, y: item?.enter.y || 0 })
        })

        const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
        intro.to(nav, { opacity: 1, y: 0, duration: .55 }, .05)
          .to(eyebrow, { opacity: 1, y: 0, duration: .4 }, .25)
          .to(headline, { opacity: 1, y: 0, scale: 1, duration: .75 }, .34)
          .to(text, { opacity: 1, y: 0, duration: .45 }, .75)
          .to(ctas, { opacity: 1, y: 0, duration: .4 }, .88)
          .to(wraps, { opacity: 1, x: 0, y: 0, duration: .85, stagger: .07 }, .35)

        wraps.forEach((wrap) => {
          const item = campaignCards.find((x) => x.id === wrap.dataset.id)
          const float = wrap.querySelector("[data-card-float]")
          if (!item || !float) return
          gsap.to(float, { y: item.float.y, rotation: item.float.rotation, duration: item.float.duration, ease: "sine.inOut", yoyo: true, repeat: -1, delay: Math.random() * .5 })
        })
      } else {
        gsap.set(wraps, { opacity: 1, x: 0, y: 0 })
      }

      const scrollTl = gsap.timeline({ scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: .7 } })
      scrollTl.to(copy, { y: -60, opacity: .12, ease: "none" }, 0)
        .to(shape, { scale: 1.08, y: 35, ease: "none" }, 0)
        .to(nav, { y: -8, ease: "none" }, 0)
      wraps.forEach((wrap) => {
        const item = campaignCards.find((x) => x.id === wrap.dataset.id)
        const scroller = wrap.querySelector("[data-card-scroll]")
        if (item && scroller) scrollTl.to(scroller, { x: item.scroll.x, y: item.scroll.y, ease: "none" }, 0)
      })

      const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 30)
      onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); listeners.push(["scroll", onScroll])

      if (!reduce && desktop()) {
        const movers = wraps.map((wrap) => {
          const layer = wrap.querySelector("[data-card-parallax]")
          const amount = Number(wrap.dataset.depth) || 5
          return { amount, x: gsap.quickTo(layer, "x", { duration: .6, ease: "power3.out" }), y: gsap.quickTo(layer, "y", { duration: .6, ease: "power3.out" }) }
        })
        const shapeX = gsap.quickTo(shapeWrap, "x", { duration: .8, ease: "power3.out" })
        const shapeY = gsap.quickTo(shapeWrap, "y", { duration: .8, ease: "power3.out" })
        const onMove = (event) => {
          const nx = (event.clientX / innerWidth - .5) * 2
          const ny = (event.clientY / innerHeight - .5) * 2
          shapeX(nx * 8); shapeY(ny * 8)
          movers.forEach((m) => { m.x(nx * m.amount); m.y(ny * m.amount) })
          gsap.to(bg, { x: nx * 3, y: ny * 3, duration: .8, overwrite: true })
        }
        window.addEventListener("mousemove", onMove); listeners.push(["mousemove", onMove])
      }

      cards.forEach((card) => {
        const rest = Number(card.dataset.rotate) || 0
        const hover = Number(card.dataset.hoverRotate) || 0
        const wrap = card.closest("[data-card-wrap]")
        const enter = () => {
          if (reduce || !desktop()) return
          wrap?.classList.add("is-hovered")
          gsap.to(card, { scale: 1.035, rotation: hover, filter: "brightness(1.03)", duration: .35, ease: "power2.out", overwrite: "auto" })
        }
        const leave = () => {
          wrap?.classList.remove("is-hovered")
          gsap.to(card, { scale: 1, rotation: rest, filter: "brightness(1)", duration: .4, ease: "power2.out", overwrite: "auto" })
        }
        wrap?.addEventListener("mouseenter", enter); wrap?.addEventListener("mouseleave", leave)
        wrap?.addEventListener("focusin", enter); wrap?.addEventListener("focusout", leave)
      })

      const magnetic = (event) => {
        if (reduce || !desktop() || !primary) return
        const r = primary.getBoundingClientRect()
        gsap.to(primary, { x: (event.clientX - (r.left + r.width / 2)) * .14, y: (event.clientY - (r.top + r.height / 2)) * .16, duration: .3, ease: "power3.out", overwrite: true })
      }
      const magneticLeave = () => gsap.to(primary, { x: 0, y: 0, duration: .4, ease: "power3.out" })
      primary?.addEventListener("mousemove", magnetic); primary?.addEventListener("mouseleave", magneticLeave)

      const toggleMenu = () => {
        const open = nav?.classList.toggle("is-open")
        menu?.setAttribute("aria-expanded", String(Boolean(open)))
      }
      const syncMenu = () => { if (innerWidth >= 901) { nav?.classList.remove("is-open"); menu?.setAttribute("aria-expanded", "false") } }
      menu?.addEventListener("click", toggleMenu); window.addEventListener("resize", syncMenu); listeners.push(["resize", syncMenu])
      menu?.setAttribute("aria-expanded", "false")
    }, root)

    return () => { listeners.forEach(([type, fn]) => window.removeEventListener(type, fn)); ctx.revert() }
  }, [])

  return (
    <section className="hero" ref={rootRef} id="top">
      <Navbar />
      <HeroBackground />
      <div className="hero-copy" data-hero-copy id="hero-content">
        <p className="hero-eyebrow" data-eyebrow>{siteContent.eyebrow}</p>
        <h1 className="hero-headline" data-headline>{siteContent.headline}</h1>
        <p className="hero-text" data-copy>{siteContent.description}</p>
        <div className="hero-ctas" data-ctas>
          <Button href="#contact" variant="primary" data-magnetic>{siteContent.primaryCta}</Button>
          <Button href="#work" variant="secondary">{siteContent.secondaryCta}</Button>
        </div>
      </div>
      <HeroVisual />
    </section>
  )
}
