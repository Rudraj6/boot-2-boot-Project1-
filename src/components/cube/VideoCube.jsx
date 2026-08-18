import { useEffect, useMemo } from "react"
import * as THREE from "three"

const videoSources = [
  "/videos/showreel1.mp4",
  "/videos/showreel2.mp4",
  "/videos/showreel3.mp4",
  "/videos/showreel4.mp4",
  "/videos/showreel4.mp4",
  "/videos/showreel4.mp4",
]

export default function VideoCube({ cubeRef }) {
  const videoElements = useMemo(() => {
    return videoSources.map((src) => {
      const video = document.createElement("video")
      video.src = src
      video.muted = true
      video.loop = true
      video.playsInline = true
      video.crossOrigin = "anonymous"
      video.preload = "auto"
      return video
    })
  }, [])

  const textures = useMemo(() => {
    return videoElements.map((video) => {
      const texture = new THREE.VideoTexture(video)
      texture.colorSpace = THREE.SRGBColorSpace
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      return texture
    })
  }, [videoElements])

  useEffect(() => {
    videoElements.forEach((video) => video.play().catch(() => {}))

    return () => {
      videoElements.forEach((video) => {
        video.pause()
        video.removeAttribute("src")
        video.load()
        video.remove()
      })
      textures.forEach((texture) => texture.dispose())
    }
  }, [videoElements, textures])

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.FrontSide,
          toneMapped: false,
        })
    )
  }, [textures])

  useEffect(() => {
    return () => materials.forEach((material) => material.dispose())
  }, [materials])

  return (
    <group ref={cubeRef}>
      <mesh position={[0, 0, 1]}>
        <planeGeometry args={[2, 2]} />
        <primitive object={materials[0]} attach="material" />
      </mesh>

      <mesh position={[0, 0, -1]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[2, 2]} />
        <primitive object={materials[1]} attach="material" />
      </mesh>

      <mesh position={[1, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 2]} />
        <primitive object={materials[2]} attach="material" />
      </mesh>

      <mesh position={[-1, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[2, 2]} />
        <primitive object={materials[3]} attach="material" />
      </mesh>

      <mesh position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <primitive object={materials[4]} attach="material" />
      </mesh>

      <mesh position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <primitive object={materials[5]} attach="material" />
      </mesh>
    </group>
  )
}
