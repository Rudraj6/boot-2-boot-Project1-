import { forwardRef } from "react"
import { ArrowUpRight } from "lucide-react"

const Button = forwardRef(function Button(
  { href = "#contact", variant = "primary", children, className = "", ...props },
  ref
) {
  return (
    <a
      ref={ref}
      href={href}
      className={`btn btn-${variant} ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
    </a>
  )
})

export default Button
