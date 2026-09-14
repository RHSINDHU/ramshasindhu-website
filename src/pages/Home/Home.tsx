import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/pages/Home/Hero';
import HomeStory from '@/pages/Home/HomeStory';
import ScrollingTypography from '@/components/animations/ScrollingTypography';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <HomeStory />
      <ScrollingTypography />
      <Footer />
    </PageLayout>
  );
}
