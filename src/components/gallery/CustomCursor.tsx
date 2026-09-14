import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorState = 'default' | 'view' | 'open' | 'explore';

interface CursorConfig {
  label: string;
  size: number;
}

const cursorConfigs: Record<CursorState, CursorConfig> = {
  default: { label: '', size: 12 },
  view: { label: 'VIEW', size: 80 },
  open: { label: 'OPEN', size: 80 },
  explore: { label: 'EXPLORE', size: 90 },
};

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>('default');
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.3 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.3 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!visible) setVisible(true);
      });

      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorAttr) {
        const cursorType = cursorAttr.dataset.cursor as CursorState;
        if (cursorType && cursorType in cursorConfigs) {
          setState(cursorType);
          return;
        }
      }
      setState('default');
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseleave', leave);
    document.documentElement.addEventListener('mouseenter', enter);

    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.documentElement.removeEventListener('mouseenter', enter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY, visible]);

  const config = cursorConfigs[state];

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        width: config.size,
        height: config.size,
        marginLeft: -config.size / 2,
        marginTop: -config.size / 2,
        opacity: visible ? 1 : 0,
        backgroundColor: state === 'default' ? '#ffffff' : 'rgba(255,255,255,0.95)',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
    >
      {config.label && (
        <span className="font-sans text-[0.625rem] uppercase tracking-wide-editorial text-ink-950 font-medium">
          {config.label}
        </span>
      )}
    </motion.div>
  );
}
