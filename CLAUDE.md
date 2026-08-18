# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Use this tool frontend-design when be neccesary

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build locally
```

## Architecture

This is a static **Astro 6** site (no JS framework) for a psychology professional ("VidaPsico"). No integrations — pure `.astro` components with scoped CSS.

**Pages** (`src/pages/`): file-based routing
- `/` → `index.astro` — landing page
- `/areas` → `areas.astro` — therapy areas
- `/sobremi` → `sobremi.astro` — about page

**Layout** (`src/layouts/Layout.astro`): wraps every page. Includes `Header`, `Footer`, `Whastapp` (floating WhatsApp button), View Transitions, and the global CSS. Max content width is `1280px` centered. Font: `Outfit Variable` via `@fontsource-variable/outfit`.

**Components** (`src/components/`):
- `CardUno`–`CardCuatro` — hero/section cards on the home page
- `Card.astro` — reusable card that receives `svg`, `title`, `body` props
- `AquienAtiendo.astro` — "who I treat" section
- `sobremi/` subfolder — components used only in the about page (`SobreMi`, `Cursos`, `Agendar`, `Servicios`)

**Data** (`src/data/rocio.json`): JSON file with two arrays — `servicios` (therapy services with image URLs from Cloudinary) and `cursos` (certifications/courses). Components import this directly to render dynamic content.

**Images**: static files in `public/img/`. Prefer `.webp` format.
Always respond in Spanish.
