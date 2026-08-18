import { useLayoutEffect } from "react"

import gsap from "gsap"
import {
  ScrollTrigger,
} from "gsap/ScrollTrigger"


gsap.registerPlugin(
  ScrollTrigger
)


export default function useSoundFamiliarAnimation(
  rootRef
) {
  useLayoutEffect(() => {
    const root =
      rootRef.current

    if (!root) {
      return
    }


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches


    const ctx =
      gsap.context(() => {

        const panel =
          root.querySelector(
            "[data-sound-panel]"
          )

        const checklistViewport =
          root.querySelector(
            "[data-checklist-viewport]"
          )

        const checklistTrack =
          root.querySelector(
            "[data-checklist-track]"
          )

        const checklistItems =
          gsap.utils.toArray(
            "[data-checklist-item]"
          )

        const concerns =
          gsap.utils.toArray(
            "[data-floating-concern]"
          )


        if (
          !panel ||
          !checklistViewport ||
          !checklistTrack
        ) {
          return
        }


        /*
        =========================================================
        MASTER TIMELINE REFERENCES
        =========================================================
        */

        let checklistLoop = null

        let concernLoop = null

        let resizeTimer = null


        /*
        =========================================================
        INITIAL STATE
        =========================================================
        */

        gsap.set(
          panel,
          {
            opacity: 1,
            scale: 1,
            y: 0,
          }
        )


        gsap.set(
          concerns,
          {
            opacity: 1,
            scale: 1,
          }
        )


        /*
        =========================================================
        CHECKLIST LOOP

        The checklist is intentionally NOT connected to
        ScrollTrigger.

        It continuously travels from bottom → top.

        The duplicated checklist allows the second group
        to immediately follow the first group.
        =========================================================
        */

        const createChecklistLoop = () => {

            checklistLoop?.kill()
          
            if (reduceMotion) {

                gsap.set(
                  checklistTrack,
                  {
                    clearProps: "transform",
                  }
                )
              
                return
              }
          
          
            const firstGroup =
              checklistItems.filter(
                (item) =>
                  item.dataset.duplicate !==
                  "true"
              )
          
          
            if (
              firstGroup.length === 0
            ) {
              return
            }
          
          
            const first =
              firstGroup[0]
          
            const second =
              firstGroup[
                firstGroup.length - 1
              ]
          
          
            const firstTop =
              first.offsetTop
          
          
            const lastBottom =
              second.offsetTop +
              second.offsetHeight
          
          
            const computedStyle =
              window.getComputedStyle(
                checklistTrack
              )
          
          
            const gap =
              parseFloat(
                computedStyle.rowGap
              ) || 0
          
          
            const travelDistance =
              lastBottom -
              firstTop +
              gap
          
          
            gsap.set(
              checklistTrack,
              {
                y: 0,
              }
            )
          
          
            checklistLoop = gsap.to(
              checklistTrack,
              {
                y: -travelDistance,
          
                duration: 16,
          
                ease: "none",
          
                repeat: -1,
              }
            )
          }


        /*
        =========================================================
        GREEN PILL LOOP

        These are NOT scroll-triggered.

        They continuously enter / exit the composition.
        =========================================================
        */

        const createConcernLoop = () => {

            concernLoop?.kill()
          
          
            if (
              reduceMotion ||
              concerns.length === 0
            ) {
              gsap.set(
                concerns,
                {
                  opacity: 1,
                  scale: 1,
                }
              )
          
              return
            }
          
          
            /*
            =========================================================
            FULL PANEL POSITION POOL
          
            These coordinates are percentages of the
            complete black panel.
          
            They intentionally cover BOTH sides.
            =========================================================
            */
          
            const positions = [
              {
                left: 18,
                top: 13,
                rotate: -3,
              },
          
              {
                left: 39,
                top: 16,
                rotate: 2,
              },
          
              {
                left: 63,
                top: 12,
                rotate: -2,
              },
          
              {
                left: 79,
                top: 18,
                rotate: 3,
              },
          
              {
                left: 26,
                top: 39,
                rotate: 2,
              },
          
              {
                left: 53,
                top: 37,
                rotate: -2,
              },
          
              {
                left: 72,
                top: 44,
                rotate: 2,
              },
          
              {
                left: 88,
                top: 52,
                rotate: -3,
              },
          
              {
                left: 34,
                top: 61,
                rotate: -2,
              },
          
              {
                left: 58,
                top: 66,
                rotate: 2,
              },
          
              {
                left: 78,
                top: 70,
                rotate: -2,
              },
          
              {
                left: 46,
                top: 82,
                rotate: 3,
              },
            ]
          
          
            let availablePositions =
              []
          
          
            const getPosition = () => {
          
              if (
                availablePositions.length === 0
              ) {
          
                availablePositions =
                  gsap.utils.shuffle(
                    [...positions]
                  )
              }
          
          
              return availablePositions.pop()
            }
          
          
            /*
            =========================================================
            INITIAL DISPLAY
          
            Four pills are visible.
            =========================================================
            */
          
            concerns.forEach(
              (
                concern,
                index
              ) => {
          
                const position =
                  getPosition()
          
          
                gsap.set(
                  concern,
                  {
                    left:
                      `${position.left}%`,
          
                    top:
                      `${position.top}%`,
          
                    xPercent: -50,
                    yPercent: -50,
          
                    rotation:
                      position.rotate,
          
                    opacity:
                      index < 4
                        ? 1
                        : 0,
          
                    scale:
                      index < 4
                        ? 1
                        : 0.8,
                  }
                )
              }
            )
          
          
            /*
            =========================================================
            ONE-PILL REPLACEMENT
          
            Every cycle replaces ONE pill.
          
            The other pills remain visible.
            =========================================================
            */
          
            let currentIndex = 0
          
          
            const replaceNextPill = () => {

                const concern =
                  concerns[
                    currentIndex %
                    concerns.length
                  ]
              
                currentIndex++
              
                const nextPosition =
                  getPosition()
              
              
                gsap.to(
                  concern,
                  {
                    opacity: 0,
              
                    scale: 0.75,
              
                    duration: 0.6,
              
                    ease: "power2.in",
              
                    onComplete: () => {
              
                      gsap.set(
                        concern,
                        {
                          left:
                            `${nextPosition.left}%`,
              
                          top:
                            `${nextPosition.top}%`,
              
                          rotation:
                            nextPosition.rotate,
              
                          scale: 0.75,
                        }
                      )
              
              
                      gsap.to(
                        concern,
                        {
                          opacity: 1,
              
                          scale: 1,
              
                          duration: 0.7,
              
                          ease:
                            "back.out(1.5)",
                        }
                      )
                    },
                  }
                )
              }
              
              
              /* =====================================================
                 AUTOMATIC PILL REPLACEMENT
                 ===================================================== */
              
              let pillTimer = null
              
              
              const scheduleNextPill = () => {
              
                pillTimer = gsap.delayedCall(
                  3.5,
                  () => {
              
                    replaceNextPill()
              
                    scheduleNextPill()
                  }
                )
              }
              
              
              scheduleNextPill()
              
              
              /* =====================================================
                 SUBTLE FLOATING MOTION
                 ===================================================== */
              
              concerns.forEach(
                (
                  concern,
                  index
                ) => {
              
                  gsap.to(
                    concern,
                    {
                      y:
                        index % 2 === 0
                          ? -5
                          : 5,
              
                      duration:
                        2.4 +
                        index * 0.15,
              
                      ease:
                        "sine.inOut",
              
                      yoyo: true,
              
                      repeat: -1,
              
                      delay:
                        index * 0.2,
                    }
                  )
                }
              )
            }

        /*
        =========================================================
        CREATE BOTH AUTOMATIC ANIMATIONS
        =========================================================
        */

        createChecklistLoop()

        createConcernLoop()


        /*
        =========================================================
        SMALL RIGHT-SIDE MOVEMENT

        The heading doesn't scroll away.
        It has only a very subtle parallax.
        =========================================================
        */

        if (
          !reduceMotion
        ) {

          const title =
            root.querySelector(
              "[data-sound-title]"
            )


          if (title) {

            gsap.to(
              title,
              {
                y: -8,

                ease: "none",

                scrollTrigger: {
                  trigger: root,

                  start: "top bottom",

                  end: "bottom top",

                  scrub: 1,

                  invalidateOnRefresh:
                    true,
                },
              }
            )
          }
        }


        /*
        =========================================================
        RESPONSIVE REBUILD
        =========================================================
        */

        const handleResize =
          () => {

            clearTimeout(
              resizeTimer
            )


            resizeTimer =
              setTimeout(
                () => {

                  createChecklistLoop()

                  createConcernLoop()

                  ScrollTrigger.refresh()

                },
                120
              )
          }


        window.addEventListener(
          "resize",
          handleResize,
          {
            passive: true,
          }
        )


        /*
        =========================================================
        INITIAL REFRESH
        =========================================================
        */

        requestAnimationFrame(
          () => {
            ScrollTrigger.refresh()
          }
        )


        /*
        =========================================================
        CLEANUP
        =========================================================
        */

        return () => {

          checklistLoop?.kill()

          concernLoop?.kill()

          clearTimeout(
            resizeTimer
          )


          window.removeEventListener(
            "resize",
            handleResize
          )
        }

      }, root)


    return () => {
      ctx.revert()
    }

  }, [rootRef])
}