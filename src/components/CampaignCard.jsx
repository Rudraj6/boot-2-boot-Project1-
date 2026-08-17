function WebsiteCard() {
  return <div className="mock mock-browser">
    <div className="mock-chrome"><span className="mock-dots"><i/><i/><i/></span><span className="mock-url">boot2boot.com</span></div>
    <div className="mock-page">
      <div className="mock-page-nav"><strong>BOOT 2 BOOT</strong><span>GROWTH</span></div>
      <p className="mock-kicker">DIGITAL MARKETING</p>
      <h3>Make<br/>attention<br/>convert.</h3>
      <div className="mock-row"><span className="mock-chip">Launch</span><span className="mock-mini-cta">View work</span></div>
      <div className="mock-band" />
    </div>
  </div>
}

function SocialCard() {
  return <div className="mock mock-social">
    <div className="mock-social-meta"><span className="mock-avatar"/><span>boot2boot</span><em>NEW</em></div>
    <p className="mock-label">SOCIAL</p>
    <h3>Ideas<br/>people<br/>remember.</h3>
    <span className="mock-lime-cta">View work</span>
    <div className="mock-social-foot">CREATIVE / CONTENT</div>
  </div>
}

function PerformanceCard() {
  return <div className="mock mock-ad">
    <p className="mock-label">PERFORMANCE</p>
    <h3>Grow<br/>smarter.</h3>
    <p className="mock-ad-copy">Campaigns built around the numbers that matter.</p>
    <span className="mock-lime-cta">Learn more</span>
  </div>
}

function EcommerceCard() {
  return <div className="mock mock-shop">
    <div className="mock-product"><span className="mock-bottle"/></div>
    <div className="mock-shop-copy"><p className="mock-label">E-COMMERCE</p><h3>More than a storefront.</h3><p>Stories designed to convert.</p><span className="mock-lime-cta">Shop the look</span></div>
  </div>
}

function SeoCard() {
  return <div className="mock mock-search">
    <div className="mock-searchbar"><span className="mock-search-icon"/> digital marketing agency</div>
    <ul><li><span>boot2boot.com</span><strong>Boot 2 Boot — Digital Marketing</strong><p>Strategy, creative, performance.</p></li><li><span>Related</span><strong>Growth that compounds</strong></li></ul>
  </div>
}

function BrandCard() {
  return <div className="mock mock-poster"><p className="mock-label">BRAND</p><h3>Your brand<br/>should feel<br/>like you.</h3><span className="mock-poster-mark">B2B</span></div>
}

function AnalyticsCard() {
  return <div className="mock mock-data"><p className="mock-label">PROOF</p><strong>37%</strong><p>Average increase in sales</p><svg viewBox="0 0 120 28" fill="none"><path d="M2 22 L22 16 L42 18 L62 10 L82 12 L102 4 L118 8" stroke="#131311" strokeWidth="1.6" strokeLinecap="round"/><circle cx="118" cy="8" r="3" fill="#C6FD50" stroke="#131311" strokeWidth="1"/></svg></div>
}

const interiors = { website: WebsiteCard, social: SocialCard, performance: PerformanceCard, ecommerce: EcommerceCard, seo: SeoCard, brand: BrandCard, analytics: AnalyticsCard }

export default function CampaignCard({ card }) {
  const Interior = interiors[card.type]
  return (
    <div className={`card-wrap card-${card.id} card-layer-${card.layer}`} data-card-wrap data-id={card.id} data-depth={card.parallax} data-layer={card.layer}>
      <div className="card-scroll" data-card-scroll>
        <div className="card-parallax" data-card-parallax>
          <div className="card-float" data-card-float>
            <article className="campaign-card" data-campaign-card data-rotate={card.rotate} data-hover-rotate={card.hoverRotate} style={{ "--rest-rotate": `${card.rotate}deg` }} aria-label={`${card.category}: ${card.title}`} tabIndex={0}>
              <span className="card-tag">{card.category}</span>
              {Interior ? <Interior /> : null}
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
