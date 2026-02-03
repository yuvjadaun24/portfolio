# CRT Screen Effect Component

**Production-ready retro CRT monitor UI effect** built with pure CSS + Tailwind + React.

## Overview

The `CrtFrame` component creates an authentic early-2000s CRT television screen appearance without canvas, WebGL, or external libraries. All effects are implemented as layered CSS overlays that preserve the underlying content.

## Features

### Visual Effects

- **4:3 Aspect Ratio**: Classic CRT monitor proportions
- **Curved Glass Casing**: Rounded bezel (28px) with 3D shadow depth
- **Phosphor Dot Matrix**: CRT pixel grid overlay (3px grid, 0.9px dots)
- **RGB Subpixel Stripes**: Color channel separation (R, G, B vertical lines)
- **Horizontal Scanlines**: 1px bright lines with 4px spacing (classic CRT refresh pattern)
- **Dark Vignette**: Radial fade to black edges (simulates barrel distortion + depth)
- **Glass Reflection**: Top gloss highlight (curved surface perception)
- **Screen Flicker**: Optional momentary brightness pulse (electrical artifact)

### Technical Approach

All effects are **non-destructive overlays**:
- Z-stacking puts content (z-10) between background and overlays (z-20/z-30)
- `pointer-events-none` on all overlays keeps them non-interactive
- CSS `mix-blend-mode` blends effects naturally with content
- Opacity tuning (0.08–0.9) balances realism vs. subtlety

## Component Usage

### Basic Example

```tsx
import { CrtFrame } from "@/components/crt/CrtFrame";

export function MyScreen() {
  return (
    <CrtFrame>
      <div className="p-8">
        <h1>Your Content Here</h1>
        <p>This is wrapped in a CRT screen effect.</p>
      </div>
    </CrtFrame>
  );
}
```

### With Flicker Trigger

```tsx
import { CrtFrame } from "@/components/crt/CrtFrame";
import { useState } from "react";

export function MyScreenWithFlicker() {
  const [flicker, setFlicker] = useState(0);

  const triggerFlicker = () => {
    setFlicker((n) => n + 1); // Re-key animation
  };

  return (
    <CrtFrame flickerPulse={flicker}>
      <div className="p-8">
        <button onClick={triggerFlicker}>Trigger Flicker</button>
        <p>Content goes here.</p>
      </div>
    </CrtFrame>
  );
}
```

### Real-World: DVD Player Menu

```tsx
import { CrtFrame } from "@/components/crt/CrtFrame";
import { DvdMainMenu } from "@/features/dvd/DvdMainMenu";

export function DvdPlayer() {
  const [flickerPulse, setFlickerPulse] = useState(0);

  const onMenuSelect = () => {
    setFlickerPulse((n) => n + 1); // Visual feedback on selection
  };

  return (
    <CrtFrame flickerPulse={flickerPulse}>
      <DvdMainMenu onSelect={onMenuSelect} />
    </CrtFrame>
  );
}
```

## Component Structure

```
CrtFrame (outer: max-w-[960px])
  ├── crt-bezel (4:3 aspect, rounded, dark casing)
  │   └── crt-screen-wrapper (main container)
  │       ├── crt-screen-bg (gradient background)
  │       ├── crt-overlay-dots (phosphor grid)
  │       ├── crt-overlay-rgb (color channels)
  │       ├── crt-overlay-scanlines (horizontal lines)
  │       ├── crt-overlay-vignette (edge darkening)
  │       ├── crt-overlay-glass (reflection gloss)
  │       ├── crt-flicker (optional pulse)
  │       └── crt-content (your UI here)
```

## CSS Effects Breakdown

### 1. Phosphor Dot Matrix (`.crt-overlay-dots`)

**Purpose**: Simulates CRT pixel grid visible at close inspection

```css
opacity: 0.34;
background-image: radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.85) 0.9px, rgba(0, 0, 0, 0) 1.2px);
background-size: 3px 3px;
mix-blend-mode: multiply;
```

**How it works**:
- Repeating 3×3px tiles with a radial gradient at center (1px, 1px)
- Creates tiny black dots (0.85 opacity) that fade out
- `multiply` blend mode darkens content, creating the dot shadow effect
- Opacity 0.34 makes it subtle (not overwhelming)

**Real-world analog**: The electron beam in a CRT scans pixels in a grid. Each pixel "glows" when the beam hits it, creating a visible dot pattern.

### 2. RGB Subpixel Stripes (`.crt-overlay-rgb`)

**Purpose**: Simulates color channel separation (R, G, B) found on LCD/CRT displays

