# Boot2Boot Hero — Tailwind migration

This patch intentionally preserves the previous hero design and GSAP behavior. It does NOT redesign the hero.

Changes:
- Migrated hero/navbar/buttons/cards/background styling from hero.css to Tailwind utility classes.
- Preserved the existing card positions, sizes, colors, rotations and GSAP behavior.
- Added responsive Tailwind breakpoints at 1180px, 900px and 560px.
- Removed the hero.css import from main.jsx.
- Added Tailwind/PostCSS configuration.

Install:

npm install -D tailwindcss@3.4.17 postcss autoprefixer

Then run:

npm run dev

The old CSS is kept as `src/styles/hero.css.previous-version` for comparison only and is not imported.
