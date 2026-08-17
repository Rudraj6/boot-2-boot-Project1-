import Button from "./Button.jsx"
import { siteContent } from "../data/boot2bootContent.js"

export default function Navbar() {
  return (
    <header
      className="absolute left-1/2 top-[22px] z-40 flex w-[calc(100%-48px)] max-w-[1220px] -translate-x-1/2 items-center justify-between gap-6 transition-[transform,opacity,background,border-color,box-shadow] duration-300 data-[scrolled=true]:fixed data-[scrolled=true]:top-[14px] data-[scrolled=true]:rounded-full data-[scrolled=true]:border data-[scrolled=true]:border-[rgba(19,19,17,0.12)] data-[scrolled=true]:bg-[rgba(243,242,234,0.9)] data-[scrolled=true]:px-3 data-[scrolled=true]:py-[7px] data-[scrolled=true]:shadow-[0_12px_28px_rgba(19,19,17,0.08)] data-[scrolled=true]:backdrop-blur-[14px] max-[900px]:top-4 max-[900px]:w-[calc(100%-32px)]"
      data-nav
      data-scrolled="false"
      data-open="false"
    >
      <a className="flex shrink-0 items-center gap-[9px]" href="#top" aria-label="Boot 2 Boot home">
        <span className="grid h-7 w-7 place-items-center rounded-[7px] border border-b2b-ink bg-b2b-lime text-xs font-black" aria-hidden="true">
          2
        </span>
        <span className="text-xs font-black tracking-[0.16em]">BOOT 2 BOOT</span>
      </a>

      <nav className="ml-auto flex items-center gap-[26px] max-[900px]:absolute max-[900px]:right-0 max-[900px]:top-[calc(100%+10px)] max-[900px]:hidden max-[900px]:w-[220px] max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-1 max-[900px]:rounded-2xl max-[900px]:border max-[900px]:border-b2b-ink max-[900px]:bg-b2b-surface max-[900px]:p-2 max-[900px]:shadow-[6px_6px_0_#131311] max-[900px]:data-[open=true]:flex" aria-label="Primary navigation">
        {siteContent.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative py-2 text-[11px] font-bold uppercase tracking-[0.08em] after:absolute after:bottom-[3px] after:left-0 after:right-full after:h-0.5 after:bg-b2b-lime after:transition-[right] after:duration-200 hover:after:right-0 max-[900px]:rounded-lg max-[900px]:px-3 max-[900px]:hover:bg-b2b-bg"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Button className="ml-2 max-[900px]:hidden" href="#contact" variant="primary">
        {siteContent.navCta}
      </Button>

      <button
        className="hidden h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-b2b-ink bg-transparent max-[900px]:flex"
        type="button"
        aria-label="Open menu"
        data-nav-menu
        aria-expanded="false"
      >
        <span className="h-0.5 w-[15px] rounded-full bg-b2b-ink" />
        <span className="h-0.5 w-[15px] rounded-full bg-b2b-ink" />
      </button>
    </header>
  )
}
