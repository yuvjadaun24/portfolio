import { useEffect, useRef } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { resumeData } from '../data/portfolio-data';

function downloadResume() {
  const a = document.createElement('a');
  a.href = resumeData.url;
  a.download = 'Yuvraj_Singh_Jadaun_Resume.pdf';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function ResumePrinterDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const hasTriggeredDownloadRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open) {
      hasTriggeredDownloadRef.current = false;
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [open]);

  const handlePrint = () => {
    if (hasTriggeredDownloadRef.current) return;
    hasTriggeredDownloadRef.current = true;

    // Align the download moment with the provided CSS animation timeline.
    timeoutRef.current = window.setTimeout(() => {
      downloadResume();
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="border-0 bg-transparent shadow-none p-0 overflow-visible max-w-none w-auto"
      >
        <div className="resume-printer-dialog-shell">
          <div className="wrapper">
            <div className="printer"></div>

            <div className="printer-display">
              <span className="printer-message"> Click to print</span>
              <div className="letter-wrapper">
                <span className="letter">P</span>
                <span className="letter">r</span>
                <span className="letter">i</span>
                <span className="letter">n</span>
                <span className="letter">t</span>
                <span className="letter">i</span>
                <span className="letter">n</span>
                <span className="letter">g</span>
                <span className="letter">.</span>
                <span className="letter">.</span>
                <span className="letter">.</span>
              </div>
            </div>

            <button type="button" className="print-button" onClick={handlePrint}>
              🖨
            </button>

            <div className="receipt-wrapper">
              <div className="receipt">
                <div className="receipt-header">
                  RESUME OUTPUT <br />
                  PRINT MODE
                  <div className="logo">📄</div>
                </div>
                <div className="receipt-subheader">{new Date().toISOString().slice(0, 10)}</div>

                <div className="resume-sheet" aria-label="Resume preview">
                  <iframe
                    className="resume-sheet-frame"
                    src={resumeData.url}
                    title="Resume PDF"
                    loading="lazy"
                  />
                </div>

                <div className="receipt-message">Downloading PDF…</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
