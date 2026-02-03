import { PixelArrowUp, PixelArrowDown, PixelEnter, PixelDisplay } from '@/app/components/icons/PixelArrows';

export default function Footer() {
  return (
    <div className="h-12 bg-[#3333ff] border-t-2 border-white/20 flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-6 h-6 bg-white/20 rounded-sm flex items-center justify-center">
              <PixelArrowUp className="w-4 h-4 text-white" />
            </div>
            <div className="w-6 h-6 bg-white/20 rounded-sm flex items-center justify-center">
              <PixelArrowDown className="w-4 h-4 text-white" />
            </div>
          </div>
          <span className="text-white text-xs">Move</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-16 h-6 bg-white/20 rounded-sm flex items-center justify-center">
            <PixelEnter className="w-4 h-4 text-white" />
          </div>
          <span className="text-white text-xs">Select</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-white text-xs uppercase">Quit:</span>
        <div className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-sm">
          <PixelDisplay className="w-3 h-3 text-white" />
          <span className="text-white text-xs">Display</span>
        </div>
      </div>
    </div>
  );
}
