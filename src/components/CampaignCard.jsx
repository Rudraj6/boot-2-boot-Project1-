const layout = {
  // 1 — Top-left, partially outside the hero
  website: `
    left-[-20%]
    right-[20%]
    mx-auto
    top-[-7%]
    w-[205px]
    z-[5]

    max-[1280px]:w-[190px]
    max-[1100px]:w-[175px]
  `,

  // 2 — Top-right, partially outside the hero
  performance: `
    right-[-2%]
    top-[2%]
    w-[205px]
    z-[5]

    max-[1280px]:right-[-4%]
    max-[1280px]:w-[190px]

    max-[1100px]:right-[-5%]
    max-[1100px]:w-[175px]
  `,

  // 3 — Left-middle
  ecommerce: `
    left-[7%]
    top-[34%]
    w-[205px]
    z-[10]

    max-[1280px]:left-[5%]
    max-[1280px]:w-[185px]

    max-[1100px]:left-[4%]
    max-[1100px]:w-[170px]
  `,

  // 4 — Bottom-left, intentionally clipped
  strategy: `
    left-[19%]
    bottom-[-13%]
    w-[205px]
    z-[8]

    max-[1280px]:left-[15%]
    max-[1280px]:w-[185px]

    max-[1100px]:left-[12%]
    max-[1100px]:w-[170px]
  `,

  // 5 — Bottom-right, intentionally clipped
  brand: `
    right-[12%]
    bottom-[5%]
    
    w-[205px]
    z-[8]

    max-[1280px]:right-[9%]
    max-[1280px]:w-[185px]

    max-[1100px]:right-[7%]
    max-[1100px]:w-[170px]
  `,
}


/*
 * Temporary visual assets.
 *
 * These can later be replaced with the actual
 * Boot2Boot campaign/project images.
 */
const cardImages = {
  website:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",

  performance:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",

  ecommerce:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",

  strategy:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",

  brand:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
}


const cardLabels = {
  website: "Campaign Landing",
  performance: "Performance Creative",
  ecommerce: "E-commerce Experience",
  strategy: "Growth Strategy",
  brand: "Brand Identity",
}


const cardAlt = {
  website:
    "Modern workspace representing a digital marketing campaign",

  performance:
    "Marketing analytics and performance strategy",

  ecommerce:
    "Modern retail environment representing an e-commerce campaign",

  strategy:
    "Creative team working on a growth strategy",

  brand:
    "Digital commerce and brand experience",
}


export default function CampaignCard({
  card,
  mobile = false,
}) {
  const image =
    card.image ||
    cardImages[card.id]

  const label =
    card.label ||
    cardLabels[card.id] ||
    card.title ||
    card.category


  const wrapperClass = mobile
    ? `
      relative
      shrink-0
      w-[175px]

      max-[560px]:w-[155px]

      pointer-events-none
      will-change-transform
    `
    : `
      absolute
      pointer-events-auto
      will-change-transform

      ${layout[card.id] || ""}

      hover:z-[30]
      focus-within:z-[30]
    `


  return (
    <div
      className={wrapperClass}
      {...(!mobile && {
        "data-card-wrap": true,
        "data-id": card.id,
        "data-depth": card.parallax,
        "data-layer": card.layer,
      })}
    >

      <div
        className="
          h-full
          w-full
          will-change-transform
        "
        {...(!mobile && {
          "data-card-scroll": true,
        })}
      >

        <div
          className="
            h-full
            w-full
            will-change-transform
          "
          {...(!mobile && {
            "data-card-parallax": true,
          })}
        >

          <div
            className="
              h-full
              w-full
              will-change-transform
            "
            {...(!mobile && {
              "data-card-float": true,
            })}
          >

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
                transform: mobile
                  ? "rotate(0deg)"
                  : `rotate(${card.rotate}deg)`,
              }}
              aria-label={label}
              tabIndex={mobile ? -1 : 0}
            >

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