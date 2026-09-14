import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { images } from '@/data/images';
import { ParallaxImage } from '@/components/animations/ParallaxLayer';
import GrayscaleImage from '@/components/gallery/GrayscaleImage';
import ScrollRevealWords from '@/components/animations/ScrollRevealWords';
import TimelineProgress from '@/components/animations/TimelineProgress';
import PageLayout from '@/components/layout/PageLayout';
import Footer from '@/components/layout/Footer';
import {
  resumeConfig,
  timelineChapters,
  skillCategories,
  transformationWords,
} from '@/data/resume/resumeConfig';

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Resume() {
  return (
    <PageLayout>
      <TimelineProgress />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-ink-950 flex items-center">
        <ParallaxImage
          src={images.resumeTexture.src}
          alt={images.resumeTexture.alt}
          speed={0.1}
          scale
          className="absolute inset-0 w-full h-full"
          imgClassName="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/50 to-ink-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-ink-950/20" />

        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pt-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-ink-300" />
            <span className="font-sans text-caption uppercase tracking-ultra-wide text-ink-300">
              Resume
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-xl text-ink-0 leading-[0.95] tracking-tight max-w-[1000px]"
          >
            A Journey<br />in Progress.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 font-sans text-body-lg text-ink-200 max-w-md leading-relaxed"
          >
            Design. Technology. People. Projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-12 left-6 sm:left-10 lg:left-16 flex items-center gap-6"
          >
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              Resume · 2026
            </span>
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
              No. 03
            </span>
          </motion.div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="mb-20">
          <span className="label-eyebrow block mb-6">Career Timeline</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            The Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-ink-200" />

          {timelineChapters.map((chapter, i) => (
            <motion.div
              key={chapter.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-14 sm:pl-20 pb-20 last:pb-0"
            >
              {/* Node */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-8 sm:w-16 h-8 sm:h-16">
                <div className="w-3 h-3 rounded-full bg-ink-950 border-2 border-ink-0 shadow-sm" />
              </div>

              {/* Content */}
              <div className={`grid grid-cols-1 gap-8 ${chapter.isTransition ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} items-center`}>
                {/* Text */}
                <div className={chapter.isTransition ? 'lg:col-span-5' : 'lg:col-span-6'}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
                      Chapter {chapter.index}
                    </span>
                  </div>
                  {chapter.subtitle && (
                    <span className="block font-sans text-caption uppercase tracking-wide-editorial text-ink-500 mb-2">
                      {chapter.subtitle}
                    </span>
                  )}
                  <h3 className="font-serif text-headline text-ink-950 leading-[1.1] tracking-tight">
                    {chapter.title}
                  </h3>
                  <p className="mt-6 font-sans text-body text-ink-600 leading-relaxed max-w-sm">
                    {chapter.description}
                  </p>
                  {chapter.isPlaceholder && (
                    <div className="mt-4 inline-flex items-center gap-2">
                      <div className="h-px w-8 bg-ink-300" />
                      <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
                        Editable Section
                      </span>
                    </div>
                  )}
                </div>

                {/* Image(s) */}
                <div className={chapter.isTransition ? 'lg:col-span-7' : 'lg:col-span-6'}>
                  {chapter.isTransition && chapter.secondImageKey ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div data-cursor="view">
                        <GrayscaleImage
                          src={images[chapter.imageKey].src}
                          alt={chapter.imageAlt}
                          className="aspect-[3/4] w-full border border-ink-200"
                        >
                          <div className="absolute bottom-4 left-4">
                            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80 bg-ink-950/40 backdrop-blur-sm px-3 py-1">
                              Fashion
                            </span>
                          </div>
                        </GrayscaleImage>
                      </div>
                      <div className="mt-12" data-cursor="view">
                        <GrayscaleImage
                          src={images[chapter.secondImageKey].src}
                          alt={chapter.secondImageAlt ?? ''}
                          className="aspect-[3/4] w-full border border-ink-200"
                        >
                          <div className="absolute bottom-4 left-4">
                            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80 bg-ink-950/40 backdrop-blur-sm px-3 py-1">
                              Technology
                            </span>
                          </div>
                        </GrayscaleImage>
                      </div>
                    </div>
                  ) : (
                    <div data-cursor="view">
                      <GrayscaleImage
                        src={images[chapter.imageKey].src}
                        alt={chapter.imageAlt}
                        className="aspect-[16/10] w-full border border-ink-200"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto bg-ink-50">
        <motion.div {...sectionReveal} className="mb-20">
          <span className="label-eyebrow block mb-6">Skills</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            What I Bring
          </h2>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              <div className="lg:col-span-4">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400 block mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-headline text-ink-950 leading-[1.1] tracking-tight">
                  {category.title}
                </h3>
                {category.isPlaceholder && (
                  <span className="mt-3 inline-flex items-center gap-2">
                    <div className="h-px w-8 bg-ink-300" />
                    <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
                      Editable
                    </span>
                  </span>
                )}
              </div>
              <div className="lg:col-span-8">
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      className={`font-serif text-subtitle italic ${
                        category.isPlaceholder ? 'text-ink-400' : 'text-ink-700'
                      }`}
                    >
                      {skill}
                      {j < category.skills.length - 1 && (
                        <span className="text-ink-300 not-italic ml-6">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="mb-16">
          <span className="label-eyebrow block mb-6">Education</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-ink-200 pt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-500 block mb-2">
                Degree
              </span>
              <h3 className="font-serif text-headline text-ink-950 leading-[1.1] tracking-tight">
                Bachelor's Degree
              </h3>
            </div>
            <div className="lg:col-span-4">
              <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-500 block mb-2">
                Field
              </span>
              <h3 className="font-serif text-headline text-ink-950 leading-[1.1] tracking-tight">
                Fashion Design
              </h3>
            </div>
            <div className="lg:col-span-4">
              <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-500 block mb-2">
                Institution &amp; Dates
              </span>
              <p className="font-sans text-body-lg text-ink-400 italic">
                Add institution and dates here
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-px w-8 bg-ink-300" />
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
                  Editable
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CAREER TRANSFORMATION */}
      <section className="relative py-30 overflow-hidden bg-ink-950">
        <div className="absolute inset-0 opacity-10">
          <ParallaxImage
            src={images.resumeTexture.src}
            alt={images.resumeTexture.alt}
            speed={0.08}
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <span className="label-eyebrow block mb-6 text-ink-500">Career Transformation</span>
            <h2 className="font-serif text-display-lg text-ink-0 leading-[1] tracking-tight">
              The Tools Changed.
            </h2>
            <h3 className="mt-4 font-serif text-display-lg text-ink-400 italic leading-[1] tracking-tight">
              The Creative Mindset Didn't.
            </h3>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {transformationWords.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                className="flex items-center gap-6"
              >
                <span className="font-serif text-display-md text-ink-0 italic">
                  {word}
                </span>
                {i < transformationWords.length - 1 && (
                  <span className="text-ink-600 text-2xl">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD RESUME */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="label-eyebrow block mb-6">Full Resume</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight mb-12">
            Download the<br />Complete Resume
          </h2>

          <a
            href={resumeConfig.pdfPath}
            download={resumeConfig.pdfFilename}
            className="group inline-flex items-center gap-4 border border-ink-950 px-10 py-5 hover:bg-ink-950 transition-colors duration-300"
            data-cursor="open"
          >
            <Download size={20} strokeWidth={1.5} className="text-ink-950 group-hover:text-ink-0 transition-colors duration-300" />
            <span className="font-sans text-body uppercase tracking-wide-editorial text-ink-950 group-hover:text-ink-0 transition-colors duration-300">
              {resumeConfig.pdfLabel}
            </span>
          </a>

          <p className="mt-8 font-sans text-body-sm text-ink-400 max-w-sm">
            PDF placeholder — replace the file at <code className="font-mono text-ink-500">{resumeConfig.pdfPath}</code> with your actual resume.
          </p>
        </motion.div>
      </section>

      <Footer />
    </PageLayout>
  );
}
