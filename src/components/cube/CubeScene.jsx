import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import VideoCube from "./VideoCube"

gsap.registerPlugin(ScrollTrigger)

export default function CubeScene({ sectionRef }) {
  const cubeRef = useRef(null)

  useLayoutEffect(() => {
    const cube = cubeRef.current
    const section = sectionRef?.current

    if (!cube || !section) return

    const ctx = gsap.context(() => {
      const mobileQuery = window.matchMedia("(max-width: 900px)")
      const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

      const getCubeTargetScale = () => (mobileQuery.matches ? 1.35 : 2)
      const getScrollDistance = () => (mobileQuery.matches ? 1900 : 2600)

      gsap.set(cube.position, { x: 0, y: 0, z: 0 })
      gsap.set(cube.scale, { x: 0.28, y: 0.28, z: 0.28 })
      gsap.set(cube.rotation, { x: 0, y: 0, z: 0 })

      if (reduceMotionQuery.matches) {
        const scale = getCubeTargetScale()
        gsap.set(cube.scale, { x: scale, y: scale, z: scale })
        return
      }

      const mm = gsap.matchMedia()

      mm.add(
        {
          desktop: "(min-width: 901px)",
          mobile: "(max-width: 900px)",
        },
        () => {
          const isMobile = mobileQuery.matches
          const targetScale = getCubeTargetScale()
          const pullBackScale = isMobile ? 1.18 : 1.72
          const rotationDuration = isMobile ? 2.15 : 2
          const growDuration = isMobile ? 1.05 : 1.2

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${getScrollDistance()}`,
              scrub: true,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: 10,
              markers: false,
            },
          })

          timeline.to(
            cube.scale,
            {
              x: 1.65,
              y: 1.75,
              z: 1.65,
              duration: 1.2,
              ease: "power2.out",
            },
            0
          );

          timeline.to(cube.rotation, {
            x: 0,
            y: Math.PI * 2,
            z: 0,
            duration: rotationDuration,
            ease: "none",
          }, 0)

          timeline.to(cube.position, {
            x: 0,
            y: 0.55,
            z: 0,
            duration: rotationDuration,
            ease: "none",
          }, 0)

          timeline.to(cube.scale, {
            x: pullBackScale,
            y: pullBackScale,
            z: pullBackScale,
            duration: 0.35,
            ease: "power2.inOut",
          }, rotationDuration)

          return () => timeline.kill()
        }
      )

      return () => mm.revert()
    }, section)

    return () => ctx.revert()
  }, [sectionRef])

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      <directionalLight position={[-5, 3, -5]} intensity={0.9} />
      <pointLight position={[0, 3, 4]} intensity={0.8} />
      <VideoCube cubeRef={cubeRef} />
    </>
  )
}
