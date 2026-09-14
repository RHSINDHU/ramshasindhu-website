import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const words = ['CREATE', 'BUILD', 'EXPLORE', 'LEARN', 'TRAVEL'];

export default function ScrollingTypography() {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-45%']);

  return (
    <section
      ref={ref}
      className="relative py-30 overflow-hidden bg-ink-950"
      data-cursor="explore"
    >
      <div className="flex items-center gap-12 whitespace-nowrap">
        {reducedMotion ? (
          <div className="flex items-center gap-12">
            {words.map((word, i) => (
              <span
                key={i}
                className="font-serif text-display-xl text-ink-50/90 italic"
              >
                {word}
              </span>
            ))}
          </div>
        ) : (
          <motion.div style={{ x }} className="flex items-center gap-12">
            {words.map((word, i) => (
              <span
                key={i}
                className="font-serif text-display-xl text-ink-50/90 italic"
              >
                {word}
              </span>
            ))}
            {words.map((word, i) => (
              <span
                key={`dup-${i}`}
                className="font-serif text-display-xl text-ink-50/90 italic"
              >
                {word}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
