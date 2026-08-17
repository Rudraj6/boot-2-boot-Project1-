import { forwardRef } from "react"

const Button = forwardRef(function Button(
  { href = "#contact", variant = "primary", children, className = "", ...props },
  ref
) {
  return (
    <a ref={ref} href={href} className={`btn btn-${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
})

export default Button
