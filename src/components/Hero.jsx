import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "./Navbar.jsx"
import HeroBackground from "./HeroBackground.jsx"
import HeroVisual from "./HeroVisual.jsx"
import Button from "./Button.jsx"
import { siteContent, campaignCards } from "../data/boot2bootContent.js"

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function isDesktopPointer() {
  return window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches
}

export default function Hero() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduced = prefersReducedMotion()
    const listeners = []

    const ctx = gsap.context(() => {
      const nav = root.querySelector("[data-nav]")
      const shape = root.querySelector("[data-hero-shape]")
      const shapeWrap = root.querySelector("[data-hero-shape-wrap]")
      const bg = root.querySelector("[data-hero-bg]")
      const eyebrow = root.querySelector("[data-eyebrow]")
      const headline = root.querySelector("[data-headline]")
      const copy = root.querySelector("[data-copy]")
      const ctas = root.querySelector("[data-ctas]")
      const note = root.querySelector("[data-hero-note]")
      const wraps = gsap.utils.toArray("[data-card-wrap]")
      const cards = gsap.utils.toArray("[data-campaign-card]")
      const primaryCta = root.querySelector("[data-magnetic]")
      const menu = root.querySelector("[data-nav-menu]")
      const links = root.querySelector(".nav-links")

      gsap.set([nav, shape, eyebrow, headline, copy, ctas, note], {
        opacity: reduced ? 1 : 0,
      })

      if (!reduced) {
        gsap.set(nav, { y: -10 })
        gsap.set(shape, { scale: 0.92 })
        gsap.set(eyebrow, { y: 10 })
        gsap.set(headline, { y: 18 })
        gsap.set(copy, { y: 12 })
        gsap.set(ctas, { y: 10 })
        gsap.set(note, { y: 8 })

        wraps.forEach((wrap) => {
          const data = campaignCards.find((item) => item.id === wrap.dataset.id)
          gsap.set(wrap, { opacity: 0, x: data?.enter.x ?? 0, y: data?.enter.y ?? 20 })
        })

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        const outer = wraps.filter((wrap) => wrap.dataset.layer !== "front")
        const front = wraps.filter((wrap) => wrap.dataset.layer === "front")

        tl.to(nav, { opacity: 1, y: 0, duration: 0.55 }, 0.1)
          .to(shape, { opacity: 1, scale: 1, duration: 0.85 }, 0.2)
          .to(outer, { opacity: 1, x: 0, y: 0, duration: 0.9, stagger: 0.06 }, 0.3)
          .to(eyebrow, { opacity: 1, y: 0, duration: 0.45 }, 0.45)
          .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0.55)
          .to(copy, { opacity: 1, y: 0, duration: 0.45 }, 0.95)
          .to(ctas, { opacity: 1, y: 0, duration: 0.45 }, 1.1)
          .to(front, { opacity: 1, x: 0, y: 0, duration: 0.85, stagger: 0.08 }, 1.15)
          .to(note, { opacity: 1, y: 0, duration: 0.4 }, 1.4)

        wraps.forEach((wrap) => {
          const data = campaignCards.find((item) => item.id === wrap.dataset.id)
          const floater = wrap.querySelector("[data-card-float]")
          if (!floater || !data) return
          gsap.to(floater, {
            y: data.float.y,
            rotation: data.float.rotation,
            duration: data.float.duration,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          })
        })
      } else {
        gsap.set(wraps, { opacity: 1, x: 0, y: 0 })
        gsap.set(shape, { opacity: 1, scale: 1 })
      }

      const scrollTween = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.65,
        },
      })

      scrollTween
        .to(root.querySelector("[data-hero-copy]"), { y: -48, opacity: 0.18, ease: "none" }, 0)
        .to(shape, { scale: 1.08, y: 36, ease: "none" }, 0)
        .to(nav, { y: -8, ease: "none" }, 0)
        .to(note, { opacity: 0, ease: "none" }, 0)

      wraps.forEach((wrap) => {
        const data = campaignCards.find((item) => item.id === wrap.dataset.id)
        const scroller = wrap.querySelector("[data-card-scroll]")
        if (!scroller || !data) return
        scrollTween.to(scroller, { x: data.scroll.x, y: data.scroll.y, ease: "none" }, 0)
      })

      const onScrollNav = () => {
        nav?.classList.toggle("is-scrolled", window.scrollY > 24)
      }
      onScrollNav()
      window.addEventListener("scroll", onScrollNav, { passive: true })
      listeners.push(["scroll", onScrollNav])

      if (!reduced) {
        const quickSets = wraps.map((wrap) => {
          const layer = wrap.querySelector("[data-card-parallax]")
          const amount = Number(wrap.dataset.depth) || 6
          return {
            amount,
            x: gsap.quickTo(layer, "x", { duration: 0.55, ease: "power3.out" }),
            y: gsap.quickTo(layer, "y", { duration: 0.55, ease: "power3.out" }),
          }
        })

        const shapeX = gsap.quickTo(shapeWrap, "x", { duration: 0.7, ease: "power3.out" })
        const shapeY = gsap.quickTo(shapeWrap, "y", { duration: 0.7, ease: "power3.out" })
        const bgX = gsap.quickTo(bg, "x", { duration: 0.8, ease: "power3.out" })
        const bgY = gsap.quickTo(bg, "y", { duration: 0.8, ease: "power3.out" })

        const onMove = (event) => {
          if (!isDesktopPointer()) return
          const nx = (event.clientX / window.innerWidth - 0.5) * 2
          const ny = (event.clientY / window.innerHeight - 0.5) * 2
          bgX(nx * 2)
          bgY(ny * 2)
          shapeX(nx * 2)
          shapeY(ny * 2)
          quickSets.forEach((item) => {
            item.x(nx * item.amount)
            item.y(ny * item.amount)
          })
        }

        window.addEventListener("mousemove", onMove)
        listeners.push(["mousemove", onMove])
      }

      cards.forEach((card) => {
        const rest = Number(card.dataset.rotate) || 0
        const hover = Number(card.dataset.hoverRotate) || 0
        const wrap = card.closest("[data-card-wrap]")

        const enter = () => {
          if (reduced || !isDesktopPointer()) return
          wrap?.classList.add("is-hovered")
          gsap.to(card, {
            scale: 1.03,
            rotation: hover,
            filter: "brightness(1.04)",
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          })
        }

        const leave = () => {
          wrap?.classList.remove("is-hovered")
          gsap.to(card, {
            scale: 1,
            rotation: rest,
            filter: "brightness(1)",
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          })
        }

        wrap?.addEventListener("mouseenter", enter)
        wrap?.addEventListener("mouseleave", leave)
        wrap?.addEventListener("focusin", enter)
        wrap?.addEventListener("focusout", leave)
      })

      const magnetic = (event) => {
        if (reduced || !isDesktopPointer() || !primaryCta) return
        const rect = primaryCta.getBoundingClientRect()
        const x = event.clientX - (rect.left + rect.width / 2)
        const y = event.clientY - (rect.top + rect.height / 2)
        gsap.to(primaryCta, {
          x: x * 0.18,
          y: y * 0.22,
          duration: 0.35,
          ease: "power3.out",
        })
      }

      const magneticLeave = () => {
        gsap.to(primaryCta, { x: 0, y: 0, duration: 0.45, ease: "power3.out" })
      }

      primaryCta?.addEventListener("mousemove", magnetic)
      primaryCta?.addEventListener("mouseleave", magneticLeave)

      const syncMenu = () => {
        if (!links || !menu || !nav) return
        if (window.innerWidth >= 860) {
          nav.classList.remove("is-open")
          menu.setAttribute("aria-expanded", "false")
        }
      }

      const toggleMenu = () => {
        const open = nav.classList.toggle("is-open")
        menu?.setAttribute("aria-expanded", String(open))
      }

      syncMenu()
      menu?.setAttribute("aria-expanded", "false")
      menu?.addEventListener("click", toggleMenu)
      window.addEventListener("resize", syncMenu)
      listeners.push(["resize", syncMenu])
    }, root)

    return () => {
      listeners.forEach(([type, handler]) => window.removeEventListener(type, handler))
      ctx.revert()
    }
  }, [])

  return (
    <section className="hero" ref={rootRef} id="top">
      <Navbar />
      <HeroBackground />

      <div className="hero-copy" data-hero-copy id="hero-content">
        <p className="hero-eyebrow" data-eyebrow>
          {siteContent.eyebrow}
        </p>
        <h1 className="hero-headline" data-headline>
          {siteContent.headline}
        </h1>
        <p className="hero-text" data-copy>
          {siteContent.description}
        </p>
        <div className="hero-ctas" data-ctas>
          <Button href="#contact" variant="primary" data-magnetic>
            {siteContent.primaryCta}
          </Button>
          <Button href="#contact" variant="secondary">
            {siteContent.secondaryCta}
          </Button>
        </div>
      </div>

      <HeroVisual />
    </section>
  )
}
