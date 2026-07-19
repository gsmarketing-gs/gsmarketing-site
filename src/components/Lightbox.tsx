import { useEffect, useState } from 'react';

interface LightboxItem {
  img: string;
  title: string;
  code: string;
  desc: string;
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  activeIndex: number;
  onNavigate: (newIndex: number) => void;
  onEnquire: (title: string, code: string) => void;
  langMode?: 'bilingual' | 'en-only';
}

export default function Lightbox({
  isOpen,
  onClose,
  items,
  activeIndex,
  onNavigate,
  onEnquire,
}: LightboxProps) {
  const [zoom, setZoom] = useState(1);

  // Keyboard navigation listeners
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('overflow-hidden');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, activeIndex, items]);

  useEffect(() => {
    // Reset zoom when item changes
    setZoom(1);
  }, [activeIndex]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[activeIndex] || items[0];

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    onNavigate(nextIndex);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <div id="product-lightbox" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay back-panel */}
      <div
        className="lightbox-overlay absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 animate-fade-in max-h-[90vh] md:max-h-none">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="lightbox-close"
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-900/60 text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-slate-950 focus:outline-none cursor-pointer"
        >
          ✕
        </button>

        {/* Lightbox left image content */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center relative overflow-hidden h-72 md:h-auto min-h-[300px]">
          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              id="lightbox-img"
              src={currentItem.img}
              alt={currentItem.title}
              className="max-h-full max-w-full object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
            />
          </div>

          {/* Navigation Buttons */}
          {items.length > 1 && (
            <>
              <button
                id="lightbox-prev"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950/50 hover:bg-slate-950 text-white rounded-full flex items-center justify-center font-bold text-lg cursor-pointer"
              >
                ◀
              </button>
              <button
                id="lightbox-next"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950/50 hover:bg-slate-950 text-white rounded-full flex items-center justify-center font-bold text-lg cursor-pointer"
              >
                ▶
              </button>
            </>
          )}

          {/* Zoom Utility Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center space-x-3 text-xs text-white border border-white/10">
            <button
              id="lightbox-zoom-out"
              onClick={handleZoomOut}
              className="font-extrabold hover:text-brand-accent-orange px-1 cursor-pointer"
            >
              A-
            </button>
            <span>Zoom</span>
            <button
              id="lightbox-zoom-in"
              onClick={handleZoomIn}
              className="font-extrabold hover:text-brand-accent-orange px-1 cursor-pointer"
            >
              A+
            </button>
          </div>
        </div>

        {/* Lightbox right specs description */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <span className="text-brand-electric font-mono text-[10px] font-extrabold uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded inline-block">
              DISTRIBUTOR AUTHENTICATED
            </span>
            <h2 id="lightbox-title" className="font-display font-extrabold text-2xl text-gray-900">
              {currentItem.title}
            </h2>
            {currentItem.code && (
              <p id="lightbox-code" className="text-xs font-mono text-gray-400 font-semibold">
                Product Code: {currentItem.code}
              </p>
            )}
            <div className="h-0.5 w-16 bg-brand-accent-orange rounded"></div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Specifications Description:</h4>
              <p id="lightbox-desc" className="text-sm text-gray-600 leading-relaxed">
                {currentItem.desc}
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-xs text-amber-800 space-y-1">
              <p className="font-bold">✓ Direct Replacement Warranty (உத்தரவாதம் உண்டு)</p>
              <p>✓ 100% Brand Authenticity Guaranteed by GSmarketing.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onEnquire(currentItem.title, currentItem.code)}
              id="lightbox-enquire-btn"
              className="w-full sm:w-auto px-6 py-3.5 bg-brand-royal text-white text-sm font-bold rounded-xl text-center hover:bg-brand-electric transition-colors shadow-md cursor-pointer"
            >
              Send Dealer Inquiry
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl text-center hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Close Spec Sheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
