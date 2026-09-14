import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function TimelineProgress() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed right-6 top-0 bottom-0 z-40 hidden lg:flex items-center pointer-events-none">
      <div className="relative h-[60vh] w-px bg-ink-200">
        <motion.div
          className="absolute top-0 left-0 w-full bg-ink-950 origin-top"
          style={{ height: '100%', scaleY }}
        />
      </div>
    </div>
  );
}
