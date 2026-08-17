import CampaignCard from "./CampaignCard.jsx"
import { campaignCards } from "../data/boot2bootContent.js"

export default function HeroVisual() {
  return (
    <div className="hero-visual" data-hero-visual aria-hidden="false">
      {campaignCards.map((card) => <CampaignCard key={card.id} card={card} />)}
    </div>
  )
}
