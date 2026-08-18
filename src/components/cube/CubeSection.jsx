import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import CubeScene from "./CubeScene"

export default function CubeSection() {
  const sectionRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[680px] w-full overflow-hidden bg-b2b-bg text-b2b-ink max-[900px]:min-h-[620px] max-[560px]:min-h-[560px]"
      data-cube-section
    >
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[75vw] w-[75vw] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-b2b-lime/[0.07] blur-[150px]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-[0.18] [background-image:radial-gradient(rgba(19,19,17,0.22)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />

      <div className="pointer-events-none absolute left-6 top-6 z-20 text-[9px] font-extrabold uppercase tracking-[0.18em] text-b2b-muted md:left-10 md:top-8">
        Built to move
      </div>

      <Canvas
        className="absolute inset-0 z-10"
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 8], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <CubeScene sectionRef={sectionRef} />
      </Canvas>
    </section>
  )
}
