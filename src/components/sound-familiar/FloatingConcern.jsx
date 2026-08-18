export default function FloatingConcern({
    concern,
  }) {
    return (
      <div
        className="
          pointer-events-none
  
          absolute
  
          z-[30]
  
          whitespace-nowrap
  
          rounded-full
  
          border
          border-[#131311]
  
          bg-b2b-lime
  
          px-4
          py-[8px]
  
          text-[11px]
          font-extrabold
          leading-none
  
          tracking-[-0.02em]
  
          text-b2b-ink
  
          shadow-[2px_3px_0_#131311]
  
          will-change-transform
  
          max-[1100px]:px-3
          max-[1100px]:py-[7px]
  
          max-[900px]:text-[9px]
  
          max-[560px]:px-2
          max-[560px]:py-[6px]
          max-[560px]:text-[8px]
        "
  
        data-floating-concern
        data-concern-id={concern.id}
      >
  
        {concern.text}
  
  
        <span
          className="
            absolute
  
            -bottom-[6px]
            left-[18px]
  
            h-0
            w-0
  
            border-l-[6px]
            border-r-[6px]
            border-t-[7px]
  
            border-l-transparent
            border-r-transparent
  
            border-t-[#131311]
          "
        />
  
        <span
          className="
            absolute
  
            -bottom-[4px]
            left-[19px]
  
            h-0
            w-0
  
            border-l-[5px]
            border-r-[5px]
            border-t-[6px]
  
            border-l-transparent
            border-r-transparent
  
            border-t-b2b-lime
          "
        />
  
      </div>
    )
  }