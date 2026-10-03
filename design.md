# Design System — Yoga with Ann Scarab

The **A5 brochure** (`assets/Oct 2026 docs/Ann_Scarab_Brochure_A5.pdf`) is the source of truth. The website extends it: calm, natural, warm, minimal.

## Brand

- **Logo** — leaf emblem, “Ann Scarab” wordmark, “— PERSONAL YOGA —” rule line and the “Breathe • Move • Heal” script, all vector-traced from the brochure (`src/lib/components/brand/`). They follow `currentColor` (forest green on cream, cream on the dark footer). Do not redraw them.
- **Prop illustrations** — the eight line-art props (blocks, bolster, strap, chair, massage balls, therapy sticks, blankets, lotus) are traced from the brochure's “Supportive Yoga with Props” panel (`brand/propIcons.ts`, rendered by `PropIcon.svelte`).
- **Lockup** — `LogoLockup.svelte` adds a small “Yoga with” above the wordmark so the site reads “Yoga with Ann Scarab”.

## Colour (`src/app.css`)

| Token | Hex | Use |
| --- | --- | --- |
| `forest` | `#2c4a25` | Logo, headings, primary buttons |
| `forest-deep` | `#1f3419` | Footer, hover |
| `sage` / `sage-deep` | `#8c9b72` / `#5c6c48` | Ornaments, eyebrows, icons |
| `cream` | `#f8f4eb` | Page “paper” |
| `paper` / `linen` / `mist` | `#fcfaf5` / `#efe8da` / `#e8eadc` | Alternating section backgrounds |
| `ink` / `ink-muted` | `#2b3127` / `#565d4d` | Body text |
| `sun` | `#f3e3bd` | Faint sunlight glow (`.sunlit`) |

## Type

- **Cormorant Garamond** — display headings.
- **EB Garamond** — body text and tracked-caps headings (`.caps-heading`, like “YOGA DESIGNED AROUND YOU”).
- **Jost** — small tracked labels (`.eyebrow`) and buttons, like “GENTLE YOGA FOR EVERY BODY”.

## Motifs

- The hero photo fades softly into the cream page (left and top edges), as on the brochure.
- Watercolour art from the brochure, used sparingly: the leaf branch on the hero's left edge (`LeafAccent.svelte`) and the lotus beside the class focus list (`static/images/decor/`).
- Mobile first: most visitors arrive on phones. Layouts are written for ~390px first; tap targets are at least 44px.
- `.sunlit` — a faint warm glow, the recurring “sunlight through trees” light.
- `Sprig` rules flank caps headings; `LotusDivider` separates sections; a sprout icon marks list items.
- Therapeutic focus areas and breath benefits each have a descriptive fine-line icon (`Icon.svelte`: spine, shoulders, tree pose, wind, moon, tree, lungs, waves, mind, heart-pulse, body, stones).
- Photos get a light, consistent softening filter (`Photo.svelte`).
- Ann's canyon portrait appears only in the hero. Other nature photos are from Unsplash (credits in `src/lib/assets/photos/CREDITS.md`) until Ann's own photos replace them.

## Motion

Slow and gentle only: fade-in on scroll (`use:reveal`), a slow settle of the hero photo, a breathing circle in the Breath section, soft hovers. Everything respects `prefers-reduced-motion`.

## Writing

Gentle, clear, warm, concise. Support-oriented health language — never promise to diagnose, cure or treat. No philosophy quotes.
