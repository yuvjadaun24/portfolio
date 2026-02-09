import { PixelArrowUp, PixelArrowDown, PixelEnter, PixelDisplay } from '@/app/components/icons/PixelArrows';

export default function Footer() {
  return (
    <div className="h-12 bg-black/55 border-t border-white/10 flex items-center justify-between px-6 dvd-body">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-6 h-6 bg-white/10 rounded-sm flex items-center justify-center border border-white/10">
              <PixelArrowUp className="w-4 h-4 text-cyan-200" />
            </div>
            <div className="w-6 h-6 bg-white/10 rounded-sm flex items-center justify-center border border-white/10">
              <PixelArrowDown className="w-4 h-4 text-cyan-200" />
            </div>
          </div>
          <span className="text-white/70 text-xs" style={{ letterSpacing: '0.12em' }}>MOVE</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-16 h-6 bg-white/10 rounded-sm flex items-center justify-center border border-white/10">
            <PixelEnter className="w-4 h-4 text-cyan-200" />
          </div>
          <span className="text-white/70 text-xs" style={{ letterSpacing: '0.12em' }}>SELECT</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-white/55 text-xs" style={{ letterSpacing: '0.12em' }}>QUIT:</span>
        <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-sm border border-white/10">
          <PixelDisplay className="w-3 h-3 text-cyan-200" />
          <span className="text-white/70 text-xs" style={{ letterSpacing: '0.12em' }}>DISPLAY</span>
        </div>
      </div>
    </div>
  );
}
