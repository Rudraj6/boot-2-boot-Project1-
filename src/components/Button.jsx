import { forwardRef } from "react"

const Button = forwardRef(function Button(
  { href = "#contact", variant = "primary", children, className = "", ...props },
  ref
) {
  const styles =
    variant === "primary"
      ? "border-b2b-ink bg-b2b-lime text-b2b-ink shadow-[4px_4px_0_#131311] hover:bg-b2b-limeSoft hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#131311]"
      : "border-b2b-ink bg-b2b-surface text-b2b-ink shadow-[4px_4px_0_rgba(19,19,17,0.14)] hover:bg-b2b-ink hover:text-b2b-surface hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_rgba(19,19,17,0.35)]"

  return (
    <a
      ref={ref}
      href={href}
      className={`inline-flex min-h-[43px] items-center justify-center gap-2.5 rounded-lg border px-[17px] py-2.5 text-[11px] font-extrabold uppercase tracking-[0.05em] transition duration-300 ease-out will-change-transform ${styles} ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
})

export default Button
