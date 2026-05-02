# HeartSwept — Astro 6 + Tailwind CSS v4

A statically-generated literary anthology site.

## Tech Stack

| Tool                  | Version | Notes                                     |
| --------------------- | ------- | ----------------------------------------- |
| **Astro**             | 6.x     | SSG, Node 22+, Zod 4, Vite 7              |
| **Tailwind CSS**      | 4.x     | CSS-first config via `@theme {}`          |
| **@tailwindcss/vite** | 4.x     | Replaces `@astrojs/tailwind` (deprecated) |
| **@astrojs/mdx**      | 4.x     | MDX rendering for poem content            |

## Requirements

- **Node.js 22.12.0+** (Astro 6 requirement)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the build
npm run sync      # regenerate content collection types
```

## Project Structure

```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro          # Particles toggle (localStorage)
│   ├── PoemCard.astro
│   ├── SeasonalParticles.astro
│   └── OrigamiFoldDivider.astro
├── content/
│   ├── config.ts             # Zod 4 schema via astro:content
│   └── poems/                # One .mdx file per poem
├── layouts/
│   └── Base.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── anthology/
│       ├── index.astro       # Browse + JS filter tabs
│       └── [slug].astro      # Poem detail + sidebar
└── styles/
    └── global.css            # @import "tailwindcss" + @theme tokens
```

## Tailwind v4 — Key Differences from v3

- **No `tailwind.config.mjs`** — all design tokens live in `@theme {}` in `global.css`
- **`@import "tailwindcss"`** replaces `@tailwind base/components/utilities`
- **`@tailwindcss/vite`** replaces the deprecated `@astrojs/tailwind` integration
- **CSS variable names** — tokens defined as `--color-vermilion` are available as `bg-vermilion`, `text-vermilion`, etc.
- **`color-mix()`** used for opacity variants like `border-ink/10`

## Design Tokens (`@theme` in global.css)

| Token                | Value              | Tailwind class                   |
| -------------------- | ------------------ | -------------------------------- |
| `--color-vermilion`  | `#E84C3A`          | `bg-vermilion`, `text-vermilion` |
| `--color-ink`        | `#1C1410`          | `text-ink`                       |
| `--color-ink-mid`    | `#4a3d38`          | `text-ink-mid`                   |
| `--color-ink-soft`   | `#7a6b65`          | `text-ink-soft`                  |
| `--color-ink-ghost`  | `#b0a49f`          | `text-ink-ghost`                 |
| `--color-washi`      | `#FAF8F4`          | `bg-washi`                       |
| `--color-washi-warm` | `#F4EFE8`          | `bg-washi-warm`                  |
| `--color-washi-deep` | `#EDE6DC`          | `bg-washi-deep`                  |
| `--font-cormorant`   | Cormorant Garamond | `font-cormorant`                 |
| `--font-lora`        | Lora               | `font-lora`                      |
| `--font-noto`        | Noto Serif JP      | `font-noto`                      |

## Adding Poems

Create a new `.mdx` file in `src/content/poems/`:

```mdx
---
title: "My Poem"
titleJp: "日本語タイトル"
type: "Haiku" # Haiku | Poem | Story
author: author-file-name
featured: false
image: null
imageAlt: "alt description"
tags: ["nature"]
pubDate: 2026-01-15
---

First line here
second line,
third line ends.
```

After adding, run `npm run sync` to regenerate TypeScript types.
