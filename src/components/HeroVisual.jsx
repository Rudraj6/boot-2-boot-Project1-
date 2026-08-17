import CampaignCard from "./CampaignCard.jsx"
import { campaignCards } from "../data/boot2bootContent.js"


export default function HeroVisual() {
  return (
    <>
      {/* =====================================================
          DESKTOP CARD COMPOSITION
          ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[7]

          max-[900px]:hidden
        "
        data-hero-visual
        aria-hidden="false"
      >

        {campaignCards.map((card) => (
          <CampaignCard
            key={card.id}
            card={card}
          />
        ))}

      </div>


      {/* =====================================================
          MOBILE CARD TRACK
          ===================================================== */}

      <div
        className="
          relative

          mt-[38px]

          hidden
          h-[235px]

          w-full

          overflow-hidden

          pointer-events-none

          max-[900px]:block

          max-[560px]:mt-[30px]
          max-[560px]:h-[205px]
        "
        data-mobile-card-viewport
        aria-hidden="true"
      >

        <div
          className="
            flex
            w-max
            items-start
          "
          data-mobile-card-track
        >

          {/* =================================================
              FIRST CARD GROUP
              ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-start
              gap-[18px]

              pr-[18px]

              max-[560px]:gap-[14px]
              max-[560px]:pr-[14px]
            "
            data-mobile-card-group
          >

            {campaignCards.map((card) => (
              <CampaignCard
                key={`mobile-${card.id}`}
                card={card}
                mobile
              />
            ))}

          </div>


          {/* =================================================
              DUPLICATE GROUP

              This is not an additional card.
              It creates the seamless looping track.
              ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-start
              gap-[18px]

              pr-[18px]

              max-[560px]:gap-[14px]
              max-[560px]:pr-[14px]
            "
            data-mobile-card-group
            aria-hidden="true"
          >

            {campaignCards.map((card) => (
              <CampaignCard
                key={`mobile-loop-${card.id}`}
                card={card}
                mobile
              />
            ))}

          </div>

        </div>

      </div>
    </>
  )
}