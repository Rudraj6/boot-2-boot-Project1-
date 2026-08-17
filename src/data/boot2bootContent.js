export const siteContent = {
  name: "BOOT 2 BOOT",
  shortName: "B2B",
  location: "Mumbai",
  eyebrow: "Strategy · Creative · Performance",
  headline: "Marketing Without Borders.",
  description:
    "We combine strategy, creative and performance marketing to turn attention into measurable growth — without making your brand feel like everyone else.",
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
  {
    id: "website",
    type: "website",
    title: "Campaign Landing Page",
    category: "WEB",
    layer: "main",

    rotate: -13,
    hoverRotate: -9,

    enter: {
      x: -90,
      y: -30,
    },

    float: {
      y: 5,
      rotation: 0.7,
      duration: 5.8,
    },

    parallax: 7,

    scroll: {
      x: -75,
      y: -35,
    },
  },

  {
    id: "performance",
    type: "performance",
    title: "Performance Creative",
    category: "ADS",
    layer: "main",

    rotate: 18,
    hoverRotate: 13,

    enter: {
      x: 100,
      y: -45,
    },

    float: {
      y: 5,
      rotation: -0.8,
      duration: 6.2,
    },

    parallax: 8,

    scroll: {
      x: 85,
      y: -30,
    },
  },

  {
    id: "ecommerce",
    type: "ecommerce",
    title: "E-commerce Experience",
    category: "SHOP",
    layer: "front",

    rotate: -8,
    hoverRotate: -4,

    enter: {
      x: -70,
      y: 45,
    },

    float: {
      y: 6,
      rotation: 0.6,
      duration: 6.8,
    },

    parallax: 6,

    scroll: {
      x: -65,
      y: 65,
    },
  },

  {
    id: "brand",
    type: "brand",
    title: "Brand Identity",
    category: "BRAND",
    layer: "front",

    rotate: 11,
    hoverRotate: 6,

    enter: {
      x: 75,
      y: 55,
    },

    float: {
      y: 5,
      rotation: -0.7,
      duration: 5.9,
    },

    parallax: 7,

    scroll: {
      x: 75,
      y: 65,
    },
  },
]