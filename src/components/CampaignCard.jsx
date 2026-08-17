function WebsiteCard() {
  return (
    <div className="mock mock-browser">
      <div className="mock-chrome">
        <span className="mock-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mock-url">boot2boot.com / growth</span>
      </div>
      <div className="mock-page">
        <div className="mock-page-nav">
          <strong>BOOT 2 BOOT</strong>
          <span>Campaign</span>
        </div>
        <p className="mock-kicker">Performance · Social · SEO</p>
        <h3>
          Digital
          <br />
          Growth.
        </h3>
        <div className="mock-row">
          <span className="mock-chip">Launch</span>
          <span className="mock-mini-cta">See the work</span>
        </div>
        <div className="mock-band" />
      </div>
    </div>
  )
}

function SocialCard() {
  return (
    <div className="mock mock-social">
      <div className="mock-social-meta">
        <span className="mock-avatar" />
        <span>boot2boot</span>
        <em>NEW</em>
      </div>
      <p className="mock-label">NEW CAMPAIGN</p>
      <h3>
        Building brands
        <br />
        that get noticed.
      </h3>
      <span className="mock-lime-cta">View work</span>
      <div className="mock-social-foot">BOOT 2 BOOT</div>
    </div>
  )
}

function PerformanceCard() {
  return (
    <div className="mock mock-ad">
      <p className="mock-label">PAID SOCIAL</p>
      <h3>
        Grow
        <br />
        Smarter.
      </h3>
      <p className="mock-ad-copy">Creative built for performance, not just attention.</p>
      <span className="mock-lime-cta">Learn more</span>
    </div>
  )
}

function EcommerceCard() {
  return (
    <div className="mock mock-shop">
      <div className="mock-product" aria-hidden="true">
        <span className="mock-bottle" />
      </div>
      <div className="mock-shop-copy">
        <p className="mock-label">E-COMMERCE</p>
        <h3>Studio Set 02</h3>
        <p>Product stories that convert.</p>
        <span className="mock-lime-cta">Shop the look</span>
      </div>
    </div>
  )
}

function SeoCard() {
  return (
    <div className="mock mock-search">
      <div className="mock-searchbar">
        <span className="mock-search-icon" />
        digital marketing mumbai
      </div>
      <ul>
        <li>
          <span>boot2boot.com</span>
          <strong>Boot 2 Boot — Digital Marketing Agency</strong>
          <p>Data-driven campaigns across SEO, social, and performance.</p>
        </li>
        <li>
          <span>Related</span>
          <strong>Performance marketing that compounds</strong>
        </li>
      </ul>
    </div>
  )
}

function BrandCard() {
  return (
    <div className="mock mock-poster">
      <p className="mock-label">BRAND</p>
      <h3>
        Your brand
        <br />
        deserves
        <br />
        attention.
      </h3>
      <span className="mock-poster-mark">B2B</span>
    </div>
  )
}

function AnalyticsCard() {
  return (
    <div className="mock mock-data">
      <p className="mock-label">PROOF</p>
      <strong>37%</strong>
      <p>Average increase in sales</p>
      <svg viewBox="0 0 120 28" fill="none" aria-hidden="true">
        <path
          d="M2 22 L22 16 L42 18 L62 10 L82 12 L102 4 L118 8"
          stroke="#111"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="118" cy="8" r="3" fill="#C7FF3D" stroke="#111" strokeWidth="1" />
      </svg>
    </div>
  )
}

const interiors = {
  website: WebsiteCard,
  social: SocialCard,
  performance: PerformanceCard,
  ecommerce: EcommerceCard,
  seo: SeoCard,
  brand: BrandCard,
  analytics: AnalyticsCard,
}

export default function CampaignCard({ card }) {
  const Interior = interiors[card.type]

  return (
    <div
      className={`card-wrap card-${card.id} card-layer-${card.layer}`}
      data-card-wrap
      data-id={card.id}
      data-depth={card.parallax}
      data-layer={card.layer}
    >
      <div className="card-scroll" data-card-scroll>
        <div className="card-parallax" data-card-parallax>
          <div className="card-float" data-card-float>
            <article
              className="campaign-card"
              data-campaign-card
              data-rotate={card.rotate}
              data-hover-rotate={card.hoverRotate}
              style={{ "--rest-rotate": `${card.rotate}deg` }}
              aria-label={`${card.category}: ${card.title}`}
              tabIndex={0}
            >
              <div className="card-label">{card.category}</div>
              {Interior ? <Interior /> : null}
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
