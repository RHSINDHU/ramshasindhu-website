import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ScrollRevealWordsProps {
  words: string[];
  className?: string;
}

export default function ScrollRevealWords({ words, className = '' }: ScrollRevealWordsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  if (reducedMotion) {
    return (
      <div ref={ref} className={`flex flex-wrap gap-x-8 gap-y-4 ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="font-serif text-display-lg text-ink-950 italic">
            {word}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-8 gap-y-4 ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.15, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="font-serif text-display-lg text-ink-950 italic"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
