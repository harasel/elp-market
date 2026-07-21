# ELP Markets — Corporate Website

Static, production-ready redesign of ELP Markets. No frameworks, no build step —
just open `index.html` in a browser.

## Structure

```
elp/
├── index.html          # Homepage
├── about.html          # Inner page (About)
├── style.css           # Design system + components
├── responsive.css      # Breakpoints: desktop / laptop / tablet / mobile
├── script.js           # Vanilla JS (mobile nav, sticky header, reveal)
├── assets/
│   ├── images/         # Hero, about, overview photography
│   ├── icons/          # SVG icon set + favicon
│   └── fonts/          # (loaded from Google Fonts by default)
└── README.md
```

## Design system

- **Type:** Fraunces (display serif) + Inter (UI/body). Perfect hierarchy across
  H1 → H4 → body → small → button → forms.
- **Palette:**
  - Navy `#0B1E3A` (primary)
  - Gold `#B08B4F` (accent)
  - Bone `#F6F3EC` (background)
  - Neutrals `#0E1116` → `#99A1AE`
  - Semantic: success `#2E7D5B`, warning `#B8802A`, error `#B4443A`
- **Spacing:** 8pt grid (`--s-1` … `--s-12`).
- **Radius:** 4px / 8px, consistent across buttons, cards, media.
- **Icons:** single outline SVG set, 1.5px stroke.

## Responsiveness

Manual breakpoints — no auto-generated layouts:

| Device  | Range           |
| ------- | --------------- |
| Desktop | ≥ 1200px        |
| Laptop  | 1024 – 1199px   |
| Tablet  | 768 – 1023px    |
| Mobile  | ≤ 767px         |

## WordPress / Elementor mapping

Each `<section>` = one Elementor Section.
Each grid row (`.grid-2`, `.cards-4`, `.markets-grid`) = one Container.
Each `.card` / `.market` / `.stat` = one reusable widget.

No overlapping elements, no absolute positioning outside the hero background —
the whole layout rebuilds inside Elementor with nested Containers and standard
widgets (Heading, Text, Icon Box, Button, Image).

## Performance

- Google Fonts preconnected + `display=swap`
- Images sized with explicit `width`/`height` (no CLS)
- Lazy loading on non-LCP images
- Single deferred JS file, no jQuery, no frameworks
- CSS < 20KB, JS < 2KB — targets PageSpeed 90+

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Skip link
- Visible focus states
- ARIA labels on nav, breadcrumb, menu toggle
- Keyboard-operable disclosures (FAQ uses native `<details>`)

## Browser support

Chrome, Safari, Firefox, Edge (current + 1 previous) and current iOS / Android.

## Tech stack (proposal)

- Design → Figma
- Front-end → HTML5 + CSS3 (Grid/Flex) + Vanilla JS
- CMS → WordPress with Elementor Pro
- Hosting → managed WP host (Kinsta / WP Engine) + Cloudflare

## Timeline (proposal)

1. Discovery & content audit — 3 days
2. Design (Home + inner) — 5 days
3. Front-end build (HTML/CSS/JS) — 4 days
4. WordPress/Elementor implementation — 5 days
5. QA, PageSpeed tuning, launch — 3 days

Total: ~4 weeks.
