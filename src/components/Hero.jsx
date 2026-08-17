import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Navbar from "./Navbar.jsx"
import HeroBackground from "./HeroBackground.jsx"
import HeroVisual from "./HeroVisual.jsx"
import Button from "./Button.jsx"

import {
  siteContent,
  campaignCards,
} from "../data/boot2bootContent.js"

gsap.registerPlugin(ScrollTrigger)


function prefersReducedMotion() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
}


function isDesktopPointer() {
  return window.matchMedia(
    "(pointer: fine) and (min-width: 901px)"
  ).matches
}


export default function Hero() {
  const rootRef = useRef(null)


  useLayoutEffect(() => {
    const root = rootRef.current

    if (!root) return


    const reduced = prefersReducedMotion()

    const listeners = []


    const ctx = gsap.context(() => {

      /* =====================================================
         ELEMENT REFERENCES
         ===================================================== */

      const nav = root.querySelector("[data-nav]")

      const shape = root.querySelector(
        "[data-hero-shape]"
      )

      const shapeWrap = root.querySelector(
        "[data-hero-shape-wrap]"
      )

      const bg = root.querySelector(
        "[data-hero-bg]"
      )

      const copy = root.querySelector(
        "[data-hero-copy]"
      )

      const eyebrow = root.querySelector(
        "[data-eyebrow]"
      )

      const headline = root.querySelector(
        "[data-headline]"
      )

      const text = root.querySelector(
        "[data-copy]"
      )

      const ctas = root.querySelector(
        "[data-ctas]"
      )

      const wraps = gsap.utils.toArray(
        "[data-card-wrap]"
      )
      
      const cards = gsap.utils.toArray(
        "[data-campaign-card]"
      )
      
      const mobileTrack = root.querySelector(
        "[data-mobile-card-track]"
      )
      
      let mobileCardLoop = null

      const primary = root.querySelector(
        "[data-magnetic]"
      )

      const menu = root.querySelector(
        "[data-nav-menu]"
      )


      /* =====================================================
         INITIAL STATE
         ===================================================== */

      gsap.set(
        [
          nav,
          eyebrow,
          headline,
          text,
          ctas,
        ],
        {
          opacity: reduced ? 1 : 0,
        }
      )


      if (!reduced) {
        /* =====================================================
   MOBILE CARD TRACK
   =====================================================

   Desktop:
   - No mobile animation.

   Mobile:
   - Five unique cards are duplicated once.
   - The complete track moves from right → left.
   - -50% brings the second identical group
     into the exact starting position.
   ===================================================== */

const syncMobileCardLoop = () => {
  if (!mobileTrack) return

  mobileCardLoop?.kill()
  mobileCardLoop = null

  gsap.set(mobileTrack, {
    xPercent: 0,
  })

  if (
    reduced ||
    isDesktopPointer()
  ) {
    return
  }

  mobileCardLoop = gsap.to(
    mobileTrack,
    {
      xPercent: -50,

      duration: 22,

      ease: "none",

      repeat: -1,
    }
  )
}

syncMobileCardLoop()

        gsap.set(nav, {
          y: -14,
        })

        gsap.set(eyebrow, {
          y: 12,
        })

        gsap.set(headline, {
          y: 24,
          scale: 0.97,
        })

        gsap.set(text, {
          y: 14,
        })

        gsap.set(ctas, {
          y: 12,
        })


        /*
         * Card entrance values still come
         * from boot2bootContent.js.
         *
         * We are NOT hard-coding card
         * positions inside this animation.
         */

        wraps.forEach((wrap) => {

          const item = campaignCards.find(
            (card) =>
              card.id === wrap.dataset.id
          )

          gsap.set(wrap, {
            opacity: 0,
            x: item?.enter?.x || 0,
            y: item?.enter?.y || 0,
          })
        })


        /* =================================================
           HERO INTRO
           ================================================= */

        const intro = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        })


        intro
          .to(
            nav,
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
            },
            0.05
          )

          .to(
            eyebrow,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
            },
            0.25
          )

          .to(
            headline,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
            },
            0.34
          )

          .to(
            text,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
            },
            0.75
          )

          .to(
            ctas,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
            },
            0.88
          )

          .to(
            wraps,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.85,
              stagger: 0.07,
            },
            0.35
          )


        /* =================================================
           CARD FLOATING
           ================================================= */

        wraps.forEach((wrap) => {

          const item = campaignCards.find(
            (card) =>
              card.id === wrap.dataset.id
          )

          const float =
            wrap.querySelector(
              "[data-card-float]"
            )

          if (!item || !float) return


          gsap.to(float, {
            y: item.float?.y || 0,
            rotation:
              item.float?.rotation || 0,

            duration:
              item.float?.duration || 6,

            ease: "sine.inOut",

            yoyo: true,
            repeat: -1,

            delay: Math.random() * 0.5,
          })
        })

      } else {

        gsap.set(wraps, {
          opacity: 1,
          x: 0,
          y: 0,
        })
      }


      /* =====================================================
         MOBILE CARD TRACK
         ===================================================== */

      const syncMobileCardLoop = () => {

        if (!mobileTrack) {
          return
        }

        mobileCardLoop?.kill()
        mobileCardLoop = null

        gsap.set(mobileTrack, {
          xPercent: 0,
        })

        if (
          reduced ||
          isDesktopPointer()
        ) {
          return
        }

        mobileCardLoop = gsap.to(
          mobileTrack,
          {
            xPercent: -50,

            duration: 22,

            ease: "none",

            repeat: -1,
          }
        )
      }


      syncMobileCardLoop()


      /* =====================================================
         SCROLL ANIMATION
         ===================================================== */


      /* =====================================================
         SCROLL ANIMATION
         ===================================================== */

      const scrollTl = gsap.timeline({

        scrollTrigger: {
          trigger: root,

          start: "top top",

          end: "bottom top",

          scrub: 0.7,

          invalidateOnRefresh: true,
        },

      })


      scrollTl

        .to(
          copy,
          {
            y: -60,
            opacity: 0.12,
            ease: "none",
          },
          0
        )

        .to(
          shape,
          {
            scale: 1.08,
            y: 35,
            ease: "none",
          },
          0
        )

        .to(
          nav,
          {
            y: -8,
            ease: "none",
          },
          0
        )


      /*
       * Each visible card gets its own
       * scroll movement.
       *
       * This remains data-driven.
       */

      wraps.forEach((wrap) => {

        const item = campaignCards.find(
          (card) =>
            card.id === wrap.dataset.id
        )

        const scroller =
          wrap.querySelector(
            "[data-card-scroll]"
          )


        if (
          item &&
          scroller &&
          item.scroll
        ) {

          scrollTl.to(
            scroller,
            {
              x: item.scroll.x,
              y: item.scroll.y,

              ease: "none",
            },
            0
          )
        }
      })


      /* =====================================================
         NAVBAR SCROLL STATE
         ===================================================== */

      const onScroll = () => {

        nav?.setAttribute(
          "data-scrolled",
          String(window.scrollY > 30)
        )
      }


      onScroll()


      window.addEventListener(
        "scroll",
        onScroll,
        {
          passive: true,
        }
      )


      listeners.push([
        "scroll",
        onScroll,
      ])


      /* =====================================================
         MOUSE PARALLAX
         =====================================================

         IMPORTANT:

         The listener is attached once.

         But desktop/mobile is checked
         EVERY TIME the mouse moves.

         Therefore switching:

         Desktop → Mobile
         Mobile → Desktop

         does not require a refresh.
         ===================================================== */

      if (!reduced) {

        const movers = wraps.map(
          (wrap) => {

            const layer =
              wrap.querySelector(
                "[data-card-parallax]"
              )

            const amount =
              Number(
                wrap.dataset.depth
              ) || 5


            if (!layer) {
              return null
            }


            return {
              amount,

              x: gsap.quickTo(
                layer,
                "x",
                {
                  duration: 0.6,
                  ease: "power3.out",
                }
              ),

              y: gsap.quickTo(
                layer,
                "y",
                {
                  duration: 0.6,
                  ease: "power3.out",
                }
              ),
            }
          }
        ).filter(Boolean)


        const shapeX = shapeWrap
          ? gsap.quickTo(
              shapeWrap,
              "x",
              {
                duration: 0.8,
                ease: "power3.out",
              }
            )
          : null


        const shapeY = shapeWrap
          ? gsap.quickTo(
              shapeWrap,
              "y",
              {
                duration: 0.8,
                ease: "power3.out",
              }
            )
          : null


        const onMove = (event) => {

          /*
           * On touch/tablet/mobile,
           * don't run desktop parallax.
           */

          if (!isDesktopPointer()) {

            movers.forEach((mover) => {
              mover.x(0)
              mover.y(0)
            })

            shapeX?.(0)
            shapeY?.(0)

            gsap.set(bg, {
              x: 0,
              y: 0,
            })

            return
          }


          const nx =
            (event.clientX /
              window.innerWidth -
              0.5) * 2


          const ny =
            (event.clientY /
              window.innerHeight -
              0.5) * 2


          shapeX?.(nx * 8)
          shapeY?.(ny * 8)


          movers.forEach((mover) => {

            mover.x(
              nx * mover.amount
            )

            mover.y(
              ny * mover.amount
            )
          })


          gsap.to(bg, {
            x: nx * 3,
            y: ny * 3,

            duration: 0.8,

            overwrite: true,
          })
        }


        window.addEventListener(
          "mousemove",
          onMove,
          {
            passive: true,
          }
        )


        listeners.push([
          "mousemove",
          onMove,
        ])
      }


      /* =====================================================
         CARD HOVER
         ===================================================== */

      cards.forEach((card) => {

        const rest =
          Number(
            card.dataset.rotate
          ) || 0


        const hover =
          Number(
            card.dataset.hoverRotate
          ) || 0


        const wrap =
          card.closest(
            "[data-card-wrap]"
          )


        const enter = () => {

          if (
            reduced ||
            !isDesktopPointer()
          ) {
            return
          }


          wrap?.classList.add(
            "is-hovered"
          )


          gsap.to(card, {
            scale: 1.035,

            rotation: hover,

            filter:
              "brightness(1.03)",

            duration: 0.35,

            ease: "power2.out",

            overwrite: "auto",
          })
        }


        const leave = () => {

          wrap?.classList.remove(
            "is-hovered"
          )


          gsap.to(card, {
            scale: 1,

            rotation: rest,

            filter:
              "brightness(1)",

            duration: 0.4,

            ease: "power2.out",

            overwrite: "auto",
          })
        }


        wrap?.addEventListener(
          "mouseenter",
          enter
        )

        wrap?.addEventListener(
          "mouseleave",
          leave
        )

        wrap?.addEventListener(
          "focusin",
          enter
        )

        wrap?.addEventListener(
          "focusout",
          leave
        )
      })


      /* =====================================================
         MAGNETIC CTA
         ===================================================== */

      const magnetic = (event) => {

        if (
          reduced ||
          !isDesktopPointer() ||
          !primary
        ) {
          return
        }


        const rect =
          primary.getBoundingClientRect()


        gsap.to(primary, {

          x:
            (
              event.clientX -
              (
                rect.left +
                rect.width / 2
              )
            ) * 0.14,

          y:
            (
              event.clientY -
              (
                rect.top +
                rect.height / 2
              )
            ) * 0.16,

          duration: 0.3,

          ease: "power3.out",

          overwrite: true,
        })
      }


      const magneticLeave = () => {

        gsap.to(primary, {
          x: 0,
          y: 0,

          duration: 0.4,

          ease: "power3.out",
        })
      }


      primary?.addEventListener(
        "mousemove",
        magnetic
      )

      primary?.addEventListener(
        "mouseleave",
        magneticLeave
      )


      /* =====================================================
         MOBILE MENU
         ===================================================== */

      const toggleMenu = () => {

        const open =
          nav?.getAttribute(
            "data-open"
          ) === "true"


        nav?.setAttribute(
          "data-open",
          String(!open)
        )


        menu?.setAttribute(
          "aria-expanded",
          String(!open)
        )
      }


      const syncMenu = () => {

        if (
          window.innerWidth >= 901
        ) {
      
          nav?.setAttribute(
            "data-open",
            "false"
          )
      
          menu?.setAttribute(
            "aria-expanded",
            "false"
          )
        }
      
        requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })
      }


      menu?.addEventListener(
        "click",
        toggleMenu
      )


      window.addEventListener(
        "resize",
        syncMenu,
        {
          passive: true,
        }
      )


      listeners.push([
        "resize",
        syncMenu,
      ])


      menu?.setAttribute(
        "aria-expanded",
        "false"
      )

    }, root)


    return () => {

      listeners.forEach(
        ([type, fn]) => {

          window.removeEventListener(
            type,
            fn
          )
        }
      )


      ctx.revert()

      ScrollTrigger.refresh()
    }

  }, [])


  /* =========================================================
     HERO MARKUP
     ========================================================= */

  return (

    <section
      ref={rootRef}
      id="top"

      className="
        relative
        isolate
        min-h-[100svh]
        h-[max(760px,100svh)]
        overflow-hidden
        bg-b2b-bg

        max-[900px]:h-auto
        max-[900px]:min-h-[100svh]
        max-[900px]:pb-10
      "
    >

      <Navbar />

      <HeroBackground />


      {/* ===================================================
          CENTER HERO CONTENT
          =================================================== */}

      <div
        id="hero-content"

        data-hero-copy

        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-[15]

          flex
          w-[min(720px,calc(100%-48px))]
          -translate-x-1/2
          -translate-y-[49%]

          flex-col
          items-center
          text-center

          max-[900px]:relative
          max-[900px]:left-auto
          max-[900px]:top-auto

          max-[900px]:mx-auto
          max-[900px]:w-[min(650px,calc(100%-32px))]

          max-[900px]:translate-x-0
          max-[900px]:translate-y-0

          max-[900px]:pt-[145px]

          max-[560px]:pt-[125px]
        "
      >

        <p
          data-eyebrow

          className="
            mb-[18px]
            text-[11px]
            font-extrabold
            uppercase
            tracking-[0.14em]
            text-b2b-ink2

            max-[560px]:text-[9px]
          "
        >
          {siteContent.eyebrow}
        </p>


        <h1
          data-headline

          className="
            m-0
            max-w-[650px]

            text-[clamp(3.2rem,7vw,6.6rem)]
            font-black
            leading-[0.9]
            tracking-[-0.065em]

            max-[900px]:text-[clamp(3rem,10vw,5rem)]

            max-[560px]:text-[clamp(2.65rem,14vw,4.1rem)]
          "
        >
          {siteContent.headline}
        </h1>


        <p
          data-copy

          className="
            mt-6
            w-[min(470px,100%)]

            text-[14px]
            leading-[1.55]
            text-b2b-ink2

            max-[560px]:text-[13px]
          "
        >
          {siteContent.description}
        </p>


        <div
          data-ctas

          className="
            mt-[26px]

            flex
            items-center
            gap-2.5

            max-[560px]:w-full
            max-[560px]:flex-col
          "
        >

          <Button
            href="#contact"
            variant="primary"
            data-magnetic

            className="
              pointer-events-auto

              max-[560px]:w-[min(280px,100%)]
            "
          >
            {siteContent.primaryCta}
          </Button>


          <Button
            href="#work"
            variant="secondary"

            className="
              pointer-events-auto

              max-[560px]:w-[min(280px,100%)]
            "
          >
            {siteContent.secondaryCta}
          </Button>

        </div>

      </div>


      <HeroVisual />

    </section>
  )
}