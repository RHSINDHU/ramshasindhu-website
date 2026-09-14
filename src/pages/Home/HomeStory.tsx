import { motion } from 'framer-motion';
import { images } from '@/data/images';
import GrayscaleImage from '@/components/gallery/GrayscaleImage';
import { ParallaxImage } from '@/components/animations/ParallaxLayer';

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomeStory() {
  return (
    <>
      {/* SECTION 1: IT STARTED WITH DESIGN */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div {...sectionReveal}>
              <span className="label-eyebrow block mb-6">Chapter 01</span>
              <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
                It Started<br />With Design.
              </h2>
              <div className="mt-8 max-w-sm">
                <p className="font-sans text-body-lg text-ink-600 leading-relaxed">
                  A Bachelor's degree in Fashion Design was where the journey began.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2" data-cursor="view">
            <GrayscaleImage
              src={images.fashionDesign.src}
              alt={images.fashionDesign.alt}
              className="aspect-[4/3] w-full border border-ink-200"
            >
              <div className="absolute top-4 right-4">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80 bg-ink-950/40 backdrop-blur-sm px-3 py-1">
                  Fashion Design
                </span>
              </div>
            </GrayscaleImage>
          </div>
        </div>
      </section>

      {/* SECTION 2: 2015 — CANADA */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-ink-950">
        <ParallaxImage
          src={images.canada.src}
          alt={images.canada.alt}
          speed={0.15}
          scale
          className="absolute inset-0 w-full h-full"
          imgClassName="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/30 to-ink-950/80" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="label-eyebrow block mb-6 text-ink-400">Chapter 02</span>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-display-2xl text-ink-0 leading-none"
            >
              2015
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 font-serif text-display-lg text-ink-0 italic"
            >
              Canada
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 font-sans text-body-lg text-ink-200 max-w-md mx-auto"
            >
              A new country. A new chapter. A completely different direction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: A DIFFERENT KIND OF DESIGN */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="text-center mb-16">
          <span className="label-eyebrow block mb-6">Chapter 03</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            A Different Kind<br />of Design.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            data-cursor="view"
          >
            <GrayscaleImage
              src={images.fashionMerge.src}
              alt={images.fashionMerge.alt}
              className="aspect-[3/4] w-full border border-ink-200"
            >
              <div className="absolute bottom-4 left-4">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80 bg-ink-950/40 backdrop-blur-sm px-3 py-1">
                  Fashion
                </span>
              </div>
            </GrayscaleImage>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:mt-20"
            data-cursor="view"
          >
            <GrayscaleImage
              src={images.technology.src}
              alt={images.technology.alt}
              className="aspect-[3/4] w-full border border-ink-200"
            >
              <div className="absolute bottom-4 left-4">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80 bg-ink-950/40 backdrop-blur-sm px-3 py-1">
                  Technology
                </span>
              </div>
            </GrayscaleImage>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center font-sans text-body-lg text-ink-600 max-w-lg mx-auto"
        >
          The tools changed. The creative mindset didn't.
        </motion.p>
      </section>

      {/* SECTION 4: TODAY — TECHNICAL PROJECT MANAGER */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7" data-cursor="view">
            <GrayscaleImage
              src={images.technologyAlt.src}
              alt={images.technologyAlt.alt}
              className="aspect-[16/10] w-full border border-ink-200"
            >
              <div className="absolute top-4 left-4">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80 bg-ink-950/40 backdrop-blur-sm px-3 py-1">
                  Today
                </span>
              </div>
            </GrayscaleImage>
          </div>

          <div className="lg:col-span-5">
            <motion.div {...sectionReveal}>
              <span className="label-eyebrow block mb-6">Chapter 04</span>
              <h2 className="font-serif text-headline text-ink-400 leading-none mb-4">
                Today
              </h2>
              <h3 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
                Technical<br />Project Manager
              </h3>
              <div className="mt-8 max-w-sm">
                <p className="font-sans text-body-lg text-ink-600 leading-relaxed">
                  Bringing together creativity, technology, people, strategy and execution.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16 bg-ink-300" />
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
                  Current Role
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
