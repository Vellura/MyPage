# Project Plan

## Overview

Personal portfolio & blog site deployed as static HTML to GitHub Pages.

## Stack

| Layer | Tool |
|-------|------|
| Framework | Nuxt 3 (SSG) |
| Language | TypeScript |
| CSS | Tailwind CSS 4 + DaisyUI 5 |
| Content | Nuxt Content — Markdown |
| CI/CD | GitHub Actions → GitHub Pages |

## Pages

### Home (`/`)

- Hero intro: name + tagline — asymmetric, anchored bottom-left of viewport
- Brief about section — offset (`lg:ml-[15%]`), `max-w-prose`
- Latest blog post preview — link to full blog
- Footer: LinkedIn link, copyright
- **Projects section**: deferred — will design separately later

### Blog Index (`/blog`)

- Featured latest post at top (larger presentation)
- Chronological list of remaining posts
- Tag list with post counts (sidebar on desktop, section on mobile)

### Blog Post (`/blog/[slug]`)

- Title, date, tags
- Table of contents (sisällysluettelo) — sidebar on desktop, collapsible on mobile
- Markdown content with prose styling

## Design

- **Spacious** — generous vertical rhythm, no cramped sections
- **Borderless** — avoid box-in-box; separate with whitespace and color shifts
- **Asymmetric** — offset content, varied widths, editorial layout
- **Color restraint** — mostly base/neutral; primary for emphasis only
- **Themes** — Bumblebee (light default) / Dracula (dark) with manual toggle + system preference

## Blog Workflow

1. Create `.md` file in `content/blog/`
2. Add frontmatter (title, date, description, tags)
3. Write content
4. `git push` to `main` → auto-build & deploy

## Deployment

- **Current**: `username.github.io`
- **Future**: custom domain (will update base URL + CNAME)
- Static output from `nuxt generate`, deployed via `actions/deploy-pages`

## Future

- [ ] Projects section (design TBD)
- [ ] RSS feed
- [ ] Custom domain + CNAME
- [ ] SEO / Open Graph improvements
- [ ] Blog search
- /profile with a crisp “what I do” + proof (talks, podcasts, work highlights)
- sitemap.xml
- OpenGraph + Twitter meta tags (previews look good when shared)
- A simple newsletter embed (if you want)
- Analytics (privacy-friendly optional)
