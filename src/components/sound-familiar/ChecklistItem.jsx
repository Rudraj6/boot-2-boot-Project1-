export default function ChecklistItem({
    text,
    index,
    duplicate = false,
  }) {
    return (
      <div
        className="
          relative
  
          flex
          min-h-[58px]
          w-full
  
          shrink-0
          items-center
  
          gap-4
  
          rounded-[7px]
  
          border
          border-white/[0.16]
  
          bg-[#292927]
  
          px-5
  
          text-left
  
          shadow-[0_1px_0_rgba(255,255,255,0.03)]
  
          max-[1100px]:min-h-[54px]
          max-[1100px]:px-4
  
          max-[900px]:min-h-[50px]
  
          max-[560px]:min-h-[47px]
          max-[560px]:gap-3
          max-[560px]:px-3
        "
        data-checklist-item
        data-index={index}
        data-duplicate={duplicate}
      >
  
        {/* Checkbox */}
  
        <span
          className="
            flex
            h-[20px]
            w-[20px]
  
            shrink-0
  
            items-center
            justify-center
  
            rounded-[3px]
  
            border
            border-white/60
  
            max-[560px]:h-[17px]
            max-[560px]:w-[17px]
          "
          aria-hidden="true"
        />
  
  
        {/* Text */}
  
        <span
          className="
            flex-1
  
            text-[15px]
            font-medium
            leading-none
  
            tracking-[-0.025em]
  
            text-white/70
  
            max-[1100px]:text-[13px]
  
            max-[900px]:text-[12px]
  
            max-[560px]:text-[10px]
          "
        >
          {text}
        </span>
  
  
        {/* Three-dot menu */}
  
        <span
          className="
            flex
            shrink-0
            items-center
            gap-[3px]
          "
          aria-hidden="true"
        >
          <i className="h-[3px] w-[3px] rounded-full bg-white/50" />
          <i className="h-[3px] w-[3px] rounded-full bg-white/50" />
          <i className="h-[3px] w-[3px] rounded-full bg-white/50" />
        </span>
  
      </div>
    )
  }