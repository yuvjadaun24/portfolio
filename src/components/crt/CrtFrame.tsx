import type { ReactNode } from "react";

/**
 * CRTFrame: A production-ready CRT monitor effect component
 *
 * Creates an authentic 4:3 aspect ratio CRT screen with:
 * - Curved glass casing with rounded corners
 * - Phosphor dot-matrix (pixel grid overlay)
 * - Horizontal scanlines
 * - RGB color subpixel stripes
 * - Dark vignette around edges
 * - Subtle glass reflection & glare
 * - Lens distortion effect (barrel curvature)
 * - Optional screen flicker/pulse effect
 *
 * @example
 * <CrtFrame flickerPulse={0}>
 *   <YourContent />
 * </CrtFrame>
 */
export function CrtFrame({
  children,
  flickerPulse,
  isLoading,
}: {
  children: ReactNode;
  /**
   * Trigger number to re-key the flicker animation.
   * Pass a new number each time you want to trigger a flicker pulse
   */
  flickerPulse?: number;
  /**
   * Show GIF background when loading
   */
  isLoading?: boolean;
}) {
  return (
    // Outer container: constrains max width and centers on page
    <div className="w-full max-w-[960px]">
      {/* CRT Monitor Bezel / Casing: Thick black frame with rounded corners */}
      <div className="crt-bezel mx-auto aspect-4/3 w-full rounded-[70px] bg-black p-[28px] shadow-[0_50px_200px_rgba(0,0,0,0.95), inset_0_0_50px_rgba(0,0,0,0.8)]">
        {/* Inner metallic frame: Very light silver border between bezel and screen */}
        <div className="h-full w-full rounded-[60px] bg-gradient-to-b from-white to-gray-100 p-[8px] shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]">
          {/* Main Screen Container with 3D perspective & convex glass illusion */}
          <div className="crt-screen relative h-full w-full overflow-hidden rounded-[55px]">
            {/* Screen background gradient: simulates CRT phosphor glow */}
            <div className={`crt-screen-bg absolute inset-0 h-full w-full ${isLoading ? "loader-bg-gif" : "bg-linear-to-b from-[#0b1220] to-black"}`} />

          {/* === CRT OVERLAY EFFECTS LAYERS === */}
          {/* Stacked in order from back to front, all non-interactive (pointer-events-none) */}

          {/* CONTENT LAYER: Your actual UI sits here (z-5 for proper layering)
              - Sits above background, below all overlay effects
              - Slight scale & blur for barrel distortion illusion
              - All overlays are non-interactive, so clicks pass through */}
          <div className="crt-content relative z-5 h-full w-full">{children}</div>

          {/* 1. PHOSPHOR DOT MATRIX: Simulates CRT pixel grid / phosphor dots
              - Tiny repeating dots create the classic CRT "scannable pixels" look
              - Multiplies with content below to darken slightly
              - Opacity 0.34 for realistic subtlety */}
          <div className="pointer-events-none absolute inset-0 z-10 crt-overlay-dots" />

          {/* 2. RGB SUBPIXEL STRIPES: Mimics LCD/CRT color separation
              - Thin vertical red, green, blue lines
              - Creates slight color fringing effect found on old screens
              - Blend mode "overlay" for natural integration
              - Opacity 0.22 keeps it subtle */}
          <div className="pointer-events-none absolute inset-0 z-10 crt-overlay-rgb" />

          {/* 3. HORIZONTAL SCANLINES: The iconic CRT horizontal line pattern
              - Repeating 1px bright lines with 4px gaps
              - Soft-light blend mode for natural darkening effect
              - Opacity 0.14 prevents harshness while maintaining visibility
              - Creates the "combed" look of old monitor refresh lines */}
          <div className="pointer-events-none absolute inset-0 z-10 crt-overlay-scanlines" />

          {/* 4. LENS MASK: Corner compression for convex lens effect
              - Four radial gradients at each corner push edges back
              - Creates optical illusion of center being closer
              - Mimics convex lens compression of CRT curved glass
              - Essential for 3D barrel distortion perception */}
          <div className="pointer-events-none absolute inset-0 z-15 crt-lens-mask" />

          {/* 5. VIGNETTE: Dark edges that fade to center
              - Radial gradient: transparent center → dark edges
              - Multiplies to darken outer regions
              - Works with lens mask for convex illusion
              - Mimics natural darkening of CRT tube edges
              - Also simulates "screen depth" / barrel effect optically */}
          <div className="pointer-events-none absolute inset-0 z-20 crt-overlay-vignette" />

          {/* 6. GLASS REFLECTION & CONVEX WARP (::before pseudo-element)
              - Created via CSS (see below in .crt-screen::before)
              - Center glass reflection with edge compression
              - Convex highlight bloom simulates curved surface
              - This is the "secret sauce" for 3D appearance */}

          {/* 7. SCREEN FLICKER PULSE (Optional)
              - Re-keys when flickerPulse prop changes
              - Simulates sudden electrical artifacts / moment-in-time scan
              - Fast 160ms animation feels authentic
              - Stacked on top (z-30) so it's visible */}
          {typeof flickerPulse === "number" ? (
            <div
              key={flickerPulse}
              className="pointer-events-none absolute inset-0 z-30 crt-flicker"
            />
          ) : null}
        </div>
        </div>
      </div>
    </div>
  );
}