```css
opacity: 0.22;
background-image: repeating-linear-gradient(
  90deg,
  rgba(255, 30, 30, 0.16) 0px,   /* Red: 1px */
  rgba(255, 30, 30, 0.16) 1px,
  rgba(30, 255, 70, 0.12) 1px,   /* Green: 1px */
  rgba(30, 255, 70, 0.12) 2px,
  rgba(80, 140, 255, 0.16) 2px,  /* Blue: 1px */
  rgba(80, 140, 255, 0.16) 3px
);
background-size: 3px 100%;
mix-blend-mode: overlay;
```

**How it works**:
- Repeating vertical stripes: red (0–1px), green (1–2px), blue (2–3px)
- Each channel has different opacity (R: 0.16, G: 0.12, B: 0.16) to match color response
- `overlay` blend mode integrates color without harsh separation
- 3px repeat creates a subtle stripe pattern

**Real-world analog**: LCD/CRT pixels are made of separate R, G, B subpixels. If you look at a monitor screen with a magnifying glass, you see the color stripes.

### 3. Horizontal Scanlines (`.crt-overlay-scanlines`)

**Purpose**: Iconic CRT horizontal line pattern (the "combed" look)

```css
opacity: 0.14;
background: repeating-linear-gradient(
  to bottom,
  rgba(255, 255, 255, 0.22) 0px,   /* 1px line */
  rgba(255, 255, 255, 0.22) 1px,
  rgba(0, 0, 0, 0) 2px,             /* 4px gap */
  rgba(0, 0, 0, 0) 6px
);
mix-blend-mode: soft-light;
```

**How it works**:
- 1px bright white lines, 4px black gaps (25% fill ratio)
- `soft-light` blend mode darkens content subtly (not harsh black lines)
- Opacity 0.14 keeps lines visible but not overwhelming
- Creates a combed horizontal pattern top to bottom

**Real-world analog**: CRT monitors refresh by scanning a horizontal electron beam from top to bottom 50–60 times per second. Each scanline is one beam sweep. Modern displays don't show this (they're instant), making it a strong retro identifier.

**Optional enhancement**: Add animation for flowing scanlines:
```css
animation: scanline-scroll 8s linear infinite;
```

### 4. Dark Vignette (`.crt-overlay-vignette`)

**Purpose**: Darkens edges, creates tunnel vision + barrel distortion perception

```css
opacity: 0.9;
background: radial-gradient(
  ellipse at center,
  rgba(0, 0, 0, 0) 42%,        /* Clear center */
  rgba(0, 0, 0, 0.62) 75%,     /* Mid-fade */
  rgba(0, 0, 0, 0.92) 100%     /* Dark edges */
);
mix-blend-mode: multiply;
```

**How it works**:
- Radial gradient from transparent center to opaque black edges
- Ellipse shape matches screen aspect
- `multiply` blend mode darkens edges naturally
- Opacity 0.9 creates strong edge darkening
- 42% center, 75% mid, 100% full coverage creates smooth falloff

**Real-world analog**: 
1. CRT tubes are naturally brighter in the center (electron beam focus)
2. Curved glass screen creates barrel distortion—edges appear to curve away
3. Vignetting is the optical effect where edges appear darker

### 5. Glass Reflection (`.crt-overlay-glass`)

**Purpose**: Adds curved glass panel gloss and surface reflection

```css
opacity: 0.14;
background: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.22) 0%,    /* Bright top */
  rgba(255, 255, 255, 0.06) 18%,   /* Fading */
  rgba(255, 255, 255, 0) 52%       /* Transparent middle+ */
);
mix-blend-mode: screen;
```

**How it works**:
- Linear gradient from bright white (top) to transparent (middle)
- `screen` blend mode adds light (additive blend)
- Opacity 0.14 keeps it subtle
- Simulates light hitting a curved glass surface at the top
- Creates 3D perception: the screen appears curved/bowed

**Real-world analog**: CRT monitors have a glossy curved glass screen. When ambient light hits the screen at an angle (especially from above), you see a bright reflection on the top portion.

### 6. Screen Flicker Pulse (`.crt-flicker`)

**Purpose**: Simulates momentary electrical artifact / scan anomaly

```css
@keyframes crt-flicker {
  0% { opacity: 0; filter: brightness(1) contrast(1); }
  18% { opacity: 0.18; filter: brightness(1.6) contrast(1.25); }
  45% { opacity: 0.06; filter: brightness(1.25) contrast(1.1); }
  100% { opacity: 0; filter: brightness(1) contrast(1); }
}

.crt-flicker {
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.05) 35%,
    rgba(0, 0, 0, 0) 70%
  );
  animation: crt-flicker 160ms ease-in-out 1;
  mix-blend-mode: screen;
}
```

