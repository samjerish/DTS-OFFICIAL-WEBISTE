import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

export interface LightboxImage {
  src: string;
  title: string;
  caption?: string;
  category?: string;
}

interface LightboxModalProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = images[currentIndex];

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard controls: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Top Controls Bar */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between px-4 sm:px-6 z-10">
        <div className="flex items-center space-x-3 text-white">
          <span className="text-xs sm:text-sm font-mono text-slate-300">
            {currentIndex + 1} / {images.length}
          </span>
          {currentImage.category && (
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-xs font-semibold bg-white/10 text-slate-200 border border-white/20 uppercase tracking-wider">
              {currentImage.category}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* Zoom Toggle */}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Close viewer (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors border border-white/10 z-10 focus:outline-none focus:ring-2 focus:ring-dts-accent"
            title="Previous image (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors border border-white/10 z-10 focus:outline-none focus:ring-2 focus:ring-dts-accent"
            title="Next image (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div 
        className="max-w-6xl max-h-[82vh] p-4 flex flex-col items-center justify-center select-none overflow-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className={`max-h-[75vh] w-auto max-w-full object-contain rounded transition-transform duration-200 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Caption Card */}
        <div className="mt-3 text-center max-w-2xl px-4 py-2 bg-black/60 rounded-lg border border-white/10">
          <h4 className="text-sm font-semibold text-white">
            {currentImage.title}
          </h4>
          {currentImage.caption && (
            <p className="text-xs text-slate-300 mt-0.5">
              {currentImage.caption}
            </p>
          )}
        </div>
      </div>

      {/* Keyboard Hint at bottom */}
      <div className="absolute bottom-2 text-center text-[11px] text-slate-500 hidden sm:block">
        Use Left / Right arrow keys to navigate, Esc to close
      </div>
    </div>
  );
};

