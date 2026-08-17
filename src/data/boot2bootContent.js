export const siteContent = {
  name: "BOOT 2 BOOT",
  shortName: "B2B",
  location: "Mumbai",
  eyebrow: "Strategy · Creative · Performance",
  headline: "Marketing Without Borders.",
  description: "We combine strategy, creative and performance marketing to turn attention into measurable growth — without making your brand feel like everyone else.",
  primaryCta: "Get a Free Audit",
  secondaryCta: "View Our Work",
  navCta: "Let's Talk",
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
}

export const campaignCards = [
  { id: "website", type: "website", title: "Campaign Landing Page", category: "WEB", layer: "main", rotate: -7, hoverRotate: -2, enter: { x: -70, y: -20 }, float: { y: 5, rotation: .5, duration: 5.8 }, parallax: 5, scroll: { x: -100, y: -25 } },
  { id: "social", type: "social", title: "Social Creative", category: "SOCIAL", layer: "front", rotate: 4, hoverRotate: 1, enter: { x: -90, y: 25 }, float: { y: -5, rotation: -.5, duration: 6.4 }, parallax: 8, scroll: { x: -125, y: 45 } },
  { id: "performance", type: "performance", title: "Performance Creative", category: "ADS", layer: "main", rotate: 6, hoverRotate: 1.5, enter: { x: 70, y: -20 }, float: { y: 4, rotation: -.6, duration: 5.2 }, parallax: 5, scroll: { x: 100, y: -25 } },
  { id: "ecommerce", type: "ecommerce", title: "E-commerce Creative", category: "SHOP", layer: "front", rotate: -4, hoverRotate: -1, enter: { x: -60, y: 35 }, float: { y: 5, rotation: .7, duration: 6.8 }, parallax: 7, scroll: { x: -90, y: 70 } },
  { id: "seo", type: "seo", title: "Search Visibility", category: "SEO", layer: "main", rotate: -4, hoverRotate: -.8, enter: { x: 80, y: 20 }, float: { y: -4, rotation: .5, duration: 7 }, parallax: 5, scroll: { x: 120, y: 35 } },
  { id: "brand", type: "brand", title: "Brand Creative", category: "BRAND", layer: "front", rotate: 5, hoverRotate: 1.1, enter: { x: 65, y: 35 }, float: { y: 4, rotation: -.6, duration: 5.9 }, parallax: 7, scroll: { x: 105, y: 80 } },
  { id: "analytics", type: "analytics", title: "Performance Snapshot", category: "DATA", layer: "back", rotate: -5, hoverRotate: -.8, enter: { x: -20, y: -30 }, float: { y: -3, rotation: .4, duration: 6.2 }, parallax: 4, scroll: { x: -35, y: -40 } },
]
