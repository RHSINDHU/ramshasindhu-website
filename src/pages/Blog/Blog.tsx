import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Footer from '@/components/layout/Footer';
import { images } from '@/data/images';
import { blogPosts, blogCategories, type BlogPost } from '@/data/blog/blogPosts';

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return remainingPosts;
    return remainingPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory, remainingPosts]);

  const featuredFilteredOut = activeCategory !== 'All' && featuredPost.category !== activeCategory;
  const displayFeatured = featuredFilteredOut ? null : featuredPost;

  const goToArticle = (slug: string) => navigate(`/blog/${slug}`);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-ink-950">
        <img
          src={images.blogHero.src}
          alt={images.blogHero.alt}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-ink-50/5" />
          <div className="absolute right-[8%] top-0 bottom-0 w-px bg-ink-50/5" />
        </div>

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pt-32 pb-20">
          {/* Issue header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-ink-300" />
              <span className="font-sans text-caption uppercase tracking-ultra-wide text-ink-300">
                Journal
              </span>
            </div>
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
              Issue No. 06 · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-xl text-ink-0 leading-[0.95] tracking-tight max-w-[1100px]"
          >
            Thoughts, Ideas<br />& Observations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 font-sans text-body-lg text-ink-200 max-w-md leading-relaxed"
          >
            Notes from the intersection of creativity, technology and life.
          </motion.p>

          {/* Metadata bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute bottom-12 left-6 sm:left-10 lg:left-16 flex items-center gap-6"
          >
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              {blogPosts.length} Articles
            </span>
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
              Journal · 2026
            </span>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTERS — editorial style */}
      <section className="sticky top-0 z-40 bg-ink-0/95 backdrop-blur-md border-b border-ink-200">
        <div className="px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-x-8 gap-y-2 overflow-x-auto py-5 scrollbar-hide">
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400 mr-2 shrink-0">
              Index
            </span>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="group relative shrink-0"
              >
                <span
                  className={`font-sans text-caption uppercase tracking-wide-editorial whitespace-nowrap transition-colors duration-300 ${
                    activeCategory === cat
                      ? 'text-ink-950'
                      : 'text-ink-400 hover:text-ink-700'
                  }`}
                >
                  {cat}
                </span>
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-ink-950 transition-all duration-300 ${
                    activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE — editorial split layout */}
      {displayFeatured && (
        <section className="px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pt-22 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-pointer group"
            onClick={() => goToArticle(featuredPost.slug)}
            data-cursor="view"
          >
            <div className="lg:col-span-7 overflow-hidden border border-ink-200">
              <img
                src={images[featuredPost.imageKey].src}
                alt={images[featuredPost.imageKey].alt}
                className="w-full aspect-[16/10] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
                  Featured
                </span>
                <div className="h-px w-8 bg-ink-300" />
                <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight">
                {featuredPost.title}
              </h2>
              <p className="mt-6 font-serif text-subtitle text-ink-600 italic leading-relaxed max-w-md">
                {featuredPost.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-400">
                  {formatDate(featuredPost.date)}
                </span>
                <span className="font-sans text-caption text-ink-300">·</span>
                <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-400">
                  {featuredPost.readTime}
                </span>
              </div>
              <div className="mt-10 inline-flex items-center gap-3 font-sans text-caption uppercase tracking-wide-editorial text-ink-950 group-hover:gap-5 transition-all duration-300">
                Read article
                <ArrowRight size={16} strokeWidth={1.2} />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ASYMMETRICAL ARTICLE GRID */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pb-22">
        <motion.div {...sectionReveal} className="mb-16 flex items-end justify-between">
          <div>
            <span className="label-eyebrow block mb-4">All Articles</span>
            <h2 className="font-serif text-headline text-ink-950 leading-[1.05] tracking-tight">
              {activeCategory === 'All' ? 'The Collection' : activeCategory}
            </h2>
          </div>
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400 hidden sm:block">
            {filteredPosts.length + (displayFeatured ? 1 : 0)} {filteredPosts.length + (displayFeatured ? 1 : 0) === 1 ? 'Article' : 'Articles'}
          </span>
        </motion.div>

        <div className="h-px w-full bg-ink-200 mb-16" />

        <AnimatePresence mode="wait">
          {filteredPosts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <p className="font-serif text-headline text-ink-400 italic">
                No articles in this category yet.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16"
            >
              {filteredPosts.map((post, i) => {
                const layout = getCardLayout(i);
                return (
                  <ArticleCard
                    key={post.slug}
                    post={post}
                    layout={layout}
                    index={i}
                    onClick={() => goToArticle(post.slug)}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </PageLayout>
  );
}

interface CardLayout {
  colSpan: string;
  aspect: string;
  showExcerpt: boolean;
  textRight: boolean;
}

function getCardLayout(index: number): CardLayout {
  const patterns: CardLayout[] = [
    { colSpan: 'md:col-span-7', aspect: 'aspect-[16/10]', showExcerpt: true, textRight: false },
    { colSpan: 'md:col-span-5', aspect: 'aspect-[4/3]', showExcerpt: false, textRight: false },
    { colSpan: 'md:col-span-4', aspect: 'aspect-[3/4]', showExcerpt: false, textRight: false },
    { colSpan: 'md:col-span-4', aspect: 'aspect-[3/4]', showExcerpt: false, textRight: false },
    { colSpan: 'md:col-span-4', aspect: 'aspect-[3/4]', showExcerpt: false, textRight: false },
    { colSpan: 'md:col-span-6', aspect: 'aspect-[16/9]', showExcerpt: true, textRight: false },
    { colSpan: 'md:col-span-6', aspect: 'aspect-[16/9]', showExcerpt: true, textRight: false },
  ];
  return patterns[index % patterns.length];
}

function ArticleCard({
  post,
  layout,
  index,
  onClick,
}: {
  post: BlogPost;
  layout: CardLayout;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`${layout.colSpan} group cursor-pointer`}
      onClick={onClick}
      data-cursor="view"
    >
      <div className="overflow-hidden border border-ink-200">
        <img
          src={images[post.imageKey].src}
          alt={images[post.imageKey].alt}
          loading="lazy"
          className={`w-full ${layout.aspect} object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
            {post.category}
          </span>
          <span className="font-sans text-micro text-ink-300">·</span>
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
            {formatDate(post.date)}
          </span>
        </div>
        <h3 className="font-serif text-title text-ink-950 leading-[1.15] tracking-tight group-hover:text-ink-700 transition-colors duration-300">
          {post.title}
        </h3>
        {layout.showExcerpt && (
          <p className="mt-4 font-sans text-body text-ink-600 leading-relaxed max-w-md">
            {post.excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center gap-3">
          <span className="font-sans text-micro uppercase tracking-wide-editorial text-ink-400">
            {post.readTime}
          </span>
          <span className="h-px w-6 bg-ink-300 group-hover:w-12 group-hover:bg-ink-950 transition-all duration-300" />
        </div>
      </div>
    </motion.article>
  );
}
