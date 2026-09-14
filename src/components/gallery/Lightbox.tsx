import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '@/data/images';
import type { GalleryItem } from '@/data/artwork/galleryItems';

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (index === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, onClose, handleNext, handlePrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handlePrev();
      else handleNext();
    }
    setTouchStart(null);
  };

  const currentItem = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-md flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-ink-100 hover:text-ink-0 transition-colors"
            aria-label="Close"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 text-ink-100 hover:text-ink-0 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 text-ink-100 hover:text-ink-0 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>

          {/* Content */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl mx-auto px-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="w-full max-h-[70vh] overflow-hidden border border-ink-50/10">
              <img
                src={images[currentItem.imageKey].src}
                alt={images[currentItem.imageKey].alt}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="mt-8 text-center max-w-xl">
              <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
                {currentItem.category} · {currentItem.year}
              </span>
              <h3 className="mt-3 font-serif text-headline text-ink-0 leading-[1.1] tracking-tight">
                {currentItem.title}
              </h3>
              <p className="mt-4 font-sans text-body text-ink-300 leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
