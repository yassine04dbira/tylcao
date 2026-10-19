---
name: Tylcao
description: Deep-Tech Engineering, Automation Scripts & Creative Media Studio
colors:
  obsidian-ground: "#08090d"
  surface-card: "#0f121d"
  surface-terminal: "#161b2a"
  border-hairline: "#1e263d"
  cyan-laser: "#00f2fe"
  cyan-glow: "rgba(6, 182, 212, 0.3)"
  emerald-telemetry: "#10b981"
  violet-media: "#8b5cf6"
  text-white: "#f1f5f9"
  text-muted: "#64748b"
typography:
  display:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-geist-mono), monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.cyan-laser}"
    textColor: "{colors.obsidian-ground}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "#38bdf8"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-white}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  card-surface:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Tylcao

## Overview

**Creative North Star: "The Obsidian Monolith"**

Tylcao's visual world embodies hyper-disciplined dark architecture with sharp electric laser lines and measured data density. It is engineered for a dual audience: agile startup founders needing rapid 1–4 week MVPs, scrapers, and high-retention launch reels, alongside enterprise engineering directors demanding resilient cloud architectures and workflow automations.

The design identity marries raw command-line utility with high-craft digital precision. At its core stands the enigmatic spirit of **Tilcayo** (*Leopardus tilcayo*, the newly discovered Andean cloud-forest tiger cat), rendered through an interactive ASCII terminal that proves technical craftsmanship directly in the viewport. Rather than leaning on generic SaaS gradients or template tropes, the interface relies on deep obsidian layering, hairline borders, and reactive ambient bioluminescence.

**Key Characteristics:**
- **Obsidian Monolith Surfaces**: Deep pitch-black foundations (`#08090d`) stepped up to dark slate cards (`#0f121d`) and terminal wells (`#161b2a`) with zero milky wash.
- **Precision Laser Accents**: Electric laser cyan (`#00f2fe`) for primary interactive catalysts, emerald (`#10b981`) for live telemetry uptime, and restrained violet (`#8b5cf6`) for creative media markers.
- **Instrument-Grade Typography**: Crisp geometric clarity (`Geist`) paired with disciplined monospace accents (`Geist Mono`) reserved strictly for technical data, code cards, and SLAs.
- **Tactile Material Feedback**: Subtle hairline slate boundaries that awaken with focused ambient glows on hover or active command execution.

## Colors

The palette draws from high-altitude obsidian bedrock and bioluminescent terminal phosphor. Accents are treated as rare energetic charges against a disciplined, pitch-dark ground.

### Primary
- **Laser Cyan** (`#00f2fe`): The primary interaction catalyst. Used for primary CTAs, active terminal prompt carets, key focus rings, and high-priority interactive states.

### Secondary
- **Emerald Telemetry** (`#10b981`): The verification signal. Reserved strictly for operational system status, live uptime pings, verified milestone badges, and success confirmations.

### Tertiary
- **Spectral Violet** (`#8b5cf6`): The creative media signifier. Applied selectively to video editing badges, motion reel tags, and creative timeline indicators.

### Neutral
- **Obsidian Ground** (`#08090d`): The foundational canvas for the entire application.
- **Monolith Card** (`#0f121d`): Elevated surface layer for interactive service cards, audience pathways, and container panels.
- **Terminal Well** (`#161b2a`): Recessed canvas specifically housing interactive shell instances, code blocks, and script outputs.
- **Hairline Border** (`#1e263d`): Subtle 1px boundary separating surface depths.
- **Text Crisp White** (`#f1f5f9`): Primary headings and active text for optimal legibility.
- **Text Slate** (`#cbd5e1`): Standard paragraph body text providing comfortable contrast without eye strain.
- **Text Muted** (`#64748b`): Technical metadata, secondary labels, and inactive border states.

### Named Rules
**The Rarity Rule.** Neon cyan is an electrical spark, not wallpaper. It must never occupy more than 8% of any given screen area. Its rarity is what commands the eye.

**The Solid Typography Rule.** Decorative multi-color gradient text is forbidden on headlines. Headings must be rendered in solid high-contrast white (`#f1f5f9`), with at most one short phrase accented in solid laser cyan or emerald.

**The Telemetry Rule.** Emerald (`#10b981`) is an operational truth token. It signals active servers, real-time availability, and verified test results; it is never used as decorative accent filler.

## Typography

**Display & Body Font:** Geist Sans (fallback: system-ui, -apple-system, sans-serif)  
**Code & Terminal Font:** Geist Mono (fallback: monospace)

**Character:** Modern, razor-sharp engineering clarity. Geist Sans delivers neutral architectural legibility, while Geist Mono brings authentic command-line authority.

### Hierarchy
- **Display** (Bold 700, `clamp(2.25rem, 5vw, 3.75rem)`, line-height 1.15, letter-spacing -0.02em): Hero statements and high-impact section titles. Solid white ink.
- **Headline** (Bold 700, `1.875rem` [30px], line-height 1.25, letter-spacing -0.01em): Pillar titles and major feature group headers.
- **Title** (Semibold 600, `1.25rem` [20px], line-height 1.4): Card headers, service items, and modal dialog titles.
- **Body** (Regular 400, `0.9375rem` [15px] to `1rem` [16px], line-height 1.6): Explanatory paragraphs, service descriptions, and case study narratives.
- **Label** (Medium 500, `0.75rem` [12px], monospace, letter-spacing 0.05em, uppercase): Technology tags, SLA duration pills, terminal telemetry, and status indicators.

