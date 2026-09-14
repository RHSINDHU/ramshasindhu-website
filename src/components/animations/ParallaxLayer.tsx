import { type ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxLayer({ children, speed = 0.3, className = '' }: ParallaxLayerProps) {
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

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `${-speed * 100}px`]);

  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
  scale?: boolean;
}

export function ParallaxImage({ src, alt, className = '', imgClassName = '', speed = 0.2, scale = false }: ParallaxImageProps) {
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

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [`${speed * 80}px`, `${-speed * 80}px`]), {
    damping: 40,
    stiffness: 200,
  });

  const scaleVal = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const motionStyle: { y: MotionValue<number>; scale?: MotionValue<number> } = { y };
  if (scale) motionStyle.scale = scaleVal;

  if (reducedMotion) {
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className={`w-full h-full object-cover ${imgClassName}`} />
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={motionStyle}
        className={`w-full h-full object-cover will-change-transform ${imgClassName}`}
      />
    </div>
  );
}
