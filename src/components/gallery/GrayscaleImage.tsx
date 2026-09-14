import { useRef, useState, type ReactNode } from 'react';

interface GrayscaleImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  zoomOnHover?: boolean;
  startGrayscale?: boolean;
  children?: ReactNode;
}

export default function GrayscaleImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  zoomOnHover = true,
  startGrayscale = true,
  children,
}: GrayscaleImageProps) {
  const [isGrayscale, setIsGrayscale] = useState(startGrayscale);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsGrayscale(false)}
      onMouseLeave={() => setIsGrayscale(true)}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          zoomOnHover ? 'hover:scale-105' : ''
        } ${isGrayscale ? 'grayscale' : 'grayscale-0'} ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-ink-100 animate-pulse" />
      )}
      {children}
    </div>
  );
}
