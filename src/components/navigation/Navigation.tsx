import { useState, useEffect, useCallback, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/data/images';

interface NavItem {
  label: string;
  path: string;
  index: string;
  previewImage: string;
  previewAlt: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', path: '/', index: '01', previewImage: images.heroFashionSmall.src, previewAlt: images.heroFashionSmall.alt },
  { label: 'ABOUT', path: '/about', index: '02', previewImage: images.portrait.src, previewAlt: images.portrait.alt },
  { label: 'RESUME', path: '/resume', index: '03', previewImage: images.resume.src, previewAlt: images.resume.alt },
  { label: 'ART & HOBBIES', path: '/art', index: '04', previewImage: images.art.src, previewAlt: images.art.alt },
  { label: 'TRAVEL', path: '/travel', index: '05', previewImage: images.travel.src, previewAlt: images.travel.alt },
  { label: 'BLOG', path: '/blog', index: '06', previewImage: images.blog.src, previewAlt: images.blog.alt },
  { label: 'CONTACT', path: '/contact', index: '07', previewImage: images.contact.src, previewAlt: images.contact.alt },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setHoveredIndex(null);
    setTimeout(() => triggerRef.current?.focus(), 100);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = itemRefs.current.filter((el): el is HTMLAnchorElement => el !== null);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtnRef.current?.focus(), 300);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeMenu]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const motionProps = reducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } }
    : {
        initial: { x: '-100%' },
        animate: { x: 0 },
        exit: { x: '-100%' },
        transition: { type: 'tween' as const, ease: [0.22, 1, 0.36, 1], duration: 0.6 },
      };

  const overlayProps = reducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.4 } };

  const getItemAnim = (i: number) =>
    reducedMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } }
      : {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <>
      {/* Trigger */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="fixed left-0 top-0 z-[60] flex items-center gap-3 px-5 py-6 group"
        data-cursor="open"
      >
        <span className="font-sans text-caption uppercase tracking-ultra-wide text-ink-600 group-hover:text-ink-950 transition-colors duration-300 [writing-mode:vertical-rl] [text-orientation:upright] rotate-180 hidden sm:block">
          MENU
        </span>
        <span className="font-sans text-caption uppercase tracking-ultra-wide text-ink-600 group-hover:text-ink-950 transition-colors duration-300 sm:hidden">
          MENU
        </span>
        <div className="flex flex-col gap-[5px]">
          <span className="block w-6 h-px bg-ink-600 group-hover:bg-ink-950 group-hover:w-8 transition-all duration-300" />
          <span className="block w-4 h-px bg-ink-600 group-hover:bg-ink-950 group-hover:w-8 transition-all duration-300" />
          <span className="block w-6 h-px bg-ink-600 group-hover:bg-ink-950 group-hover:w-8 transition-all duration-300" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-[70] bg-ink-950/60 backdrop-blur-sm"
              onClick={closeMenu}
              {...overlayProps}
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="fixed left-0 top-0 z-[80] h-full w-full sm:w-[600px] lg:w-[720px] bg-ink-950 flex flex-col"
              {...motionProps}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-8 sm:px-12 py-6 border-b border-ink-700">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
                  Index
                </span>
                <button
                  ref={closeBtnRef}
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="flex items-center gap-2 group"
                >
                  <span className="font-sans text-caption uppercase tracking-ultra-wide text-ink-300 group-hover:text-ink-0 transition-colors duration-300">
                    Close
                  </span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-ink-300 group-hover:text-ink-0 transition-colors duration-300">
                    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              </div>

              {/* Nav items + preview */}
              <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto">
                {/* Items */}
                <nav className="flex-1 flex flex-col justify-center px-8 sm:px-12 py-8">
                  <ul className="list-none m-0 p-0 space-y-1 sm:space-y-2">
                    {navItems.map((item, i) => (
                      <li key={item.path}>
                        <motion.div {...getItemAnim(i)}>
                          <NavLink
                            ref={(el) => { itemRefs.current[i] = el; }}
                            to={item.path}
                            end={item.path === '/'}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onFocus={() => setHoveredIndex(i)}
                            className={({ isActive }) =>
                              `group flex items-baseline gap-4 sm:gap-6 py-2 transition-opacity duration-300 ${
                                isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                              }`
                            }
                          >
                            <span className="font-sans text-micro uppercase tracking-wide-editorial text-ink-500 w-6 shrink-0">
                              {item.index}
                            </span>
                            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-50 leading-none tracking-tight">
                              {item.label}
                            </span>
                          </NavLink>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Preview area */}
                <div className="hidden lg:flex w-[300px] shrink-0 border-l border-ink-700 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {hoveredIndex !== null && (
                      <motion.div
                        key={hoveredIndex}
                        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                      >
                        <img
                          src={navItems[hoveredIndex].previewImage}
                          alt={navItems[hoveredIndex].previewAlt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-ink-950/30" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80">
                            {navItems[hoveredIndex].label}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {hoveredIndex === null && (
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-600">
                        Hover to preview
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-8 sm:px-12 py-6 border-t border-ink-700 flex items-center justify-between">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
                  FASHION × TECHNOLOGY
                </span>
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
                  ESC to close
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
