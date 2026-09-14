import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Resume from '@/pages/Resume/Resume';
import Art from '@/pages/Art/Art';
import Travel from '@/pages/Travel/Travel';
import Blog from '@/pages/Blog/Blog';
import ArticlePage from '@/pages/Blog/ArticlePage';
import Contact from '@/pages/Contact/Contact';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/art" element={<Art />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
