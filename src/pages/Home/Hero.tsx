import { motion } from 'framer-motion';
import { images } from '@/data/images';
import { ParallaxImage } from '@/components/animations/ParallaxLayer';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink-950">
      {/* Layer 1: Background photograph */}
      <ParallaxImage
        src={images.heroFashion.src}
        alt={images.heroFashion.alt}
        speed={0.15}
        scale
        className="absolute inset-0 w-full h-full"
        imgClassName="opacity-90"
      />

      {/* Layer 2: Subtle gradient overlay — darker behind text, lighter elsewhere */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-ink-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-ink-950/20" />

      {/* Layer 3: Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-ink-50/10" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-ink-50/10" />
      </div>

      {/* Layer 4: Floating image card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute right-[10%] top-[18%] w-[200px] h-[280px] overflow-hidden border border-ink-50/20 shadow-2xl z-10"
        data-cursor="view"
      >
        <img
          src={images.heroFashionSmall.src}
          alt={images.heroFashionSmall.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-ink-950/70 backdrop-blur-sm">
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-50/70">
            Studio · 2024
          </span>
        </div>
      </motion.div>

      {/* Layer 5: Main content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-12 bg-ink-300" />
          <span className="font-sans text-caption uppercase tracking-ultra-wide text-ink-300">
            Fashion × Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-display-xl text-ink-0 leading-[0.95] tracking-tight max-w-[900px]"
        >
          From Fashion<br />to Technology.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 font-sans text-body-lg text-ink-200 max-w-md leading-relaxed"
        >
          A creative mind navigating design, technology, projects, people and places.
        </motion.p>

        {/* Metadata labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-20 left-6 sm:left-10 lg:left-16 flex items-center gap-6"
        >
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
            Portfolio · 2026
          </span>
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
            No. 01
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
