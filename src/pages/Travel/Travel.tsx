import { useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { images } from '@/data/images';
import { ParallaxImage } from '@/components/animations/ParallaxLayer';
import PageLayout from '@/components/layout/PageLayout';
import Footer from '@/components/layout/Footer';
import ImageLightbox, { type LightboxImage } from '@/components/gallery/ImageLightbox';
import {
  travelDestinations,
  horizontalScrollImageKeys,
  travelPageHeading,
  type TravelDestination,
} from '@/data/travel/travelDestinations';

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Travel() {
  const [selectedDest, setSelectedDest] = useState<TravelDestination | null>(null);
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: hScrollProgress } = useScroll({
    target: hScrollRef,
    offset: ['start start', 'end end'],
  });
  const hScrollX = useTransform(hScrollProgress, [0, 1], ['0%', '-62%']);

  const openDestinationGallery = (dest: TravelDestination) => {
    const galleryItems: LightboxImage[] = [
      {
        imageKey: dest.heroImageKey,
        title: dest.location,
        subtitle: `${dest.country} · ${dest.year}`,
        description: dest.story,
      },
      ...dest.galleryImageKeys.map((key) => ({
        imageKey: key,
        title: dest.location,
        subtitle: `${dest.country} · ${dest.year}`,
        description: '',
      })),
    ];
    setLightboxImages(galleryItems);
    setLightboxIndex(0);
  };

  const openHorizontalImage = (key: string, index: number) => {
    const items: LightboxImage[] = horizontalScrollImageKeys.map((k) => ({
      imageKey: k,
      title: 'Travel Collection',
      subtitle: 'Photography',
      description: '',
    }));
    setLightboxImages(items);
    setLightboxIndex(index);
  };

  const allLightboxImages = useMemo<LightboxImage[]>(() => {
    return travelDestinations.flatMap((dest) => [
      {
        imageKey: dest.heroImageKey,
        title: dest.location,
        subtitle: `${dest.country} · ${dest.year}`,
        description: dest.story,
      },
      ...dest.galleryImageKeys.map((key) => ({
        imageKey: key,
        title: dest.location,
        subtitle: `${dest.country} · ${dest.year}`,
        description: '',
      })),
    ]);
  }, []);

  const openAllGallery = (dest: TravelDestination, imageKey: string) => {
    const idx = allLightboxImages.findIndex((item) => item.imageKey === imageKey);
    if (idx !== -1) {
      setLightboxImages(allLightboxImages);
      setLightboxIndex(idx);
    }
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-ink-950 flex items-center">
        <ParallaxImage
          src={images.travelHero.src}
          alt={images.travelHero.alt}
          speed={0.15}
          scale
          className="absolute inset-0 w-full h-full"
          imgClassName="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/50 via-ink-950/20 to-ink-950/40" />
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
              Travel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-xl text-ink-0 leading-[0.95] tracking-tight max-w-[1100px]"
          >
            {travelPageHeading.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 font-sans text-body-lg text-ink-200 max-w-md leading-relaxed"
          >
            {travelPageHeading.heroSupporting}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-12 left-6 sm:left-10 lg:left-16 flex items-center gap-6"
          >
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              Travel · 2026
            </span>
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
              No. 05
            </span>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="max-w-3xl">
          <span className="label-eyebrow block mb-6">Travel Journal</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            {travelPageHeading.title}
          </h2>
          <p className="mt-8 font-sans text-body-lg text-ink-600 leading-relaxed max-w-xl">
            Travel is not about collecting destinations. It is about collecting perspectives. Each place leaves a mark, shifts a viewpoint, and adds a layer to how you see the world.
          </p>
        </motion.div>
      </section>

      {/* VERTICAL TIMELINE */}
      <section className="relative py-10 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-ink-200" />

          {travelDestinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-14 sm:pl-20 pb-24 last:pb-0"
            >
              {/* Node */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-8 sm:w-16 h-8 sm:h-16">
                <div className="w-3 h-3 rounded-full bg-ink-950 border-2 border-ink-0 shadow-sm" />
              </div>

              {/* Year */}
              <div className="flex items-baseline gap-6 mb-8">
                <span className="font-serif text-display-lg text-ink-300 leading-none">
                  {dest.year}
                </span>
                {dest.isPlaceholder && (
                  <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
                    Editable
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Image */}
                <div className="lg:col-span-7" data-cursor="view">
                  <div
                    className="group relative overflow-hidden border border-ink-200 cursor-pointer"
                    onClick={() => openDestinationGallery(dest)}
                  >
                    <img
                      src={images[dest.heroImageKey].src}
                      alt={images[dest.heroImageKey].alt}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/10 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink-950/60 to-transparent">
                      <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/80">
                        {dest.location}, {dest.country}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:col-span-5">
                  <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-500 block mb-2">
                    {dest.country}
                  </span>
                  <h3 className="font-serif text-headline text-ink-950 leading-[1.1] tracking-tight">
                    {dest.location}
                  </h3>
                  <p className="mt-6 font-sans text-body text-ink-600 leading-relaxed">
                    {dest.story}
                  </p>
                  <div className="mt-8 border-l-2 border-ink-200 pl-4">
                    <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400 block mb-2">
                      Personal Observation
                    </span>
                    <p className="font-serif text-body italic text-ink-700 leading-relaxed">
                      {dest.observation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery thumbnails */}
              <div className="mt-6 grid grid-cols-3 gap-4 lg:gap-6 lg:max-w-[58%]">
                {dest.galleryImageKeys.map((key, gi) => (
                  <div
                    key={gi}
                    className="group relative overflow-hidden border border-ink-200 cursor-pointer"
                    onClick={() => openAllGallery(dest, key)}
                    data-cursor="view"
                  >
                    <img
                      src={images[key].src}
                      alt={images[key].alt}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HORIZONTAL SCROLL */}
      <section ref={hScrollRef} className="relative bg-ink-50">
        {/* Heading */}
        <div className="px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pt-30 pb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-eyebrow block mb-6"
          >
            Photography
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight"
          >
            Moments in Motion
          </motion.h2>
          <p className="mt-6 font-sans text-body text-ink-500 max-w-md">
            A collection of frames captured while moving through the world.
          </p>
        </div>

        {/* Desktop: sticky horizontal scroll driven by vertical scroll */}
        <div className="hidden md:block sticky-scroll-wrapper">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div
              style={{ x: hScrollX }}
              className="flex gap-6 will-change-transform pl-6 sm:pl-10 lg:pl-16"
            >
              {horizontalScrollImageKeys.map((key, i) => (
                <div
                  key={key}
                  className="group relative flex-shrink-0 w-[60vw] max-w-[800px] overflow-hidden border border-ink-200 cursor-pointer"
                  onClick={() => openHorizontalImage(key, i)}
                  data-cursor="view"
                >
                  <img
                    src={images[key].src}
                    alt={images[key].alt}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink-950/50 to-transparent">
                    <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-0/70">
                      {String(i + 1).padStart(2, '0')} / {String(horizontalScrollImageKeys.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Extra scroll distance for horizontal movement */}
          <div className="h-[150vh]" />
        </div>

        {/* Mobile: simple horizontal overflow */}
        <div className="md:hidden flex gap-4 overflow-x-auto px-6 pb-8 snap-x snap-mandatory">
          {horizontalScrollImageKeys.map((key, i) => (
            <div
              key={key}
              className="group relative flex-shrink-0 w-[80vw] overflow-hidden border border-ink-200 cursor-pointer snap-center"
              onClick={() => openHorizontalImage(key, i)}
            >
              <img
                src={images[key].src}
                alt={images[key].alt}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE MAP ALTERNATIVE */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...sectionReveal} className="mb-16">
          <span className="label-eyebrow block mb-6">Atlas</span>
          <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
            Places on the Map
          </h2>
          <p className="mt-6 font-sans text-body text-ink-500 max-w-md">
            A visual index of destinations. Select a point to preview the story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[2/1] border border-ink-200 bg-ink-50 overflow-hidden"
        >
          {/* Stylized world map background using CSS grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />
          {/* Continent silhouettes via abstract shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              {/* Abstract continent shapes */}
              <path d="M15,15 Q20,10 30,12 Q35,15 33,20 Q28,25 22,24 Q16,22 15,15Z" fill="#000" opacity="0.06" />
              <path d="M40,10 Q50,8 58,12 Q62,18 60,25 Q55,30 48,28 Q42,25 40,18 Q38,13 40,10Z" fill="#000" opacity="0.06" />
              <path d="M60,15 Q70,12 78,15 Q82,20 80,28 Q75,32 68,30 Q62,25 60,20Z" fill="#000" opacity="0.06" />
              <path d="M25,32 Q30,30 35,33 Q38,38 35,42 Q30,44 26,42 Q22,38 25,32Z" fill="#000" opacity="0.06" />
              <path d="M70,35 Q75,33 80,36 Q82,40 78,43 Q73,44 70,42 Q67,38 70,35Z" fill="#000" opacity="0.06" />
            </svg>
          </div>

          {/* Location points */}
          {travelDestinations.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              onMouseEnter={() => setSelectedDest(dest)}
              className="absolute group"
              style={{
                left: `${dest.mapPosition.x}%`,
                top: `${dest.mapPosition.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                selectedDest?.id === dest.id
                  ? 'bg-ink-950 border-ink-950 scale-150'
                  : 'bg-ink-0 border-ink-400 group-hover:border-ink-950 group-hover:scale-125'
              }`} />
              <span className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                selectedDest?.id === dest.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-700 bg-ink-0/90 backdrop-blur-sm px-2 py-1 border border-ink-200">
                  {dest.location}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Selected destination preview */}
        {selectedDest && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
          >
            <div
              className="lg:col-span-5 group relative overflow-hidden border border-ink-200 cursor-pointer"
              onClick={() => openDestinationGallery(selectedDest)}
              data-cursor="view"
            >
              <img
                src={images[selectedDest.heroImageKey].src}
                alt={images[selectedDest.heroImageKey].alt}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="lg:col-span-7">
              <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-500 block mb-2">
                {selectedDest.country} · {selectedDest.year}
              </span>
              <h3 className="font-serif text-headline text-ink-950 leading-[1.1] tracking-tight">
                {selectedDest.location}
              </h3>
              <p className="mt-4 font-sans text-body text-ink-600 leading-relaxed max-w-md">
                {selectedDest.story}
              </p>
              <button
                onClick={() => openDestinationGallery(selectedDest)}
                className="mt-6 inline-flex items-center gap-3 font-sans text-caption uppercase tracking-wide-editorial text-ink-950 hover:gap-5 transition-all duration-300"
              >
                View Story
                <span className="h-px w-8 bg-ink-950" />
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* CLOSING STATEMENT */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto bg-ink-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-ink-300" />
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              Keep Moving
            </span>
            <div className="h-px w-16 bg-ink-300" />
          </div>
          <blockquote className="m-0">
            <p className="font-serif text-display-lg text-ink-950 italic leading-[1.1] tracking-tight">
              "The world changes you one place at a time."
            </p>
          </blockquote>
        </motion.div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      <ImageLightbox
        items={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </PageLayout>
  );
}
