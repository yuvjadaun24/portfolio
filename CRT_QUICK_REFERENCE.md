# CRT Screen Effect – Quick Reference Card

## 📌 Component Usage

```tsx
import { CrtFrame } from "@/components/crt/CrtFrame";
import { useState } from "react";

export function YourComponent() {
  const [flicker, setFlicker] = useState(0);

  return (
    <CrtFrame flickerPulse={flicker}>
      {/* Your content here */}
    </CrtFrame>
  );
}
```

## 🎨 CSS Effect Classes

All classes automatically applied in `<CrtFrame>` component:

| Class | Effect | Opacity | Blend Mode |
|-------|--------|---------|-----------|
| `.crt-overlay-dots` | Phosphor grid | 0.34 | multiply |
| `.crt-overlay-rgb` | Color stripes | 0.22 | overlay |
| `.crt-overlay-scanlines` | Scan lines | 0.14 | soft-light |
| `.crt-overlay-vignette` | Edge darkening | 0.9 | multiply |
| `.crt-overlay-glass` | Glass reflection | 0.14 | screen |
| `.crt-flicker` | Flicker pulse | Animated | screen |

## ⚡ Trigger Flicker

```tsx
// Increment state to trigger animation
const triggerFlicker = () => {
  setFlicker(prev => prev + 1);
};
```

## 🔧 Customize Effect Strength

Edit in `src/app/globals.css`:

```css
.crt-overlay-dots { opacity: 0.34; }      /* Phosphor dots visibility */
.crt-overlay-rgb { opacity: 0.22; }       /* RGB stripe visibility */
.crt-overlay-scanlines { opacity: 0.14; } /* Scanline visibility */
.crt-overlay-vignette { opacity: 0.9; }   /* Vignette darkness */
.crt-overlay-glass { opacity: 0.14; }     /* Glass gloss */
```

## 🎯 Key Points

✅ **All effects are automatic** - Just wrap content in `<CrtFrame>`
✅ **Non-destructive** - Content stays fully interactive
✅ **Customizable** - Adjust opacity values for different intensities
✅ **Performance** - Pure CSS, GPU accelerated
✅ **Responsive** - Works on all screen sizes

## 📂 Files

| File | Purpose |
|------|---------|
| [src/components/crt/CrtFrame.tsx](src/components/crt/CrtFrame.tsx) | React component |
| [src/app/globals.css](src/app/globals.css) | CSS effects (`.crt-*` classes) |
| [CRT_COMPLETE_REFERENCE.md](CRT_COMPLETE_REFERENCE.md) | Full code reference |
| [CRT_IMPLEMENTATION_COMPLETE.md](CRT_IMPLEMENTATION_COMPLETE.md) | Implementation details |
| [src/components/crt/CRT_SCREEN_DOCUMENTATION.md](src/components/crt/CRT_SCREEN_DOCUMENTATION.md) | Technical documentation |

## 🎬 Real-World Example (DVD Menu)

```tsx
// src/app/HomeClient.tsx - Already implemented!
<CrtFrame flickerPulse={flickerPulse}>
  <DvdMainMenu onSelect={...} />
</CrtFrame>

// Flicker on interaction
const onCornerHit = () => {
  setFlickerPulse(n => n + 1);
};
```

## 💡 Pro Tips

1. **Increase scanline visibility**
   ```css
   .crt-overlay-scanlines { opacity: 0.22; }
   ```

2. **Green phosphor look**
   ```tsx
   <div className="bg-linear-to-b from-[#0a2410] to-black" />
   ```

3. **Reduced motion support** (add to globals.css)
   ```css
   @media (prefers-reduced-motion: reduce) {
     .crt-flicker { animation: none; }
   }
   ```

4. **Larger bezel**
   ```tsx
   <div className="rounded-[36px] p-[24px]">  {/* was [28px] [18px] */}
   ```

---

**Status**: ✅ Complete and Ready
**Version**: 1.0
**Updated**: January 2026
