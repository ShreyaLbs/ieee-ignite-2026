# IEEE Ignite 2026 — Where Circuits Meet Curiosity

> A responsive, single-page event website for **IEEE Ignite 2026**, organized by the IEEE Student Branch, LBSITW.  
> Built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## 🔗 Links

| | |
|---|---|
| **Live Site** | [shreyalbs.github.io/ieee-ignite-2026](https://shreyalbs.github.io/ieee-ignite-2026) |
| **Repository** | [github.com/ShreyaLbs/ieee-ignite-2026](https://github.com/ShreyaLbs/ieee-ignite-2026) |

---

## Overview

IEEE Ignite is a one-day technical innovation event bringing together students across disciplines for workshops, competitive sessions, and career development talks. This website serves as the official event landing page, providing information about all sessions, a searchable event directory, and a complete day schedule.

---

## Features

- **Event Filtering** — Filter all 9 events by category: Technical, Professional, or Interactive
- **Real-time Search** — Search events by name as you type, with combined filter + search support
- **FAQ Accordion** — Expandable/collapsible answers powered by vanilla JavaScript with ARIA accessibility attributes
- **Smooth Scroll Navigation** — Single-page navigation with active link highlighting on scroll
- **Mobile Hamburger Menu** — Fully functional mobile nav with keyboard (Escape) and outside-tap dismissal
- **Responsive Layout** — Tested across desktop (1440px), laptop (1024px), tablet (768px), and mobile (375px)
- **Accessibility** — Semantic HTML, proper heading hierarchy, ARIA attributes, keyboard navigation, and `prefers-reduced-motion` support

---

## Sections

| Section | Description |
|---|---|
| **Home** | Event name, tagline, date, venue, and key stats |
| **About IEEE** | Introduction to IEEE, the Student Branch, and the objective of Ignite |
| **Events** | 9 event cards across 3 categories with live filter and search |
| **Schedule** | Chronological timeline of all sessions |
| **FAQ** | Common questions with JS-powered accordion |
| **Contact** | Email, phone, and social media links |

---

## Tech Stack

| | |
|---|---|
| **Structure** | HTML5 (semantic elements) |
| **Styling** | CSS3 (custom properties, CSS Grid, Flexbox, clamp() for fluid typography) |
| **Interactivity** | Vanilla JavaScript (ES6+) |
| **Fonts** | Space Grotesk · Inter · JetBrains Mono (via Google Fonts) |
| **Deployment** | GitHub Pages |

---

## Project Structure

```
ieee-ignite-2026/
├── index.html        # Main HTML file (all sections)
├── style.css         # Stylesheet with design tokens and responsive breakpoints
├── script.js         # Event rendering, filtering, search, FAQ, and nav logic
├── assets/
│   ├── ieee_white.png       # IEEE logo
│   └── sb_white.png         # IEEE Student Branch LBSITW logo
└── .gitignore
```

---

## Running Locally

No build step required.

```bash
git clone https://github.com/ShreyaLbs/ieee-ignite-2026.git
cd ieee-ignite-2026
```

Open `index.html` directly in a browser, or use VS Code's Live Server extension for hot reload.

---

## Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `1440px` | Large desktop |
| `1024px` | Laptop / small desktop |
| `900px` | Tablet landscape |
| `768px` | Tablet portrait |
| `480px` | Large mobile |
| `375px` | Mobile (iPhone SE / 12 Pro) |

---

*Developed for the IEEE Web Team Task — IEEE Student Branch, LBSITW · 2026*
|Shreya Ajith|
|S5 CSE-3|
