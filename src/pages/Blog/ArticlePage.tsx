import { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Footer from '@/components/layout/Footer';
import { images } from '@/data/images';
import { blogPosts, type BlogPost } from '@/data/blog/blogPosts';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const articleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ['start start', 'end end'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.3 });

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = currentIndex !== -1 ? blogPosts[currentIndex] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <PageLayout>
        <section className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-display-md text-ink-950 mb-6">
              Article not found.
            </h1>
            <Link
              to="/blog"
              className="font-sans text-caption uppercase tracking-wide-editorial text-ink-600 hover:text-ink-950 transition-colors"
            >
              Back to Journal
            </Link>
          </div>
        </section>
        <Footer />
      </PageLayout>
    );
  }

  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  const fallbackRelated = blogPosts
    .filter((p) => p.slug !== post.slug && p.category !== post.category)
    .slice(0, 2 - relatedPosts.length);
  const related = [...relatedPosts, ...fallbackRelated];

  return (
    <PageLayout>
      {/* READING PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-ink-950 z-[90] origin-left"
        style={{ scaleX: progress }}
      />

      <article ref={articleRef}>
        {/* ARTICLE HEADER */}
        <header className="px-6 sm:px-10 lg:px-16 max-w-[1200px] mx-auto pt-32 pb-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-sans text-micro uppercase tracking-ultra-wide text-ink-500 hover:text-ink-950 transition-colors duration-300 mb-12"
          >
            <ArrowLeft size={14} strokeWidth={1.2} />
            Journal
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-500">
              {post.category}
            </span>
            <div className="h-px w-8 bg-ink-300" />
            <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-400">
              {formatDate(post.date)}
            </span>
            <div className="h-px w-8 bg-ink-300" />
            <span className="font-sans text-caption uppercase tracking-wide-editorial text-ink-400">
              {post.readTime}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-md text-ink-950 leading-[1.05] tracking-tight max-w-[900px]"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 font-serif text-subtitle text-ink-600 italic leading-relaxed max-w-[640px]"
          >
            {post.excerpt}
          </motion.p>
        </header>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto mb-20"
        >
          <div className="overflow-hidden border border-ink-200">
            <img
              src={images[post.imageKey].src}
              alt={images[post.imageKey].alt}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </motion.div>

        {/* ARTICLE BODY */}
        <div className="px-6 sm:px-10 lg:px-16 max-w-[720px] mx-auto pb-22">
          {/* Drop cap on first paragraph */}
          {post.content.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`font-serif text-body-lg text-ink-800 leading-[1.75] mb-8 ${
                i === 0
                  ? 'first-letter:font-serif first-letter:text-[3.5rem] first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-ink-950'
                  : ''
              }`}
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Article footer */}
          <div className="mt-16 pt-8 border-t border-ink-200">
            <div className="flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-sans text-caption uppercase tracking-wide-editorial text-ink-500 hover:text-ink-950 transition-colors duration-300"
              >
                <ArrowLeft size={14} strokeWidth={1.2} />
                All Articles
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 font-sans text-caption uppercase tracking-wide-editorial text-ink-500 hover:text-ink-950 transition-colors duration-300"
              >
                Back to Top
                <ArrowUp size={14} strokeWidth={1.2} />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      {related.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto py-22 border-t border-ink-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="label-eyebrow block mb-4">Continue Reading</span>
            <div className="h-px w-full bg-ink-200" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {related.map((rp, i) => (
              <RelatedCard key={rp.slug} post={rp} index={i} onClick={() => navigate(`/blog/${rp.slug}`)} />
            ))}
          </div>
        </section>
      )}

      {/* PREV / NEXT NAVIGATION */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pb-22 border-t border-ink-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
          {prevPost ? (
            <button
              onClick={() => navigate(`/blog/${prevPost.slug}`)}
              className="group text-left"
            >
              <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400 block mb-4">
                <ArrowLeft size={14} strokeWidth={1.2} className="inline mr-2" />
                Previous
              </span>
              <h4 className="font-serif text-subtitle text-ink-950 leading-[1.15] tracking-tight group-hover:text-ink-600 transition-colors duration-300">
                {prevPost.title}
              </h4>
            </button>
          ) : (
            <div />
          )}
          {nextPost && (
            <button
              onClick={() => navigate(`/blog/${nextPost.slug}`)}
              className="group text-right md:text-right"
            >
              <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400 block mb-4">
                Next
                <ArrowRight size={14} strokeWidth={1.2} className="inline ml-2" />
              </span>
              <h4 className="font-serif text-subtitle text-ink-950 leading-[1.15] tracking-tight group-hover:text-ink-600 transition-colors duration-300">
                {nextPost.title}
              </h4>
            </button>
          )}
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}

function RelatedCard({ post, index, onClick }: { post: BlogPost; index: number; onClick: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={onClick}
      data-cursor="view"
    >
      <div className="overflow-hidden border border-ink-200">
        <img
          src={images[post.imageKey].src}
          alt={images[post.imageKey].alt}
          loading="lazy"
          className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-5">
        <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500 block mb-2">
          {post.category} · {formatDate(post.date)}
        </span>
        <h3 className="font-serif text-title text-ink-950 leading-[1.15] tracking-tight group-hover:text-ink-700 transition-colors duration-300">
          {post.title}
        </h3>
      </div>
    </motion.article>
  );
}
