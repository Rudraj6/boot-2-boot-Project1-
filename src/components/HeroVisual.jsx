import CampaignCard from "./CampaignCard.jsx"
import { campaignCards } from "../data/boot2bootContent.js"

export default function HeroVisual() {
  return (
    <div className="hero-visual" data-hero-visual aria-hidden="false">
      {campaignCards.map((card) => (
        <CampaignCard key={card.id} card={card} />
      ))}
      <div className="hero-note" data-hero-note>
        <svg viewBox="0 0 70 36" fill="none" aria-hidden="true">
          <path
            d="M4 28C18 8 38 6 66 18"
            stroke="#111"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M58 12 L66 18 L56 22" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span>Campaign work</span>
      </div>
    </div>
  )
}
