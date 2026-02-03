# Retro DVD Portfolio

## Concept (Step 0)

**Core idea:** a portfolio that behaves like a retro DVD player UI (keyboard-first), with a CRT TV frame and a 4:3 “screen” in the center.

**Style direction**
- DVD player style: **generic / brandless** (professional + timeless)
- Aspect ratio: **4:3** (hard constraint)
- Navigation: **keyboard-first** (arrow keys + Enter/Escape)
- Tone: **retro but professional** (fun presentation, serious content)

**Interaction rules**
- Menu items map to DVD buttons: PLAY / SCENES / AUDIO / SETUP
- Clear focus state at all times (no mouse required)
- Motion respects `prefers-reduced-motion`

## Information Architecture (Step 1)

- **PLAY**  About Me
- **SCENES**  Projects (as chapters)
- **AUDIO**  Skills (as tracks)
- **SETUP**  Contact + Resume

Source-of-truth content lives in `src/content/dvd.json`.

## Dev

Run the dev server:

```bash
npm run dev
```

Then open http://localhost:3000