### Named Rules
**The Legibility Floor Rule.** Body copy must never drop below 14px (`text-sm`). Long paragraph blocks at 12px (`text-xs`) are strictly prohibited; 12px is reserved exclusively for single-line uppercase metadata badges.

**The Monospace Guardrail Rule.** Monospace is an instrument of technical evidence, not a styling shortcut. Navigation links, narrative prose, and primary callout text must use Geist Sans.

## Layout

Tylcao employs a responsive 12-column grid anchored to a maximum container width of `1280px` (`max-w-7xl`), flanked by responsive gutters (`16px` on mobile, `24px` on tablet, `32px` on desktop).

Spatial rhythm relies on an 8px base grid, stepped through 16px, 24px, 32px, 48px, 64px, and 96px vertical section intervals. Sections breathe with generous vertical negative space to prevent dense technical information from overwhelming the reader.

### Named Rules
**The No-Redundancy Rule.** A service capability or service pillar may be presented at full depth exactly once per page. Repeated category cards must be consolidated into a progressive disclosure pattern (e.g. Dual Gateway into Modular Catalog).

## Elevation & Depth

Depth is established primarily through **tonal surface stepping** rather than heavy drop shadows:
1. Ground: `#08090d`
2. Card Surface: `#0f121d` with 1px border `#1e263d`
3. Recessed Shell: `#161b2a`

### Shadow Vocabulary
- **Ambient Cyan Glow** (`box-shadow: 0 0 25px -5px rgba(6, 182, 212, 0.25)`): Applied to primary buttons and active terminal windows on hover/focus.
- **Emerald Telemetry Glow** (`box-shadow: 0 0 20px -5px rgba(16, 185, 129, 0.3)`): Applied to operational status indicators and successful intake confirmations.

### Named Rules
**The Flat-At-Rest Rule.** All surfaces rest flat at rest with crisp hairline borders. Ambient glows and lighting effects activate strictly as a reaction to user hover, focus, or live command execution.

## Shapes

- **Corners**: Restrained, engineered radii.
  - Buttons & Inputs: `8px` (`rounded-lg`) to `12px` (`rounded-xl`).
  - Cards & Shell Windows: `16px` (`rounded-2xl`).
  - Badges & Pills: Fully rounded `9999px` (`rounded-full`).
- **Borders**: Hairline `1px` borders (`border-slate-800/80` or `border-[#1e263d]`).
- **Texture**: Clean, pure surfaces. Full-page synthetic 40px blueprint grids are retired in favor of subtle, organic radial gradients and crisp surface containers.

## Components

### Buttons
- **Shape**: `rounded-xl` (`12px` radius), padding `10px 20px`.
- **Primary**: Solid laser cyan background (`#00f2fe`) or subtle cyan-to-teal gradient with slate-900 bold text (`#090b12`). On hover: lift `translateY(-1px)` with ambient cyan glow (`box-shadow: 0 0 20px -5px rgba(6, 182, 212, 0.4)`).
- **Secondary**: Elevated card background (`#0f121d`) with hairline border (`#1e263d`) and white text (`#f1f5f9`). On hover: border shifts to cyan-500/40 with subtle background lightening (`#161b2a`).

### Terminal Shell (`TilcayoTerminal`)
- **Shape**: `rounded-2xl` (`16px`), background `#0c0e17`, border `1px solid rgba(6, 182, 212, 0.3)`.
- **Title Bar**: Minimal deep-tech header with embedded Tilcayo terminal prompt (`tilcayo@tylcao-host:~`), live status ping (`ONLINE 240 FPS`), and copy ASCII trigger.
- **Output Well**: Monospace console well with gutter indicators. Raw ASCII artwork must always carry `aria-hidden="true"` with an accessible image label.

### Interactive Service Cards
- **Shape**: `rounded-2xl` (`16px`), background `#0f121d`, border `1px solid #1e263d`.
- **Structure**: Pillar badge (top), title, technology tags, 4-point bullet checklist, delivery timeframe (e.g., `2–5 days`), and tactile "Add to Scope" button.

### Intake Form & Scope Drawer
- **Drawer**: Docked bottom bar (`fixed bottom-6 z-40`) summarizing selected scope items. Must include a clear minimize/collapse toggle and an intake transfer trigger.
- **Inputs**: Dark slate surface (`#090b12`), 1px hairline border, crisp white input text with cyan-500 focus glow.

## Do's and Don'ts

### Do:
- **Do** wrap all Braille and block-character ASCII art in `aria-hidden="true"` with an accessible descriptive label (`role="img" aria-label="..."`).
- **Do** set primary body and descriptive copy to at least 14px (`text-sm`) with high-contrast text (`text-slate-200` / `text-slate-300`).
- **Do** maintain strict parity between Startup and Enterprise pathways.
- **Do** present verified capabilities, real delivery turnaround windows (1–4 weeks), and concrete tech stacks.
- **Do** reserve emerald (`#10b981`) exclusively for uptime, verification, and live telemetry.

### Don't:
- **Don't** use multi-color gradient text (e.g. violet-to-fuchsia mixed with cyan) across headings.
- **Don't** tile synthetic 40px blueprint grid lines across the entire page body.
- **Don't** fabricate client names, fake enterprise logos, or unverified performance metrics.
- **Don't** apply monospace typography to general body text or standard navigational links.
- **Don't** display sticky viewport overlays that lack a user-accessible minimize or dismiss button.
