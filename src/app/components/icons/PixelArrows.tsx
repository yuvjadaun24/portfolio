// Pixel-art arrow icons for the footer

interface ArrowProps {
  className?: string;
}

export const PixelArrowUp = ({ className = "" }: ArrowProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    style={{ imageRendering: 'pixelated' }}
  >
    <rect x="6" y="2" width="4" height="2" fill="currentColor" />
    <rect x="4" y="4" width="2" height="2" fill="currentColor" />
    <rect x="10" y="4" width="2" height="2" fill="currentColor" />
    <rect x="6" y="6" width="4" height="8" fill="currentColor" />
  </svg>
);

export const PixelArrowDown = ({ className = "" }: ArrowProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    style={{ imageRendering: 'pixelated' }}
  >
    <rect x="6" y="2" width="4" height="8" fill="currentColor" />
    <rect x="4" y="10" width="2" height="2" fill="currentColor" />
    <rect x="10" y="10" width="2" height="2" fill="currentColor" />
    <rect x="6" y="12" width="4" height="2" fill="currentColor" />
  </svg>
);

export const PixelEnter = ({ className = "" }: ArrowProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    style={{ imageRendering: 'pixelated' }}
  >
    <rect x="2" y="8" width="10" height="2" fill="currentColor" />
    <rect x="10" y="4" width="2" height="8" fill="currentColor" />
    <rect x="2" y="10" width="2" height="2" fill="currentColor" />
    <rect x="4" y="12" width="2" height="2" fill="currentColor" />
  </svg>
);

export const PixelDisplay = ({ className = "" }: ArrowProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    style={{ imageRendering: 'pixelated' }}
  >
    <rect x="2" y="2" width="12" height="9" fill="currentColor" />
    <rect x="3" y="3" width="10" height="7" fill="#0033cc" />
    <rect x="6" y="11" width="4" height="1" fill="currentColor" />
    <rect x="4" y="12" width="8" height="2" fill="currentColor" />
  </svg>
);
