export default function Footer() {
  return (
    <div
      className="h-5 flex items-center justify-end px-5 pointer-events-none select-none"
      style={{ background: 'transparent' }}
    >
      <span
        className="font-mono"
        style={{
          fontSize: 10,
          letterSpacing: '0.22em',
          color: 'rgba(0,224,255,0.28)',
        }}
      >
        SYS_VER: 4.0 // CONNECTED // ENCRYPTED
      </span>
    </div>
  );
}
