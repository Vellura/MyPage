# CLAUDE.md — Project Conventions

## Project Overview

Personal portfolio & blog. Nuxt 3 static site deployed to GitHub Pages.

## Tech Stack

- **Framework**: Nuxt 4 (SSG via `nuxt generate`)
- **Language**: TypeScript
- **CSS**: Tailwind CSS 4 + DaisyUI 5
- **Content**: Nuxt Content v3 (Markdown blog, `queryCollection` API)
- **Hosting**: GitHub Pages (GitHub Actions auto-deploy)

## Commands

- `npm run dev` — Dev server
- `npm run generate` — Build static site → `.output/public`
- `npm run preview` — Preview generated site

## Project Structure (Nuxt 4 — `app/` directory)

- `app/pages/` — File-based routing (Nuxt auto-imports)
- `app/components/` — Auto-imported Vue components
- `app/composables/` — Auto-imported composable functions
- `app/layouts/` — Page layouts
- `app/assets/css/main.css` — Tailwind + DaisyUI plugin config
- `content/blog/` — Markdown blog posts (at project root, not inside app/)
- `content.config.ts` — Nuxt Content collection definitions
- `public/` — Static assets served at root

## Nuxt Content v3 API

- Collections defined in `content.config.ts` with Zod schemas
- Query with `queryCollection('blog')` — NOT the old `queryContent()`
- `.order('date', 'DESC')` for sorting
- `.all()` for lists, `.first()` for single items, `.path()` for path matching

## Design Principles

- **Spacious**: generous whitespace (`py-20 lg:py-32`), let content breathe
- **Minimal chrome**: no box-in-box borders; use spacing and subtle color to separate sections
- **Asymmetric**: offset layouts, varied max-widths, editorial feel — not everything centered in same-width grid
- **Color restraint**: base/neutral colors dominate; primary used sparingly for emphasis
- **Typography-led**: heading hierarchy + spacing do the heavy lifting

## Theme

- **Light**: Bumblebee (`--default`)
- **Dark**: Dracula (`--prefersdark`)
- Toggle persists to `localStorage`, inline script prevents flash
- DaisyUI config is in `assets/css/main.css` via `@plugin "daisyui" { ... }`

## Code Style

- Vue 3 Composition API: `<script setup lang="ts">`
- Nuxt auto-imports — no manual imports for Vue/Nuxt composables
- Component names: PascalCase (`BlogCard.vue`)
- Prefer Tailwind utility + DaisyUI classes over custom CSS
- **Only DaisyUI semantic colors** (`text-base-content`, `bg-primary`, etc.) — never hardcode like `text-gray-800` so themes work

## Blog Post Frontmatter

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "Short description for cards and SEO"
tags: ["tag1", "tag2"]
image: "/images/blog/my-post/cover.jpg"  # optional
---
```

## Images

- **Cover images**: add `image` field to frontmatter (optional)
- **Inline images**: use standard markdown `![alt text](/images/blog/my-post/photo.jpg)`
- **Storage**: put all images in `public/images/blog/<post-slug>/`
- Images in `public/` are served at root, so `/images/blog/...` just works
- Use descriptive alt text for accessibility

## DaisyUI 5 Reminders

- Config lives in CSS: `@plugin "daisyui" { themes: ... }`
- No `tailwind.config.js` — Tailwind CSS 4 uses CSS-based config
- Theme toggle: set `data-theme` attribute on `<html>` element
- Use DaisyUI MCP server to check component class names
- Typography: `@plugin "@tailwindcss/typography"` for prose styles in blog posts