**How it works**:
- Radial gradient: bright white center, fading to edges
- Animation peaks at 18% (fast rise), dims by 45%, fully fades at 100%
- 160ms total duration feels authentic (fast but not instant)
- `screen` blend mode makes it bright/glowing (not dark)
- `ease-in-out` timing prevents jarring jumps

**Triggering**: Pass a new `flickerPulse` number to re-key the animation:
```tsx
<CrtFrame flickerPulse={flickerPulse}>
  {/* Component re-renders and animation plays */}
</CrtFrame>
```

## Customization

### Adjusting Effect Intensity

Modify opacity values in each CSS class:

```css
/* Make scanlines more visible */
.crt-overlay-scanlines {
  opacity: 0.22;  /* was 0.14 */
}

/* Make vignette less dark */
.crt-overlay-vignette {
  opacity: 0.65;  /* was 0.9 */
}

/* Make dots more prominent */
.crt-overlay-dots {
  opacity: 0.5;   /* was 0.34 */
}
```

### Adding Animated Scanlines (Optional)

Add this keyframe to `globals.css`:

```css
@keyframes scanline-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(6px); }
}
```

Then update `.crt-overlay-scanlines`:

```css
.crt-overlay-scanlines {
  opacity: 0.14;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.22) 0px,
    rgba(255, 255, 255, 0.22) 1px,
    rgba(0, 0, 0, 0) 2px,
    rgba(0, 0, 0, 0) 6px
  );
  mix-blend-mode: soft-light;
  animation: scanline-scroll 8s linear infinite;
}
```

### Changing CRT Colors

Modify the background gradient in `CrtFrame`:

```tsx
{/* Change from blue-ish to green-ish phosphor */}
<div className="crt-screen-bg absolute inset-0 bg-linear-to-b from-[#0a2410] to-black" />
```

### Adjusting Screen Bezel Size

In `CrtFrame`, modify the padding and border radius:

```tsx
{/* Larger bezel: more rounded, more padding */}
<div className="mx-auto rounded-[36px] p-[24px]">
```

## Performance Considerations

1. **GPU Acceleration**: All CSS effects use transforms/filters (GPU-friendly)
2. **No Layout Thrashing**: Overlays are absolutely positioned (no layout recalc)
3. **Minimal Repaints**: Overlays use `pointer-events-none` (no hover/interaction)
4. **Flicker Animation**: Short 160ms duration + `will-change` optimization available

**Optional optimization** (if flicker causes jank):

```tsx
{typeof flickerPulse === "number" ? (
  <div
    key={flickerPulse}
    className="pointer-events-none absolute inset-0 z-30 crt-flicker"
    style={{ willChange: "filter" }}
  />
) : null}
```

## Browser Compatibility

- **Modern browsers**: Full support (Chrome, Firefox, Safari, Edge 88+)
- **CSS features used**:
  - `mix-blend-mode` (IE 11: partial support)
  - `radial-gradient` / `repeating-linear-gradient` (IE 9+)
  - `backdrop-filter` (optional, for barrel effect)
  - `aspect-ratio` (fallback: use `max-width` + `padding-bottom` if needed)

## Real-World Examples

### DVD Player Menu
```tsx
<CrtFrame flickerPulse={cornerHitCount}>
  <DvdMainMenu onSelect={onSelect} />
</CrtFrame>
```

### Retro Game Emulator
```tsx
<CrtFrame>
  <GameCanvas />
</CrtFrame>
```

### Terminal / Text Editor
```tsx
<CrtFrame>
  <TerminalOutput lines={terminalLines} />
</CrtFrame>
```

## Troubleshooting

### Overlays are too harsh
- Decrease opacity on `.crt-overlay-*` classes
- Example: `opacity: 0.08` instead of `0.14`

### Scanlines appear too dark
- Use `overlay` or `lighten` blend mode instead of `soft-light`
- Reduce opacity

### Content is hard to read
- Ensure content has sufficient contrast (white text on dark background)
- Overlays are designed for light content on dark backgrounds
- Adjust RGB stripe opacity if color fringing is too strong

### Flicker doesn't trigger
- Ensure `flickerPulse` prop changes (number must be different each time)
- Check that the component re-renders with the new prop

## Files Reference

- **Component**: [src/components/crt/CrtFrame.tsx](../../crt/CrtFrame.tsx)
- **Styles**: [src/app/globals.css](../../app/globals.css) (`.crt-*` classes)
- **Usage**: [src/app/HomeClient.tsx](../../app/HomeClient.tsx) (example integration)

## Summary

The `CrtFrame` component provides a **production-ready, authentic CRT screen effect** using pure CSS overlays. It's lightweight, performant, and non-destructive. Effects are fully customizable via opacity/blend-mode adjustments.

Perfect for retro UI projects, vintage emulators, DVD menus, or any application that needs that unmistakable early-2000s CRT aesthetic.
