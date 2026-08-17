import CampaignCard from "./CampaignCard.jsx"
import { campaignCards } from "../data/boot2bootContent.js"

export default function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[7] max-[900px]:relative max-[900px]:mt-6 max-[900px]:h-[440px] max-[560px]:h-[370px]" data-hero-visual aria-hidden="false">
      {campaignCards.map((card) => <CampaignCard key={card.id} card={card} />)}
    </div>
  )
}
