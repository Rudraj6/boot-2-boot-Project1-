import { useRef } from "react"

import ChecklistItem from "./ChecklistItem.jsx"
import FloatingConcern from "./FloatingConcern.jsx"

import useSoundFamiliarAnimation from "./useSoundFamiliarAnimation.js"

import {
  soundFamiliarContent,
} from "../../data/soundFamiliarContent.js"


export default function SoundFamiliar() {
  const rootRef = useRef(null)

  useSoundFamiliarAnimation(rootRef)

  return (
<section
  ref={rootRef}
  id="sound-familiar"

  className="
    relative

    min-h-[190vh]

    bg-b2b-bg

    px-3
    py-8

    max-[900px]:min-h-0
    max-[900px]:px-3
    max-[900px]:py-6
  "
>

<div
  className="
    sticky
    top-[24px]

    flex
    items-start
    justify-center

    max-[900px]:relative
    max-[900px]:top-auto
  "
>

<div
  className="
    relative

    mx-auto

    flex

    h-[640px]

    w-full
    max-w-[1575px]

    overflow-hidden

    rounded-[16px]

    border
    border-b2b-ink

    bg-[#151513]

    shadow-[6px_6px_0_#c6fd50]

    max-[1100px]:h-[600px]

    max-[900px]:h-auto
    max-[900px]:min-h-[700px]

    max-[560px]:min-h-[620px]

    max-[560px]:rounded-[12px]
    max-[560px]:shadow-[4px_4px_0_#c6fd50]
  "
  data-sound-panel
>

          {/* ==================================================
              LEFT CHECKLIST AREA
              ================================================== */}

          <div
            className="
              relative

              h-full
              w-[50%]

              overflow-hidden

              z-[5]

              max-[900px]:w-full
             
            "
            data-checklist-viewport
          >

            {/* Top fade */}
            <div
              className="
                pointer-events-none

                absolute
                inset-x-0
                top-0

                z-20

                h-[100px]

                bg-gradient-to-b
                from-[#151513]
                to-transparent
              "
            />


            {/* Bottom fade */}
            <div
              className="
                pointer-events-none

                absolute
                inset-x-0
                bottom-0

                z-20

                h-[110px]

                bg-gradient-to-t
                from-[#151513]
                to-transparent
              "
            />


            <div
              className="
                absolute
                left-0
                right-0
                top-0

                flex
                flex-col

                gap-[5px]

                px-3
                py-3

                will-change-transform

                max-[900px]:relative
                max-[900px]:transform-none

                max-[900px]:px-2
                max-[900px]:py-2
              "
              data-checklist-track
            >

              {/* First copy */}
              {soundFamiliarContent.checklist.map(
                (item, index) => (
                  <ChecklistItem
                    key={`first-${item.id}`}
                    text={item.text}
                    index={index}
                  />
                )
              )}


              {/* Duplicate copy for seamless scrolling */}
              {soundFamiliarContent.checklist.map(
                (item, index) => (
                  <ChecklistItem
                    key={`second-${item.id}`}
                    text={item.text}
                    index={index}
                    duplicate
                  />
                )
              )}

            </div>

          </div>


          {/* ==================================================
              RIGHT CONTENT
              ================================================== */}

          <div
            className="
              relative

              flex
              h-full
              w-[55%]

              flex-col
              justify-center

              px-[clamp(40px,6vw,100px)]

              max-[900px]:h-auto
              max-[900px]:min-h-[470px]
              max-[900px]:w-full

              max-[560px]:min-h-[400px]
              max-[560px]:px-6
            "
          >

            <p
              className="
                mb-5

                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]

                text-white/55
              "
              data-sound-eyebrow
            >
              {soundFamiliarContent.eyebrow}
            </p>


            <h2
              className="
                m-0

                max-w-[720px]

                text-[clamp(3rem,5.4vw,6rem)]

                font-black
                leading-[0.88]

                tracking-[-0.065em]

                text-white

                max-[1100px]:text-[clamp(2.8rem,5.5vw,4.8rem)]

                max-[900px]:text-[clamp(3rem,8vw,5rem)]

                max-[560px]:text-[clamp(2.5rem,12vw,4rem)]
              "
              data-sound-title
            >
              {soundFamiliarContent.title}
            </h2>


            <p
              className="
                mt-7

                max-w-[500px]

                text-[13px]
                font-medium
                leading-[1.45]

                text-white/55

                max-[560px]:mt-5
                max-[560px]:text-[12px]
              "
              data-sound-description
            >
              {soundFamiliarContent.description}
            </p>


            <div
              className="
                mt-8

                max-w-[500px]

                border-t
                border-white/[0.12]

                pt-5
              "
              data-sound-solution
            >

              <p
                className="
                  m-0

                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.14em]

                  text-b2b-lime
                "
              >
                {soundFamiliarContent.solutionEyebrow}
              </p>


              <p
                className="
                  mt-2

                  text-[15px]
                  font-semibold
                  leading-[1.25]

                  text-white
                "
              >
                {soundFamiliarContent.solutionTitle}
              </p>

            </div>

          </div>


          {/* ==================================================
              FLOATING CONCERNS
              ================================================== */}

          {soundFamiliarContent.concerns.map(
            (concern) => (
              <FloatingConcern
                key={concern.id}
                concern={concern}
              />
            )
          )}

        </div>

      </div>

    </section>
  )
}