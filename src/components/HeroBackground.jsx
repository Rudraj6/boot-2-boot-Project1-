export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" data-hero-bg aria-hidden="true">
      <div
        className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(19,19,17,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(19,19,17,0.045)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div
        className="absolute left-1/2 top-[49%] aspect-square w-[68vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 will-change-transform max-[900px]:top-[48%] max-[900px]:w-[86vw] max-[560px]:w-[118vw]"
        data-hero-shape-wrap
      >
        <div
          className="h-full w-full rounded-full bg-b2b-surface2 shadow-[inset_0_0_0_1px_rgba(19,19,17,0.02)]"
          data-hero-shape
        />
      </div>

      <svg className="absolute right-[21%] top-[20%] w-[100px] text-b2b-muted2 opacity-80 max-[900px]:hidden" viewBox="0 0 120 40" fill="none">
        <path d="M4 22C22 6 38 34 56 18C70 6 82 28 116 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
