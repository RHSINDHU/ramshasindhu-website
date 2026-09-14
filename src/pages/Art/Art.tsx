import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/data/images';
import { ParallaxImage } from '@/components/animations/ParallaxLayer';
import PageLayout from '@/components/layout/PageLayout';
import Footer from '@/components/layout/Footer';
import Lightbox from '@/components/gallery/Lightbox';
import {
  galleryItems,
  galleryFilters,
  personalNote,
  type GalleryItem,
  type GallerySize,
} from '@/data/artwork/galleryItems';

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const sizeClasses: Record<GallerySize, string> = {
  large: 'col-span-2 row-span-2 aspect-[4/3]',
  portrait: 'col-span-1 row-span-2 aspect-[3/4]',
  landscape: 'col-span-2 row-span-1 aspect-[16/10]',
  square: 'col-span-1 row-span-1 aspect-square',
  small: 'col-span-1 row-span-1 aspect-[4/3]',
};

export default function Art() {
  const [activeFilter, setActiveFilter] = useState<'All' | string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const featuredItem = galleryItems.find((item) => item.featured) ?? galleryItems[0];

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-ink-950 flex items-center">
        <ParallaxImage
          src={images.artHero.src}
          alt={images.artHero.alt}
          speed={0.12}
          scale
          className="absolute inset-0 w-full h-full"
          imgClassName="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-ink-950/20 to-ink-950/40" />
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
              Art &amp; Hobbies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-xl text-ink-0 leading-[0.95] tracking-tight max-w-[1100px]"
          >
            The Things I Make,<br />Notice &amp; Collect.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 font-sans text-body-lg text-ink-200 max-w-md leading-relaxed"
          >
            A collection of creative interests beyond the day job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-12 left-6 sm:left-10 lg:left-16 flex items-center gap-6"
          >
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              Gallery · 2026
            </span>
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
              No. 04
            </span>
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7" data-cursor="view">
            <div
              className="group relative overflow-hidden border border-ink-200 cursor-pointer"
              onClick={() => handleOpenLightbox(featuredItem)}
            >
              <img
                src={images[featuredItem.imageKey].src}
                alt={images[featuredItem.imageKey].alt}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/10 transition-colors duration-500" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400 block mb-4">
              Featured
            </span>
            <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
              {featuredItem.title}
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-500">
                {featuredItem.category}
              </span>
              <div className="h-px w-8 bg-ink-300" />
              <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-500">
                {featuredItem.year}
              </span>
            </div>
            <p className="mt-8 font-sans text-body-lg text-ink-600 leading-relaxed max-w-sm">
              {featuredItem.description}
            </p>
          </div>
        </motion.div>
      </section>

      {/* FILTERS */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pt-10 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-ink-200 pb-8"
        >
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400 mr-4">
            Filter
          </span>
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-sans text-caption uppercase tracking-wide-editorial transition-colors duration-300 ${
                activeFilter === filter
                  ? 'text-ink-950'
                  : 'text-ink-400 hover:text-ink-700'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <span className="block mt-1 h-px bg-ink-950" />
              )}
            </button>
          ))}
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="relative px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pb-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-auto"
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                className={`${sizeClasses[item.size]} group relative overflow-hidden border border-ink-200 cursor-pointer`}
                onClick={() => handleOpenLightbox(item)}
                data-cursor="view"
              >
                <img
                  src={images[item.imageKey].src}
                  alt={images[item.imageKey].alt}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-ink-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-200/80">
                    {item.category} · {item.year}
                  </span>
                  <h3 className="mt-1 font-serif text-body-lg text-ink-0 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* PERSONAL NOTE */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto bg-ink-50">
        <motion.div {...sectionReveal} className="max-w-3xl mx-auto text-center">
          <span className="label-eyebrow block mb-6">Personal Note</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight mb-12">
            {personalNote.heading}
          </h2>
          <p className="font-serif text-body-lg text-ink-600 italic leading-relaxed">
            {personalNote.body}
          </p>
        </motion.div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      <Lightbox
        items={filteredItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </PageLayout>
  );
}
