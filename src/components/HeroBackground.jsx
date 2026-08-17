export default function HeroBackground() {
  return (
    <div className="hero-bg" data-hero-bg aria-hidden="true">
      <div className="hero-shape-wrap" data-hero-shape-wrap>
        <div className="hero-shape" data-hero-shape />
      </div>
      <svg className="hero-scribble" viewBox="0 0 120 40" fill="none">
        <path d="M4 22C22 6 38 34 56 18C70 6 82 28 116 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
