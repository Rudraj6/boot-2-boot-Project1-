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
    layer: "back",

    rotate: -13,
    hoverRotate: -9,

    enter: {
      x: -120,
      y: -70,
    },

    float: {
      y: 5,
      rotation: 0.7,
      duration: 5.8,
    },

    parallax: 7,

    scroll: {
      x: -45,
      y: -25,
    },
  },

  {
    id: "performance",
    type: "performance",
    title: "Performance Creative",
    category: "ADS",
    layer: "back",

    rotate: 17,
    hoverRotate: 12,

    enter: {
      x: 120,
      y: -55,
    },

    float: {
      y: 5,
      rotation: -0.8,
      duration: 6.2,
    },

    parallax: 8,

    scroll: {
      x: 50,
      y: -20,
    },
  },

  {
    id: "ecommerce",
    type: "ecommerce",
    title: "E-commerce Experience",
    category: "SHOP",
    layer: "front",

    rotate: -9,
    hoverRotate: -4,

    enter: {
      x: -90,
      y: 30,
    },

    float: {
      y: 6,
      rotation: 0.6,
      duration: 6.8,
    },

    parallax: 6,

    scroll: {
      x: -55,
      y: 45,
    },
  },

  {
    id: "strategy",
    type: "strategy",
    title: "Growth Strategy",
    category: "STRATEGY",
    layer: "front",

    rotate: 8,
    hoverRotate: 4,

    enter: {
      x: -65,
      y: 90,
    },

    float: {
      y: 5,
      rotation: -0.5,
      duration: 6.4,
    },

    parallax: 6,

    scroll: {
      x: -40,
      y: 60,
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
      x: 95,
      y: 75,
    },

    float: {
      y: 5,
      rotation: -0.7,
      duration: 5.9,
    },

    parallax: 7,

    scroll: {
      x: 55,
      y: 55,
    },
  },
]