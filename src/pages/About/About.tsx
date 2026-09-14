import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '@/data/images';
import GrayscaleImage from '@/components/gallery/GrayscaleImage';
import { ParallaxImage } from '@/components/animations/ParallaxLayer';
import ScrollRevealWords from '@/components/animations/ScrollRevealWords';
import PageLayout from '@/components/layout/PageLayout';
import Footer from '@/components/layout/Footer';

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const fashionWords = ['DESIGN', 'DETAIL', 'CONSTRAINTS', 'PEOPLE', 'CREATIVITY', 'PROBLEM SOLVING'];
const technologyWords = ['SYSTEMS', 'STRATEGY', 'DELIVERY', 'COLLABORATION', 'LEADERSHIP', 'ADAPTABILITY'];
const connectionWords = ['FASHION', 'TECHNOLOGY', 'PEOPLE', 'PROJECTS', 'IDEAS'];

export default function About() {
  return (
    <PageLayout>
      {/* PAGE HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-ink-950 flex items-center">
        <ParallaxImage
          src={images.aboutPortrait.src}
          alt={images.aboutPortrait.alt}
          speed={0.12}
          scale
          className="absolute inset-0 w-full h-full"
          imgClassName="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/30 to-ink-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-ink-950/20" />

        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pt-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-ink-300" />
            <span className="font-sans text-caption uppercase tracking-ultra-wide text-ink-300">
              About Me
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-xl text-ink-0 leading-[0.95] tracking-tight max-w-[1000px]"
          >
            A Career That<br />Took a Few Turns.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 font-sans text-body-lg text-ink-200 max-w-lg leading-relaxed"
          >
            From fashion design to technology, from one country to another, the journey has always been about creating, adapting and learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-12 left-6 sm:left-10 lg:left-16 flex items-center gap-6"
          >
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              About · 2026
            </span>
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
              No. 02
            </span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — WHERE IT STARTED */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div {...sectionReveal}>
              <span className="label-eyebrow block mb-6">Chapter 01</span>
              <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
                It Started<br />With Design.
              </h2>
              <div className="mt-8 max-w-sm space-y-4">
                <p className="font-sans text-body-lg text-ink-600 leading-relaxed">
                  Before technology, there was fashion.
                </p>
                <p className="font-sans text-body text-ink-500 leading-relaxed">
                  A Bachelor's degree in Fashion Design was the beginning of my professional journey. It taught me to see the world through a lens of form, function and beauty — to understand materials, construction and the relationship between creator and audience.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2" data-cursor="view">
            <GrayscaleImage
              src={images.aboutFashionDesign.src}
              alt={images.aboutFashionDesign.alt}
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

      {/* SECTION 2 — 2015 */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-ink-950">
        <ParallaxImage
          src={images.aboutCanada.src}
          alt={images.aboutCanada.alt}
          speed={0.1}
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

      {/* SECTION 3 — THE TRANSITION */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="text-center mb-16">
          <span className="label-eyebrow block mb-6">Chapter 03</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            A Different Kind<br />of Design.
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            data-cursor="view"
          >
            <GrayscaleImage
              src={images.aboutFashionTransition.src}
              alt={images.aboutFashionTransition.alt}
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
              src={images.aboutTechTransition.src}
              alt={images.aboutTechTransition.alt}
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

      {/* SECTION 4 — WHAT FASHION TAUGHT ME */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="mb-16">
          <span className="label-eyebrow block mb-6">Chapter 04</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            What Fashion<br />Taught Me
          </h2>
        </motion.div>

        <ScrollRevealWords words={fashionWords} />
      </section>

      {/* SECTION 5 — WHAT TECHNOLOGY TAUGHT ME */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto bg-ink-50">
        <motion.div {...sectionReveal} className="mb-16">
          <span className="label-eyebrow block mb-6">Chapter 05</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            What Technology<br />Taught Me
          </h2>
        </motion.div>

        <ScrollRevealWords words={technologyWords} />
      </section>

      {/* SECTION 6 — THE CONNECTION */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="text-center mb-20">
          <span className="label-eyebrow block mb-6">Chapter 06</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            Where Creativity<br />Meets Technology
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          {connectionWords.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-col items-center"
            >
              <span className="font-serif text-display-lg text-ink-950 italic">
                {word}
              </span>
              {i < connectionWords.length - 1 && (
                <span className="text-ink-300 text-2xl mt-2">·</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-ink-300" />
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              Today
            </span>
            <div className="h-px w-16 bg-ink-300" />
          </div>
          <h3 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            Technical Project Manager
          </h3>
          <p className="mt-8 font-sans text-body-lg text-ink-600 max-w-md mx-auto leading-relaxed">
            Bringing together creative thinking, technology, people and execution.
          </p>
        </motion.div>
      </section>

      {/* SECTION 7 — BEYOND WORK */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto bg-ink-50">
        <motion.div {...sectionReveal} className="mb-16">
          <span className="label-eyebrow block mb-6">Chapter 07</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            There's More<br />to the Story.
          </h2>
          <p className="mt-8 max-w-md font-sans text-body-lg text-ink-600 leading-relaxed">
            Beyond the desk, there's a world of art, travel, photography and curiosity. These are the things that keep the creative spark alive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Link to="/art" data-cursor="view" className="group block">
            <GrayscaleImage
              src={images.aboutArt.src}
              alt={images.aboutArt.alt}
              className="aspect-[3/4] w-full border border-ink-200"
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink-950/80 to-transparent">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80">
                  Art &amp; Hobbies
                </span>
              </div>
            </GrayscaleImage>
          </Link>

          <Link to="/travel" data-cursor="explore" className="group block sm:mt-12">
            <GrayscaleImage
              src={images.aboutTravel.src}
              alt={images.aboutTravel.alt}
              className="aspect-[3/4] w-full border border-ink-200"
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink-950/80 to-transparent">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80">
                  Travel
                </span>
              </div>
            </GrayscaleImage>
          </Link>

          <div data-cursor="view" className="group block">
            <GrayscaleImage
              src={images.aboutPhotography.src}
              alt={images.aboutPhotography.alt}
              className="aspect-[3/4] w-full border border-ink-200"
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink-950/80 to-transparent">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80">
                  Photography
                </span>
              </div>
            </GrayscaleImage>
          </div>

          <div data-cursor="view" className="group block sm:mt-12">
            <GrayscaleImage
              src={images.aboutCreative.src}
              alt={images.aboutCreative.alt}
              className="aspect-[3/4] w-full border border-ink-200"
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink-950/80 to-transparent">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80">
                  Creativity
                </span>
              </div>
            </GrayscaleImage>
          </div>
        </div>
      </section>

      {/* SECTION 8 — PERSONAL STATEMENT */}
      <section className="relative py-38 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-ink-300" />
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              Personal Statement
            </span>
            <div className="h-px w-16 bg-ink-300" />
          </div>

          <blockquote className="m-0">
            <p className="font-serif text-display-lg text-ink-950 italic leading-[1.1] tracking-tight max-w-4xl mx-auto">
              "I'm interested in the space between creativity and technology."
            </p>
          </blockquote>
        </motion.div>
      </section>

      <Footer />
    </PageLayout>
  );
}
