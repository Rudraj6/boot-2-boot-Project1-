const layout = {
  website: `
    left-[3%]
    top-[11%]
    w-[185px]

    max-[1180px]:left-[2%]
    max-[1180px]:top-[12%]
    max-[1180px]:w-[170px]

    max-[900px]:left-[3%]
    max-[900px]:top-[12%]
    max-[900px]:w-[150px]

    max-[560px]:left-[2%]
    max-[560px]:top-[11%]
    max-[560px]:w-[125px]
  `,

  performance: `
    right-[3%]
    top-[18%]
    w-[185px]

    max-[1180px]:right-[2%]
    max-[1180px]:top-[18%]
    max-[1180px]:w-[170px]

    max-[900px]:right-[3%]
    max-[900px]:top-[18%]
    max-[900px]:w-[150px]

    max-[560px]:right-[2%]
    max-[560px]:top-[19%]
    max-[560px]:w-[125px]
  `,

  ecommerce: `
    left-[7%]
    bottom-[7%]
    w-[185px]

    max-[1180px]:left-[5%]
    max-[1180px]:bottom-[7%]
    max-[1180px]:w-[170px]

    max-[900px]:left-[4%]
    max-[900px]:bottom-[8%]
    max-[900px]:w-[150px]

    max-[560px]:left-[3%]
    max-[560px]:bottom-[8%]
    max-[560px]:w-[125px]
  `,

  brand: `
    right-[8%]
    bottom-[10%]
    w-[185px]

    max-[1180px]:right-[6%]
    max-[1180px]:bottom-[9%]
    max-[1180px]:w-[170px]

    max-[900px]:right-[4%]
    max-[900px]:bottom-[9%]
    max-[900px]:w-[150px]

    max-[560px]:right-[3%]
    max-[560px]:bottom-[9%]
    max-[560px]:w-[125px]
  `,
}

/*
 * Temporary visual assets.
 *
 * These are intentionally photographic/editorial rather than
 * dashboard screenshots so the cards behave visually like
 * the reference cards.
 *
 * Later these URLs can be replaced with actual Boot2Boot
 * campaign/project images without changing this component.
 */
const cardImages = {
  website:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",

  performance:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",

  ecommerce:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",

  brand:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
}


const cardLabels = {
  website: "Campaign Landing",
  performance: "Performance Creative",
  ecommerce: "E-commerce Experience",
  brand: "Brand Identity",
}


const cardAlt = {
  website:
    "Modern workspace representing a digital marketing campaign",

  performance:
    "Marketing analytics and performance strategy",

  ecommerce:
    "Modern retail environment representing an e-commerce campaign",

  brand:
    "Digital commerce and brand experience",
}


export default function CampaignCard({ card }) {
  const image =
    card.image ||
    cardImages[card.id]

  const label =
    card.label ||
    cardLabels[card.id] ||
    card.title ||
    card.category

  return (
    <div
      className={`
        absolute
        pointer-events-auto

        will-change-transform

        ${layout[card.id] || ""}

        hover:z-[30]
        focus-within:z-[30]
      `}
      data-card-wrap
      data-id={card.id}
      data-depth={card.parallax}
      data-layer={card.layer}
    >

      {/* ==================================================
          SCROLL TRANSFORM LAYER
          ================================================== */}

      <div
        className="
          h-full
          w-full

          will-change-transform
        "
        data-card-scroll
      >

        {/* ==================================================
            PARALLAX LAYER
            ================================================== */}

        <div
          className="
            h-full
            w-full

            will-change-transform
          "
          data-card-parallax
        >

          {/* ==================================================
              FLOATING LAYER
              ================================================== */}

          <div
            className="
              h-full
              w-full

              will-change-transform
            "
            data-card-float
          >

            {/* ==================================================
                REFERENCE-STYLE CARD
                ================================================== */}

<article
  className="
    group
    relative

    flex
    h-auto
    w-full
    flex-col

    overflow-hidden

    rounded-[10px]

    border-[1.5px]
    border-solid
    border-[#131311]

    bg-[#F5F4EE]

    p-[9px]
    pb-[12px]

    gap-[10px]

    shadow-[4px_4px_0_#131311]

    will-change-transform

    transition-[transform,box-shadow]
    duration-300
    ease-out

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#131311]/30
  "
  data-campaign-card
  data-rotate={card.rotate}
  data-hover-rotate={card.hoverRotate}
  style={{
    aspectRatio: "0.859729",
    transform: `rotate(${card.rotate}deg)`,
  }}
  aria-label={label}
  tabIndex={0}
>

              {/* ==================================================
                  IMAGE
                  ================================================== */}

<div
  className="
    relative
    aspect-[1.333333]
    w-full

    overflow-hidden
    rounded-[7px]

    bg-[#E8E7E0]
  "
>
  <img
    src={image}
    alt={cardAlt[card.id] || label}
    className="
      block
      h-full
      w-full

      rounded-[inherit]

      object-cover
      object-center

      select-none

      transition-transform
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]

      group-hover:scale-[1.025]
    "
    loading="eager"
    draggable="false"
  />
</div>


              {/* ==================================================
                  IMAGE TITLE
                  ================================================== */}

<div className="w-full">
  <p
    className="
      m-0

      text-[13px]
      font-semibold
      leading-[1.1]
      tracking-[-0.025em]

      text-[#131311]

      max-[1180px]:text-[12px]
      max-[900px]:text-[11px]
      max-[560px]:text-[10px]
    "
  >
    {label}
  </p>
</div>

            </article>

          </div>

        </div>

      </div>

    </div>
  )
}